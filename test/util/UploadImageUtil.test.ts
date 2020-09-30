import { UploadImageUtil } from '../../src/util/UploadImageUtil'
import { pathExistsSync } from 'fs-extra'
import * as path from 'path'

describe('测试 UploadImageUtil', () => {
  it('测试从剪切板复制图像', async () => {
    try {
      const image = await UploadImageUtil.getClipboardImage()
      console.log('image: ', image)
    } catch (e) {}
  })
  it('测试 uploadImageByPath', async () => {
    const filePath =
      'C:/Users/rxliuli/Pictures/Snipaste_2020-05-04_23-03-33.png'
    console.log(path.resolve(filePath), pathExistsSync(path.resolve(filePath)))
    const markdownLink = await UploadImageUtil.uploadImageByPath(filePath)
    console.log('markdownLink: ', markdownLink)
  })
  it('测试从剪切板上传图像', async () => {
    const clipboardImage = await UploadImageUtil.getClipboardImage()
    console.log('clipboardImage: ', clipboardImage)
    if (!clipboardImage.isExistFile) {
      return
    }
    const markdownLink = await UploadImageUtil.uploadImageByPath(
      clipboardImage.imgPath,
    )
    console.log('markdownLink: ', markdownLink)
    expect(markdownLink).toBeTruthy()
  })
})
