import fetch from 'node-fetch'
import { FormData } from 'formdata-polyfill/esm.min.js'
import { Blob } from 'fetch-blob'

Reflect.set(globalThis, 'fetch', fetch)
Reflect.set(globalThis, 'FormData', FormData)
Reflect.set(globalThis, 'Blob', Blob)
