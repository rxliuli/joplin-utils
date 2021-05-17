import * as yaml from 'yaml'

export class JoplinMarkdownUtil {
  /**
   * 为导出的 markdown 文件添加元数据
   * @param content
   * @param meta
   */
  static addMeta(content: string, meta: object): string {
    const metaStr = yaml.stringify(meta)
    return '---\n' + metaStr + `---\n\n` + content
  }

  /**
   * 消除第一行可能包含的 # 字符号
   * @param title
   */
  static trimTitle(title: string) {
    return (title.startsWith('#') ? title.substr(1).trimLeft() : title).replace(
      new RegExp('[\r\n]'),
      '',
    )
  }
}

export interface ListNode {
  id: string
  title: string
  children?: ListNode[]
}
