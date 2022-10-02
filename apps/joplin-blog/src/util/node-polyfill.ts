import nodeFetch from 'node-fetch'
import nodeFormData from 'form-data'

// @ts-expect-errors
if (typeof fetch === 'undefined') {
  Reflect.set(globalThis, 'fetch', nodeFetch)
}
// @ts-expect-errors
if (typeof FormData === 'undefined') {
  Reflect.set(globalThis, 'FormData', nodeFormData)
}
