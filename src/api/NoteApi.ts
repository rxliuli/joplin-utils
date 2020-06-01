import axios from 'axios'
import { SearchTypeEnum } from '../modal/SearchTypeEnum'
import { SearchData } from '../modal/SearchData'
import { NoteProperties } from '../modal/NoteProperties'
import { PartialField } from '../types/PartialField'
import { ApiUtil } from '../util/ApiUtil'

class NoteApi {
  async search(options: { query: string; type?: SearchTypeEnum }) {
    const res = await axios.get<SearchData[]>(
      ApiUtil.baseUrl('/search', options)
    )
    return res.data
  }
  async list() {
    const res = await axios.get<SearchData[]>(ApiUtil.baseUrl('/notes'))
    return res.data
  }
  async get(id: string) {
    const res = await axios.get<SearchData>(ApiUtil.baseUrl(`/notes/${id}`))
    return res.data
  }
  async tagsById(id: string) {
    const res = await axios.get(ApiUtil.baseUrl(`/notes/${id}/tags`))
    return res.data
  }
  async resourcesById(id: string) {
    const res = await axios.get(ApiUtil.baseUrl(`/notes/${id}/resources`))
    return res.data
  }
  async create(
    param: PartialField<
      Pick<NoteProperties, 'title' | 'body' | 'body_html'>,
      'body' | 'body_html'
    >
  ) {
    const res = await axios.post(ApiUtil.baseUrl(`/notes`), param)
    return res.data
  }
  async update(
    id: string,
    param: PartialField<
      Pick<NoteProperties, 'title' | 'body' | 'body_html'>,
      'body' | 'body_html'
    >
  ) {
    const res = await axios.put(ApiUtil.baseUrl(`/notes`), param)
    return res.data
  }
  async remove(id: string) {
    const res = await axios.delete(ApiUtil.baseUrl(`/notes/${id}`))
    return res.data
  }
}

export const noteApi = new NoteApi()
