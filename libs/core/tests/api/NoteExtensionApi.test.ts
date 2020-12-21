import { noteExtensionApi } from '../../src/api/NoteExtensionApi'
import { noteApi, resourceApi, TypeEnum } from 'joplin-api'

describe('测试 NoteExtensionApi', () => {
  it('测试 find 查找笔记', async () => {
    const id = (await noteApi.list({ limit: 1 })).items[0].id
    const res = await noteExtensionApi.find(id)
    expect(res.type_).toBe(TypeEnum.Note)
  })
  it('测试 find 查找资源', async () => {
    const id = (await resourceApi.list({ limit: 1 })).items[0].id
    const res = await noteExtensionApi.find(id)
    expect(res.type_).toBe(TypeEnum.Resource)
  })
})
