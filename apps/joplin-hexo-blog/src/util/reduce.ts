/**
 * 异步 reduce
 * @param arr
 * @param fn
 * @param init
 */
export async function reduce<T, U>(
  arr: T[],
  fn: (
    previousValue: U,
    currentValue: T,
    currentIndex: number,
    array: T[],
  ) => U,
  init: U,
): Promise<U> {
  return arr.reduce(async (res, item, i, arr) => {
    const prev = await init
    return fn(prev, item, i, arr)
  }, Promise.resolve(init))
}
