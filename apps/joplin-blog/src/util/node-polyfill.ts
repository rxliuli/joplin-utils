import nodeFetch from 'node-fetch'
import nodeFormData from 'form-data'

// @ts-expect-errors
if (typeof fetch === 'undefined') {
  if (typeof nodeFetch === 'function') {
    Reflect.set(globalThis, 'fetch', nodeFetch)
  }
  // @ts-expect-errors
  else if (typeof nodeFetch === 'function' ? nodeFetch : typeof nodeFetch === 'object' && nodeFetch.default) {
    // @ts-expect-errors
    Reflect.set(globalThis, 'fetch', nodeFetch.default)
  } else {
    throw new Error('fetch polyfill error', nodeFetch)
  }
}
// @ts-expect-errors
if (typeof FormData === 'undefined') {
  Reflect.set(globalThis, 'FormData', nodeFormData)
}
