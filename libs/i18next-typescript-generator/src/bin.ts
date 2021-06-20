import { Command } from 'commander'
import { GeneratorCommandProgram } from './service/GeneratorCommand'
;(async () => {
  await new Command()
    .option('-i, --input <input>', '包含一或多个翻译文件的目录')
    .option('-w, --watch', '是否使用监视模式')
    .description('根据 json 生成 .d.ts 类型定义')
    .action(async (options: { input: string; watch: boolean }) => {
      await new GeneratorCommandProgram().main({
        dirs: [options.input],
        watch: options.watch,
      })
    })
    .parseAsync()
})()
