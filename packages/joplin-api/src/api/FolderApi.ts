import { FolderProperties } from '../model/FolderProperties'
import { FolderListRes } from '../model/FolderListRes'
import { FolderGetRes } from '../model/FolderGetRes'
import { FolderCreateRes } from '../model/FolderCreateRes'
import { FolderUpdateRes } from '../model/FolderUpdateRes'
import { NoteGetRes } from '../model/NoteGetRes'
import { Ajax } from '../util/ajax'
import { PageParam, PageRes } from '../model/PageData'
import { FieldsParam } from '../model/FieldsParam'
import { FolderListRecursionGetTree } from '../model/FolderListRecursionGetTree'
import { RequiredField } from '../types/RequiredFiled'
import { FolderListAllRes } from '../model/FolderListAllRes'
import { NoteProperties } from '../model/NoteProperties'
// noinspection ES6PreferShortImport
import { PageUtil } from '../util/PageUtil'

/**
 * 目录相关 api
 */
export class FolderApi {
  constructor(private ajax: Ajax) {}

  async list(): Promise<PageRes<FolderListRes>>
  async list<K extends keyof FolderProperties = keyof FolderListRes>(
    pageParam: PageParam<FolderProperties> & FieldsParam<K>,
  ): Promise<PageRes<Pick<FolderProperties, K>>>
  async list(pageParam?: PageParam<FolderProperties> & FieldsParam<keyof FolderProperties>) {
    return this.ajax.get<PageRes<FolderListRes>>('/folders', pageParam)
  }

  /**
   * 使用特殊的 as_tree 参数来恢复旧的行为
   */
  async listAll(): Promise<FolderListAllRes[]> {
    return this.ajax.get<FolderListAllRes[]>('/folders', {
      as_tree: 1,
    } as FolderListRecursionGetTree)
  }

  async get(id: string): Promise<FolderGetRes> {
    return this.ajax.get<FolderGetRes>(`/folders/${id}`)
  }

  async create(param: RequiredField<Partial<FolderProperties>, 'title'>): Promise<FolderCreateRes> {
    return this.ajax.post<FolderCreateRes>(`/folders`, param)
  }

  async update(param: RequiredField<Partial<FolderProperties>, 'id'>): Promise<FolderUpdateRes> {
    const { id, ...others } = param
    return this.ajax.put<FolderUpdateRes>(`/folders/${id}`, others)
  }

  async remove(id: string): Promise<string> {
    return this.ajax.delete<string>(`/folders/${id}`)
  }

  async notesByFolderId(id: string): Promise<NoteGetRes[]>
  async notesByFolderId<K extends keyof NoteProperties = keyof NoteGetRes>(
    id: string,
    fields: K[],
  ): Promise<Pick<NoteProperties, K>[]>
  async notesByFolderId<K extends keyof NoteProperties = keyof NoteGetRes>(
    id: string,
    fields?: K[],
  ): Promise<Pick<NoteProperties, K>[]> {
    return await PageUtil.pageToAllList(
      ({ id, ...others }) => this.ajax.get<PageRes<Pick<NoteProperties, K>>>(`/folders/${id}/notes`, others),
      { id, fields } as PageParam<Pick<NoteProperties, K>> & { id: string },
    )
  }
}
