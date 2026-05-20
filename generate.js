import { spawnSync } from 'node:child_process'
import * as fs from 'node:fs'
import { extractEventMaps } from './build/esm/index.js'

const buildBranches = (entries) => {
  const seen = new Set()
  const out = []
  for (const e of entries) {
    const fresh = e.targets.filter((t) => !seen.has(t.name))
    if (!fresh.length) continue
    fresh.forEach((t) => seen.add(t.name))
    const names = fresh.map((t) => t.name).join(' | ')
    out.push(`  T extends ${names} ? ${e.map} :`)
  }
  return out.join('\n')
}

const optionsUnion = (entries) => [...new Set(entries.map((e) => e.options))].join(' | ')

const generateConditional = (entries) => {
  const branches = buildBranches(entries)
  const opts = optionsUnion(entries)
  return `
/** Options accepted by the underlying \`addEventListener\` overloads. */
export type ListenerOptions = ${opts}

/** listen for events on dom event emitters */
export function on<T extends EventTarget, K extends EventNameFor<T>>(
  target: T,
  event: K,
  listener: (this: T, ev: EventFor<T, K>) => void,
  options?: ListenerOptions,
): () => void
export function on(target: any, event: any, listener: any, options?: any) {
  target.addEventListener(event, listener, options)
  return () => target.removeEventListener(event, listener, options)
}

export type EventNameFor<T> = keyof EventMapFor<T> & string

export type EventFor<T, K extends EventNameFor<T>> = EventMapFor<T>[K]

/**
 * Resolves the event map for a DOM event target type.
 * Generated from the lib.dom.d.ts file.
 */
// prettier-ignore
export type EventMapFor<T> =
${branches}
  T extends EventTarget ? Record<string, Event> :
  never
`
}

const generateTests = (entries) => {
  const names = entries
    .filter((e) => e.targets.length && e.events.length)
    .map((e) => {
      const t = e.targets[0].name
      const u = e.events.map((ev) => `'${ev.name}'`).join(' | ')
      return `  Names<${t}, ${u}>,`
    })
    .join('\n')

  const events = entries
    .filter((e) => e.targets.length)
    .flatMap((e) => e.events.map((ev) => `  EventT<${e.targets[0].name}, '${ev.name}', ${ev.type}>,`))
    .join('\n')

  return `import type { EventNameFor, EventFor } from '../src/on.js'

type Eq<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false
type Asserts<T extends true[]> = T

type Names<T, K> = Eq<EventNameFor<T>, K>
type EventT<T, K extends EventNameFor<T>, E> = Eq<EventFor<T, K>, E>

export type AssertedNames = Asserts<[
${names}
]>

export type AssertedEvents = Asserts<[
${events}
]>
`
}

const entries = extractEventMaps()
entries.sort((a, b) => b.chain.length - a.chain.length)
fs.writeFileSync('src/on.ts', generateConditional(entries))
fs.writeFileSync('test/types.ts', generateTests(entries))
spawnSync('npm', ['run', 'format'], { stdio: 'inherit' })
