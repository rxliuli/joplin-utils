import { PageParam, PageRes } from '../modal/PageData'

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
}