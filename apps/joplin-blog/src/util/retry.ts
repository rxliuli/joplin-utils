export function retry<T extends (...args: any[]) => Promise<any>>(fn: T, count: number): T {
  let i = 0
  const res = (async (...args: any[]) => {
    try {
      return await fn(...args)
    } catch (e) {
      if (i >= count) {
        throw e
      }
      i++
      return await res(...args)
    }
  }) as T
  return res
}
