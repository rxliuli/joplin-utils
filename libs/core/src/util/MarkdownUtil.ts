import { DateTime } from 'luxon'
import * as yaml from 'yaml'
import * as remarkParse from 'remark-parse'
import { Link } from 'mdast'
import { Settings } from 'unified'
import * as remarkStringify from 'remark-stringify'
import { format, Options } from 'prettier'
import { PromiseType } from 'utility-types'
import { noteExtensionApi } from '../api/NoteExtensionApi'
import { AsyncArray } from './AsyncArray'
import { uniq } from 'lodash'
import { TypeEnum } from 'joplin-api'
import unified = require('unified')
import visit = require('unist-util-visit')
import unistUtilMap = require('unist-util-map')

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
      title: MarkdownUtil.trimTitleStart(meta.title),
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

  /**
   * 转换笔记中的内部链接
   * @param content
   */
  static async convertLink(content: string) {
    const idList = MarkdownUtil.scanResource(content)
    const map = await this.fetchResourceList(idList)
    return MarkdownUtil.convertResource(content, map)
  }

  /**
   * 根据 id 列表获取资源相关信息
   * @param idList
   */
  static async fetchResourceList(idList: string[]) {
    const list: PromiseType<
      ReturnType<typeof noteExtensionApi['find']>
    >[] = await new AsyncArray(uniq(idList))
      .parallel()
      .map((id) => noteExtensionApi.find(id))
    return list
      .map((item) => {
        switch (item.type_) {
          case TypeEnum.Note:
            return [item.id, `/p/${item.id}`]
          case TypeEnum.Resource:
            return [item.id, `/resource/${item.id}.${item.file_extension}`]
        }
      })
      .reduce((res, [id, url]) => {
        res.set(id, url)
        return res
      }, new Map<string, string>())
  }

  /**
   * 消除第一行可能包含的 # 字符号
   * @param title
   */
  private static trimTitleStart(title: string) {
    return title.startsWith('#') ? title.substr(1).trimLeft() : title
  }
}
