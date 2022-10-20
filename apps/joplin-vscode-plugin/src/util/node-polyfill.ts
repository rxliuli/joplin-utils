import nodeFetch from 'node-fetch'
import { FormData } from 'formdata-polyfill/esm.min.js'

// @ts-expect-errors
if (typeof fetch === 'undefined') {
  Reflect.set(globalThis, 'fetch', nodeFetch)
}
if (typeof FormData === 'undefined') {
  Reflect.set(globalThis, 'FormData', FormData)
}
