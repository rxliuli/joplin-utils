import { resolve } from 'path'
import { resourceApi } from '../../..'
import { createReadStream, readFile } from 'fs-extra'

export async function createTestResource() {
  const title = 'image title'
  const path = resolve(__dirname, '../assets/resourcesByFileId.png')
  return await resourceApi.create({
    title,
    data: new Blob([await readFile(path)]),
  })
}
