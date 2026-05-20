A tiny utility library for simplifying DOM event handling, with fully type-safe event names and event types for every DOM target.

[![Build Status](https://img.shields.io/github/actions/workflow/status/Pingid/lickle-dom/publish.yml?branch=main&style=flat&colorA=000000&colorB=000000)](https://github.com/Pingid/lickle-dom/actions)
[![Build Size](https://img.shields.io/bundlephobia/minzip/%40lickle%2Fdom?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=%40lickle%2Fdom)
[![Version](https://img.shields.io/npm/v/%40lickle%2Fdom?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/%40lickle%2Fdom)

## Installation

```bash
npm install @lickle/dom
# or
yarn add @lickle/dom
# or
pnpm add @lickle/dom
```

## Usage

`on` wraps `addEventListener` and returns an unsubscribe function. The event name is constrained to the valid events for the given target and the listener's event argument is typed accordingly.

```ts
import { on } from '@lickle/dom'

const unsubscribe = on(document, 'mousemove', (e) => {
  console.log('Mouse moved!', e.clientX, e.clientY)
})

unsubscribe()
```

The event name is checked against the target. Invalid names are a compile error:

```ts
on(new AbortSignal(), 'abort', (e) => console.log(e)) // OK
on(window, 'resize', (e) => console.log(e.target)) // OK — e is UIEvent
on(window, 'mousemove', (e) => console.log(e.clientX)) // OK — e is MouseEvent
on(window, 'not-a-real-event', (e) => {}) // Error
```

### Composing listeners

`dispose` merges multiple unsubscribe functions into one:

```ts
import { on, dispose } from '@lickle/dom'

const cleanup = dispose(
  on(document, 'mousemove', () => console.log('move')),
  on(document, 'mousedown', () => console.log('down')),
  on(document, 'mouseup', () => console.log('up')),
)

cleanup()
```

Works nicely with React effects:

```ts
import { on } from '@lickle/dom'
import { useEffect } from 'react'

useEffect(() => on(document, 'mousemove', () => console.log('move')), [])
```

## Other utilities

```ts
import { timeout, interval, idle, observer, dispose } from '@lickle/dom'

const t = timeout(500, () => console.log('half a second later'))
t() // cancel

const i = interval(1000, () => console.log('tick'))
i() // cancel

const r = idle(() => console.log('when the browser is idle'))
r() // cancel

const obs = observer((mutations) => console.log(mutations))
const stop = obs.observe(document.body, { childList: true })
stop() // stop watching this target
obs() // disconnect everything
```

## Type helpers

The types backing `on` are exported in case you need to build on top of them:

```ts
import type { EventMapFor, EventNameFor, EventFor, ListenerOptions } from '@lickle/dom'

type WindowEvents = EventNameFor<Window> // 'resize' | 'scroll' | ...
type MouseMove = EventFor<Window, 'mousemove'> // MouseEvent
type MapForVideo = EventMapFor<HTMLVideoElement> // HTMLVideoElementEventMap
```

`EventMapFor<T>` is a single conditional type resolved from `lib.dom.d.ts`, covering every DOM target and its inherited events. Subclasses are collapsed automatically (e.g. every `HTMLDivElement`/`HTMLSpanElement`/... resolves through the single `HTMLElement` branch).

## License

MIT © [Dan Beaven](https://github.com/Pingid)
