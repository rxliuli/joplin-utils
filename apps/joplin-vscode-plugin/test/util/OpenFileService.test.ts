import path = require('path')
import { OpenFileService } from '../../src/util/OpenFileService'

describe('测试 OpenFileService', () => {
  const openFileService = new OpenFileService()
  it('测试 openFileByOS', async function () {
    await openFileService.openFileByOS(
      path.resolve(__dirname, './resource/test.png'),
    )
  })
  it('测试 openByVSCode', () => {
    const filePath = path.resolve(
      __dirname,
      'resource/edit-f5493f653ac447de99582acbf91a6ed2.md',
    )
    openFileService.openByVSCode(filePath)
  })
  it('测试扩展名', () => {
    console.log(path.extname('test.drawio'))
    console.log(path.extname('test.drawio.svg'))
  })
})
