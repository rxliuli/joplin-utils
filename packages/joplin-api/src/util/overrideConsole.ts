import { vi } from 'vitest'

export function overrideConsole() {
  /**
   * 重写 console 的部分函数，以测试 console 的输出
   * @type {typeof console}
   */
  console = Object.assign(
    console,
    ['log', 'info', 'warn', 'error'].reduce((res, k) => {
      Reflect.set(res, k, vi.fn(Reflect.get(console, k)))
      return res
    }, Object.create(null)),
  )
}
