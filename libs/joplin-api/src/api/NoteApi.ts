import { NoteGetRes } from '../model/NoteGetRes'
import { NoteProperties } from '../model/NoteProperties'
import { TagGetRes } from '../model/TagGetRes'
import { NoteCreateRes } from '../model/NoteCreateRes'
import { NoteUpdateRes } from '../model/NoteUpdateRes'
import { ResourceGetRes } from '../model/ResourceGetRes'
import { Ajax } from '../util/ajax'
import { PageParam, PageRes } from '../model/PageData'
import { FieldsParam } from '../model/FieldsParam'
import { RequiredField } from '../types/RequiredFiled'
// noinspection ES6PreferShortImport
import { PageUtil } from '../util/PageUtil'
import { CommonType } from '../model/CommonType'
import { ResourceProperties } from '../model/ResourceProperties'

/**
 * TODO 可以考虑使用 fields() 方法设置然后产生一个新的 Api 实例
 */
export class NoteApi {
  constructor(private ajax: Ajax) {}

  async list(): Promise<PageRes<NoteGetRes>>
  async list<K extends keyof NoteProperties = keyof NoteGetRes>(
    pageParam: PageParam<NoteProperties> & FieldsParam<K>,
  ): Promise<PageRes<Pick<NoteProperties, K>>>
  async list(pageParam?: PageParam<NoteProperties> & FieldsParam<keyof NoteGetRes>): Promise<PageRes<NoteGetRes>> {
    return this.ajax.get<PageRes<NoteGetRes>>('/notes', pageParam)
  }

  async get(id: string): Promise<NoteGetRes & CommonType>
  async get<K extends keyof NoteProperties = keyof NoteGetRes>(
    id: string,
    fields?: K[],
  ): Promise<Pick<NoteProperties, K> & CommonType>
  async get(id: string, fields?: (keyof NoteGetRes)[]): Promise<NoteGetRes & CommonType> {
    return this.ajax.get<NoteGetRes & CommonType>(`/notes/${id}`, { fields })
  }

  async create(param: RequiredField<Partial<NoteProperties>, 'title'>): Promise<NoteCreateRes> {
    return this.ajax.post<NoteCreateRes>('/notes', param)
  }

  async update(param: RequiredField<Partial<NoteProperties>, 'id'>): Promise<NoteUpdateRes> {
    const { id, ...others } = param
    return await this.ajax.put<NoteUpdateRes>(`/notes/${id}`, others)
  }

  async remove(id: string): Promise<void> {
    return this.ajax.delete(`/notes/${id}`)
  }

  tagsById(id: string): Promise<TagGetRes[]> {
    return PageUtil.pageToAllList(
      ({ id, ...others }) => this.ajax.get<PageRes<TagGetRes>>(`/notes/${id}/tags`, { ...others }),
      { id } as PageParam<TagGetRes> & { id: string },
    )
  }

  resourcesById(id: string): Promise<ResourceGetRes[]>
  resourcesById<K extends keyof ResourceProperties = keyof Omit<ResourceGetRes, 'type_'>>(
    id: string,
    fields: K[],
  ): Promise<(Pick<ResourceProperties, K> & CommonType)[]>
  async resourcesById(id: string, fields: string[] = ['id', 'title']): Promise<ResourceGetRes[]> {
    return PageUtil.pageToAllList(
      ({ id, ...others }) =>
        this.ajax.get<PageRes<ResourceGetRes>>(`/notes/${id}/resources`, {
          fields,
          ...others,
        } as FieldsParam<keyof ResourceGetRes>),
      { id } as PageParam<ResourceGetRes> & { id: string },
    )
  }
}
