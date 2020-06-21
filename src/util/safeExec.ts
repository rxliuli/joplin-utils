import { Func } from 'liuli-types'

/**
 * 解构可能为 Promise 的变量
 */
export type PromiseDeconstruct<T> = T extends Promise<infer R> ? R : T
/**
 * 安全执行某个函数
 * 支持异步函数
 * @param fn 需要执行的函数
 * @param defaultVal 发生异常后的默认返回值，默认为 null
 * @param args 可选的函数参数
 * @returns 函数执行的结果，或者其默认值
 */
export function safeExec<Fn extends Func>(
  fn: Fn,
  defaultVal?: ReturnType<Fn>,
  ...args: Parameters<Fn>
): PromiseDeconstruct<ReturnType<Fn>> | null {
  const defRes = (defaultVal === undefined ? null : defaultVal) as any
  try {
    const res = fn(...(args as any))
    return res instanceof Promise ? res.catch(() => defRes) : res
  } catch (err) {
    return defRes
  }
}
