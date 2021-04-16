import { BaseIntegrated } from './Application'
import path from 'path'
import { mkdirp, pathExists, remove } from 'fs-extra'
import { BaseSingleNoteHandler, SingleNoteHandler } from './SingleNoteHandler'
import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'
import { ResourceWriter } from './ResourceWriter'

export class HexoSingleNoteHandler implements BaseSingleNoteHandler {
  constructor(
    private config: Pick<HexoIntegratedConfig, 'stickyTopIdList' | 'tag'>,
  ) {}

  meta(note: CommonNote & { tags: CommonTag[] }): object {
    return {
      layout: 'post',
      title: JoplinMarkdownUtil.trimTitleStart(note.title),
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

export interface HexoIntegratedConfig {
  tag: string
  rootPath: string
  stickyTopIdList?: string[]
}

export class HexoIntegrated implements BaseIntegrated {
  constructor(private config: HexoIntegratedConfig) {}

  async init() {
    const postPath = path.resolve(this.config.rootPath, 'source/_posts')
    const resourcePath = path.resolve(this.config.rootPath, 'source/resource')

    async function clean(dirPath: string) {
      if (await pathExists(dirPath)) {
        await remove(dirPath)
      }
      await mkdirp(dirPath)
    }

    await Promise.all([clean(postPath), clean(resourcePath)])
  }

  private readonly singleNoteHandler = new SingleNoteHandler(
    new HexoSingleNoteHandler(this.config),
  )

  parse(note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] }) {
    return this.singleNoteHandler.handle(note)
  }

  private readonly resourceWriter = new ResourceWriter({
    postPath: path.resolve(this.config.rootPath, `source/_posts/`),
    resourcePath: path.resolve(this.config.rootPath, 'source/resource'),
  })

  copy = this.resourceWriter.copy.bind(this.resourceWriter)
  write = this.resourceWriter.write.bind(this.resourceWriter)
}
