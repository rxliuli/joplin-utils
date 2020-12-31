/**
 * 异步 map
 * @param arr
 * @param fn
 */
export async function map<T, U>(
  arr: T[],
  fn: (value: T, index: number, array: T[]) => Promise<U>,
): Promise<U[]> {
  return await Promise.all(arr.map((item, i) => fn(item, i, arr)))
}
