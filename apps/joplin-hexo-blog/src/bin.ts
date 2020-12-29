import { pathExists, readJson } from 'fs-extra'
import * as path from 'path'
import {
  JoplinHexoIntegrated,
  JoplinHexoIntegratedConfig,
} from './JoplinHexoIntegrated'

async function main() {
  const configPath = path.resolve('.joplin-blog.json')
  console.log('configPath: ', configPath)
  if (!(await pathExists(configPath))) {
    console.log('没有配置文件')
    return
  }
  const config = (await readJson(configPath)) as JoplinHexoIntegratedConfig
  await new JoplinHexoIntegrated(config).exp()
}

main()
