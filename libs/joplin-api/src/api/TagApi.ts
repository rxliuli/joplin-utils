import { TagProperties } from '../modal/TagProperties'
import { TagGetRes } from '../modal/TagGetRes'
import { NoteGetRes } from '../modal/NoteGetRes'
import { NoteTagRelated } from '../modal/NoteTagRelated'
import { PageParam, PageRes } from '../modal/PageData'
import { FieldsParam } from '../modal/FieldsParam'
import { Ajax } from '../util/ajax'

export class TagApi {
  constructor(private ajax: Ajax) {}

  async list(): Promise<PageRes<TagGetRes>>
  async list<K extends keyof TagProperties>(
    pageParam: PageParam<TagProperties> & FieldsParam<K>,
  ): Promise<PageRes<Pick<TagProperties, K>>>
  async list(pageParam?: PageParam<TagProperties>) {
    return await this.ajax.get<PageRes<TagGetRes>>('/tags', pageParam)
  }

  async get(id: string) {
    return await this.ajax.get<TagGetRes>(`/tags/${id}`)
  }

  async create(param: Pick<TagProperties, 'title'>) {
    return await this.ajax.post<TagGetRes>('/tags', param)
  }

  async update(param: Pick<TagProperties, 'id' | 'title'>) {
    const { id, ...others } = param
    return await this.ajax.post<TagGetRes>(`/tags/${id}`, others)
  }

  async remove(id: string) {
    return await this.ajax.delete<TagProperties>(`/tags/${id}`)
  }

  async notesByTagId({
    id,
    ...others
  }: { id: string } & PageParam<TagProperties>) {
    return await this.ajax.get<PageRes<NoteGetRes[]>>(
      `/tags/${id}/notes`,
      others,
    )
  }

  /**
   * Post a note to this endpoint to add the tag to the note. The note data must at least contain an ID property (all other properties will be ignored).
   * @param tagId
   * @param noteId
   */
  async addTagByNoteId(tagId: string, noteId: string) {
    return await this.ajax.post<NoteTagRelated | null>(
      `/tags/${tagId}/notes/`,
      {
        id: noteId,
      },
    )
  }

  async removeTagByNoteId(tagId: string, noteId: string) {
    return await this.ajax.delete<void>(`/tags/${tagId}/notes/${noteId}`)
  }
}
