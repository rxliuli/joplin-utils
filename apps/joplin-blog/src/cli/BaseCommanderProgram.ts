export interface BaseCommanderProgram {
  /**
   * 入口函数
   */
  main(): Promise<void>
}
