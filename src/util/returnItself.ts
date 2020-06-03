/**
 * 返回第一个参数的函数
 * 注: 一般可以当作返回参数自身的函数，如果你只关注第一个参数的话
 * @param obj 任何对象
 * @typeparam T 传入参数的类型
 * @typeparam R 返回结果的类型，默认为 T，只是为了兼容该函数当参数被传递时可能出现需要类型不一致的问题
 * @returns 传入的第一个参数
 */
export function returnItself<T, R = T>(obj: T): R {
  return obj as any
}
