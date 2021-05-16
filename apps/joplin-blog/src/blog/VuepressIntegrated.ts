import { BaseIntegrated } from './Application'
import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import path from 'path'
import {
  JoplinNoteHandler,
  JoplinNoteHandlerLinkConverter,
} from './JoplinNoteHandler'
import { DateTime } from 'luxon'
import { ResourceWriter } from './ResourceWriter'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'
import { mkdirp } from 'fs-extra'

export class VuepressSingleNoteHandler
  implements JoplinNoteHandlerLinkConverter
{
  constructor(private config: Pick<VuepressIntegratedConfig, 'tag'>) {}

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

  convertNote(id: string): string {
    return `/p/${id}`
  }

  convertResource(resource: CommonResource): string {
    return `./resource/${resource.id}.${resource.file_extension}`
  }
}

export interface VuepressIntegratedConfig {
  /**
   * hexo 的根目录
   */
  rootPath: string
  tag: string
}

export class VuepressIntegrated implements BaseIntegrated {
  constructor(private config: VuepressIntegratedConfig) {}

  async init() {
    await this.resourceWriter.clean()
    await mkdirp(path.resolve(this.config.rootPath, '_posts/resource'))
  }

  parse(note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] }) {
    const vuepressSingleNoteHandler = new VuepressSingleNoteHandler(this.config)
    return JoplinMarkdownUtil.addMeta(
      JoplinNoteHandler.format(
        JoplinNoteHandler.convertLink(
          JoplinNoteHandler.parse(note.body),
          note,
          vuepressSingleNoteHandler,
        ),
      ),
      vuepressSingleNoteHandler.meta(note),
    )
  }

  private readonly resourceWriter = new ResourceWriter({
    postPath: path.resolve(this.config.rootPath, '_posts'),
    resourcePath: path.resolve(this.config.rootPath, '_posts/resource'),
  })

  copy = this.resourceWriter.copy.bind(this.resourceWriter)
  write = this.resourceWriter.write.bind(this.resourceWriter)
}
