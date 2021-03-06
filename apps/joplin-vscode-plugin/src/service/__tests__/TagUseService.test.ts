import { TagUseService } from '../TagUseService'
import path from 'path'
import { remove } from 'fs-extra'

it('基本示例', async () => {
  const configPath = path.resolve(__dirname, 'temp/db.json')
  await remove(configPath)
  const tagUseService = new TagUseService(configPath)
  expect(await tagUseService.getMap()).toEqual(new Map())
  await tagUseService.save([{ id: '1', title: 'hello' }])
  expect((await tagUseService.getMap()).get('1')!.title).toEqual('hello')
  await tagUseService.save([{ id: '1', title: 'world' }])
  expect((await tagUseService.getMap()).get('1')!.title).toEqual('world')
})
