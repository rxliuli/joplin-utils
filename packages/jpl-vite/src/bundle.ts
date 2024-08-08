import { copy, mkdirp } from 'fs-extra'
import { globby } from 'globby'
import path from 'path'
import { create } from 'tar'
import { ResolvedPluginConfig } from '.'
import chalk from 'chalk'

export async function bundle(config: ResolvedPluginConfig) {
  const sourceDir = path.resolve(config.root, './dist')
  const distFiles = await globby('**/*', { cwd: sourceDir })
  await mkdirp(path.resolve(config.root, './publish'))
  await create(
    {
      strict: true,
      portable: true,
      file: path.resolve(config.root, `./publish/${config.id}.jpl`),
      cwd: sourceDir,
    },
    distFiles,
  )
  await copy('./dist/manifest.json', './publish/manifest.json')
  console.log(chalk.green(`Build completed: ./publish/${config.id}.jpl`))
}
