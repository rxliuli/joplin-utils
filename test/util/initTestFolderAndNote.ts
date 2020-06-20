import { folderApi, noteApi, tagApi } from '../../src'

export function initTestFolderAndNote() {
  const data = {
    folderId: '',
    noteId: '',
    tagId: '',
  }
  beforeEach(async () => {
    data.folderId = (
      await folderApi.create({
        id: data.folderId,
        title: '测试目录',
        parent_id: '',
      })
    ).id
    data.noteId = (
      await noteApi.create({
        title: '测试标题',
        body: '',
        parent_id: data.folderId,
      })
    ).id
    data.tagId = (await tagApi.create({ title: '测试标签' })).id
    await tagApi.addTagByNoteId(data.tagId, data.noteId)
  })
  afterEach(async () => {
    // await noteApi.remove(data.noteId)
    // await tagApi.remove(data.tagId)
    // await folderApi.remove(data.folderId)

    // const clear = async (api: any) =>
    //   (await api.list()).map(({ id }: any) => api.remove(id))
    // await Promise.all([folderApi, noteApi, tagApi].flatMap(clear))

    await Promise.all(
      (await folderApi.list()).map(({ id }) => folderApi.remove(id)),
    )
    await Promise.all(
      (await noteApi.list()).map(({ id }) => noteApi.remove(id)),
    )
    await Promise.all((await tagApi.list()).map(({ id }) => tagApi.remove(id)))
  })
  return data
}
