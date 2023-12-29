import Browser from 'webextension-polyfill'

export interface Channel<T extends string> {
  name: T
}

export function register<T extends Channel<string>>(api: T) {
  Browser.runtime.onMessage.addListener((message, _sender, sendMessage) => {
    if (typeof message.method !== 'string' || !message.method.startsWith(api.name + '.')) {
      return
    }
    const p = (message.method as string).slice((api.name + '.').length)
    if (typeof (api as any)[p] !== 'function') {
      throw new Error('method not found')
    }
    ;(async () => {
      console.log('background receive message', message)
      try {
        const r = await (api as any)[p](...message.params)
        // @ts-expect-error
        sendMessage({ result: r })
      } catch (err: any) {
        // @ts-expect-error
        sendMessage({
          error: {
            code: err.code,
            message: err.message,
            data: err.stack,
          },
        })
      }
    })()
    return true
  })
}

export function warp<T extends Channel<string>>(options: { name: T['name'] }): T {
  return new Proxy({} as any, {
    get(_, p) {
      return async (...args: any[]) => {
        const r = await Browser.runtime.sendMessage({
          method: options.name + '.' + (p as string),
          params: args,
        })
        if ('error' in r) {
          throw new (class extends Error {
            readonly code = r.error.code
            readonly data = r.error.data
            constructor() {
              super(r.error.message)
            }
          })()
        }
        return r.result
      }
    },
  }) as any
}
