import { fileURLToPath } from 'url'
import { pathExists, readFile } from '@liuli-util/fs-extra'
import { parse } from 'envfile'
import * as path from 'path'
import { config } from 'joplin-api'

export async function setupTestEnv() {
  config.baseUrl = 'http://localhost:27583'
  const envPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.env.local')
  if (!(await pathExists(envPath))) {
    throw new Error('请更新 .env.local 文件：' + envPath)
  }
  const env = await readFile(envPath, 'utf8')
  config.token = parse(env).TOKEN!
}
