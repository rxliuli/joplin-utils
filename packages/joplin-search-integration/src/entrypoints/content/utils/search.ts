import { searchApi, TypeEnum } from 'joplin-api'
import { trimTitleStart } from './trim'

export async function search(keyword: string) {
  const res = await searchApi.search({
    query: keyword,
    type: TypeEnum.Note,
    limit: 10,
    fields: ['id', 'title'],
    order_by: 'user_updated_time',
  })
  return res.items.map((item) => ({
    ...item,
    title: trimTitleStart(item.title),
  }))
}
