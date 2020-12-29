import unified = require('unified')
import visit = require('unist-util-visit')
import unistUtilMap = require('unist-util-map')
import { Link } from 'mdast'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import { noteApi, TypeEnum } from 'joplin-api'
import { arrayToMap } from './util/arrayToMap'
import { format, Options } from 'prettier'
import * as yaml from 'yaml'
import { DateTime } from 'luxon'

interface NoteMeta {
  layout: 'post'
  title: string
  abbrlink: string
  tags: string[]
  date: number
  updated: number
  sticky?: number
}

export class JoplinNoteParser {
  /**
   * 扫描笔记中的 joplin 内部链接
   * 包括
   * 图像/附件
   * 引用笔记
   */
  scanResource(content: string): string[] {
    const res: string[] = []
    visit(this.processor.parse(content), ['link', 'image'], (node: Link) => {
      res.push(node.url)
    })
    return res
      .filter((link) => link.startsWith(':/'))
      .map((link) => link.slice(2))
  }

  /**
   * 区分资源与笔记
   * @param noteId
   * @param idList
   */
  async mapResource(noteId: string, idList: string[]) {
    const resourceMap = arrayToMap(
      await noteApi.resourcesById(noteId, ['id', 'title', 'file_extension']),
      (item) => item.id,
    )
    return idList.map((id) => ({
      id,
      type: resourceMap.has(id) ? TypeEnum.Resource : TypeEnum.Note,
      title: resourceMap.get(id)?.title,
      file_extension: resourceMap.get(id)?.file_extension,
    }))
  }

  private readonly processor = unified().use(remarkParse).use(remarkStringify, {
    bullet: '-',
    fences: true,
    incrementListMarker: false,
  })

  /**
   * 转换笔记中的 joplin 内部链接
   * @param content
   * @param map
   */
  convertResource(content: string, map: Map<string, string>) {
    const tree = unistUtilMap(this.processor.parse(content), (node) => {
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
    return format(this.processor.stringify(tree), options)
  }

  /**
   * 为导出的 markdown 文件添加元数据
   * @param content
   * @param meta
   */
  addMeta(content: string, meta: NoteMeta): string {
    const formatter = 'yyyy-MM-dd hh:mm:ss'
    const metaStr = yaml.stringify({
      layout: 'post',
      title: JoplinNoteParser.trimTitleStart(meta.title),
      abbrlink: meta.abbrlink,
      date: DateTime.fromMillis(meta.date).toFormat(formatter),
      updated: DateTime.fromMillis(meta.updated).toFormat(formatter),
      tags: meta.tags,
      sticky: meta.sticky,
    })
    return '---\n' + metaStr + `---\n\n` + content
  }

  /**
   * 消除第一行可能包含的 # 字符号
   * @param title
   */
  private static trimTitleStart(title: string) {
    return title.startsWith('#') ? title.substr(1).trimLeft() : title
  }
}
