import * as path from 'node:path'
import * as fs from 'node:fs'
import * as ts from 'typescript'

export interface EventDef {
  /** The event name (e.g. `"click"`) */
  name: string
  /** The event type (e.g. `"MouseEvent"`) */
  type: string
  /** The options parameter type from the owning `addEventListener` overload */
  options: string
  /** JSDoc comment for the event entry, if any */
  doc?: string
}

export interface Target {
  /** The interface name (e.g. `"HTMLElement"`) */
  name: string
  /** JSDoc comment for the target interface, if any */
  doc?: string
}

export interface EventMapEntry {
  /** The event map interface name (e.g. `"HTMLElementEventMap"`) */
  map: string
  /** JSDoc comment for the event map interface, if any */
  doc?: string
  /** Interfaces whose `addEventListener` is keyed by this map */
  targets: Target[]
  /** Events available on the map (including inherited) */
  events: EventDef[]
  /** The options parameter type from the owning `addEventListener` overload */
  options: string
  /** Direct parent event maps via `extends` */
  extends: string[]
  /** Full transitive extend chain (parents, grandparents, ...) */
  chain: string[]
}

export interface ExtractOptions {
  typescriptPath?: string
  /** Tiebreaker order for entries at the same hierarchy depth */
  hierarchyOrder?: string[]
  /**
   * Target interface names to exclude from the results entirely.
   * Defaults to {@link defaultSkipTargets}.
   */
  skipTargets?: string[]
  /**
   * Drop subclass targets when an ancestor interface is also a target of the
   * same event map (e.g. collapses every `HTMLDivElement`/`HTMLSpanElement`
   * etc. into the single `HTMLElement` branch). Defaults to `true`.
   */
  collapseSubclasses?: boolean
}

/**
 * Mixin-style interfaces that pollute the conditional cascade because their
 * structural shape overlaps with other targets and they aren't real runtime
 * objects. Their events are still reachable via concrete subclasses (e.g.
 * `HTMLElement` inherits all `GlobalEventHandlersEventMap` events).
 */
export const defaultSkipTargets: string[] = [
  'MessageEventTarget',
  'AbstractWorker',
  'GlobalEventHandlers',
  'WindowEventHandlers',
]

const defaultHierarchy: string[] = []

/** Extract the event maps from the lib.dom.d.ts file */
export const extractEventMaps = (options: ExtractOptions = {}): EventMapEntry[] => {
  const { hierarchyOrder = defaultHierarchy, skipTargets = defaultSkipTargets, collapseSubclasses = true } = options
  const lib = options.typescriptPath ?? findTsLib()
  const file = path.join(lib, 'lib.dom.d.ts')
  const text = fs.readFileSync(file, 'utf8')
  const src = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true)

  const { maps, targets, parents } = collect(src)
  const skip = new Set(skipTargets)
  const baseName = (n: string) => n.replace(/<.*$/, '')
  const keep = (n: string) => !skip.has(n) && !skip.has(baseName(n))

  const byMap = new Map<string, Target[]>()
  for (const t of targets) {
    if (!keep(t.name)) continue
    if (!byMap.has(t.map)) byMap.set(t.map, [])
    byMap.get(t.map)!.push({ name: t.name, ...optDoc(t.doc) })
  }

  if (collapseSubclasses) {
    for (const [map, list] of byMap) {
      const names = new Set(list.map((t) => t.name))
      const kept = list.filter((t) => {
        for (const a of ancestorsOf(t.name, parents)) if (names.has(a)) return false
        return true
      })
      byMap.set(map, kept)
    }
  }

  const optByMap = new Map<string, string>()
  for (const t of targets) if (!optByMap.has(t.map)) optByMap.set(t.map, t.options)

  const entries: EventMapEntry[] = []
  for (const [map, list] of byMap) {
    if (!list.length) continue
    const m = maps.get(map)
    const opt = optByMap.get(map) ?? DEFAULT_OPTIONS
    entries.push({
      map,
      ...optDoc(m?.doc),
      targets: list,
      events: resolveEvents(map, maps).map((e) => ({ ...e, options: opt })),
      options: opt,
      extends: m?.extends ?? [],
      chain: resolveChain(map, maps),
    })
  }

  const children = buildChildIndex(maps)
  const memo = new Map<string, number>()
  const tie = (n: string) => {
    const i = hierarchyOrder.indexOf(n)
    return i === -1 ? Infinity : i
  }
  return entries.sort(
    (a, b) => rankOf(a.map, children, memo) - rankOf(b.map, children, memo) || tie(a.map) - tie(b.map),
  )
}

const findTsLib = (): string => {
  let dir = process.cwd()
  while (dir !== path.parse(dir).root) {
    const c = path.join(dir, 'node_modules', 'typescript', 'lib')
    if (fs.existsSync(c)) return c
    dir = path.dirname(dir)
  }
  throw new Error('Could not find typescript in node_modules')
}

const cleanDoc = (raw: string): string =>
  raw
    .replace(/^\/\*\*?/, '')
    .replace(/\*\/$/, '')
    .split('\n')
    .map((l) => l.replace(/^\s*\*\s?/, ''))
    .join('\n')
    .trim()

