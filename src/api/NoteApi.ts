import { NoteGetRes } from '../modal/NoteGetRes'
import { NoteProperties } from '../modal/NoteProperties'
import { TagGetRes } from '../modal/TagGetRes'
import { NoteCreateRes } from '../modal/NoteCreateRes'
import { NoteUpdateRes } from '../modal/NoteUpdateRes'
import { ResourceGetRes } from '../modal/ResourceGetRes'
import { RequiredField } from 'liuli-types'
import { ajax } from '../util/ajax'

class NoteApi {
  async list(): Promise<NoteGetRes[]>
  async list<K extends keyof NoteProperties>(
    fields?: K[],
  ): Promise<Pick<NoteProperties, K>[]>
  async list(fields?: (keyof NoteProperties)[]) {
    return ajax.get<NoteGetRes[]>('/notes', { fields })
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
  async tagsById(id: string) {
    return ajax.get<TagGetRes[]>(`/notes/${id}/tags`)
  }
  async resourcesById(id: string) {
    return ajax.get<ResourceGetRes[]>(`/notes/${id}/resources`)
  }
}

export const noteApi = new NoteApi()
