import type { EventNameFor, EventFor, ListenerOptions } from './types/index.js'

/** listen for events on dom event emitters */
export function on<T extends EventTarget, K extends EventNameFor<T>>(
  target: T,
  event: K,
  cb: (this: T, ev: EventFor<T, K>) => void,
  options?: ListenerOptions,
): () => void
export function on(target: any, event: any, listener: any, options?: any) {
  target.addEventListener(event, listener, options)
  return () => target.removeEventListener(event, listener, options)
}

export const mutations = (
  cb: (mutations: MutationRecord[]) => void,
): {
  (): void
  observe(target: Node, options?: MutationObserverInit): () => void
  takeRecords(): MutationRecord[]
  disconnect(): void
} => {
  const observer = new MutationObserver((mutations) => cb(mutations))
  const disconnect = () => observer.disconnect()

  disconnect.observe = (target: Node, options: MutationObserverInit = { childList: true, subtree: true }) => {
    observer.observe(target, options)
    return () => observer.disconnect()
  }
  disconnect.takeRecords = () => observer.takeRecords()
  disconnect.disconnect = () => observer.disconnect()
  return disconnect
}

export const resizes = (cb: (entries: ResizeObserverEntry[]) => void) => {
  const observer = new ResizeObserver((entries) => cb(entries))
  const disconnect = () => observer.disconnect()
  disconnect.observe = (target: Element, options?: ResizeObserverOptions) => {
    observer.observe(target, options)
    return () => observer.unobserve(target)
  }
  return disconnect
}

export const timeout = (ms: number, fn: () => void) => {
  const timer = setTimeout(fn, ms)
  return () => clearTimeout(timer)
}

export const interval = (ms: number, fn: () => void) => {
  const timer = setInterval(fn, ms)
  return () => clearInterval(timer)
}

export const idle = (callback: () => void) => {
  if ('requestIdleCallback' in window) {
    const n = window.requestIdleCallback(callback)
    return () => window.cancelIdleCallback(n)
  }
  const frame = requestAnimationFrame(callback)
  return () => cancelAnimationFrame(frame)
}

export const dispose =
  (...args: (() => void)[]) =>
  () =>
    args.forEach((d) => d())
