import axios from 'axios'
import { ApiUtil } from '../util/ApiUtil'
import { NoteGetRes } from '../modal/NoteGetRes'
import { TypeEnum } from '../modal/TypeEnum'

class SearchApi {
  async search(options: { query: string; type?: TypeEnum }) {
    const res = await axios.get<NoteGetRes[]>(
      ApiUtil.baseUrl('/search', options),
    )
    return res.data
  }
}

export const searchApi = new SearchApi()
