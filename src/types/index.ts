import type { EventMapFor } from './generated.js'

export * from './generated.js'

export type EventNameFor<T> = keyof EventMapFor<T> & string

export type EventFor<T, K extends EventNameFor<T>> = EventMapFor<T>[K]

/** Maps HTML tag names to their resolved event map type. */
export type TagEventMap = { [K in keyof HTMLElementTagNameMap]: EventMapFor<HTMLElementTagNameMap[K]> }
