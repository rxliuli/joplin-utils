import { pathExists, readFile } from 'fs-extra'
import { config } from '../'
import * as path from 'path'
import { findParent } from './findParent'

// Read Joplin API 'TOKEN' (and optional 'URL') from .env.local file
export async function setupTestEnv() {
  const dirPath = await findParent(__dirname, (item) => pathExists(path.resolve(item, 'package.json')))
  const envPath = path.resolve(dirPath!, '.env.local')
  if (!(await pathExists(envPath))) {
    throw new Error('请更新 .env.local 文件：' + envPath)
  }
  const env = await readFile(envPath, 'utf8')

  config.baseUrl = import.meta.env.VITE_TEST_BASE_URL
  config.token = import.meta.env.VITE_TEST_TOKEN!
}
