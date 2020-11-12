import { NoteGetRes } from '../modal/NoteGetRes'
import { NoteProperties } from '../modal/NoteProperties'
import { TagGetRes } from '../modal/TagGetRes'
import { NoteCreateRes } from '../modal/NoteCreateRes'
import { NoteUpdateRes } from '../modal/NoteUpdateRes'
import { ResourceGetRes } from '../modal/ResourceGetRes'
import { ajax } from '../util/ajax'
import { PageParam, PageRes } from '../modal/PageData'
import { FieldsParam } from '../modal/FieldsParam'
import { RequiredField } from '../types/RequiredFiled'
// noinspection ES6PreferShortImport
import { PageUtil } from '../util/PageUtil'

/**
 * TODO 可以考虑使用 fields() 方法设置然后产生一个新的 Api 实例
 */
class NoteApi {
  async list(): Promise<PageRes<NoteGetRes>>
  async list<K extends keyof NoteGetRes>(
    pageParam: PageParam<NoteGetRes> & FieldsParam<K>,
  ): Promise<PageRes<Pick<NoteGetRes, K>>>
  async list(
    pageParam?: PageParam<NoteGetRes> & FieldsParam<keyof NoteGetRes>,
  ) {
    return ajax.get<PageRes<NoteGetRes>>('/notes', pageParam)
  }

  async get(id: string): Promise<NoteGetRes>
  async get<K extends keyof NoteGetRes>(
    id: string,
    fields?: K[],
  ): Promise<Pick<NoteGetRes, K>>
  async get(id: string, fields?: (keyof NoteGetRes)[]) {
    return ajax.get<NoteGetRes>(`/notes/${id}`, { fields })
  }

  async create(param: RequiredField<Partial<NoteProperties>, 'title'>) {
    return ajax.post<NoteCreateRes>('/notes', param)
  }

  async update(param: RequiredField<Partial<NoteProperties>, 'id'>) {
    const { id, ...others } = param
    return await ajax.put<NoteUpdateRes>(`/notes/${id}`, others)
  }

  async remove(id: string) {
    return ajax.delete(`/notes/${id}`)
  }

  tagsById(id: string) {
    return PageUtil.pageToAllList(
      ({ id, ...others }) =>
        ajax.get<PageRes<TagGetRes>>(`/notes/${id}/tags`, { ...others }),
      { id } as PageParam<TagGetRes> & { id: string },
    )
  }

  /**
   * TODO 目前这里不指定 fields 时会发生错误，这应该是个 bug
   * @link https://discourse.joplinapp.org/t/pre-release-1-4-is-now-available-for-testing/12247/14?u=rxliuli
   * @param id
   */
  async resourcesById(id: string) {
    return PageUtil.pageToAllList(
      ({ id, ...others }) =>
        ajax.get<PageRes<ResourceGetRes>>(`/notes/${id}/resources`, {
          fields: ['id', 'title'],
          ...others,
        } as FieldsParam<keyof ResourceGetRes>),
      { id } as PageParam<ResourceGetRes> & { id: string },
    )
  }
}

export const noteApi = new NoteApi()
