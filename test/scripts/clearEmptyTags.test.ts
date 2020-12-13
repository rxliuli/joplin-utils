import { config, PageUtil, tagApi } from 'joplin-api'
import { AsyncArray } from '../../src/util/AsyncArray'
import { TagGetRes } from 'joplin-api/dist/modal/TagGetRes'

it('删除所有空的标签', async () => {
  config.token = process.env.token as string
  const tagList = await PageUtil.pageToAllList(tagApi.list)
  console.log('tagList: ', tagList)
  const removeTagList: TagGetRes[] = await new AsyncArray(tagList)
    .parallel()
    .filter(async (tag) => {
      const pageRes = await tagApi.notesByTagId({
        id: tag.id,
        limit: 1,
      })
      return pageRes.items.length === 0
    })
  console.log('removeTagList: ', removeTagList)
  await new AsyncArray(removeTagList).forEach(async (tag) => {
    await tagApi.remove(tag.id)
  })
})
