import { fileURLToPath } from 'url'
import { expect, it } from 'vitest'
import { TagUseApi } from '../TagUseApi'
import path from 'path'
import { rm } from 'fs/promises'

it('基本示例', async () => {
  const configPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'temp/db.json')
  await rm(configPath, { force: true, recursive: true })
  const tagUseService = new TagUseApi(configPath)
  expect(await tagUseService.getMap()).toEqual(new Map())
  await tagUseService.save([{ id: '1', title: 'hello' }])
  expect((await tagUseService.getMap()).get('1')!.title).toEqual('hello')
  await tagUseService.save([{ id: '1', title: 'world' }])
  expect((await tagUseService.getMap()).get('1')!.title).toEqual('world')
})
