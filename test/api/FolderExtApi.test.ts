import { folderApi, folderExtApi } from '../../src'
import { initTestFolderAndNote } from '../util/initTestFolderAndNote'

describe('test FolderExtApi', () => {
  initTestFolderAndNote()
  it('test move', async () => {
    const createParentRes = await folderApi.create({
      title: '测试目录 1',
      parent_id: '',
    })
    const createRes = await folderApi.create({
      title: '测试目录 2',
      parent_id: createParentRes.id,
    })
    await expect(
      folderExtApi.move(createParentRes.id, createRes.id),
    ).rejects.toThrowError()
    await expect(folderExtApi.move(createRes.id, '')).resolves
  })
})