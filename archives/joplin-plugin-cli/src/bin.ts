import { Command } from 'commander'
import * as path from 'path'
import { CliProgram } from './CliProgram'
import pkg from '../package.json'

new Command()
  .addCommand(
    new Command('build').option('-w,--watch', 'watch mode').action(async (options: { watch?: boolean }) => {
      const cliProgram = new CliProgram({
        basePath: path.resolve(),
      })
      await cliProgram.build(!!options.watch)
    }),
  )
  .addCommand(
    new Command('generate')
      .requiredOption('--name <name>', 'project name')
      .action(async (options: { name: string }) => {
        const cliProgram = new CliProgram({
          basePath: path.resolve(),
        })
        await cliProgram.generate(options.name)
      }),
  )
  .version(pkg.version)
  .parse()
