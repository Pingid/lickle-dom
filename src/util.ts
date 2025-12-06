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
