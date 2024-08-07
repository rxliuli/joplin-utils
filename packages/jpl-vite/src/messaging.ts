import joplin, { ViewHandle } from 'joplin-plugin-api'
import { webviewApi } from './webview'
import { serializeError, deserializeError } from 'serialize-error'
import { once } from 'lodash-es'
import { getEnv } from '.'

type ProtocolWithReturn<T> = T extends (...args: infer Args) => any ? ReturnType<T> : [T]
type GetDataType<T> = T extends (...args: infer Args) => any ? Parameters<T> : [T]

interface ExtensionMessenger<TProtocolMap> {
  sendMessage<TMethod extends keyof TProtocolMap & string>(
    method: TMethod,
    ...args: GetDataType<TProtocolMap[TMethod]>
  ): Promise<ProtocolWithReturn<TProtocolMap[TMethod]>>
  onMessage<TMethod extends keyof TProtocolMap & string>(
    method: TMethod,
    handler: (
      ...args: GetDataType<TProtocolMap[TMethod]>
    ) => ProtocolWithReturn<TProtocolMap[TMethod]> | Promise<ProtocolWithReturn<TProtocolMap[TMethod]>>,
  ): () => void
}

function getIpc(viewHandle: ViewHandle) {
  const env = getEnv()
  if (!env) {
    throw new Error('Unknown environment')
  }
  const postMessage =
    env === 'main' ? async (data: any) => joplin.views.panels.postMessage(viewHandle, data) : webviewApi.postMessage
  const onMessage =
    env === 'main'
      ? (cb: any) => joplin.views.panels.onMessage(viewHandle, cb)
      : (cb: (data: any) => void) => webviewApi.onMessage((data: { message: any }) => cb(data.message))
  return {
    postMessage,
    onMessage,
  }
}

interface RequestMessage {
  type: 'request'
  id: string
  method: string
  args: any[]
}

interface ResponseMessage {
  type: 'response'
  id: string
  error?: any
  result?: any
}

export function defineExtensionMessaging<TProtocolMap extends Record<string, any>>(
  viewHandle: ViewHandle,
): ExtensionMessenger<TProtocolMap> {
  // method => handler
  const onMessageListenes = new Map<string, (...args: any[]) => Promise<any>>()
  // id => wrap handler
  const callbackListenes = new Map<string, (response: ResponseMessage) => Promise<void>>()
  function addRootListener(viewHandle: ViewHandle) {
    const { onMessage, postMessage } = getIpc(viewHandle)
    onMessage(async (message: RequestMessage | ResponseMessage) => {
      // 这里应该是在 main 线程处理请求
      if (message.type === 'request') {
        const request = message
        const handler = onMessageListenes.get(message.method)
        if (!handler) {
          postMessage({
            type: 'response',
            id: request.id,
            error: new Error('No such method ' + request.method),
          } satisfies ResponseMessage)
          return
        }
        try {
          const result = await handler(...(request.args as any))
          postMessage({
            type: 'response',
            id: request.id,
            result,
          } satisfies ResponseMessage)
        } catch (error) {
          postMessage({
            type: 'response',
            id: request.id,
            error: serializeError(error),
          } satisfies ResponseMessage)
        }
        return
      }
      // 如果是响应，那么就是在 webview 线程处理
      const callback = callbackListenes.get(message.id)
      if (!callback) {
        console.warn('No such callback for id ' + message.id, message)
        return
      }
      callback(message as ResponseMessage)
      callbackListenes.delete(message.id)
    })
  }
  const onceAddRootListener = once(addRootListener)
  return {
    // webview 线程发送
    sendMessage: async (method, ...args) => {
      onceAddRootListener(viewHandle)
      const { postMessage } = getIpc(viewHandle)
      const id = Math.random().toString(36).slice(2)
      return new Promise((resolve, reject) => {
        callbackListenes.set(id, async (message: ResponseMessage) => {
          const { error, result } = message
          if (error) {
            reject(deserializeError(error))
            return
          }
          resolve(result)
          return
        })
        postMessage({
          type: 'request',
          id,
          method: method as string,
          args,
        } satisfies RequestMessage)
      })
    },
    // main 线程监听
    onMessage: (method, handler) => {
      onceAddRootListener(viewHandle)
      onMessageListenes.set(method, handler)
      return () => onMessageListenes.delete(method)
    },
  }
}
