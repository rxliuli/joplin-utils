import { stringify } from 'query-string'
import { config } from './config'

export class ApiUtil {
  static baseUrl(url: string, param?: object) {
    const query = stringify(
      {
        ...param,
        token: config.token,
      },
      {
        arrayFormat: 'comma',
      },
    )
    return `http://localhost:${config.port}${url}?${query}`
  }
}
