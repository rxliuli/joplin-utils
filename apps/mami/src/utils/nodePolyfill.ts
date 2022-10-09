import nodeFetch from 'node-fetch'
import nodeFormData from 'form-data'

if (typeof fetch === 'undefined') {
  Reflect.set(globalThis, 'fetch', nodeFetch)
}
if (typeof FormData === 'undefined') {
  Reflect.set(globalThis, 'FormData', nodeFormData)
}
