import { PromiseType } from 'utility-types'

/**
 * 安全获取 Promise 得值
 * @param val Promise 类型的值
 */
export function safePromise<T extends Promise<any>>(val: T): Promise<T | null>
/**
 * 安全获取 Promise 得值
 * @param val Promise 类型的值
 * @param defaultValue reject 后的默认返回值
 */
export function safePromise<T extends Promise<any>>(
  val: T,
  defaultValue: PromiseType<T>,
): Promise<T>
export function safePromise<T extends Promise<any>>(
  val: T,
  defaultValue?: T,
): Promise<T | null> {
  return val.catch(() => (defaultValue === undefined ? null : defaultValue))
}
