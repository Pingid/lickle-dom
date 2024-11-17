A tiny utility library for simplifying DOM event handling.

[![Build Status](https://img.shields.io/github/actions/workflow/status/Pingid/lickle-dom/test.yml?branch=main&style=flat&colorA=000000&colorB=000000)](https://github.com/Pingid/lickle-dom/actions?query=workflow:Test)
[![Build Size](https://img.shields.io/bundlephobia/minzip/%40lickle%2Fdom?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=%40lickle%2Fdom)
[![Version](https://img.shields.io/npm/v/%40lickle%2Fdom?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/%40lickle%2Fdom)

## Installation

Install using your preferred package manager:

```bash
npm install @lickle/dom
# or
yarn add @lickle/dom
# or
pnpm add @lickle/dom
```

## Usage

The `on` function wraps `addEventListener` and returns an unsubscribe function, making it easy to manage event listeners.

```ts
import { on } from '@lickle/dom'

const unsubscribe = on(document)('mousemove', (e) => console.log('Mouse moved!', e))
...
unsubscribe()
```

The `dispose` utility lets you merge multiple unsubscribe functions into one. This is handy for managing multiple listeners at once.

```ts
import { on, dispose } from '@lickle/dom'

const unsubscribeAll = dispose(
  on(document)('mousemove', (e) => console.log('Mouse moved!')),
  on(document)('mousedown', (e) => console.log('Mouse down!')),
  on(document)('mouseup', (e) => console.log('Mouse up!')),
)

...
unsubscribeAll()
```

The core of the library is the on function, which provides a type-safe, declarative way to add and remove DOM event listeners. While the implementation itself is simple, the power of the library lies in the [On type](./src/events/on.ts), which is designed to provide precise typings for various DOM targets and their respective events.

## Why?

This library is for developers who value concise, declarative, and type-safe code. It is especially useful in frontend frameworks like React, where managing event listeners throughout a component's lifecycle is common. For example:

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
