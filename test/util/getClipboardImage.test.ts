import getClipboardImage from '../../src/util/getClipboardImage'

it('测试从剪切板复制图像', async () => {
  try {
    const image = await getClipboardImage()
    console.log('image: ', image)
  } catch (e) {}
})
