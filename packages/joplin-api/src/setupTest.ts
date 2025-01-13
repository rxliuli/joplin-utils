import { beforeAll, vi } from 'vitest'
import { PageUtil } from './util/PageUtil'
import { pathExists } from 'fs-extra/esm'
import { findParent } from './util/findParent'
import path from 'path'
import { Api, joplinDataApi } from './api/adapter'

beforeAll(async () => {
  const dirPath = await findParent(__dirname, (item) => pathExists(path.resolve(item, 'package.json')))
  const envPath = path.resolve(dirPath!, '.env.local')
  if (!(await pathExists(envPath))) {
    throw new Error('请更新 .env.local 文件：' + envPath)
  }
  const api = joplinDataApi({
    type: 'rest',
    baseUrl: import.meta.env.VITE_TEST_BASE_URL,
    token: import.meta.env.VITE_TEST_TOKEN!,
  })
  vi.stubGlobal('api', api)
  await Promise.all((await PageUtil.pageToAllList(api.tag.list)).map(({ id }) => api.tag.remove(id)))
  await Promise.all((await PageUtil.pageToAllList(api.note.list)).map(({ id }) => api.note.remove(id, true)))
  await Promise.all((await PageUtil.pageToAllList(api.folder.list)).map(({ id }) => api.folder.remove(id, true)))
})

declare global {
  var api: Api
}
