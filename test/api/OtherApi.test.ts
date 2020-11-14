import { folderApi, noteApi, tagApi } from '../../src'

describe('test', () => {
  it.skip('clear', async () => {
    const clear = async (api: any) =>
      (await api.list()).map(({ id }: any) => api.remove(id))
    await Promise.all([folderApi, noteApi, tagApi].flatMap(clear))
  })
})
