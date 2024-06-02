// https://github.com/microsoft/kiota
import { FolderApi } from './FolderApi'
import { Ajax, Method } from '../util/ajax'
import { omit } from 'lodash-es'
import { FolderExtApi } from './FolderExtApi'
import { JoplinApi } from './JoplinApi'
import { NoteActionApi } from './NoteActionApi'
import { NoteApi } from './NoteApi'
import { NoteExtApi } from './NoteExtApi'
import { ResourceActionApi } from './ResourceActionApi'
import { ResourceApi } from './ResourceApi'
import { SearchApi } from './SearchApi'
import { TagApi } from './TagApi'
import { EventApi } from './EventApi'
import joplin from 'joplin-plugin-api'

export type ResponseType = 'arraybuffer' | 'blob' | 'json' | 'text'

export interface RequestInfo {
  url: string
  method?: Method
  data?: any
  params?: Record<string, string>
  responseType?: ResponseType
  headers?: Record<string, string>
}

export interface AuthProvider {
  authenticate(info: RequestInfo): Promise<void>
}

export interface RequestAdapter {
  send<T>(requestInfo: RequestInfo): Promise<T>
}

export class FetchAdapter implements RequestAdapter {
  constructor(private authProvider: AuthProvider) {}
  async send<T>(requestInfo: RequestInfo): Promise<T> {
    const defaultConfig: Partial<RequestInfo> = Object.freeze({
      method: 'get',
      data: undefined,
      headers: {},
      responseType: 'json',
    })
    const config = { ...defaultConfig, ...requestInfo }
    await this.authProvider.authenticate(config)
    const resp = await fetch(config.url, {
      ...omit(config, 'data'),
      method: config.method,
      body: config.data instanceof FormData ? config.data : JSON.stringify(config.data),
    })
    if (!resp.ok) {
      throw new Error('status: ' + resp.status + ', url: ' + config.url + '\nstatusText: ' + (await resp.text()))
    }
    switch (config.responseType) {
      case 'json':
        return await resp.json()
      case 'arraybuffer':
        return (await resp.arrayBuffer()) as any
      case 'blob':
        return (await resp.blob()) as any
      case 'text':
        return (await resp.text()) as any
      default:
        throw new Error(`Unsupported responseType: ${config.responseType}`)
    }
  }
}

export class JoplinPluginAdapter implements RequestAdapter {
  constructor() {}
  async send<T>(info: RequestInfo): Promise<T> {
    const u = new URL(info.url)
    u.searchParams.delete('token')
    const parmas = [...u.searchParams.entries()].reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
    const r = await joplin.data[info.method ?? 'get'](
      u.pathname.split('/').filter((it) => it.length > 0),
      { ...info.data, ...parmas },
    )
    if (!info.responseType || info.responseType === 'json') {
      return r as any
    }
    if (info.responseType === 'text') {
      return r as any
    }
    if (info.responseType === 'blob') {
      const { body, contentType } = r as {
        type: 'attachment'
        body: Uint8Array
        contentType: string
        attachmentFilename: string
      }
      return new Blob([body], { type: contentType }) as any
    }
    throw new Error(`Unsupported responseType: ${info.responseType}`)
  }
}

export class JoplinDataApiAuthProvider implements AuthProvider {
  constructor(
    private config: {
      baseUrl?: string
      token: string
    },
  ) {
    this.config.baseUrl = this.config.baseUrl ?? 'http://localhost:41184'
  }
  async authenticate(info: RequestInfo): Promise<void> {
    const query = new URLSearchParams(Object.entries({ ...info.params, token: this.config.token })).toString()
    const baseUrl = this.config.baseUrl!.endsWith('/')
      ? this.config.baseUrl!.slice(0, this.config.baseUrl!.length - 1)
      : this.config.baseUrl
    info.url = `${baseUrl}${info.url}?${query}`
  }
}

export interface Api {
  folder: FolderApi
  folderExt: FolderExtApi
  joplin: JoplinApi
  noteAction: NoteActionApi
  note: NoteApi
  noteExt: NoteExtApi
  resourceAction: ResourceActionApi
  resource: ResourceApi
  search: SearchApi
  tag: TagApi
  event: EventApi
}

export type ApiConfig =
  | {
      type: 'rest'
      baseUrl?: string
      token: string
    }
  | {
      type: 'plugin'
    }

export function joplinDataApi(options: ApiConfig): Api {
  const adapter =
    options.type === 'plugin' ? new JoplinPluginAdapter() : new FetchAdapter(new JoplinDataApiAuthProvider(options))

  const ajax = new Ajax(adapter)
  return {
    folder: new FolderApi(ajax),
    folderExt: new FolderExtApi(ajax),
    joplin: new JoplinApi(ajax),
    noteAction: new NoteActionApi(ajax),
    note: new NoteApi(ajax),
    noteExt: new NoteExtApi(ajax),
    resourceAction: new ResourceActionApi(ajax),
    resource: new ResourceApi(ajax),
    search: new SearchApi(ajax),
    tag: new TagApi(ajax),
    event: new EventApi(ajax),
  }
}
