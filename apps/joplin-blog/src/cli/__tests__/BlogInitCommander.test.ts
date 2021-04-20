import { HexoInstance } from '../../util/HexoInstance'
import path from 'path'
import { remove } from 'fs-extra'

describe('测试 BlogInitCommander', () => {
  it('测试 InitHexoProjectProgram', async () => {
    const rootPath = path.resolve(__dirname, 'temp/hexo-example')
    await remove(rootPath)
    const hexoInstance = new HexoInstance({
      rootPath: rootPath,
    })
    await hexoInstance.init((options) => {
      console.log(`进度: ${options.title} ${options.rate}/${options.all}`)
    })
    await hexoInstance.installDeps()
  }, 10_000)
})
