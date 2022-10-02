import { omit } from '@liuli-util/object'
import { stringify } from 'query-string'
import { Config } from './config'

export type Method = 'get' | 'delete' | 'post' | 'put'

export type ResponseType = 'arraybuffer' | 'blob' | 'json' | 'text'

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

type FlipOptional<T> = Required<Pick<T, OptionalKeys<T>>> & Partial<Omit<T, OptionalKeys<T>>> extends infer O
  ? { [K in keyof O]: O[K] }
  : never

const defaultConfig: FlipOptional<AjaxConfig> = Object.freeze({
  method: 'get',
  data: undefined,
  headers: {},
  responseType: 'json',
})

export class Ajax {
  constructor(public readonly config: Config) {}

  /**
   * 封装 ajax 请求
   * @param ajaxConfig
   */
  async request(ajaxConfig: AjaxConfig): Promise<any> {
    const config = { ...defaultConfig, ...ajaxConfig }
    const resp = await fetch(config.url, {
      ...omit(config, 'data'),
      method: config.method,
      body: config.data instanceof FormData ? config.data : JSON.stringify(config.data),
    })
    if (!resp.ok) {
      // console.log(resp.status)
      throw new Error((await resp.json()).error)
    }
    switch (config.responseType) {
      case 'json':
        return await resp.json()
      case 'arraybuffer':
        return await resp.arrayBuffer()
      case 'blob':
        return await resp.blob()
      case 'text':
        return await resp.text()
      default:
        throw new Error(`Unsupported responseType: ${config.responseType}`)
    }
  }

  baseUrl(url: string, param?: object): string {
    const query = stringify({ ...param, token: this.config.token }, { arrayFormat: 'comma' })
    const baseUrl = this.config.baseUrl.endsWith('/')
      ? this.config.baseUrl.slice(0, this.config.baseUrl.length - 1)
      : this.config.baseUrl
    return `${baseUrl}${url}?${query}`
  }

  get<R>(url: string, data?: any, config?: Omit<AjaxConfig, 'url' | 'data' | 'method'>): Promise<R> {
    return this.request({
      url: this.baseUrl(url, data),
      ...config,
      method: 'get',
    })
  }

  post<R>(url: string, data?: any, config?: Omit<AjaxConfig, 'url' | 'data' | 'method'>): Promise<R> {
    return this.request({
      url: this.baseUrl(url),
      data,
      ...config,
      method: 'post',
    })
  }

  put<R>(url: string, data?: any, config?: Omit<AjaxConfig, 'url' | 'data' | 'method'>): Promise<R> {
    return this.request({
      url: this.baseUrl(url),
      data,
      ...config,
      method: 'put',
    })
  }

  delete<R>(url: string, data?: any, config?: Omit<AjaxConfig, 'url' | 'data' | 'method'>): Promise<R> {
    return this.request({
      url: this.baseUrl(url),
      data,
      ...config,
      method: 'delete',
      responseType: 'text',
    })
  }

  async postFormData<T>(url: string, method: 'post' | 'put', data: object): Promise<T> {
    const fd = new FormData()
    Object.entries(data).forEach(([k, v]) => {
      if (k && v) {
        fd.append(k, v)
      }
    })
    return await this.request({ url: this.baseUrl(url), method: method, data: fd })
  }
}
