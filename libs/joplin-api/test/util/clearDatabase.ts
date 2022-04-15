import { folderApi, noteApi, PageUtil, tagApi } from '../../src'

export async function clearDatabase() {
  await Promise.all((await PageUtil.pageToAllList(folderApi.list)).map(({ id }) => folderApi.remove(id)))
  await Promise.all((await PageUtil.pageToAllList(noteApi.list)).map(({ id }) => noteApi.remove(id)))
  await Promise.all((await PageUtil.pageToAllList(tagApi.list)).map(({ id }) => tagApi.remove(id)))
}
