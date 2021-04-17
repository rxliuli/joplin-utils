import { uniqueBy } from '@liuli-util/array'

/**
 * 翻译的字符串
 */
export interface TranslateKeyConfig {
  key: string
  params?: string[]
}

export class TranslateHandler {
  static replaceSpecialCharacters(key: string): string {
    return key.replace(new RegExp("'", 'g'), "\\'")
  }

  protected buildParams(params: string[]) {
    const res = params
      .map((key) => {
        if (key.includes('.')) {
          throw new Error('目前尚不不支持嵌套参数')
        }
        return `'${TranslateHandler.replaceSpecialCharacters(
          key,
        )}': string|number`
      })
      .join('\n')
    return '{' + res + '}'
  }

  /**
   * 根据单个 key 进行构造
   * @param config
   */
  protected buildKey(config: TranslateKeyConfig): string {
    const key = TranslateHandler.replaceSpecialCharacters(config.key)
    if (!config.params) {
      return `[key: '${key}']`
    }
    return `[key: '${key}', params: ${this.buildParams(config.params)}]`
  }

  /**
   * 构造一个类型定义字符串
   * @param configList
   */
  build(configList: TranslateKeyConfig[]): string {
    const types = configList.map((config) => this.buildKey(config)).join('|')
    return 'export type TranslateParams = ' + types
  }

  /**
   * 解析带参数的翻译字符串
   * @param str
   * @protected
   */
  protected parseVal(str: string): string[] | null {
    const paramRegExp = new RegExp('{{(.*?)}}', 'g')
    const matchRes = str.match(paramRegExp)
    if (!matchRes) {
      return null
    }
    return matchRes.map((s) => s.substr(2, s.length - 4))
  }

  /**
   * 解析一个 json 文件为结构化配置
   * @param json
   */
  protected parseConfig(json: object): TranslateKeyConfig[] {
    const f = (
      key: string,
      val: string | object,
      parents: string[],
    ): TranslateKeyConfig[] => {
      if (typeof val === 'string') {
        return [
          {
            key: [...parents, key].join('.'),
            params: this.parseVal(val) || undefined,
          },
        ]
      }
      return Object.entries(val).flatMap(([k, v]) => f(k, v, [...parents, key]))
    }

    return Object.entries(json).flatMap(([k, v]) => f(k, v, []))
  }

  /**
   * 解析多个 json 文件为结构化配置
   * 主要是为了处理部分语言 key 不完整的问题
   * 注：没有处理多个语言的翻译文件 key 对应的文本的参数不一致的问题
   * @param jsonList
   */
  parse(jsonList: object[]): TranslateKeyConfig[] {
    const arr = jsonList.flatMap((json) => this.parseConfig(json))
    return uniqueBy(arr, (config) => config.key)
  }
}
