import { FolderProperties } from '../modal/FolderProperties'
import { FolderListRes } from '../modal/FolderListRes'
import { FolderGetRes } from '../modal/FolderGetRes'
import { FolderCreateRes } from '../modal/FolderCreateRes'
import { FolderUpdateRes } from '../modal/FolderUpdateRes'
import { NoteGetRes } from '../modal/NoteGetRes'
import { RequiredField } from 'liuli-types'
import { ajax } from '../util/ajax'

class FolderApi {
  async list() {
    return ajax.get<FolderListRes[]>('/folders')
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
    return ajax.get<NoteGetRes[]>(`/folders/${id}/notes`)
  }
}

export const folderApi = new FolderApi()
