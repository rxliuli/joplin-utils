import { RequestAdapter } from '../api/adapter'

export type Method = 'get' | 'delete' | 'post' | 'put'

export type ResponseType = 'arraybuffer' | 'blob' | 'json' | 'text'

export interface AjaxConfig {
  url: string
  method?: Method
  params?: any
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
  params: undefined,
  data: undefined,
  headers: {},
  responseType: 'json',
})

export class Ajax {
  constructor(private readonly adapter: RequestAdapter) {}

  /**
   * 封装 ajax 请求
   * @param ajaxConfig
   */
  async request(ajaxConfig: AjaxConfig): Promise<any> {
    return this.adapter.send(ajaxConfig)
  }

  get<R>(url: string, data?: any, config?: Omit<AjaxConfig, 'url' | 'data' | 'method'>): Promise<R> {
    return this.request({
      url,
      params: data,
      ...config,
      method: 'get',
    })
  }

  post<R>(url: string, data?: any, config?: Omit<AjaxConfig, 'url' | 'data' | 'method'>): Promise<R> {
    return this.request({
      url,
      data,
      ...config,
      method: 'post',
    })
  }

  put<R>(url: string, data?: any, config?: Omit<AjaxConfig, 'url' | 'data' | 'method'>): Promise<R> {
    return this.request({
      url,
      data,
      ...config,
      method: 'put',
    })
  }

  delete<R>(url: string, data?: any, config?: Omit<AjaxConfig, 'url' | 'data' | 'method'>): Promise<R> {
    return this.request({
      url,
      data,
      ...config,
      method: 'delete',
      responseType: 'text',
    })
  }

  async postFormData<T>(
    url: string,
    method: 'post' | 'put',
    data: {
      props: string
      data?: Blob
      filename?: string
    },
  ): Promise<T> {
    const fd = new FormData()
    fd.append('props', data.props)
    if (data.data) {
      fd.append('data', data.data, data.filename)
    }
    return await this.request({ url, method: method, data: fd })
  }
}
