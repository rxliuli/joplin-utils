import { BaseIntegrated } from './Application'
import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import path from 'path'
import { DateTime } from 'luxon'
import { ResourceWriter } from './ResourceWriter'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'
import { mkdirp } from 'fs-extra'
import { convertJoplinNote } from './JoplinNoteHandler.worker'

class BlogVuepressSingleNoteHandler {
  constructor(private config: Pick<BlogVuepressIntegratedConfig, 'tag'>) {}

  meta(note: CommonNote & { tags: CommonTag[] }): object {
    const formatter = 'yyyy-MM-dd hh:mm:ss'
    return {
      title: note.title,
      permalink: `/p/${note.id}`,
      tags: note.tags
        .map((tag) => tag.title)
        .filter((name) => name !== this.config.tag),
      date: DateTime.fromMillis(note.createdTime).toFormat(formatter),
      updated: DateTime.fromMillis(note.updatedTime).toFormat(formatter),
    }
  }
}

export interface BlogVuepressIntegratedConfig {
  /**
   * hexo 的根目录
   */
  rootPath: string
  tag: string
}

export class BlogVuepressIntegrated implements BaseIntegrated {
  constructor(private config: BlogVuepressIntegratedConfig) {}

  async init() {
    await this.resourceWriter.clean()
    await mkdirp(path.resolve(this.config.rootPath, '_posts/resource'))
  }

  async parse(
    note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] },
  ) {
    return JoplinMarkdownUtil.addMeta(
      await convertJoplinNote(note, {
        note: '/p/{id}',
        resource: './resource/{id}.{file_extension}',
      }),
      new BlogVuepressSingleNoteHandler(this.config).meta(note),
    )
  }

  private readonly resourceWriter = new ResourceWriter({
    postPath: path.resolve(this.config.rootPath, '_posts'),
    resourcePath: path.resolve(this.config.rootPath, '_posts/resource'),
  })

  copy = this.resourceWriter.copy.bind(this.resourceWriter)
  write = this.resourceWriter.write.bind(this.resourceWriter)
}
