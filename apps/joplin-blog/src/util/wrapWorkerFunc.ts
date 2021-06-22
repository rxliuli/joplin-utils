import { expose, Remote, wrap } from 'comlink'
import path from 'path'
import { isMainThread, parentPort, Worker } from 'worker_threads'
import nodeEndpoint from 'comlink/dist/umd/node-adapter'

/**
 * 包装需要放到 worker 中执行的函数
 * 1. 当检查到当前文件不是 js 文件时会直接返回函数
 * 2. 当检查到在主线程时执行时，使用 Worker 包装并执行它
 * 3. 当检查到在 Worker 线程时，使用 expose 包装它然后执行
 * 注：目前是每次都创建新的 Worker，也许可以考虑支持复用 Worker
 * @param ep
 */
export function wrapWorkerFunc<T extends (...args: any[]) => any>(
  ep: T,
): Remote<T> {
  // return ep as Remote<T>
  if (path.extname(__filename) !== '.js') {
    return ep as Remote<T>
  }
  if (isMainThread) {
    return ((...args: any[]) => {
      const worker = new Worker(__filename)
      const fn = wrap<T>(nodeEndpoint(worker))
      return (fn(...args) as Promise<any>).finally(() => worker.unref())
    }) as Remote<T>
  }
  expose(ep, nodeEndpoint(parentPort!))
  return ep as Remote<T>
}
