import { pathExists } from 'path-exists'
import { config, resourceApi } from 'joplin-api'
import path from 'path'
import { beforeEach, expect, it } from 'vitest'
import { findParent } from '../findParent'
import { UploadResourceUtil } from '../UploadResourceUtil'
import { mkdir, readFile, rm } from 'fs/promises'
import { parse } from 'dotenv'

const tempPath = path.resolve(__dirname, '.temp', path.basename(__filename))
beforeEach(async () => {
  await rm(tempPath, { force: true, recursive: true })
  await mkdir(tempPath, { recursive: true })
  const dirPath = await findParent(__dirname, (item) => pathExists(path.resolve(item, 'package.json')))
  const envPath = path.resolve(dirPath!, '.env.local')
  if (!(await pathExists(envPath))) {
    throw new Error('请更新 .env.local 文件：' + envPath)
  }
  const env = await readFile(envPath, 'utf8')

  config.token = parse(env).TOKEN!
  config.baseUrl = 'http://127.0.0.1:27583'
})

it('test create by empty file', async () => {
  const fsPath = path.resolve(__dirname, 'assets/test.km.svg')
  const { res, markdownLink } = await UploadResourceUtil.uploadByPath(fsPath, true)
  expect(res.mime).eq('image/svg+xml')
  expect(markdownLink).eq(`![${path.basename(fsPath)}](:/${res.id})`)
  const data = await readFile(fsPath)
  const buffer = await resourceApi.fileByResourceId(res.id)
  expect(data).deep.eq(buffer)
  console.log(data.length)
})
