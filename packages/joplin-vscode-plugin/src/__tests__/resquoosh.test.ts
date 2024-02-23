import path from 'pathe'
import { expect, it } from 'vitest'
import { initTempPath } from '@liuli-util/test'
import { readFile, writeFile } from 'fs/promises'
import Jimp from 'jimp'

const tempPath = initTempPath(__filename)

it('should resquoosh', async () => {
  const file = await readFile(path.resolve(__dirname, '../../resources/icon.png'))
  const lenna = await Jimp.read(file)
  const optimized = await lenna.quality(70).getBufferAsync(Jimp.MIME_JPEG)
  console.log(optimized.byteLength / file.byteLength)
  expect(optimized.byteLength / file.byteLength).lt(1)
  await writeFile(path.join(tempPath, 'icon.jpg'), optimized)
})
