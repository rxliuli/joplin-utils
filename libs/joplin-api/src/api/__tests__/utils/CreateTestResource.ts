import { resolve } from 'path'
import { resourceApi } from '../../..'
import { createReadStream } from 'fs-extra'

export async function createTestResource() {
  const title = 'image title'
  const path = resolve(__dirname, '../assets/resourcesByFileId.png')
  return await resourceApi.create({
    title,
    data: createReadStream(path),
  })
}
