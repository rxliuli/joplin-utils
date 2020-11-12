import { TagProperties } from '../modal/TagProperties'
import { TagGetRes } from '../modal/TagGetRes'
import { NoteGetRes } from '../modal/NoteGetRes'
import { NoteTagRelated } from '../modal/NoteTagRelated'
import { ajax } from '../util/ajax'
import { PageParam, PageRes } from '../modal/PageData'
import { FieldsParam } from '../modal/FieldsParam'

class TagApi {
  async list(): Promise<PageRes<TagGetRes>>
  async list<K extends keyof TagGetRes>(
    pageParam: PageParam<TagGetRes> & FieldsParam<K>,
  ): Promise<PageRes<Pick<TagGetRes, K>>>
  async list(pageParam?: PageParam<TagGetRes>) {
    return await ajax.get<PageRes<TagGetRes>>('/tags', pageParam)
  }
  async get(id: string) {
    return await ajax.get<TagGetRes>(`/tags/${id}`)
  }
  async create(param: Pick<TagProperties, 'title'>) {
    return await ajax.post<TagGetRes>('/tags', param)
  }
  async update(param: Pick<TagProperties, 'id' | 'title'>) {
    const { id, ...others } = param
    return await ajax.post<TagGetRes>(`/tags/${id}`, others)
  }
  async remove(id: string) {
    return await ajax.delete<TagProperties>(`/tags/${id}`)
  }

  async notesByTagId({
    id,
    ...others
  }: { id: string } & PageParam<TagProperties>) {
    return await ajax.get<PageRes<NoteGetRes[]>>(`/tags/${id}/notes`, others)
  }

  /**
   * Post a note to this endpoint to add the tag to the note. The note data must at least contain an ID property (all other properties will be ignored).
   * @param tagId
   * @param noteId
   */
  async addTagByNoteId(tagId: string, noteId: string) {
    return await ajax.post<NoteTagRelated | null>(`/tags/${tagId}/notes/`, {
      id: noteId,
    })
  }

  async removeTagByNoteId(tagId: string, noteId: string) {
    return await ajax.delete<void>(`/tags/${tagId}/notes/${noteId}`)
  }
}

export const tagApi = new TagApi()
