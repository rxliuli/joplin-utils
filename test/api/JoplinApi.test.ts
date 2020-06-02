import { joplinApi } from '../..'

describe('test Joplin', () => {
  it('test ping', async () => {
    expect(await joplinApi.ping()).toBeTruthy()
  })
})
