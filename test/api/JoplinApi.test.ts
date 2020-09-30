import { joplinApi } from '../../src'

describe('test Joplin', () => {
  it('test ping', async () => {
    expect(await joplinApi.ping()).toBeTruthy()
  })
  it('test scan', async () => {
    expect(await joplinApi.scan()).toBe(41184)
  })
})
