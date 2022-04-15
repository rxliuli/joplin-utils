import { Config, JoplinApiGenerator } from '../../src'

class NoteApi {
  constructor(private config: Config) {}

  getConfig() {
    return this.config
  }
}

class ApiClient {
  private config: Config = new Config()

  set token(token: string) {
    this.config.token = token
  }

  set port(port: number) {
    this.config.port = port
  }

  readonly noteApi = new NoteApi(this.config)
}

describe('api test', function () {
  it('测试配置是否可以读取另一个实例的修改', function () {
    const config = new ApiClient()
    const { noteApi } = config
    expect(noteApi.getConfig().token).toBe('')
    config.token = '1'
    expect(noteApi.getConfig().token).toBe('1')
  })
  it('测试全局配置', function () {
    const apiClient = new ApiClient()
    const config: Config = {
      set token(token: string) {
        apiClient.token = token
      },
      set port(port: number) {
        apiClient.port = port
      },
    }
    const { noteApi } = apiClient

    expect(noteApi.getConfig().token).toBe('')
    config.token = '1'
    expect(noteApi.getConfig().token).toBe('1')
  })
  it('test error token', async () => {
    const api = new JoplinApiGenerator()
    api.token = 'test'
    await expect(api.noteApi.list()).rejects.toThrowError()
  })
})
