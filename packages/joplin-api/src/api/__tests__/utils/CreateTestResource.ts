import { readFile } from 'fs/promises'
import { resolve } from 'path'

export async function createTestResource() {
  const title = 'image title'
  const path = resolve(__dirname, '../assets/resourcesByFileId.png')
  return await api.resource.create({
    title,
    data: new Blob([await readFile(path)]),
  })
}
