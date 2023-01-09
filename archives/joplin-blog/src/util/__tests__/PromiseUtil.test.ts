import { expect, it, describe } from 'vitest'
import { PromiseUtil } from '../PromiseUtil'
import { wait } from '@liuli-util/async'

describe('测试 PromiseUtil', () => {
  describe('测试 OnEventPromise', () => {
    it('测试合并函数到 Promise 上', async () => {
      const events = {} as any
      const promise = new Promise<number>((resolve) => {
        let i = 0
        const all = 100
        const interval = setInterval(() => {
          events.process({ rate: i, all })
          if (i >= all) {
            clearInterval(interval)
            resolve(i)
          }
          i++
        }, 10)
      }) as Promise<number> & {
        on(type: string, callback: (...args: any[]) => void): void
      }
      Reflect.set(promise, 'on', (type: string, callback: Function) => {
        events[type] = callback
        return promise
      })

      const res = await promise.on('process', async (info) => {
        console.log('info: ', info)
      })
      console.log(res)
    })

    interface Events {
      process?(info: { rate: number; all: number }): void
    }

    it('基本示例', async () => {
      const res = await PromiseUtil.warpOnEvent(
        (events: Events) =>
          new Promise<number>(async (resolve) => {
            let i = 0
            const all = 10
            const interval = setInterval(() => {
              events.process!({ rate: i, all })
              if (i >= all) {
                clearInterval(interval)
                resolve(i)
              }
              i++
            }, 10)
          }),
      ).on('process', (info) => {
        console.log(`process: ${info.rate}/${info.all}`)
      })
      console.log(res)
    })
    it('测试时机', async () => {
      const promise = PromiseUtil.warpOnEvent(
        (events: Events & { dynamicProcess?(): void }) =>
          new Promise((resolve) => {
            expect(events.process).toBeTruthy()
            expect(events.dynamicProcess).toBeFalsy()
            resolve(0)
          }),
      ).on('process', () => {})
      await wait(0)
      promise.on('dynamicProcess', () => {})
      console.log(await promise)
    })
  })
})
