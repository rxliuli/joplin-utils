import { TranslateKeyConfig } from './Generator'
import { uniqueBy } from '@liuli-util/array'

export interface LocaleJSON {
  path: string
  data: object
}

/**
 * 解析每个 json 文件得到生成类型定义所需的结构
 */
export class Parser {
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
   * 解析单个配置文件，压平所有的 key
   * @param locale
   */
  protected parseLocale(locale: object): TranslateKeyConfig[] {
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

    return Object.entries(locale).flatMap(([k, v]) => f(k, v, []))
  }

  parse(locales: LocaleJSON[]): TranslateKeyConfig[] {
    const arr = locales.flatMap((value) => this.parseLocale(value.data))
    return uniqueBy(arr, (config) => config.key)
  }
}
