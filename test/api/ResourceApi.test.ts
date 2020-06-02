import { resourceApi } from '../../'

describe('test ResourceApi', () => {
  const id = 'af01a0f4d30d418f8cd9f31f174da28f'
  it('test list', async () => {
    const res = await resourceApi.list()
    console.log(res)
    expect(res.length).toBeGreaterThan(0)
  })
  it('test get', async () => {
    const res = await resourceApi.get(id)
    console.log(res)
    expect(res.id).toBe(id)
  })
  it('test create', async () => {

  })
})
