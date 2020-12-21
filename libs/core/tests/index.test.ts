import {
  BaseExportBlogHooks,
  ExportBlogProcess,
  FindNoteEntity,
  NoteFile,
} from '../src'
import { config, noteApi, PageUtil, searchApi, TypeEnum } from 'joplin-api'
import * as path from 'path'
import { AsyncArray } from '../src/util/AsyncArray'
import MarkdownIt = require('markdown-it')
import { MarkdownUtil } from '../src/util/MarkdownUtil'

class HexoHooks implements BaseExportBlogHooks {
  private readonly md: MarkdownIt

  constructor() {
    this.md = new MarkdownIt()
  }

  async noteList() {
    const list = await PageUtil.pageToAllList((pageParam) =>
      searchApi.search({
        ...(pageParam as any),
        fields: [
          'id',
          'title',
          'body',
          'user_created_time',
          'user_updated_time',
        ],
        type: TypeEnum.Note,
        query: `tag:${'blog'}`,
      }),
    )

    return new AsyncArray(list).map(async (note) => {
      const tags = await noteApi.tagsById(note.id)
      return {
        ...note,
        tags: tags.map((str) => str.title),
      } as FindNoteEntity
    })
  }

  async path() {
    return path.resolve(__dirname, 'resource/hexo-example/source/_posts')
  }

  async pub() {
    console.log('正在尝试发布...')
  }

  /**
   * 将结构化的笔记转换为发布格式的 markdown 内容
   * @param note
   */
  mdConvert(note: FindNoteEntity): string {
    return MarkdownUtil.addMeta(note.body, {
      layout: 'post',
      title: note.title,
      abbrlink: note.id,
      date: note.user_created_time,
      updated: note.user_updated_time,
      tags: note.tags,
    })
  }

  async resolve(noteList: FindNoteEntity[]) {
    return noteList.map(
      (note) =>
        ({
          fileName: `${note.id}.md`,
          content: this.mdConvert(note),
        } as NoteFile),
    )
  }
}

describe('测试 ExportBlogProcess', () => {
  beforeAll(() => {
    config.token = process.env.token as string
  })
  it('基本示例', async () => {
    await new ExportBlogProcess(new HexoHooks()).exp()
  })
  it.skip('测试能否使用搜索 api 获取资源的类型--确定不可行', async () => {
    const res = await searchApi.search({
      query: 'id=5d8273edf5a14756ad629358b6c8c005',
    })
    console.log(res)
  })
})
