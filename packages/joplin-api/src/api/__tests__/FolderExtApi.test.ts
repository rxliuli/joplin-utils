import { expect, it, describe } from 'vitest'
import { folderApi, folderExtApi } from '../..'
import { initTestFolderAndNote } from '../../util/initTestFolderAndNote'

describe('test FolderExtApi', () => {
  const data = initTestFolderAndNote()
  it('test move', async () => {
    const createParentRes = await folderApi.create({
      title: '测试目录 1',
      parent_id: '',
    })
    const createRes = await folderApi.create({
      title: '测试目录 2',
      parent_id: createParentRes.id,
    })
    await expect(folderExtApi.move(createParentRes.id, createRes.id)).rejects.toThrowError()
    await folderExtApi.move(createRes.id, '')
  })
  it('test path', async () => {
    const paths = await folderExtApi.path(data.folderId)
    expect(paths.length).toBe(1)
    expect(paths[0].id).toBe(data.folderId)
  })
})
