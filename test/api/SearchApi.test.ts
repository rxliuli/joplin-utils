import { searchApi } from '../..'
import { config } from '../../'

describe('test SearchApi', () => {
  it('test search', async () => {
    console.log(config)
    const res = await searchApi.search({
      query: 'title:测试',
    })
    console.log(res)
    expect(res.length).toBeGreaterThan(0)
  })
})
