import { config, noteApi, PageUtil, resourceApi } from 'joplin-api'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'
import { parseInternalLink } from '../parseInternalLink'

it('测试 NotFoundResourceCheckService', async () => {
  const resourceIdSet = new Set(
    (
      (await PageUtil.pageToAllList(resourceApi.list.bind(resourceApi), {
        fields: ['id', 'title', 'mime'] as (keyof ResourceProperties)[],
      })) as Pick<ResourceProperties, 'id'>[]
    ).map((item) => item.id),
  )
  const noteList: Pick<NoteProperties, 'id' | 'title' | 'body' | 'user_updated_time'>[] = await PageUtil.pageToAllList(
    noteApi.list.bind(noteApi),
    {
      fields: ['id', 'title', 'body', 'user_updated_time'],
    },
  )
  const noteIdSet = noteList.reduce((res, item) => res.add(item.id), new Set<string>())
  console.log('noteList: ', noteList[0])
  const links = noteList.flatMap((item) => parseInternalLink(item.body))
  console.log(links)
  const res = links.filter((item) => !resourceIdSet.has(item.id) && !noteIdSet.has(item.id))
  console.log(res)
})
