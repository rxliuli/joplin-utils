import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import { BaseIntegrated } from '../blog/Application'
import {
  JoplinNoteHandler,
  JoplinNoteHandlerLinkConverter,
} from '../blog/JoplinNoteHandler'
import { ResourceWriter } from '../blog/ResourceWriter'
import path from 'path'
import { writeFile } from 'fs-extra'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'
import { WikiUtil } from './WikiUtil'

class WikiDocsifySingleNoteHandler implements JoplinNoteHandlerLinkConverter {
  convertNote(id: string): string {
    return `/p/${id}`
  }

  convertResource(resource: CommonResource): string {
    return `../resource/${resource.id}.${resource.file_extension}`
  }
}

export interface WikiDocsifyIntegratedConfig {
  tag: string
  rootPath: string
}

export class WikiDocsifyIntegrated implements BaseIntegrated {
  constructor(private readonly config: WikiDocsifyIntegratedConfig) {}

  async init() {
    await this.resourceWriter.clean()
    await writeFile(
      path.resolve(this.config.rootPath, '_sidebar.md'),
      await this.buildSidebar(),
    )
  }

  async buildSidebar() {
    const tree = await WikiUtil.getJoplinSidebar(this.config.tag)
    return JoplinMarkdownUtil.buildList(tree, (id) => `/p/${id}`)
  }

  parse(
    note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] },
  ): string {
    const wikiDocsifySingleNoteHandler = new WikiDocsifySingleNoteHandler()
    return JoplinNoteHandler.format(
      JoplinNoteHandler.convertLink(
        JoplinNoteHandler.parse(note.body),
        note,
        wikiDocsifySingleNoteHandler,
      ),
    )
  }

  private readonly resourceWriter = new ResourceWriter({
    postPath: path.resolve(this.config.rootPath, `p/`),
    resourcePath: path.resolve(this.config.rootPath, 'resource/'),
  })

  copy = this.resourceWriter.copy.bind(this.resourceWriter)
  write = this.resourceWriter.write.bind(this.resourceWriter)
}
