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

export const resize = (cb: (entries: ResizeObserverEntry[]) => void) => {
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
