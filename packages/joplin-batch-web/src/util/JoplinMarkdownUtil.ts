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
    return (title.startsWith('#') ? title.substr(1).trimLeft() : title).replace(new RegExp('[\r\n]'), '')
  }

  /**
   * 清理正文的第一行标题（如果有）
   * @param body
   */
  static trimBodyHeader(body: string) {
    return body.startsWith('# ') ? body.split('\n').slice(1).join('\n').trimLeft() : body
  }
}

export interface ListNode {
  id: string
  title: string
  children?: ListNode[]
}
