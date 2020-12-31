export interface BaseJoplinIntegrated {
  /**
   * 导出笔记数据的基类
   */
  handle(): Promise<void>
}
