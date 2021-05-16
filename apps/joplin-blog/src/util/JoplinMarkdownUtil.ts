import * as yaml from 'yaml'
import { treeMap } from '@liuli-util/tree'

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

  static buildList(tree: ListNode[], urlMap: (id: string) => string): string {
    return treeMap(
      tree,
      (item, path): ListNode & { text: string } => {
        const prefix = '  '.repeat(path.length) + '- '
        const suffix = '\n'
        let text: string
        if (!item.children) {
          text = prefix + `[${item.title}](${urlMap(item.id)})` + suffix
        } else {
          text =
            prefix +
            item.title +
            suffix +
            item.children
              .map((sub: ListNode & { text: string }) => sub.text)
              .join('')
        }
        return {
          ...item,
          text,
        }
      },
      {
        id: 'id',
        children: 'children',
      },
    )
      .map((item) => item.text)
      .join('')
  }
}

export interface ListNode {
  id: string
  title: string
  children?: ListNode[]
}
