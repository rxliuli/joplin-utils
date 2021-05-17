import { SearchNote } from '../model/SearchNote'

export interface BaseSearchEngineAdapter {
  /**
   * 匹配规则
   */
  matches: string[]

  /**
   * 搜索引擎的名字
   */
  name: string

  /**
   * 解析网页搜索的关键词
   */
  parseKeyword(): string | null

  /**
   * 渲染检索到的笔记数据
   */
  render(noteList: SearchNote[]): void
}
