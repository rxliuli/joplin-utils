declare module '*?worker' {
  import type { Worker } from 'worker_threads'
  const workerConstructor: {
    new (): Worker
  }
  export default workerConstructor
}
