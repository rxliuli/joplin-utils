import { resourceActionApi } from '../../src'
import { createTestResource } from './CreateTestResource'

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

describe.skip('test ResourceActionApi', () => {
  let id: string
  beforeAll(async () => {
    id = (await createTestResource()).id
  })
  it('test openAndWatch', async () => {
    expect(await resourceActionApi.noteIsWatched(id)).toBeFalsy()
    await resourceActionApi.openAndWatch(id)
    await wait(1000)
    expect(await resourceActionApi.noteIsWatched(id)).toBeTruthy()
    await resourceActionApi.stopWatching(id)
    expect(await resourceActionApi.noteIsWatched(id)).toBeFalsy()
  })
  it('测试仅监听而不打开文件', async () => {
    expect(await resourceActionApi.noteIsWatched(id)).toBeFalsy()
    await resourceActionApi.watch(id)
    expect(await resourceActionApi.noteIsWatched(id)).toBeTruthy()
    await resourceActionApi.stopWatching(id)
    expect(await resourceActionApi.noteIsWatched(id)).toBeFalsy()
  })
})
