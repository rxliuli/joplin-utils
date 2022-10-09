import { pathExists } from '@liuli-util/fs-extra'
import { bundleRequire } from 'bundle-require'
import path from 'path'
import { convert } from './convert'

await import('./utils/nodePolyfill')
const configPath = path.resolve('mami.config.ts')
if (!(await pathExists(configPath))) {
  throw new Error('config not found')
}
const { mod } = await bundleRequire({
  filepath: configPath,
})
await convert(mod.default)
