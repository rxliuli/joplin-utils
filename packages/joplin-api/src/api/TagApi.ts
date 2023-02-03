import { TagProperties } from '../model/TagProperties'
import { TagGetRes } from '../model/TagGetRes'
import { NoteGetRes } from '../model/NoteGetRes'
import { NoteTagRelated } from '../model/NoteTagRelated'
import { PageParam, PageRes } from '../model/PageData'
import { FieldsParam } from '../model/FieldsParam'
import { Ajax } from '../util/ajax'

export class TagApi {
  constructor(private ajax: Ajax) {}

  async list(): Promise<PageRes<TagGetRes>>
  async list<K extends keyof TagProperties>(
    pageParam: PageParam<TagProperties> & FieldsParam<K>,
  ): Promise<PageRes<Pick<TagProperties, K>>>
  async list(pageParam?: PageParam<TagProperties>): Promise<PageRes<TagGetRes>> {
    return await this.ajax.get<PageRes<TagGetRes>>('/tags', pageParam)
  }

  async get(id: string): Promise<TagGetRes> {
    return await this.ajax.get<TagGetRes>(`/tags/${id}`)
  }

  async create(param: Pick<TagProperties, 'title'>): Promise<TagGetRes> {
    return await this.ajax.post<TagGetRes>('/tags', param)
  }

  async update(param: Pick<TagProperties, 'id' | 'title'>): Promise<TagGetRes> {
    const { id, ...others } = param
    return await this.ajax.post<TagGetRes>(`/tags/${id}`, others)
  }

  async remove(id: string): Promise<TagProperties> {
    return await this.ajax.delete<TagProperties>(`/tags/${id}`)
  }

  async notesByTagId({ id, ...others }: { id: string } & PageParam<TagProperties>): Promise<PageRes<NoteGetRes>> {
    return await this.ajax.get<PageRes<NoteGetRes>>(`/tags/${id}/notes`, others)
  }

  /**
   * Post a note to this endpoint to add the tag to the note. The note data must at least contain an ID property (all other properties will be ignored).
   * @param tagId
   * @param noteId
   */
  async addTagByNoteId(tagId: string, noteId: string): Promise<NoteTagRelated | null> {
    return await this.ajax.post<NoteTagRelated | null>(`/tags/${tagId}/notes/`, {
      id: noteId,
    })
  }

  async removeTagByNoteId(tagId: string, noteId: string): Promise<void> {
    return await this.ajax.delete<void>(`/tags/${tagId}/notes/${noteId}`)
  }
}
