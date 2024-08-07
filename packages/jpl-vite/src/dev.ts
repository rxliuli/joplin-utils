import { createServer, mergeConfig, build as viteBuild } from 'vite'
import { ResolvedPluginConfig } from '.'
import { webview } from './build'
import path from 'path'
import { pathExists } from 'fs-extra'

export async function dev(config: ResolvedPluginConfig) {
  if (!(await pathExists(path.resolve(config.root, 'src/webview/index.html')))) {
    return
  }
  let c = webview(config)
  if (config.vite) {
    c = mergeConfig(c, config.vite)
  }
  const server = await createServer(c)
  await server.listen()
  server.printUrls()
}
