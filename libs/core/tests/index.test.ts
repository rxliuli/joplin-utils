import { BaseExportBlogHooks, ExportBlogProcess, NoteFile } from '../src'
import { noteApi } from 'joplin-api'
import * as path from 'path'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'

class HexoHooks implements BaseExportBlogHooks {
  async noteList() {
    return (
      await noteApi.list({
        fields: ['id', 'title', 'body'],
      })
    ).items
  }

  async path() {
    return path.resolve(__dirname, 'resource')
  }

  async pub() {
    console.log('正在尝试发布...')
  }

  async resolve(noteList: Pick<NoteProperties, 'id' | 'title' | 'body'>[]) {
    return noteList.map(
      (note) =>
        ({
          fileName: `${note.id}.md`,
          content: note.body,
        } as NoteFile),
    )
  }
}

describe('测试 ExportBlogProcess', () => {
  it('基本示例', async () => {
    await new ExportBlogProcess(new HexoHooks()).exp()
  })
})
