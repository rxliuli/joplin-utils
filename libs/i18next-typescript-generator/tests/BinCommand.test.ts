import * as path from 'path'
import { BinCommand } from '../src/BinCommand'

describe('测试 BinCommand', () => {
  const command = new BinCommand()
  describe('测试 gen', () => {
    it('基本示例', () => {
      command.gen({
        input: path.resolve(__dirname, 'i18n'),
      })
    })
  })
})
