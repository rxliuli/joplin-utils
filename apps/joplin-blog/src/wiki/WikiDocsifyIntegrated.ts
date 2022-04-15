import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import { BaseIntegrated } from '../blog/Application'
import path from 'path'
import { writeFile } from 'fs-extra'
import { ListNode } from '../util/JoplinMarkdownUtil'
import { WikiUtil } from './WikiUtil'
import { treeMap } from '@liuli-util/tree'
import { convertJoplinNote } from '../blog/JoplinNoteHandler.worker'

export interface WikiDocsifyIntegratedConfig {
  tag: string
  rootPath: string
}

export class WikiDocsifyIntegrated implements BaseIntegrated {
  readonly notePath: string
  readonly resourcePath: string
  constructor(private readonly config: WikiDocsifyIntegratedConfig) {
    this.notePath = path.resolve(this.config.rootPath, `p/`)
    this.resourcePath = path.resolve(this.config.rootPath, 'resource/')
  }

  async init() {
    await writeFile(path.resolve(this.config.rootPath, '_sidebar.md'), await this.buildSidebar())
  }

  async buildSidebar() {
    const tree = await WikiUtil.getJoplinSidebar(this.config.tag)
    return buildList(tree, (id) => `/p/${id}`)
  }

  async parse(note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] }) {
    return await convertJoplinNote(note, {
      note: '/p/{id}',
      resource: '../resource/{id}.{file_extension}',
    })
  }
}

export function buildList(tree: ListNode[], urlMap: (id: string) => string): string {
  return treeMap(
    tree,
    (item, path): ListNode & { text: string } => {
      const prefix = '  '.repeat(path.length - 1) + '- '
      const suffix = '\n'
      let text: string
      if (!item.children) {
        text = prefix + `[${item.title}](${urlMap(item.id)})` + suffix
      } else {
        text = prefix + item.title + suffix + item.children.map((sub: ListNode & { text: string }) => sub.text).join('')
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
