import { ConditionalKeys, PromiseValue } from 'type-fest'
import { wait } from '@liuli-util/async'

type VoidFunc = (...args: never[]) => void

export type OnEventPromise<T, E> = Promise<T> & {
  on<K extends ConditionalKeys<E, VoidFunc>>(
    type: K,
    callback: E[K],
  ): OnEventPromise<T, E>
}

export class PromiseUtil {
  /**
   * 创建一个支持 on* 事件的 Promise 实例
   * @param executor
   */
  static warpOnEvent<
    // eslint-disable-next-line
    F extends (events: any) => Promise<any>,
    E extends Parameters<F>[0],
    K extends ConditionalKeys<E, VoidFunc>,
  >(executor: F): OnEventPromise<PromiseValue<ReturnType<F>>, E> {
    const events: Partial<Pick<E, K>> = {}
    const res = wait(0).then(
      () =>
        new Promise((resolve, reject) => {
          try {
            resolve(executor(events))
          } catch (e) {
            reject(e)
          }
        }),
    )
    Reflect.set(res, 'on', (type: K, callback: E[K]) => {
      events[type] = callback
      return res
    })
    return res as OnEventPromise<PromiseValue<ReturnType<F>>, E>
  }
}
