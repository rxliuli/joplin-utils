import { searchApi } from './SearchApi'
import { setupTestEnv } from '../../test/SetupTestEnv'

describe('test SearchApi', () => {
  beforeAll(() => {
    setupTestEnv()
  })
  it('test search', async () => {
    const res = await searchApi.search({
      query: 'title:测试',
    })
    console.log(res)
    expect(res.length).toBeGreaterThan(0)
  })
})
