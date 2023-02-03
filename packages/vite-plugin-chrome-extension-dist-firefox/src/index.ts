import { copy, readJson, remove, writeJson } from '@liuli-util/fs-extra'
import path from 'node:path'
import { Plugin, ResolvedConfig } from 'vite'
import { convertManifest3To2 } from './utils/convertManifest3To2'

export function firefoxOutput(): Plugin {
  let c: ResolvedConfig
  return {
    name: 'vite-plugin-firefox-dist',
    configResolved(config) {
      c = config
    },
    async closeBundle() {
      const firefoxDist = path.resolve(c.root, './dist-firefox')
      await remove(firefoxDist)
      await copy(path.resolve(c.root, './dist'), firefoxDist)
      const jsonPath = path.resolve(firefoxDist, 'manifest.json')
      await writeJson(jsonPath, convertManifest3To2(await readJson(jsonPath)), { spaces: 2 })
    },
  }
}
