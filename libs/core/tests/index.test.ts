import {
  BaseExportBlogHooks,
  ExportBlogProcess,
  FindNoteEntity,
  NoteFile,
} from '../src'
import { noteApi, PageUtil, searchApi, TypeEnum } from 'joplin-api'
import * as path from 'path'
import { AsyncArray } from '../src/util/AsyncArray'
import { MarkdownUtil } from '../src/util/MarkdownUtil'
import { noteExtensionApi } from '../src/api/NoteExtensionApi'
import { uniq } from 'lodash'
import { copyFile, pathExists } from 'fs-extra'

class HexoHooks implements BaseExportBlogHooks {
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
  async mdConvert(note: FindNoteEntity) {
    const res = await MarkdownUtil.convertLink(note.body)
    return MarkdownUtil.addMeta(res, {
      layout: 'post',
      title: note.title,
      abbrlink: note.id,
      date: note.user_created_time,
      updated: note.user_updated_time,
      tags: note.tags,
    })
  }

  async resolve(
    noteList: FindNoteEntity[],
    profilePath: string,
  ): Promise<NoteFile[]> {
    await new AsyncArray(noteList)
      .parallel()
      .flatMap(async (note) => uniq(MarkdownUtil.scanResource(note.body)))
      .map((id) => noteExtensionApi.find(id))
      .filter(async (item) => item.type_ === TypeEnum.Resource)
      .map(async (item) => {
        if (item.type_ !== TypeEnum.Resource) {
          throw new Error()
        }
        return item.id + '.' + item.file_extension
      })
      .forEach(async (fileName) => {
        const resourcePath = path.resolve(profilePath, 'resources', fileName)
        console.log('fileName: ', resourcePath, await pathExists(resourcePath))
        try {
          await copyFile(
            resourcePath,
            path.resolve(
              __dirname,
              'resource/hexo-example/source/resource/',
              fileName,
            ),
          )
        } catch (e) {
          console.error(e)
        }
      })
    return new AsyncArray(noteList).parallel().map(async (note) => {
      return {
        fileName: `${note.id}.md`,
        content: await this.mdConvert(note),
      } as NoteFile
    })
  }
}

describe('测试 ExportBlogProcess', () => {
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
