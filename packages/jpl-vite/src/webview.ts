declare const webviewApi: {
  postMessage: (message: any) => void
  onMessage: (callback: (message: any) => void) => void
}

const _webviewApi: typeof webviewApi = {
  postMessage: (...args) => webviewApi.postMessage(...args),
  onMessage: (...args) => webviewApi.onMessage(...args),
}

export { _webviewApi as webviewApi }
