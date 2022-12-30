import { NoteProperties } from 'joplin-api'

export type SearchNote = Pick<NoteProperties, 'id' | 'title'>

export interface SearchPlugin {
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
  getQuery(): string | undefined

  /**
   * 渲染检索到的笔记数据
   */
  render(noteList: SearchNote[]): void
}
