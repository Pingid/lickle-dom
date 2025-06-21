export const timeout = (ms: number, fn: () => void) => {
  const timer = setTimeout(fn, ms)
  return () => clearTimeout(timer)
}

export const interval = (ms: number, fn: () => void) => {
  const timer = setInterval(fn, ms)
  return () => clearInterval(timer)
}

export const dispose =
  (...args: (() => void)[]) =>
  () =>
    args.forEach((d) => d())
