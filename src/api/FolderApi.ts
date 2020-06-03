import axios from 'axios'
import { ApiUtil } from '../util/ApiUtil'
import { FolderProperties } from '../modal/FolderProperties'
import { FolderListRes } from '../modal/FolderListRes'
import { FolderGetRes } from '../modal/FolderGetRes'
import { FolderCreateRes } from '../modal/FolderCreateRes'
import { FolderUpdateRes } from '../modal/FolderUpdateRes'
import { NoteGetRes } from '../modal/NoteGetRes'

class FolderApi {
  async list() {
    return (await axios.get<FolderListRes[]>(ApiUtil.baseUrl('/folders'))).data
  }
  async get(id: string) {
    return (await axios.get<FolderGetRes>(ApiUtil.baseUrl(`/folders/${id}`)))
      .data
  }
  async create(param: Pick<FolderProperties, 'title' | 'parent_id'>) {
    return (
      await axios.post<FolderCreateRes>(ApiUtil.baseUrl(`/folders`), param)
    ).data
  }
  async update(param: Pick<FolderProperties, 'id' | 'title'>) {
    const { id, ...others } = param
    return (
      await axios.put<FolderUpdateRes>(
        ApiUtil.baseUrl(`/folders/${id}`),
        others,
      )
    ).data
  }
  async remove(id: string) {
    return (await axios.delete<string>(ApiUtil.baseUrl(`/folders/${id}`))).data
  }
  async notesByFolderId(id: string) {
    return (
      await axios.get<NoteGetRes[]>(ApiUtil.baseUrl(`/folders/${id}/notes`))
    ).data
  }
}

export const folderApi = new FolderApi()
