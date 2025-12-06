import * as path from 'node:path'
import * as fs from 'node:fs'

export interface EventMapEntry {
  map: string
  targets: string[]
}

export interface ExtractOptions {
  typescriptPath?: string
  overrides?: Record<string, string[]>
  hierarchyOrder?: string[]
}

const defaultOverrides: Record<string, string[]> = {
  IDBRequestEventMap: ['IDBRequest<any>'],
  HTMLElementEventMap: ['HTMLElement'],
  SVGElementEventMap: ['SVGElement'],
  MessageEventTargetEventMap: ['MessagePort', 'Worker', 'BroadcastChannel'],
}

const defaultHierarchy = ['ElementEventMap', 'GlobalEventHandlersEventMap', 'AbstractWorkerEventMap']

const findTypescriptLib = (): string => {
  // Walk up from process.cwd() looking for node_modules/typescript
  let dir = process.cwd()
  while (dir !== path.parse(dir).root) {
    const candidate = path.join(dir, 'node_modules', 'typescript', 'lib')
    if (fs.existsSync(candidate)) return candidate
    dir = path.dirname(dir)
  }
  throw new Error('Could not find typescript in node_modules')
}

const parseTypescriptPath = (typescriptPath?: string): string => {
  return typescriptPath ?? findTypescriptLib()
}

const extractMatches = (libDom: string) => {
  const reg = /addEventListener<.\sextends\skeyof\s(.*?)\>\(type:\s.,\slistener:\s\(this:\s(.*?),.*?\).*?,(.*?)\)/gim
  return Array.from(libDom.matchAll(reg)).map(([, map, self]) => ({ map: map!, self: self! }))
}

const sortByHierarchy = (hierarchy: string[]) => (a: { map: string }, b: { map: string }) =>
  hierarchy.indexOf(a.map) - hierarchy.indexOf(b.map)

const groupByEventMap = (matches: { map: string; self: string }[], overrides: Record<string, string[]>) => {
  const maps = new Map<string, Set<string>>()

  for (const { map, self } of matches) {
    if (self === 'T') continue
    if (!maps.has(map)) maps.set(map, new Set())
    maps.get(map)!.add(self)
  }

  const entries: EventMapEntry[] = []
  for (const [map, targetSet] of maps) {
    const targets = overrides[map] ?? Array.from(targetSet)
    entries.push({ map, targets })
  }

  return entries
}

export const extractEventMaps = (options: ExtractOptions = {}): EventMapEntry[] => {
  const { overrides = defaultOverrides, hierarchyOrder = defaultHierarchy } = options
  const tsPath = parseTypescriptPath(options.typescriptPath)
  const libDom = fs.readFileSync(path.join(tsPath, 'lib.dom.d.ts'), 'utf8')

  const matches = extractMatches(libDom)
  const sorted = matches.sort(sortByHierarchy(hierarchyOrder))
  return groupByEventMap(sorted, overrides)
}
