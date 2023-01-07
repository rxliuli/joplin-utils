import { Ajax } from '../util/ajax'

export class JoplinApi {
  constructor(private ajax: Ajax) {}

  async ping(): Promise<boolean> {
    return (await this.ajax.get('/ping', {}, { responseType: 'text' })) === 'JoplinClipperServer'
  }
}
