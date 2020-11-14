import { FolderProperties } from '../modal/FolderProperties'
import { FolderListRes } from '../modal/FolderListRes'
import { FolderGetRes } from '../modal/FolderGetRes'
import { FolderCreateRes } from '../modal/FolderCreateRes'
import { FolderUpdateRes } from '../modal/FolderUpdateRes'
import { NoteGetRes } from '../modal/NoteGetRes'
import { ajax } from '../util/ajax'
import { PageParam, PageRes } from '../modal/PageData'
import { FieldsParam } from '../modal/FieldsParam'
import { FolderListRecursionGetTree } from '../modal/FolderListRecursionGetTree'
import { RequiredField } from '../types/RequiredFiled'
import { PageUtil } from '..'

/**
 * 目录相关 api
 */
class FolderApi {
  async list(): Promise<PageRes<FolderListRes>>
  async list<K extends keyof FolderProperties = keyof FolderListRes>(
    pageParam: PageParam<FolderProperties> & FieldsParam<K>,
  ): Promise<PageRes<Pick<FolderProperties, K>>>
  async list(
    pageParam?: PageParam<FolderProperties> &
      FieldsParam<keyof FolderProperties>,
  ) {
    return ajax.get<PageRes<FolderListRes>>('/folders', pageParam)
  }

  /**
   * 使用特殊的 as_tree 参数来恢复旧的行为
   */
  async listAll(): Promise<FolderListRes[]> {
    return ajax.get<FolderListRes[]>('/folders', {
      as_tree: 1,
    } as FolderListRecursionGetTree)
  }

  async get(id: string) {
    return ajax.get<FolderGetRes>(`/folders/${id}`)
  }

  async create(param: RequiredField<Partial<FolderProperties>, 'title'>) {
    return ajax.post<FolderCreateRes>(`/folders`, param)
  }

  async update(param: RequiredField<Partial<FolderProperties>, 'id'>) {
    const { id, ...others } = param
    return ajax.put<FolderUpdateRes>(`/folders/${id}`, others)
  }

  async remove(id: string) {
    return ajax.delete<string>(`/folders/${id}`)
  }

  async notesByFolderId(id: string) {
    return PageUtil.pageToAllList(
      ({ id, ...others }) =>
        ajax.get<PageRes<NoteGetRes[]>>(`/folders/${id}/notes`, others),
      { id } as PageParam<NoteGetRes> & { id: string },
    )
  }
}

export const folderApi = new FolderApi();
