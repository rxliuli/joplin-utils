import { config, folderApi, noteApi, noteExtApi, PageUtil } from 'joplin-api'
import { AsyncArray } from '../../src/util/AsyncArray'

it.skip('扫描没有父级目录的笔记', async () => {
  config.token = process.env.token as string
  const noteList = await PageUtil.pageToAllList(noteApi.list, {
    fields: ['id', 'title', 'parent_id'],
  })
  const notParentNoteList: typeof noteList = await new AsyncArray(
    noteList,
  ).filter(async (note) => {
    try {
      await folderApi.get(note.parent_id)
      return false
    } catch (e) {
      return true
    }
  })
  console.log(
    'notParentNoteList: ',
    notParentNoteList.length,
    notParentNoteList,
  )
  const createFolder = await folderApi.create({
    title: 'temp',
    parent_id: '',
  })
  await new AsyncArray(notParentNoteList).forEach(async (note) => {
    await noteExtApi.move(note.id, createFolder.id)
  })
})
