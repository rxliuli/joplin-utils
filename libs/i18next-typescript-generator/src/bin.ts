import { Command } from 'commander'
import { BinCommand } from './BinCommand'

const binCommand = new BinCommand()

new Command()
  .addCommand(
    new Command('gen')
      .option('-i, --input <input>', '包含一或多个翻译文件的目录')
      .description('根据 json 生成 .d.ts 类型定义')
      .action(binCommand.gen),
  )
  .parse()
