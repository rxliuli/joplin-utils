/**
 * 深度遍历一个对象
 * @param value 遍历的对象
 * @param map 映射函数，如果希望继续递归则返回一个数组（注意：顶层对象是没有 path 的，如果可以从对象中取出，则自行 pop&push）
 */
export function deepEach(
  value: any,
  map: (value: any, paths: string[]) => [k: string, v: any][] | void,
) {
  function f(value: any, paths: string[]) {
    const res = map(value, paths)
    if (!Array.isArray(res)) {
      return
    }
    res.forEach(([k, child]) => {
      f(child, [...paths, k])
    })
  }
  f(value, [])
}
