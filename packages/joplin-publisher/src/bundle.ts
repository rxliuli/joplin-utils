import { copy, mkdirp } from 'fs-extra'
import { globby } from 'globby'
import path from 'path'
import { create } from 'tar'

const sourceDir = path.resolve(__dirname, '../dist')
const distFiles = await globby('**/*', { cwd: sourceDir })
await create(
  {
    strict: true,
    portable: true,
    file: path.resolve(__dirname, '../joplin-publisher.jpl'),
    cwd: sourceDir,
  },
  distFiles,
)
await mkdirp(path.resolve(__dirname, './publish'))
await copy('./joplin-publisher.jpl', './publish/joplin-publisher.jpl')
await copy('./src/manifest.json', './publish/manifest.json')
