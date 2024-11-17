import { spawnSync } from 'node:child_process'
import * as path from 'node:path'
import * as fs from 'node:fs'

// Read the lib.dom.d.ts file from the typescript package
const ts = path.parse(import.meta.resolve('typescript').replace('file://', '')).dir
const dom = path.join(ts, 'lib.dom.d.ts')
const libDom = fs.readFileSync(dom, 'utf8')

// Extract the event listener overloads
const reg = /addEventListener<.\sextends\skeyof\s(.*?)\>\(type:\s.,\slistener:\s\(this:\s(.*?),.*?\).*?,(.*?)\)/gim

// Overloads that must go last
const hierarchy = ['ElementEventMap', 'GlobalEventHandlersEventMap', 'AbstractWorkerEventMap']

// Extract unique event map types and sort
const all = Array.from(libDom.matchAll(reg))
  .map(([, map, self, rest]) => ({ map, self, rest }))
  .sort((a, b) => hierarchy.indexOf(a.map) - hierarchy.indexOf(b.map))

// Generate the typescript code
const overloads = Array.from(all).map(({ map }) => {
  let targets = Array.from(new Set(all.filter((y) => y.map === map).map((y) => y.self)))

  if (map === 'IDBRequestEventMap') targets = [`IDBRequest<any>`]
  if (map === 'HTMLElementEventMap') targets = [`HTMLElement`]
  if (map === 'SVGElementEventMap') targets = [`SVGElement`]

  const t = targets.join(' | ')

  return `
  /** listen for events on target of @type { ${t} } */
  <T extends ${t}>(target: T): 
      <K extends keyof ${map}>(
        event: K,
        listener: (this: T, ev: ${map}[K]) => void,
        options?: boolean | AddEventListenerOptions
  ) => () => void`
})

const content = `
    /**
     * Type overloads for dom event emitters.
     * Generated from the lib.dom.d.ts file in the typescript package.
     */
    export type On = {
        ${overloads.join('\n')}
    }

    /** listen for events on dom event emitters */
    export const on: On = (target: any) => (event: any, listener: any, options?: any) => {
        target.addEventListener(event, listener, options)
        return () => target.removeEventListener(event, listener, options)
    }
`

fs.writeFileSync('src/events/on.ts', content)

// Write typescript type tests
// const targets = new Set(all.map(({ self }) => self))

// const tests = Array.from(targets)
//   .map((x) => (x === 'IDBRequest<T>' ? 'IDBRequest<string>' : x))
//   .map(
//     (target, i) => `
//   const t${i}: ${target} = base
//   on(t${i})('any' as any, function () {
//     const k: ${target} = this
//     k
//   })
// `,
//   )

// fs.writeFileSync(
//   'src/events/on.test.ts',
//   `
//   // The following code is generated by generate.js
//   import { on } from './on.js'

//   // Test that the types for on are correct
//   const base: any = { addEventListener: () => {} }
//   ${tests.join('\n')}
// `,
// )

spawnSync('npm', ['run', 'format'], { stdio: 'inherit' })
