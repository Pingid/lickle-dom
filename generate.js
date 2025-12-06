import { spawnSync } from 'node:child_process'
import * as fs from 'node:fs'
import { extractEventMaps } from './build/esm/index.js'

const generateOverload = ({ map, targets }) => {
  const t = targets.join(' | ')
  return `
  /** listen for events on target of @type { ${t} } */
  <T extends ${t}>(target: T):
      <K extends keyof ${map}>(
        event: K,
        listener: (this: T, ev: ${map}[K]) => void,
        options?: boolean | AddEventListenerOptions
  ) => () => void`
}

const generateOnModule = (entries) => {
  const overloads = entries.map(generateOverload)
  return `
/**
 * Type overloads for dom event emitters.
 * Generated from the lib.dom.d.ts file.
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
}

const entries = extractEventMaps()
const content = generateOnModule(entries)

fs.writeFileSync('src/on.ts', content)

spawnSync('npm', ['run', 'format'], { stdio: 'inherit' })
