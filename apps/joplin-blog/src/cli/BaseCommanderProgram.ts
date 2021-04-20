export interface BaseCommanderProgram {
  /**
   * 入口函数
   */
  main: (...args: any[]) => Promise<void>
}
