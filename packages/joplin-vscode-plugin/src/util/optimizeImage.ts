import configure from '@jimp/custom'
import types from '@jimp/types'
import png from '@jimp/png'
import jpeg from '@jimp/jpeg'

const Jimp = configure({
  types: [types],
  plugins: [png, jpeg],
})

export async function optimizeImage(buffer: Buffer): Promise<Buffer> {
  const lenna = await Jimp.read(buffer)
  return await lenna.quality(70).getBufferAsync(Jimp.MIME_JPEG)
}
