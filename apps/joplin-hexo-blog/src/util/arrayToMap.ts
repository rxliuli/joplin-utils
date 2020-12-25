type ArrayType<T extends any[]> = T extends (infer U)[] ? U : never

export function arrayToMap<T extends any[], K, V>(
  arr: T,
  k: (v: ArrayType<T>) => K,
): Map<K, ArrayType<T>>
export function arrayToMap<T extends any[], K, V>(
  arr: T,
  k: (v: ArrayType<T>) => K,
  v?: (v: ArrayType<T>) => V,
): Map<K, V>
/**
 * 将数组映射为 Map
 * @param arr 数组
 * @param k 产生 Map 元素唯一标识的函数，或者对象元素中的一个属性名
 * @param v 产生 Map 值的函数，默认为返回数组的元素，或者对象元素中的一个属性名
 * @returns 映射产生的 map 集合
 */
export function arrayToMap<T extends any[], K, V>(
  arr: T,
  k: (v: ArrayType<T>) => K,
  v: (v: ArrayType<T>) => V = (v) => v,
): Map<K, V> {
  return arr.reduce((res, item) => res.set(k(item), v(item)), new Map<K, V>())
}
