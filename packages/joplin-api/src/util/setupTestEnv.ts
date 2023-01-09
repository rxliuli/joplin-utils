import { pathExists, readFile } from 'fs-extra'
import { config } from '../'
import { parse } from 'envfile'
import * as path from 'path'
import { findParent } from './findParent'

export async function setupTestEnv() {
  config.baseUrl = 'http://127.0.0.1:27583'
  const dirPath = await findParent(__dirname, (item) => pathExists(path.resolve(item, 'package.json')))
  const envPath = path.resolve(dirPath!, '.env.local')
  if (!(await pathExists(envPath))) {
    throw new Error('请更新 .env.local 文件：' + envPath)
  }
  const env = await readFile(envPath, 'utf8')

  config.token = parse(env).TOKEN!
}
