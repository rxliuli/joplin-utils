import { searchApi } from '../..'
import { config } from '../../'
import { TypeEnum } from '../../src'

describe('test SearchApi', () => {
  it('test search note', async () => {
    console.log(config)
    const res = await searchApi.search({
      query: 'title:测试',
      type: TypeEnum.Note,
    })
    console.log(res)
    expect(res.length).toBeGreaterThan(0)
  })
  it('test search folder', async () => {
    console.log(config)
    const res = await searchApi.search({
      query: 'title:测试',
      type: TypeEnum.Folder,
    })
    console.log(res)
    expect(res.length).toBe(0)
  })
})
