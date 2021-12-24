import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import { PageUtil } from 'joplin-api'
import { AsyncArray } from '@liuli-util/async'
import type { ContentLink, MarkdownLinkUtil } from './MarkdownLinkUtil'
import MarkdownLinkUtilWorker from './MarkdownLinkUtil?worker'
import { wrap } from 'comlink'
import { joplinApiGenerator } from '../../../constants/joplinApiGenerator'

export type NoteModel = Pick<
  NoteProperties,
  'id' | 'title' | 'body' | 'user_updated_time'
> & { urls: MappingContentLink[] }

export type MappingContentLink = ContentLink & {
  matchNotes?: Pick<NoteProperties, 'id' | 'title'>[]
}

export class ConvertExternalLinkService {
  private readonly markdownLinkUtilWorker = wrap<typeof MarkdownLinkUtil>(
    new MarkdownLinkUtilWorker(),
  )
  /**
   * 搜索笔记
   * @param linkPrefix
   */
  async search(linkPrefix: string): Promise<NoteModel[]> {
    const list = await PageUtil.pageToAllList(
      joplinApiGenerator.searchApi.search.bind(joplinApiGenerator.searchApi),
      {
        query: `body:"${linkPrefix}"`,
        fields: ['id', 'title', 'body', 'user_updated_time'],
        order_by: 'user_updated_time',
        order_dir: 'DESC',
      },
    )

    return await AsyncArray.map(list, async (item) => {
      const contentLinks = await this.markdownLinkUtilWorker.parseLink(
        item.body,
      )
      Reflect.deleteProperty(item, 'body')
      return {
        ...item,
        urls: await ConvertExternalLinkService.mapContentLinks(
          contentLinks,
          linkPrefix,
        ),
      }
    })
  }

  /**
   * 映射链接
   * @param contentLinks
   * @param linkPrefix
   */
  static mapContentLinks(
    contentLinks: ContentLink[],
    linkPrefix: string,
  ): Promise<MappingContentLink[]> {
    return AsyncArray.map(
      contentLinks.filter((link) => link.url.startsWith(linkPrefix)),
      async (link) => {
        if (!link.title) {
          return link
        }
        const matchNotes = (
          await joplinApiGenerator.searchApi.search({
            query: `title:"${link.title}"`,
            limit: 3,
            fields: ['id', 'title'],
          })
        ).items
        return {
          ...link,
          matchNotes,
        }
      },
    )
  }

  /**
   * 转换链接
   * @param id
   * @param convertLinkMap
   */
  async convert(id: string, convertLinkMap: Record<string, ContentLink>) {
    const note = await joplinApiGenerator.noteApi.get(id, ['id', 'body'])
    const content = await this.markdownLinkUtilWorker.convertLink(
      note.body,
      convertLinkMap,
    )
    await joplinApiGenerator.noteApi.update({
      id: note.id,
      body: content,
      user_updated_time: Date.now(),
    })
  }
}
