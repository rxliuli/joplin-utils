import { expect, it, describe } from 'vitest'
import { joplinApi, noteApi } from '../..'

it('test ping', async () => {
  expect(await joplinApi.ping()).toBeTruthy()
})
