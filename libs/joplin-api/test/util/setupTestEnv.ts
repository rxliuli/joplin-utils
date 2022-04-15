import { pathExists, readFile } from 'fs-extra'
import { config } from '../../src'
import { parse } from 'envfile'
import * as path from 'path'

export async function setupTestEnv() {
  config.baseUrl = 'http://localhost:27583'
  const envPath = path.resolve(__dirname, '.env.local')
  if (!(await pathExists(envPath))) {
    throw new Error('请更新 .env.local 文件：' + envPath)
  }
  const env = await readFile(envPath, 'utf8')
  config.token = parse(env).TOKEN!
}
