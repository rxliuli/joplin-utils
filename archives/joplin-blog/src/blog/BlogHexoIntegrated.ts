import { BaseIntegrated } from './Application'
import path from 'path'
import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'
import { convertJoplinNote } from './JoplinNoteHandler.worker'

export interface BlogHexoIntegratedConfig {
  tag: string
  rootPath: string
  stickyTopIdList?: string[]
}

export class BlogHexoIntegrated implements BaseIntegrated {
  readonly notePath: string
  readonly resourcePath: string
  constructor(private config: BlogHexoIntegratedConfig) {
    this.notePath = path.resolve(this.config.rootPath, `source/_posts/`)
    this.resourcePath = path.resolve(this.config.rootPath, 'source/resource')
  }

  async parse(note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] }) {
    return JoplinMarkdownUtil.addMeta(
      await convertJoplinNote(note, {
        note: '/p/{id}',
        resource: '/resource/{id}.{file_extension}',
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
      sticky: this.config.stickyTopIdList?.includes(note.id) ? Number.MAX_SAFE_INTEGER : undefined,
    }
  }
}
