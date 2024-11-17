A tiny utility library for simplifying DOM event handling.

## Installation

Install using your preferred package manager:

```bash
npm install @lickle/dom
# or
yarn add @lickle/dom
# or
pnpm add @lickle/dom
```

## Api

The `on` function wraps `addEventListener` and returns an unsubscribe function, making it easy to manage event listeners.

```ts
import { on } from '@lickle/dom'

const unsubscribe = on(document)('mousemove', (e) => {
  console.log('Mouse moved!', e)
})

// Later, you can remove the listener:
unsubscribe()
```

**Implementation:**

```ts
export const on: On = (target: any) => (event: any, listener: any, options?: any) => {
  target.addEventListener(event, listener, options)
  return () => target.removeEventListener(event, listener, options)
}
```

The `dispose` utility lets you merge multiple unsubscribe functions into one. This is handy for managing multiple listeners at once.

```ts
import { on, dispose } from '@lickle/dom'

const unsubscribeAll = dispose(
  on(document)('mousemove', (e) => console.log('Mouse moved!')),
  on(document)('mousedown', (e) => console.log('Mouse down!')),
  on(document)('mouseup', (e) => console.log('Mouse up!')),
)

// Later, remove all listeners:
unsubscribeAll()
```

## Why Use This Library?

This library is particularly useful in frontend frameworks like React, where managing event listeners during a component's lifecycle is common. For example:

```ts
import { on } from '@lickle/dom'
import { useEffect } from 'react'

useEffect(() => {
  return on(document)('mousemove', () => {
    console.log('Mouse moved!')
  })
}, [])
```

## License

MIT © [Dan Beaven](https://github.com/lickle-dom)
