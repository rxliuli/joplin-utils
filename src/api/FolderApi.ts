import axios from 'axios'
import { ApiUtil } from '../util/ApiUtil'
import { FolderProperties } from '../modal/FolderProperties'
import { NoteProperties } from '../modal/NoteProperties'

class FolderApi {
  async list() {
    return (await axios.get<FolderProperties[]>(ApiUtil.baseUrl('/folders')))
      .data
  }
  async get(id: string) {
    return (
      await axios.get<FolderProperties>(ApiUtil.baseUrl(`/folders/${id}`))
    ).data
  }
  async notesByFolderId(id: string) {
    return (
      await axios.get<NoteProperties[]>(ApiUtil.baseUrl(`/folders/${id}/notes`))
    ).data
  }
  async create(param: Pick<FolderProperties, 'title' | 'parent_id'>) {
    return (await axios.post(ApiUtil.baseUrl(`/folders`), param)).data
  }
  async update(param: Pick<FolderProperties, 'id' | 'title'>) {
    const { id, ...others } = param
    return (await axios.put(ApiUtil.baseUrl(`/folders/${id}`), others)).data
  }
  async remove(id: string) {
    return (await axios.delete(ApiUtil.baseUrl(`/folders/${id}`))).data
  }
}

export const joplinApi = new FolderApi()
