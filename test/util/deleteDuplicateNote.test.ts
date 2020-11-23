import { config, noteApi, PageUtil } from 'joplin-api'
import { groupBy, sortBy } from 'lodash'
import * as path from 'path'
import { mkdirp, writeFile } from 'fs-extra'

describe('删除重复的笔记', () => {
  it('加载所有重复的笔记', async () => {
    config.token =
      'fc2f96db977465ea019ba0ebb148c2e212998fb7aec7a6b93a88c5fd86fe779e56d7c0229feb868c1b38df6a2390bd383bd1e2b090887569ae9e502b1a6d743f'
    const noteList = await PageUtil.pageToAllList(noteApi.list, {
      fields: ['id', 'title', 'user_updated_time', 'body'],
    })
    const map = groupBy(noteList, (note) => note.title)
    const deleteNoteList = Object.entries(map)
      .filter(([_, notes]) => notes.length > 1)
      .map(([_, notes]) => sortBy(notes, (note) => note.user_updated_time)[0])
    const dirPath = path.resolve(
      __dirname,
      'resource/exportDuplicationNoteList',
    )
    await mkdirp(dirPath)
    for (let note of deleteNoteList) {
      const filePath = path.resolve(dirPath, note.title.trim() + '.md')
      try {
        await writeFile(filePath, note.body, {
          encoding: 'utf-8',
        })
        await noteApi.remove(note.id)
      } catch (e) {
        console.log('删除失败: ', note.title)
      }
    }
  }, 100_000)
})
