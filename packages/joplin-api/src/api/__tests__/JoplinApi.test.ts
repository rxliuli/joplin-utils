import { expect, it } from 'vitest'

it('test ping', async () => {
  expect(await api.joplin.ping()).toBeTruthy()
})
