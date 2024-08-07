import { Command } from 'commander'
import { version } from '../package.json'
import { build } from './build'
import { bundleRequire } from 'bundle-require'
import { ResolvedPluginConfig } from '.'
import path from 'path'
import { bundle } from './bundle'
import { dev } from './dev'

async function parseConfig(): Promise<ResolvedPluginConfig> {
  const { mod } = await bundleRequire({
    filepath: 'jpl.config.ts',
  })
  if (typeof mod.default !== 'object') {
    throw new Error('The configuration file must export a function or an array.')
  }
  const config = mod.default as ResolvedPluginConfig
  config.root = path.resolve()
  return config as ResolvedPluginConfig
}

new Command()
  .action(async () => {
    process.env.NODE_ENV = 'development'
    await build(await parseConfig())
  })
  .addCommand(
    new Command('dev').action(async () => {
      await dev(await parseConfig())
    }),
  )
  .addCommand(
    new Command('build').action(async () => {
      const config = await parseConfig()
      await build(config)
      await bundle(config)
    }),
  )
  .version(version)
  .parse()
