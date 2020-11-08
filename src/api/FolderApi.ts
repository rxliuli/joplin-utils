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

/**
 * 目录相关 api
 * TODO 需要添加新的 api
 * listAll: 递归获取所有目录及笔记
 * move: 移动目录的父目录，相比于使用 update 直接修改 parent_id 会检查是否为父级 id，如果是则不允许修改
 */
class FolderApi {
  async list(): Promise<PageRes<FolderListRes>>
  async list<K extends keyof FolderProperties>(
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
    return ajax.get<PageRes<NoteGetRes[]>>(`/folders/${id}/notes`)
  }
}

export const folderApi = new FolderApi()
