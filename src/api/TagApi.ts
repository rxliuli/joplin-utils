import axios from 'axios'
import { TagProperties } from '../modal/TagProperties'
import { ApiUtil } from '../util/ApiUtil'
import { TagGetRes } from '../modal/TagGetRes'
import { NoteGetRes } from '../modal/NoteGetRes'
import { NoteTagRelated } from '../modal/NoteTagRelated'

class TagApi {
  async list() {
    return (await axios.get<TagGetRes[]>(ApiUtil.baseUrl('/tags'))).data
  }
  async get(id: string) {
    return (await axios.get<TagGetRes>(ApiUtil.baseUrl(`/tags/${id}`))).data
  }
  async create(param: Pick<TagProperties, 'title'>) {
    return (await axios.post<TagGetRes>(ApiUtil.baseUrl('/tags'), param)).data
  }
  async update(param: Pick<TagProperties, 'id' | 'title'>) {
    const { id, ...others } = param
    return (await axios.post<TagGetRes>(ApiUtil.baseUrl(`/tags/${id}`), others))
      .data
  }
  async remove(id: string) {
    return (await axios.delete<TagProperties>(ApiUtil.baseUrl(`/tags/${id}`)))
      .data
  }

  async notesByTagId(id: string) {
    return (await axios.get<NoteGetRes[]>(ApiUtil.baseUrl(`/tags/${id}/notes`)))
      .data
  }

  /**
   * Post a note to this endpoint to add the tag to the note. The note data must at least contain an ID property (all other properties will be ignored).
   * @param tagId
   * @param noteId
   */
  async addTagByNoteId(tagId: string, noteId: string) {
    return (
      await axios.post<NoteTagRelated | null>(
        ApiUtil.baseUrl(`/tags/${tagId}/notes/`),
        {
          id: noteId,
        },
      )
    ).data
  }

  async removeTagByNoteId(tagId: string, noteId: string) {
    return (
      await axios.delete<void>(
        ApiUtil.baseUrl(`/tags/${tagId}/notes/${noteId}`),
      )
    ).data
  }
}

export const tagApi = new TagApi()
