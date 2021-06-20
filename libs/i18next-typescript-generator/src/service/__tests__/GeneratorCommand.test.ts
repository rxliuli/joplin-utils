import { GeneratorCommandProgram } from '../GeneratorCommand'
import path from 'path'
import { pathExists, remove } from 'fs-extra'

it('测试 GeneratorCommand', async () => {
  const command = new GeneratorCommandProgram()
  const dtsPath = path.resolve(__dirname, 'i18n/index.d.ts')
  await remove(dtsPath)
  await command.main({ dirs: [path.resolve(__dirname, 'i18n')], watch: false })
  expect(await pathExists(dtsPath)).toBeTruthy()
})
