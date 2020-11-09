import { PageParam, PageRes } from '../modal/PageData'
import { asyncLimiting } from './asyncLimiting'
import { AsyncArray } from './AsyncArray'

type PageResValueType<T extends Promise<PageRes<any>>> = T extends Promise<
  PageRes<infer U>
>
  ? U
  : never

export class PageUtil {
  /**
   * 最大分页数量
   * @private
   */
  private static readonly MaxLimit = 100

  /**
   * 循环获取所有分页的数据
   * 每次都获取最大分页数量，尽可能减少请求次数
   */
  static async pageToAllList<
    F extends (
      pageParam: PageParam<any> & Record<string, any>,
    ) => Promise<PageRes<any>>
  >(
    fn: F,
    pageParam?: Omit<Parameters<F>[0], 'cursor' | 'limit'>,
  ): Promise<PageResValueType<ReturnType<F>>[]> {
    let cursor: string | undefined
    const list: PageResValueType<ReturnType<F>>[] = []
    do {
      // noinspection JSUnusedAssignment
      const res = await fn({ ...pageParam, cursor, limit: this.MaxLimit })
      cursor = res.cursor
      list.push(...res.items)
    } while (cursor)
    return list
  }

  /**
   * 循环获取所有分页的数据（并发，目前设定并发数量为 10）
   * 适用于大量数据的一次性全部获取，例如需要获取所有笔记以展示某种图表
   * 每次都获取最大分页数量，尽可能减少请求次数
   */
  static async pageToAllListForParallel<
    F extends (
      pageParam: PageParam<any> & Record<string, any>,
    ) => Promise<PageRes<any>>
  >(
    fn: F,
    pageParam?: Omit<Parameters<F>[0], 'cursor' | 'limit'>,
    options?: { limit: number },
  ): Promise<PageResValueType<ReturnType<F>>[]> {
    let cursor: string | undefined
    const cursorList: (string | undefined)[] = []
    do {
      // noinspection JSUnusedAssignment
      const res = await fn({
        ...pageParam,
        fields: ['id'],
        cursor,
        limit: this.MaxLimit,
      })
      cursor = res.cursor
      if (res.cursor) {
        cursorList.push(res.cursor!)
      }
    } while (cursor)
    console.log('cursorList: ', cursorList)
    cursorList.unshift(undefined)
    const callback = asyncLimiting(async (cursor: string | undefined) => {
      const res = await fn({
        ...pageParam,
        cursor,
        limit: this.MaxLimit,
      })
      return res.items
    }, options?.limit || 10)
    return new AsyncArray(cursorList).parallel().flatMap(callback)
  }
}