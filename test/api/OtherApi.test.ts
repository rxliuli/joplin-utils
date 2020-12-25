import { config, noteApi, TypeEnum } from '../../src'

describe('其它测试', () => {
  beforeAll(() => {
    config.token = process.env.token!
    config.port = 41184
  })
  it('测试根据 id 获取资源是否会获取到图像', async () => {
    const res = await noteApi.resourcesById('5d8273edf5a14756ad629358b6c8c005')
    res.forEach((item) => {
      expect(item.type_).toBe(TypeEnum.Resource)
    })
  })
})
