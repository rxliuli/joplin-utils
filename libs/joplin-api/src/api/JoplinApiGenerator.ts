import { Config } from '../util/config'
import { NoteApi } from './NoteApi'
import { Ajax } from '../util/ajax'
import { NoteActionApi } from './NoteActionApi'
import { NoteExtApi } from './NoteExtApi'
import { ResourceApi } from './ResourceApi'
import { FolderExtApi } from './FolderExtApi'
import { ResourceActionApi } from './ResourceActionApi'
import { SearchApi } from './SearchApi'
import { TagApi } from './TagApi'
import { FolderApi } from './FolderApi'
import { JoplinApi } from './JoplinApi'
import { ClassUtil } from '@liuli-util/object'

export class JoplinApiGenerator {
  private config: Config = new Config()

  set token(token: string) {
    this.config.token = token
  }

  set port(port: number) {
    this.config.port = port
  }

  readonly ajax = new Ajax(this.config)
  readonly folderApi = new FolderApi(this.ajax)
  readonly folderExtApi = new FolderExtApi(this.ajax)
  readonly joplinApi = new JoplinApi(this.ajax)
  readonly noteActionApi = new NoteActionApi(this.ajax)
  readonly noteApi = new NoteApi(this.ajax)
  readonly noteExtApi = new NoteExtApi(this.ajax)
  readonly resourceActionApi = new ResourceActionApi(this.ajax)
  readonly resourceApi = new ResourceApi(this.ajax)
  readonly searchApi = new SearchApi(this.ajax)
  readonly tagApi = new TagApi(this.ajax)
}

const joplinApiGenerator = new JoplinApiGenerator()
Object.entries(joplinApiGenerator).forEach(([k, v]) => {
  Reflect.set(joplinApiGenerator, k, ClassUtil.bindMethodThis(v))
})

export const {
  ajax,
  folderApi,
  folderExtApi,
  joplinApi,
  noteActionApi,
  noteApi,
  noteExtApi,
  resourceActionApi,
  resourceApi,
  searchApi,
  tagApi,
} = joplinApiGenerator

/**
 * 兼容之前的类型
 */
export const config: Pick<JoplinApiGenerator, 'token' | 'port'> =
  joplinApiGenerator

/**
 * @deprecated 已废弃，请使用 {@link noteActionApi}
 */
export const { noteActionApi: actionApi } = joplinApiGenerator
