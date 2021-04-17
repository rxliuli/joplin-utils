import path from 'path'
import { mkdirp } from 'fs-extra'

describe('测试 hexo', () => {
  it('基本示例', async () => {
    const rootPath = path.resolve(__dirname, './temp/hexo-example')
    await mkdirp(rootPath)
  })
})
