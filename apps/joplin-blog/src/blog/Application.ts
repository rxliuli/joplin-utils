import { AsyncArray, asyncLimiting } from '@liuli-util/async'
import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import path from 'path'
import { config, noteApi, PageUtil, searchApi, TypeEnum } from 'joplin-api'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'

export interface BaseIntegrated {
  /**
   * 解析笔记，得到一个替换后的笔记文本和一些资源
   * @param note
   */
  parse(
    note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] },
  ): string

  /**
   * 初始化操作
   * 例如清空自动生成的目录
   */
  init(): Promise<void>

  /**
   * 根据框架将笔记写入指定位置
   * @param note
   */
  write(note: CommonNote & { text: string }): Promise<void>

  /**
   * 复制资源到笔记指定位置
   * @param resourcePath
   */
  copy(resourcePath: string): Promise<void>
}

export interface ApplicationConfig {
  token: string
  port?: number
  joplinProfilePath: string
  tag: string
}

/**
 * 入口程序
 */
export class Application {
  constructor(
    private readonly config: ApplicationConfig,
    private handler: BaseIntegrated,
  ) {}

  async filter() {
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
        query: `tag:${this.config.tag}`,
      }),
    )
    return list.map(
      ({ id, title, body, user_created_time, user_updated_time }) =>
        ({
          id,
          title,
          body,
          createdTime: user_created_time,
          updatedTime: user_updated_time,
        } as CommonNote),
    )
  }

  async check() {
    try {
      config.token = this.config.token
      config.port = this.config.port || 41184
      await noteApi.list({ fields: ['id'], limit: 1 })
    } catch (e) {
      throw e
    }
  }

  async gen() {
    await this.check()
    //获取所有笔记及其相关的资源和标签
    const arr = await this.filter()
    console.log(`一共有 ${arr.length} 个笔记需要处理`)
    const noteList = await new AsyncArray(
      arr.map((note) => ({
        ...note,
        title: JoplinMarkdownUtil.trimTitle(note.title),
      })),
    ).map(
      asyncLimiting(async (note) => {
        console.log('正在读取笔记附件与标签: ', note.title)
        const [resources, tags] = await Promise.all([
          noteApi.resourcesById(note.id, ['id', 'title', 'file_extension']),
          noteApi.tagsById(note.id),
        ])
        return {
          ...note,
          resources: resources as CommonResource[],
          tags: tags as CommonTag[],
        }
      }, 10),
    )
    //初始化
    await this.handler.init()
    //解析并写入笔记
    await AsyncArray.forEach(
      noteList.map((note) => {
        console.log('正在解析笔记中的 Joplin 内部链接与附件资源: ', note.title)
        return {
          ...note,
          text: this.handler.parse(note),
        }
      }),
      async (item) => {
        console.log('正在写入笔记: ', item.title)
        await this.handler.write(item)
        return item
      },
    )
    //复制资源
    await AsyncArray.forEach(
      noteList.flatMap((item) => item.resources),
      asyncLimiting(async (resource: CommonResource) => {
        console.log('正在处理资源: ', path.basename(resource.title))
        const fileName = resource.id + '.' + resource.file_extension
        await this.handler.copy(
          path.resolve(this.config.joplinProfilePath, 'resources', fileName),
        )
      }, 10),
    )
  }
}
