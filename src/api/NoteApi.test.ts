import { noteApi } from './NoteApi'
import { setupTestEnv } from './SetupTestEnv'

describe('test JoplinApi', () => {
  beforeAll(() => {
    setupTestEnv()
  })
  it('test search', async () => {
    const res = await noteApi.search({
      query: 'title:测试'
    })
    expect(Array.isArray(res)).toBeTruthy()
  })
})
