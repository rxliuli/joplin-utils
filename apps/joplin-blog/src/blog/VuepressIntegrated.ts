import { BaseIntegrated } from './Application'
import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import path from 'path'
import { mkdirp, pathExists, remove } from 'fs-extra'
import { BaseSingleNoteHandler, SingleNoteHandler } from './SingleNoteHandler'
import { DateTime } from 'luxon'
import { ResourceWriter } from './ResourceWriter'

export class VuepressSingleNoteHandler implements BaseSingleNoteHandler {
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
    return `/resource/${resource.id}.${resource.file_extension}`
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
    const postPath = path.resolve(this.config.rootPath, 'blog/_posts')
    const resourcePath = path.resolve(
      this.config.rootPath,
      'blog/.vuepress/public/resource',
    )

    async function clean(dirPath: string) {
      if (await pathExists(dirPath)) {
        await remove(dirPath)
      }
      await mkdirp(dirPath)
    }

    await Promise.all([clean(postPath), clean(resourcePath)])
  }

  private readonly singleNoteHandler = new SingleNoteHandler(
    new VuepressSingleNoteHandler(this.config),
  )

  parse(note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] }) {
    return this.singleNoteHandler.handle(note)
  }

  private readonly resourceWriter = new ResourceWriter({
    postPath: path.resolve(this.config.rootPath, 'blog/_posts'),
    resourcePath: path.resolve(
      this.config.rootPath,
      'blog/.vuepress/public/resource',
    ),
  })

  copy = this.resourceWriter.copy.bind(this.resourceWriter)
  write = this.resourceWriter.write.bind(this.resourceWriter)
}
