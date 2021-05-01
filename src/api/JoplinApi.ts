// noinspection ES6PreferShortImport
import { Ajax } from '../util/ajax'

export class JoplinApi {
  constructor(private ajax: Ajax) {
  }

  private async pingPort(port: number) {
    const res = await this.ajax.request<string>({
      url: `http://localhost:${port}/ping`,
      method: 'get',
      responseType: 'text',
    })
    return res === 'JoplinClipperServer'
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
      JoplinApi.range(41184, 41194 + 1).filter(async (port) => {
        try {
          return await this.pingPort(port)
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
    return this.pingPort(this.ajax.config.port)
  }
}
