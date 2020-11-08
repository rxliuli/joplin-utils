import { NoteGetRes } from '../modal/NoteGetRes'
import { NoteProperties } from '../modal/NoteProperties'
import { TagGetRes } from '../modal/TagGetRes'
import { NoteCreateRes } from '../modal/NoteCreateRes'
import { NoteUpdateRes } from '../modal/NoteUpdateRes'
import { ResourceGetRes } from '../modal/ResourceGetRes'
import { ajax } from '../util/ajax'
import { PageParam, PageRes } from '../modal/PageData'
import { FieldsParam } from '../modal/FieldsParam'
import { ResourceProperties } from '../modal/ResourceProperties'
import { RequiredField } from '../types/RequiredFiled'

/**
 * TODO 可以考虑使用 fields() 方法设置然后产生一个新的 Api 实例
 */
class NoteApi {
  async list(): Promise<PageRes<NoteGetRes>>
  /**
   * TODO 此处的类型有问题，默认应该是 NoteGetRes
   * @param pageParam
   */
  async list<K extends keyof NoteProperties>(
    pageParam: PageParam<NoteProperties> & FieldsParam<K>,
  ): Promise<PageRes<Pick<NoteProperties, K>>>
  async list(
    pageParam?: PageParam<NoteProperties> & FieldsParam<keyof NoteProperties>,
  ) {
    return ajax.get<PageRes<NoteGetRes>>('/notes', pageParam)
  }
  async get(id: string): Promise<NoteGetRes>
  async get<K extends keyof NoteProperties>(
    id: string,
    fields?: K[],
  ): Promise<Pick<NoteProperties, K>>
  async get(id: string, fields?: (keyof NoteProperties)[]) {
    return ajax.get<NoteGetRes>(`/notes/${id}`, { fields })
  }
  async create(param: RequiredField<Partial<NoteProperties>, 'title'>) {
    return ajax.post<NoteCreateRes>('/notes', param)
  }
  async update(param: RequiredField<Partial<NoteProperties>, 'id'>) {
    const { id, ...others } = param
    return await ajax.put<NoteUpdateRes>(`/notes/${id}`, others)
  }

  /**
   * @param id
   * @throws Error: Request failed with status code 404
   */
  async remove(id: string) {
    return ajax.delete(`/notes/${id}`)
  }

  /**
   * TODO 目前 tags 这里也返回了分页数据，但应该是个错误
   * @param id
   */
  async tagsById(id: string) {
    return ajax.get<TagGetRes[]>(`/notes/${id}/tags`)
  }
  /**
   * TODO 1. 目前 tags 这里也返回了分页数据，但应该是个错误
   * TODO 2. 目前这里不指定 fields 时会发生错误，这应该是个 bug https://discourse.joplinapp.org/t/pre-release-1-4-is-now-available-for-testing/12247/14?u=rxliuli
   * @param id
   */
  async resourcesById(id: string) {
    return ajax.get<ResourceGetRes[]>(`/notes/${id}/resources`, {
      fields: ['id', 'title'],
    } as FieldsParam<keyof ResourceProperties>)
  }
}

export const noteApi = new NoteApi()
