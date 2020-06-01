import axios from 'axios'
import { ApiUtil } from '../util/ApiUtil'

class JoplinApi {
  async scan(): Promise<number> {
    throw new Error('no impl')
  }
  async ping(): Promise<boolean> {
    const res = await axios.get<string>(ApiUtil.baseUrl('/ping'))
    return res.data === 'JoplinClipperServer'
  }
}

export const joplinApi = new JoplinApi()
