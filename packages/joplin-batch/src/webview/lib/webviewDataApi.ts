import { Api } from 'joplin-api'
import { sendMessage } from '../../message'

export function webviewJoplinDataApi(): Api {
  function createProxy(path: string[]) {
    const handler = {
      get(_target: any, prop: string | symbol) {
        if (prop === 'bind') {
          // 返回一个假的 bind 函数，它只是返回代理本身
          return () => createProxy(path)
        }
        if (prop === 'then') {
          // 处理 Promise 链式调用
          return undefined
        }
        return createProxy([...path, prop.toString()])
      },
      apply(_target: any, _thisArg: any, args: any[]) {
        return sendMessage('invokeDataApi', path.join('.'), ...args)
      },
    }

    const proxy = new Proxy(function () {
      throw new Error('Cannot invoke a proxy')
    }, handler)
    return proxy
  }

  return createProxy([]) as unknown as Api
}
