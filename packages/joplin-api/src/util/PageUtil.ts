import { PageParam, PageRes } from '../model/PageData'
import { NoteProperties } from '../model/NoteProperties'
import { TypeEnum } from '../model/TypeEnum'
import { FieldsParam } from '../model/FieldsParam'
import { CommonType } from '../model/CommonType'

type PageResValueType<T extends Promise<PageRes<any>>> = T extends Promise<PageRes<infer U>> ? U : never

export class PageUtil {
  /**
   * 最大分页数量
   * @private
   */
  private static readonly MaxLimit = 100

  /**
   * Get all list from page
   * Get max limit each time, reduce request times
   * @param fn - The function to get page data
   * @param pageParam - The page parameter
   * @returns The all list
   */
  static async pageToAllList<F extends (pageParam: PageParam<any> & Record<string, any>) => Promise<PageRes<any>>>(
    fn: F,
    pageParam?: Omit<Parameters<F>[0], 'page' | 'limit'>,
  ): Promise<PageResValueType<ReturnType<F>>[]>
  static async pageToAllList<
    K extends keyof NoteProperties,
    F extends (
      pageParam: {
        query: string
        type?: TypeEnum
      } & PageParam<NoteProperties> &
        FieldsParam<K>,
    ) => Promise<PageRes<Pick<NoteProperties, K> & CommonType>>,
  >(
    fn: F,
    pageParam: {
      query: string
      type?: TypeEnum
    } & PageParam<NoteProperties> &
      FieldsParam<K>,
  ): Promise<(Pick<NoteProperties, K> & CommonType)[]>
  static async pageToAllList<F extends (...args: any[]) => Promise<any>>(
    fn: F,
    pageParam?: Omit<Parameters<F>[0], 'page' | 'limit'>,
  ): Promise<PageResValueType<ReturnType<F>>[]> {
    const list: PageResValueType<ReturnType<F>>[] = []
    for (let i = 1, hasMore = true; hasMore; i++) {
      const res = await fn({
        ...pageParam,
        page: i,
        limit: this.MaxLimit,
      })
      hasMore = res.has_more
      list.push(...res.items)
    }
    return list
  }
}
