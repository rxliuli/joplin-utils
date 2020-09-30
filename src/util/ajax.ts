import axios from 'axios'
import { ApiUtil } from './ApiUtil'

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

interface Config {
  url: string
  method?: Method
  data?: any
  headers?: object
  responseType?: ResponseType
}

type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T]

type FlipOptional<T> = Required<Pick<T, OptionalKeys<T>>> &
  Partial<Omit<T, OptionalKeys<T>>> extends infer O
  ? { [K in keyof O]: O[K] }
  : never

const defaultConfig: FlipOptional<Config> = {
  method: 'get',
  data: undefined,
  headers: {},
  responseType: 'json',
}

/**
 * 封装 ajax 请求
 * @param config
 */
export async function request<R>(config: Config) {
  const mergeConfig = { ...defaultConfig, ...config }
  return (
    await axios.request({
      url: mergeConfig.url,
      method: mergeConfig.method,
      data: mergeConfig.data,
      headers: mergeConfig.headers,
      responseType: mergeConfig.responseType,
    })
  ).data as R
}

class Ajax {
  get<R>(
    url: string,
    data?: any,
    config?: Omit<Config, 'url' | 'data' | 'method'>,
  ) {
    return request<R>({
      url: ApiUtil.baseUrl(url, data),
      ...config,
      method: 'get',
    })
  }
  post<R>(
    url: string,
    data?: any,
    config?: Omit<Config, 'url' | 'data' | 'method'>,
  ) {
    return request<R>({
      url: ApiUtil.baseUrl(url),
      data,
      ...config,
      method: 'post',
    })
  }
  put<R>(
    url: string,
    data?: any,
    config?: Omit<Config, 'url' | 'data' | 'method'>,
  ) {
    return request<R>({
      url: ApiUtil.baseUrl(url),
      data,
      ...config,
      method: 'put',
    })
  }
  delete<R>(
    url: string,
    data?: any,
    config?: Omit<Config, 'url' | 'data' | 'method'>,
  ) {
    return request<R>({
      url: ApiUtil.baseUrl(url),
      data,
      ...config,
      method: 'delete',
    })
  }
}

export const ajax = new Ajax()
