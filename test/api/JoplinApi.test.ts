import { joplinApi } from '../../src'

describe('test Joplin', () => {
  it('test ping', async () => {
    expect(await joplinApi.ping()).toBeTruthy()
  })
})