const getDoc = (node: ts.Node, src: ts.SourceFile): string | undefined => {
  const ranges = ts.getLeadingCommentRanges(src.text, node.getFullStart())
  if (!ranges?.length) return
  const last = ranges[ranges.length - 1]!
  const txt = src.text.slice(last.pos, last.end)
  if (!txt.startsWith('/**')) return
  return cleanDoc(txt) || undefined
}

const propName = (n: ts.PropertyName, src: ts.SourceFile): string =>
  ts.isStringLiteral(n) || ts.isNumericLiteral(n) || ts.isIdentifier(n) ? n.text : n.getText(src)

const DEFAULT_OPTIONS = 'boolean | AddEventListenerOptions'

const optDoc = (d: string | undefined): { doc?: string } => (d === undefined ? {} : { doc: d })

const parseEvents = (i: ts.InterfaceDeclaration, src: ts.SourceFile): EventDef[] =>
  i.members.flatMap((m) =>
    ts.isPropertySignature(m) && m.type
      ? [
          {
            name: propName(m.name, src),
            type: m.type.getText(src),
            options: DEFAULT_OPTIONS,
            ...optDoc(getDoc(m, src)),
          },
        ]
      : [],
  )

const heritageMaps = (i: ts.InterfaceDeclaration): string[] =>
  i.heritageClauses?.flatMap((h) => h.types.map((t) => t.expression.getText())).filter((n) => n.endsWith('EventMap')) ??
  []

const parseAEL = (m: ts.MethodSignature, src: ts.SourceFile): { map: string; options: string } | undefined => {
  const c = m.typeParameters?.[0]?.constraint?.getText(src)
  const map = c?.match(/^keyof\s+(\w+EventMap)$/)?.[1]
  if (!map) return
  const p = m.parameters.find((x) => ts.isIdentifier(x.name) && x.name.text === 'options')
  return { map, options: p?.type?.getText(src) ?? DEFAULT_OPTIONS }
}

interface MapInfo {
  doc?: string | undefined
  events: EventDef[]
  extends: string[]
}

const interfaceParents = (i: ts.InterfaceDeclaration): string[] =>
  i.heritageClauses?.flatMap((h) => h.types.map((t) => t.expression.getText())) ?? []

const collect = (src: ts.SourceFile) => {
  const maps = new Map<string, MapInfo>()
  const targets: Array<{ map: string; name: string; doc?: string; options: string }> = []
  const parents = new Map<string, string[]>()

  for (const s of src.statements) {
    if (!ts.isInterfaceDeclaration(s)) continue
    const name = s.name.text
    if (name.endsWith('EventMap')) {
      maps.set(name, { doc: getDoc(s, src), events: parseEvents(s, src), extends: heritageMaps(s) })
      continue
    }
    if (!parents.has(name)) parents.set(name, interfaceParents(s))
    for (const m of s.members) {
      if (!ts.isMethodSignature(m) || !ts.isIdentifier(m.name) || m.name.text !== 'addEventListener') continue
      const parsed = parseAEL(m, src)
      if (!parsed) continue
      targets.push({ map: parsed.map, name, ...optDoc(getDoc(s, src)), options: parsed.options })
      break
    }
  }
  return { maps, targets, parents }
}

const ancestorsOf = (name: string, parents: Map<string, string[]>, out = new Set<string>()): Set<string> => {
  for (const p of parents.get(name) ?? []) {
    if (out.has(p)) continue
    out.add(p)
    ancestorsOf(p, parents, out)
  }
  return out
}

const resolveEvents = (map: string, maps: Map<string, MapInfo>, seen = new Set<string>()): EventDef[] => {
  if (seen.has(map)) return []
  seen.add(map)
  const info = maps.get(map)
  if (!info) return []
  const inherited = info.extends.flatMap((p) => resolveEvents(p, maps, seen))
  const merged = new Map<string, EventDef>()
  for (const e of [...inherited, ...info.events]) merged.set(e.name, e)
  return Array.from(merged.values())
}

const resolveChain = (map: string, maps: Map<string, MapInfo>, seen = new Set<string>()): string[] => {
  const info = maps.get(map)
  if (!info) return []
  const out: string[] = []
  for (const p of info.extends) {
    if (seen.has(p)) continue
    seen.add(p)
    out.push(p, ...resolveChain(p, maps, seen))
  }
  return out
}

const buildChildIndex = (maps: Map<string, MapInfo>): Map<string, string[]> => {
  const children = new Map<string, string[]>()
  for (const [name, info] of maps) {
    for (const p of info.extends) {
      if (!children.has(p)) children.set(p, [])
      children.get(p)!.push(name)
    }
  }
  return children
}

const rankOf = (map: string, children: Map<string, string[]>, memo = new Map<string, number>()): number => {
  const hit = memo.get(map)
  if (hit !== undefined) return hit
  memo.set(map, 0) // guard against cycles
  const c = children.get(map) ?? []
  const r = c.length === 0 ? 0 : 1 + Math.max(...c.map((x) => rankOf(x, children, memo)))
  memo.set(map, r)
  return r
}
