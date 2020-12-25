import { map } from './map'

/**
 * 异步 forEach
 * @param arr
 * @param fn
 */
export async function forEach<T>(
  arr: T[],
  fn: (value: T, index: number, array: T[]) => Promise<void>,
) {
  await map(arr, fn)
}
