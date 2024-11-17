export const dispose =
  (...args: (() => void)[]) =>
  () =>
    args.forEach((d) => d())
