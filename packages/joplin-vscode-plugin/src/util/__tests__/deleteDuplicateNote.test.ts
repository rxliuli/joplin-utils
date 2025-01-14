import { fileURLToPath } from 'url'
import { it, describe, beforeEach } from 'vitest'
import { PageUtil } from 'joplin-api'
import * as path from 'path'
import { groupBy, sortBy } from '@liuli-util/array'
import { NoteProperties } from 'joplin-api'
import { mkdir, rm, writeFile } from 'fs/promises'
import { GlobalContext } from '../../constants/context'

describe('Delete duplicate notes', () => {
  const tempPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.temp/exportDuplicationNoteList')
  beforeEach(async () => {
    await rm(tempPath, { force: true, recursive: true })
    await mkdir(tempPath, { recursive: true })
  })
  it('Load all duplicate notes', async () => {
    const noteList = await PageUtil.pageToAllList(GlobalContext.api.note.list, {
      fields: ['id', 'title', 'user_updated_time', 'body'],
    })
    const map = groupBy(noteList, (note) => note.title)
    const deleteNoteList = Object.entries(map)
      .filter(([_, notes]) => notes.length > 1)
      .map(
        ([_, notes]) =>
          sortBy(
            notes as Pick<NoteProperties, 'user_updated_time' | 'title' | 'body' | 'id'>[],
            (note) => note.user_updated_time,
          )[0],
      )
    await mkdir(tempPath, { recursive: true })
    for (let note of deleteNoteList) {
      const filePath = path.resolve(tempPath, note.title.trim() + '.md')
      try {
        await writeFile(filePath, note.body, {
          encoding: 'utf-8',
        })
        await GlobalContext.api.note.remove(note.id)
      } catch (e) {
        console.log('Delete failed: ', note.title)
      }
    }
  })
})
