import { createEmptyFile } from '../../src/util/createEmptyFile'
import * as path from 'path'

it('测试 createEmptyFile', async () => {
  const filePath = path.resolve(__dirname, 'resource/test.drawio.svg')
  await expect(createEmptyFile(filePath)).resolves.toBeUndefined()
  console.log('filePath: ', path.dirname(filePath))
})
