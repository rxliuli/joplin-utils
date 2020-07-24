import axios from 'axios'
import { config } from '..'

class JoplinApi {
  private static async pingPort(port: number) {
    const res = await axios.get<string>(`http://localhost:${port}/ping`)
    return res.data === 'JoplinClipperServer'
  }

  private static range(begin: number, end: number) {
    const res = []
    for (let i = begin; i < end; i++) {
      res.push(i)
    }
    return res
  }

  async scan(): Promise<number> {
    const list = await Promise.all(
      JoplinApi.range(41184, 41194 + 1).filter(async port => {
        try {
          return await JoplinApi.pingPort(port)
        } catch (e) {
          return false
        }
      }),
    )
    if (list.length === 0) {
      throw new Error(`Joplin's port is not scanned`)
    }
    return list[0]
  }

  async ping(): Promise<boolean> {
    return JoplinApi.pingPort(config.port)
  }
}

export const joplinApi = new JoplinApi()
