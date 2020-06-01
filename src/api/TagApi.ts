import axios from 'axios'
import { TagProperties } from '../modal/TagProperties'
import { ApiUtil } from '../util/ApiUtil'

class TagApi {
  async list() {
    return (await axios.get<TagProperties[]>(ApiUtil.baseUrl('/tags'))).data
  }
  async get(id: string) {
    return (await axios.get<TagProperties>(ApiUtil.baseUrl(`/tags/${id}`))).data
  }
  async create(param: Pick<TagProperties, 'title'>) {
    return (await axios.post(ApiUtil.baseUrl('/tags'), param)).data
  }
  async update(param: Pick<TagProperties, 'id' | 'title'>) {
    const { id, ...others } = param
    return (await axios.post(ApiUtil.baseUrl(`/tags/${id}`), others)).data
  }
  async remove(id: string) {
    return (await axios.delete<TagProperties>(ApiUtil.baseUrl(`/tags/${id}`)))
      .data
  }

  async notesByTagId(id: string) {
    return (await axios.get(ApiUtil.baseUrl(`/tags/${id}/notes`))).data
  }

  /**
   * Post a note to this endpoint to add the tag to the note. The note data must at least contain an ID property (all other properties will be ignored).
   * @param id
   */
  async updateNotesByTagId(id: string) {
    return (await axios.post(ApiUtil.baseUrl(`/tags/${id}/notes`))).data
  }

  async removeNotesByNoteId(tagId: string, noteId: string) {
    return (
      await axios.delete(ApiUtil.baseUrl(`/tags/${tagId}/notes/${noteId}`))
    ).data
  }
}

export const tagApi = new TagApi()
