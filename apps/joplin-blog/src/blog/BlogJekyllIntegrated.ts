import { BaseIntegrated } from './Application'
import path from 'path'
import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'
import { convertJoplinNote } from './JoplinNoteHandler.worker'
import { DateTime } from 'luxon'

class BlogJekyllSingleNoteHandler {
  constructor(private config: Pick<BlogJekyllIntegratedConfig, 'tag'>) {}

  meta(note: CommonNote & { tags: CommonTag[] }): object {
    return {
      layout: 'post',
      title: note.title,
      permalink: `/p/${note.id}`,
      tags: note.tags
        .map((tag) => tag.title)
        .filter((name) => name !== this.config.tag),
      date: DateTime.fromMillis(note.createdTime).toFormat(
        'yyyy-LL-dd hh:mm:ss',
      ),
    }
  }
}

export interface BlogJekyllIntegratedConfig {
  tag: string
  rootPath: string
}

export class BlogJekyllIntegrated implements BaseIntegrated {
  constructor(private config: BlogJekyllIntegratedConfig) {}

  async parse(
    note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] },
  ) {
    return JoplinMarkdownUtil.addMeta(
      await convertJoplinNote(note, {
        note: '/p/{id}',
        resource: '/resource/{id}.{file_extension}',
      }),
      new BlogJekyllSingleNoteHandler(this.config).meta(note),
    )
  }

  notePath = path.resolve(this.config.rootPath, `_posts/joplin/`)
  resourcePath = path.resolve(this.config.rootPath, 'resource/')
  formatFileName(id: string): string {
    return DateTime.now().toFormat('yyyy-LL-dd-') + id
  }
}
