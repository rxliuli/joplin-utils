import { Scanner } from '../Scanner'
import path from 'path'

it('测试 scanner', async () => {
  const scanner = new Scanner()
  const list = await scanner.scan(path.resolve(__dirname, 'i18n'))
  console.log(list)
})
