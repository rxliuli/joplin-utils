import { resourceActionApi } from '../../src'
import { createTestResource } from './CreateTestResource'

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

describe('test ResourceActionApi', () => {
  it('test openAndWatch', async () => {
    const { id } = await createTestResource()
    expect(await resourceActionApi.noteIsWatched(id)).toBeFalsy()
    await resourceActionApi.openAndWatch(id)
    await wait(1000)
    expect(await resourceActionApi.noteIsWatched(id)).toBeTruthy()
    await resourceActionApi.stopWatching(id)
    expect(await resourceActionApi.noteIsWatched(id)).toBeFalsy()
  })
})
