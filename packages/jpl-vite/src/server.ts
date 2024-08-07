import { createServer, mergeConfig, ViteDevServer } from 'vite'
import { parseConfig, webview } from './build'
import path from 'path'
import { pathExists } from 'fs-extra'
import chokidar from 'chokidar'
import chalk from 'chalk'

export async function startDevServer(root: string) {
  if (!(await pathExists(path.resolve(root, 'src/webview/index.html')))) {
    return
  }

  let server: ViteDevServer | null = null

  async function startServer() {
    const config = await parseConfig()
    if (server) {
      await server.close()
    }

    let c = webview(config)
    if (config.vite) {
      c = mergeConfig(c, config.vite)
    }
    server = await createServer(c)
    await server.listen()
    server.printUrls()
  }

  // 启动服务器
  await startServer()

  // 监听 jpl.config.ts 文件变化
  const configPath = path.resolve(root, 'jpl.config.ts')
  chokidar.watch(configPath).on('change', async () => {
    console.log(chalk.green('Configuration file changed. Restarting server...'))
    // 重启服务器
    await startServer()
  })
}
