import { JoplinApiGenerator, PageUtil } from 'joplin-api'
import { ResourceProperties } from 'joplin-api'
import { parseInternalLink } from './parseInternalLink'
import { AsyncArray, asyncLimiting } from '@liuli-util/async'
import { NoteProperties } from 'joplin-api'
import { PromiseUtil } from '../../../common/PromiseUtil'
import { ProcessInfo } from '../../unusedResource/service/UnusedResourceService'
import { i18n } from '../../../constants/i18n'

interface CheckErrorResourceEvents {
  load(title: string): void
  /**
   * 解析 markdown
   * @param options
   */
  parse(options: ProcessInfo): void
}

export class NotFoundResourceCheckService {
  constructor(private readonly config: JoplinApiGenerator) {}

  check() {
    return PromiseUtil.warpOnEvent(async (events: CheckErrorResourceEvents) => {
      events.load(i18n.t('notFoundResource.loadResources'))
      const resourceIdSet = new Set((await this.getAllResourceIdList()).map((item) => item.id))
      events.load(i18n.t('notFoundResource.loadNotes'))
      const noteList: Pick<NoteProperties, 'id' | 'title' | 'body' | 'user_updated_time'>[] =
        await PageUtil.pageToAllList(this.config.noteApi.list.bind(this.config.noteApi), {
          fields: ['id', 'title', 'body', 'user_updated_time'],
        })
      const noteIdSet = noteList.reduce((res, item) => res.add(item.id), new Set<string>())
      events.load(i18n.t('notFoundResource.parseNotes'))
      let rate = 0
      const allLinks: string[] = []
      const resolvedNoteList = await AsyncArray.map(
        noteList,
        asyncLimiting(async (item) => {
          const links = parseInternalLink(item.body)
          allLinks.push(...links.map((item) => item.id))
          const errorLinks = links.filter((item) => {
            return !resourceIdSet.has(item.id) && !noteIdSet.has(item.id)
          })
          rate++
          events.parse({
            rate,
            all: noteList.length,
            title: item.title ?? i18n.t('notFoundResource.unknownFileName', { id: item.id }),
          })
          return {
            ...item,
            errorLinks,
          }
        }, 10),
      )
      const res = resolvedNoteList.filter((item) => item.errorLinks.length !== 0)
      console.log('debug data: ', {
        resourceIdList: [...resourceIdSet],
        noteIdList: [...noteIdSet],
        allLinks,
        resolvedNoteList: res.map((item) => ({
          id: item.id,
          errorLinks: item.errorLinks.map((item) => item.id),
        })),
      })
      return res
    })
  }

  async getAllResourceIdList() {
    return (await PageUtil.pageToAllList(this.config.resourceApi.list.bind(this.config.resourceApi), {
      fields: ['id', 'title', 'mime'] as (keyof ResourceProperties)[],
    })) as Pick<ResourceProperties, 'id'>[]
  }
}
