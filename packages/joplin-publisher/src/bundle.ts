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
