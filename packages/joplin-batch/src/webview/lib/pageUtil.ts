import { PageParam, PageRes } from 'joplin-api'

/**
 * 最大分页数量
 * @private
 */
const MaxLimit = 100

type PageResValueType<T extends Promise<PageRes<any>>> = T extends Promise<PageRes<infer U>> ? U : never

export function asGenerator<T, P extends PageParam<any>>(f: (param: P) => Promise<PageRes<T>>) {
  return async function* (pageParam?: Omit<P, 'page' | 'limit'>): AsyncGenerator<T> {
    for (let i = 1, hasMore = true; hasMore; i++) {
      const res = await f({
        ...pageParam,
        page: i,
        limit: MaxLimit,
      } as P)
      for (const it of res.items) {
        yield it
      }
      hasMore = res.has_more
    }
  }
}
