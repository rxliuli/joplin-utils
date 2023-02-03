import { BaseIntegrated } from './Application'
import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import path from 'path'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'
import { convertJoplinNote } from './JoplinNoteHandler.worker'
import dayjs from 'dayjs'

export interface BlogVuepressIntegratedConfig {
  /**
   * hexo 的根目录
   */
  rootPath: string
  tag: string
}

export class BlogVuepressIntegrated implements BaseIntegrated {
  readonly notePath: string
  readonly resourcePath: string
  constructor(private config: BlogVuepressIntegratedConfig) {
    this.notePath = path.resolve(this.config.rootPath, '_posts')
    this.resourcePath = path.resolve(this.config.rootPath, '_posts/resource')
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
    const formatter = 'YYYY-MM-DD HH:mm:ss'
    return {
      title: note.title,
      permalink: `/p/${note.id}`,
      tags: note.tags.map((tag) => tag.title).filter((name) => name !== this.config.tag),
      date: dayjs(note.createdTime).format(formatter),
      updated: dayjs(note.updatedTime).format(formatter),
    }
  }
}
