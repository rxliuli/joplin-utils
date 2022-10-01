import type { ConditionalKeys } from 'type-fest'
import { wait } from '@liuli-util/async'

type VoidFunc = ((...args: any[]) => void) | undefined

export type OnEventPromise<T, E> = Promise<T> & {
  on<K extends ConditionalKeys<E, VoidFunc>>(type: K, callback: E[K]): OnEventPromise<T, E>
}

export class PromiseUtil {
  /**
   * 创建一个支持 on* 事件的 Promise 实例
   * @param executor
   */
  static warpOnEvent<
    F extends (events: any) => Promise<any>,
    E extends Parameters<F>[0],
    K extends ConditionalKeys<E, VoidFunc>,
  >(executor: F): OnEventPromise<Awaited<ReturnType<F>>, E> {
    const events: Partial<Pick<E, K>> = {}
    const res = new Promise(async (resolve, reject) => {
      await wait(0)
      try {
        resolve(await executor(events))
      } catch (e) {
        reject(e)
      }
    })
    Reflect.set(res, 'on', (type: K, callback: E[K]) => {
      events[type] = callback
      return res
    })
    return res as any
  }
}
