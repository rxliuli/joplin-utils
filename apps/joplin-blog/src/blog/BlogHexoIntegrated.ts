import { BaseIntegrated } from './Application'
import path from 'path'
import {
  JoplinNoteHandler,
  JoplinNoteHandlerLinkConverter,
} from './JoplinNoteHandler'
import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import { ResourceWriter } from './ResourceWriter'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'

class BlogHexoSingleNoteHandler implements JoplinNoteHandlerLinkConverter {
  constructor(
    private config: Pick<BlogHexoIntegratedConfig, 'stickyTopIdList' | 'tag'>,
  ) {}

  meta(note: CommonNote & { tags: CommonTag[] }): object {
    return {
      layout: 'post',
      title: note.title,
      abbrlink: note.id,
      tags: note.tags
        .map((tag) => tag.title)
        .filter((name) => name !== this.config.tag),
      date: note.createdTime,
      updated: note.updatedTime,
      sticky: this.config.stickyTopIdList?.includes(note.id)
        ? Number.MAX_SAFE_INTEGER
        : undefined,
    }
  }

  convertNote(id: string): string {
    return `/p/${id}`
  }

  convertResource(resource: CommonResource): string {
    return `/resource/${resource.id}.${resource.file_extension}`
  }
}

export interface BlogHexoIntegratedConfig {
  tag: string
  rootPath: string
  stickyTopIdList?: string[]
}

export class BlogHexoIntegrated implements BaseIntegrated {
  constructor(private config: BlogHexoIntegratedConfig) {}

  async init() {
    await this.resourceWriter.clean()
  }

  parse(note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] }) {
    const hexoSingleNoteHandler = new BlogHexoSingleNoteHandler(this.config)
    return JoplinMarkdownUtil.addMeta(
      JoplinNoteHandler.format(
        JoplinNoteHandler.convertLink(
          JoplinNoteHandler.parse(note.body),
          note,
          hexoSingleNoteHandler,
        ),
      ),
      hexoSingleNoteHandler.meta(note),
    )
  }

  private readonly resourceWriter = new ResourceWriter({
    postPath: path.resolve(this.config.rootPath, `source/_posts/`),
    resourcePath: path.resolve(this.config.rootPath, 'source/resource'),
  })

  copy = this.resourceWriter.copy.bind(this.resourceWriter)
  write = this.resourceWriter.write.bind(this.resourceWriter)
}
