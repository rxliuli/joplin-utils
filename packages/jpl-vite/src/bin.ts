import { Command } from 'commander'
import { version } from '../package.json'
import { build, parseConfig } from './build'
import path from 'path'
import { bundle } from './bundle'
import { startDevServer } from './server'

new Command()
  .action(async () => {
    process.env.NODE_ENV = 'development'
    await build(await parseConfig())
  })
  .addCommand(
    new Command('dev').action(async () => {
      process.env.NODE_ENV = 'development'
      await startDevServer(path.resolve())
    }),
  )
  .addCommand(
    new Command('build').action(async () => {
      process.env.NODE_ENV = 'production'
      const config = await parseConfig()
      await build(config)
      await bundle(config)
    }),
  )
  .version(version)
  .parse()
