import { expect, it, describe } from 'vitest'
import { initTestFolderAndNote } from '../../util/initTestFolderAndNote'

const data = initTestFolderAndNote()
it('test move', async () => {
  const createParentRes = await api.folder.create({
    title: 'Test Folder 1',
    parent_id: '',
  })
  const createRes = await api.folder.create({
    title: 'Test Folder 2',
    parent_id: createParentRes.id,
  })
  await expect(api.folderExt.move(createParentRes.id, createRes.id)).rejects.toThrowError()
  await api.folderExt.move(createRes.id, '')
})
it('test path', async () => {
  const paths = await api.folderExt.path(data.folderId)
  expect(paths.length).toBe(1)
  expect(paths[0].id).toBe(data.folderId)
})
