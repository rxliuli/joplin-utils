import path from 'path'

interface HexoInstanceConfig {
  rootPath: string
}

export class HexoInstance {
  constructor(private config: HexoInstanceConfig) {
    this.config.rootPath = path.resolve(this.config.rootPath)
  }

  /**
   * 初始化一个 hexo 项目
   */
  async init() {
    throw new Error()
  }

  /**
   * 检查是否为 hexo 项目
   */
  async check() {
    throw new Error()
  }

  /**
   * 生成配置
   * @param key
   */
  async getConfig(key: string): Promise<string> {
    throw new Error()
  }

  /**
   * 设置配置
   * @param key
   * @param val
   */
  async setConfig(key: string, val: string) {
    throw new Error()
  }
}
