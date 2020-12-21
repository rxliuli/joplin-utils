import { DateTime } from 'luxon'
import * as yaml from 'yaml'
import unified = require('unified')
import * as remarkParse from 'remark-parse'
import visit = require('unist-util-visit')
import { Link } from 'mdast'
import { Settings } from 'unified'
import * as remarkStringify from 'remark-stringify'
import unistUtilMap = require('unist-util-map')
import { format, Options } from 'prettier'

export interface NoteMeta {
  layout: string
  title: string
  abbrlink: string
  date: number
  updated: number
  tags: string[]
}

export class MarkdownUtil {
  /**
   * 为导出的 markdown 文件添加元数据
   * @param content
   * @param meta
   */
  static addMeta(content: string, meta: NoteMeta): string {
    const formatter = 'yyyy-MM-dd hh:mm:ss'
    const metaStr = yaml.stringify({
      layout: 'post',
      title: meta.title,
      abbrlink: meta.abbrlink,
      date: DateTime.fromMillis(meta.date).toFormat(formatter),
      updated: DateTime.fromMillis(meta.updated).toFormat(formatter),
      tags: meta.tags,
    })
    return '---\n' + metaStr + `---\n\n` + content
  }

  /**
   * 扫描笔记中的 joplin 内部链接
   * 包括
   * 图像
   * 附件
   * 引用笔记
   */
  static scanResource(content: string): string[] {
    const processor = unified().use(remarkParse)
    const res: string[] = []
    visit(processor.parse(content), ['link', 'image'], (node: Link) => {
      res.push(node.url)
    })
    return res
      .filter((link) => link.startsWith(':/'))
      .map((link) => link.slice(2))
  }

  /**
   * 转换笔记中的 joplin 内部链接
   * @param content
   * @param map
   */
  static convertResource(content: string, map: Map<string, string>) {
    const settings: Settings = {
      bullet: '-',
      fences: true,
      incrementListMarker: false,
    }
    const processor = unified().use(remarkParse).use(remarkStringify, settings)
    const tree = unistUtilMap(processor.parse(content), (node) => {
      if (node.type !== 'link' && node.type !== 'image') {
        return node
      }
      const link = node as Link
      if (!link.url.startsWith(':/')) {
        return link
      }
      return {
        ...node,
        url: map.get(link.url.slice(2)),
      } as Link
    })
    const options: Options = { parser: 'markdown', tabWidth: 2 }
    return format(processor.stringify(tree), options)
  }
}
