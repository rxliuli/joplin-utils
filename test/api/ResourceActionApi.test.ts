import { resourceActionApi } from '../../src'

describe('test ResourceActionApi', () => {
  const resourceId = '1b95bb5229aa400daf9fb44bfe79b900'
  it('test openAndWatch', async () => {
    expect(await resourceActionApi.noteIsWatched(resourceId)).toBeFalsy()
    await resourceActionApi.openAndWatch(resourceId)
    expect(await resourceActionApi.noteIsWatched(resourceId)).toBeTruthy()
    await resourceActionApi.stopWatching(resourceId)
    expect(await resourceActionApi.noteIsWatched(resourceId)).toBeFalsy()
  })
})
