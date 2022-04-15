import { config, Config, JoplinApiGenerator } from '../../src'

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

  set baseUrl(baseUrl: string) {
    this.config.baseUrl = baseUrl
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
      set baseUrl(baseUrl: string) {
        apiClient.baseUrl = baseUrl
      },
    }
    const { noteApi } = apiClient

    expect(noteApi.getConfig().token).toBe('')
    config.token = '1'
    expect(noteApi.getConfig().token).toBe('1')
  })
  it('测试使用 127.0.0.1', async () => {
    const api = new JoplinApiGenerator()
    api.baseUrl = 'http://127.0.0.1:27583/'
    api.token = config.token
    expect(await api.joplinApi.ping()).toBeTruthy()
  })
  it('test error token', async () => {
    const api = new JoplinApiGenerator()
    api.token = 'test'
    await expect(api.noteApi.list()).rejects.toThrowError()
  })
})
