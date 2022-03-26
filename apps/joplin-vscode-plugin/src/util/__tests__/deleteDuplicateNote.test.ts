import { noteApi, PageUtil } from 'joplin-api'
import * as path from 'path'
import { mkdirp, remove, writeFile } from 'fs-extra'
import { groupBy, sortBy } from '@liuli-util/array'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'

describe('删除重复的笔记', () => {
  const tempPath = path.resolve(__dirname, '.temp/exportDuplicationNoteList')
  beforeEach(async () => {
    await remove(tempPath)
    await mkdirp(tempPath)
  })
  it('加载所有重复的笔记', async () => {
    const noteList = await PageUtil.pageToAllList(noteApi.list, {
      fields: ['id', 'title', 'user_updated_time', 'body'],
    })
    const map = groupBy(noteList, (note) => note.title)
    const deleteNoteList = Object.entries(map)
      .filter(([_, notes]) => notes.length > 1)
      .map(
        ([_, notes]) =>
          sortBy(
            notes as Pick<
              NoteProperties,
              'user_updated_time' | 'title' | 'body' | 'id'
            >[],
            (note) => note.user_updated_time,
          )[0],
      )
    await mkdirp(tempPath)
    for (let note of deleteNoteList) {
      const filePath = path.resolve(tempPath, note.title.trim() + '.md')
      try {
        await writeFile(filePath, note.body, {
          encoding: 'utf-8',
        })
        await noteApi.remove(note.id)
      } catch (e) {
        console.log('删除失败: ', note.title)
      }
    }
  })
})
