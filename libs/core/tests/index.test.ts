import {
  BaseExportBlogHooks,
  ExportBlogProcess,
  FindNoteEntity,
  NoteFile,
} from '../src'
import {
  config,
  noteApi,
  PageUtil,
  resourceApi,
  searchApi,
  TypeEnum,
} from 'joplin-api'
import * as path from 'path'
import { AsyncArray } from '../src/util/AsyncArray'
import MarkdownIt = require('markdown-it')
import * as yaml from 'yaml'
import { DateTime } from 'luxon'
import { arrayToMap } from '../src/util/arrayToMap'
import { copyFile } from 'fs-extra'

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
    const formatter = 'yyyy-MM-dd hh:mm:ss'
    const meta = yaml.stringify({
      layout: 'post',
      title: note.title,
      abbrlink: note.id,
      date: DateTime.fromMillis(note.user_created_time).toFormat(formatter),
      updated: DateTime.fromMillis(note.user_updated_time).toFormat(formatter),
      tags: note.tags,
    })
    return '---\n' + meta + `---\n\n` + note.body
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
  it('测试 token 变换', async () => {
    const resourceList = await PageUtil.pageToAllList(resourceApi.list, {
      fields: ['id', 'file_extension'],
    })
    const resourceMap = arrayToMap(resourceList, (resource) => resource.id)
    const useResourceIdList: string[] = []
    const md = new MarkdownIt({
      replaceLink(link, env) {
        if (!link.startsWith(':/')) {
          return link
        }
        const id = link.slice(2)
        if (!resourceMap.has(id)) {
          //也有可能是引用的笔记
          console.warn('id 不存在: ', id)
          return link
        }
        useResourceIdList.push(id)
        return '/resource/' + id + '.' + resourceMap.get(id)!.file_extension
      },
    } as MarkdownIt.Options & {
      replaceLink(link: string, env: string): string
    }).use(require('markdown-it-replace-link'))
    const res = md.render(
      (await noteApi.get('5d8273edf5a14756ad629358b6c8c005', ['body'])).body,
    )

    const resourceOriginPath = path.resolve(
      'D:/Program/JoplinPortable/JoplinProfile/resources',
    )
    const resourceOutPath = path.resolve(
      __dirname,
      'resource/hexo-example/source/resource/',
    )
    await Promise.all(
      useResourceIdList.map(async (id) => {
        const fileName = id + '.' + resourceMap.get(id)!.file_extension
        await copyFile(
          path.resolve(resourceOriginPath, fileName),
          path.resolve(resourceOutPath, fileName),
        )
      }),
    )
    console.log(res)
  })
})
