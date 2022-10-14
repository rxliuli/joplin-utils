import { expect, it } from 'vitest'
import { buffer } from 'node:stream/consumers'
import { Readable } from 'node:stream'
import { readFile } from 'fs-extra'

it('Readable', async () => {
  const r = await readFile(__filename)
  const readable = Readable.from(r)
  const data = await buffer(readable)
  expect(r.length).eq(data.length)
})
