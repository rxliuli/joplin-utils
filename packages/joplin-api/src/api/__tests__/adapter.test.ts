import { expect, it } from 'vitest'
import { joplinDataApi } from '../adapter'

it('joplinDataApi', async () => {
  const api = joplinDataApi({
    type: 'rest',
    baseUrl: import.meta.env.VITE_TEST_BASE_URL,
    token: import.meta.env.VITE_TEST_TOKEN,
  })
  expect(await api.joplin.ping()).true
  expect(await api.note.list()).deep.eq({ items: [], has_more: false })
})

it('Test error token', async () => {
  const api = joplinDataApi({
    type: 'rest',
    baseUrl: import.meta.env.VITE_TEST_BASE_URL,
    token: 'test',
  })
  expect(await api.joplin.ping()).true
})
