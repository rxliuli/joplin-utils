import axios from 'axios'
import { stringify } from 'query-string'
import { Config } from './config'
import { globalValue } from './globalValue'

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK'

export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'

interface AjaxConfig {
  url: string
  method?: Method
  data?: any
  headers?: Record<string, string>
  responseType?: ResponseType
}

type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T]

type FlipOptional<T> = Required<Pick<T, OptionalKeys<T>>> &
  Partial<Omit<T, OptionalKeys<T>>> extends infer O
  ? { [K in keyof O]: O[K] }
  : never

const defaultConfig: FlipOptional<AjaxConfig> = {
  method: 'get',
  data: undefined,
  headers: {},
  responseType: 'json',
}

export class Ajax {
  constructor(public readonly config: Config) {}

  /**
   * 封装 ajax 请求
   * @param ajaxConfig
   */
  async request<R>(ajaxConfig: AjaxConfig): Promise<R> {
    return (await axios.request({ ...defaultConfig, ...ajaxConfig })).data as R
  }

  baseUrl(url: string, param?: object): string {
    const query = stringify(
      {
        ...param,
        ...this.config,
      },
      {
        arrayFormat: 'comma',
      },
    )
    return `http://localhost:${this.config.port}${url}?${query}`
  }

  get<R>(
    url: string,
    data?: any,
    config?: Omit<AjaxConfig, 'url' | 'data' | 'method'>,
  ): Promise<R> {
    return this.request<R>({
      url: this.baseUrl(url, data),
      ...config,
      method: 'get',
    })
  }

  post<R>(
    url: string,
    data?: any,
    config?: Omit<AjaxConfig, 'url' | 'data' | 'method'>,
  ): Promise<R> {
    return this.request<R>({
      url: this.baseUrl(url),
      data,
      ...config,
      method: 'post',
    })
  }

  put<R>(
    url: string,
    data?: any,
    config?: Omit<AjaxConfig, 'url' | 'data' | 'method'>,
  ): Promise<R> {
    return this.request<R>({
      url: this.baseUrl(url),
      data,
      ...config,
      method: 'put',
    })
  }

  delete<R>(
    url: string,
    data?: any,
    config?: Omit<AjaxConfig, 'url' | 'data' | 'method'>,
  ): Promise<R> {
    return this.request<R>({
      url: this.baseUrl(url),
      data,
      ...config,
      method: 'delete',
    })
  }

  async postFormData<T>(url: string, data: object): Promise<T> {
    if (typeof fetch === 'undefined') {
      Reflect.set(globalValue, 'fetch', (await import('node-fetch')).default)
    }
    if (typeof FormData === 'undefined') {
      Reflect.set(globalValue, 'FormData', (await import('form-data')).default)
    }
    const fd = new FormData()
    Object.entries(data).forEach(([k, v]) => fd.append(k, v))
    const resp = await fetch(this.baseUrl(url), {
      method: 'post',
      body: fd,
    })
    return await resp.json()
  }
}
