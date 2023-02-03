import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import { BaseIntegrated } from '../blog/Application'
import path from 'path'
import { mkdirp, writeJson } from '@liuli-util/fs-extra'
import { treeMap } from '@liuli-util/tree'
import { pick } from '@liuli-util/object'
import { WikiUtil } from './WikiUtil'
import { TypeEnum } from 'joplin-api'
import { convertJoplinNote } from '../blog/JoplinNoteHandler.worker'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'

export interface WikiVuepressIntegratedConfig {
  tag: string
  rootPath: string
}

export class WikiVuepressIntegrated implements BaseIntegrated {
  readonly notePath: string
  readonly resourcePath: string
  constructor(private readonly config: WikiVuepressIntegratedConfig) {
    this.notePath = path.resolve(this.config.rootPath, 'p')
    this.resourcePath = path.resolve(this.config.rootPath, 'p/resource')
  }

  async init() {
    const sidebarConfigPath = path.resolve(this.config.rootPath, '.vuepress/sidebar.json')
    await mkdirp(path.dirname(sidebarConfigPath))
    await writeJson(sidebarConfigPath, await this.buildSidebar(), {
      spaces: 2,
    })
  }

  async buildSidebar() {
    const tree = await WikiUtil.getJoplinSidebar(this.config.tag)
    const options = {
      id: 'id',
      children: 'children',
    } as const
    return treeMap(
      tree,
      (item) => {
        const res = pick(item, 'title', 'children')
        if (item.type_ === TypeEnum.Note) {
          Reflect.set(res, 'path', `/p/${item.id}`)
        }
        return res
      },
      options,
    )
  }

  async parse(note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] }) {
    return JoplinMarkdownUtil.addMeta(
      await convertJoplinNote(note, {
        note: '/p/{id}',
        resource: './resource/{id}.{file_extension}',
      }),
      this.meta(note),
    )
  }

  meta(note: CommonNote & { tags: CommonTag[] }): object {
    return {
      layout: 'post',
      title: note.title,
      abbrlink: note.id,
      tags: note.tags.map((tag) => tag.title).filter((name) => name !== this.config.tag),
      date: note.createdTime,
      updated: note.updatedTime,
    }
  }
}
