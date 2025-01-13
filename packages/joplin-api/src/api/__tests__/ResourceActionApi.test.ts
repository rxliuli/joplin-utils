import { expect, it, describe, beforeAll } from 'vitest'
import { createTestResource } from './utils/CreateTestResource'

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

describe.skip('test ResourceActionApi', () => {
  let id: string
  beforeAll(async () => {
    id = (await createTestResource()).id
  })
  it('Test openAndWatch', async () => {
    expect(await api.resourceAction.noteIsWatched(id)).toBeFalsy()
    await api.resourceAction.openAndWatch(id)
    await wait(1000)
    expect(await api.resourceAction.noteIsWatched(id)).toBeTruthy()
    await api.resourceAction.stopWatching(id)
    expect(await api.resourceAction.noteIsWatched(id)).toBeFalsy()
  })
  it('Test watch without open file', async () => {
    expect(await api.resourceAction.noteIsWatched(id)).toBeFalsy()
    await api.resourceAction.watch(id)
    expect(await api.resourceAction.noteIsWatched(id)).toBeTruthy()
    await api.resourceAction.stopWatching(id)
    expect(await api.resourceAction.noteIsWatched(id)).toBeFalsy()
  })
})
