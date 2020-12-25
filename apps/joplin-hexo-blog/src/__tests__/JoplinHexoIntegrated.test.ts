import { JoplinHexoIntegrated } from '../JoplinHexoIntegrated'
import * as path from 'path'

describe('测试 JoplinHexoIntegrated', () => {
  it('基本示例', async () => {
    const joplinHexoIntegrated = new JoplinHexoIntegrated({
      hexoPath: path.resolve(__dirname, 'resource/blog'),
      joplinProfilePath: path.resolve(
        'D:/Program/JoplinPortable/JoplinProfile',
      ),
      tag: 'blog',
      token: process.env.token!,
      port: 41184,
    })
    await joplinHexoIntegrated.exp()
  }, 100_000)
})
