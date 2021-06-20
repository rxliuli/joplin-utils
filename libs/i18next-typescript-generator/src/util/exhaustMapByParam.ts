import { PromiseValue } from 'type-fest'

/**
 * 将一个异步函数包装为具有时序的异步函数
 * 注: 该函数会阻止并发的异步操作，非常类似于 {@link exhaustMap}，但不同之处在于它不会抛弃参数不同的调用
 * @param fn 一个普通的异步函数
 * @returns 包装后的函数
 */
export function exhaustMapByParam<T extends (...args: any[]) => Promise<any>>(
  fn: T,
): (...args: Parameters<T>) => Promise<PromiseValue<ReturnType<T>> | void> {
  const set = new Set<string>()
  return async function (...args: any[]) {
    const key = JSON.stringify(args)
    if (set.has(key)) {
      return
    }
    set.add(key)
    try {
      return await fn(...args)
    } finally {
      set.delete(key)
    }
  }
}
