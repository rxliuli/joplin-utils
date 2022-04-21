import { JoplinApiGenerator, PageUtil } from 'joplin-api'
import { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'
import { parseInternalLink } from './parseInternalLink'
import { AsyncArray, asyncLimiting } from '@liuli-util/async'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import { PromiseUtil } from '../../../common/PromiseUtil'
import { ProcessInfo } from '../../unusedResource/service/UnusedResourceService'

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
      events.load('开始加载所有附件资源')
      const resourceIdSet = new Set((await this.getAllResourceIdList()).map((item) => item.id))
      events.load('开始加载所有笔记')
      const noteList: Pick<NoteProperties, 'id' | 'title' | 'body' | 'user_updated_time'>[] =
        await PageUtil.pageToAllList(this.config.noteApi.list.bind(this.config.noteApi), {
          fields: ['id', 'title', 'body', 'user_updated_time'],
        })
      const noteIdSet = noteList.reduce((res, item) => res.add(item.id), new Set<string>())
      events.load('开始解析所有笔记')
      let rate = 0
      const resolvedNoteList = await AsyncArray.map(
        noteList,
        asyncLimiting(async (item) => {
          const links = parseInternalLink(item.body)
          const errorLinks = links.filter((item) => {
            return !resourceIdSet.has(item.id) && !noteIdSet.has(item.id)
          })
          rate++
          events.parse({
            rate,
            all: noteList.length,
            title: item.title || '未知文件名',
          })
          return {
            ...item,
            errorLinks,
          }
        }, 10),
      )
      console.log('resolvedNoteList: ', resolvedNoteList)
      return resolvedNoteList.filter((item) => item.errorLinks.length !== 0)
    })
  }

  async getAllResourceIdList() {
    return (await PageUtil.pageToAllList(this.config.resourceApi.list.bind(this.config.resourceApi), {
      fields: ['id', 'title', 'mime'] as (keyof ResourceProperties)[],
    })) as Pick<ResourceProperties, 'id'>[]
  }
}
