import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import { BaseIntegrated } from '../blog/Application'
import {
  JoplinNoteHandler,
  JoplinNoteHandlerLinkConverter,
} from '../blog/JoplinNoteHandler'
import { ResourceWriter } from '../blog/ResourceWriter'
import path from 'path'
import { mkdirp, writeJson } from 'fs-extra'
import { treeMap } from '@liuli-util/tree'
import { pick } from '@liuli-util/object'
import { WikiUtil } from './WikiUtil'
import { TypeEnum } from 'joplin-api'

class WikiVuepressSingleNoteHandler implements JoplinNoteHandlerLinkConverter {
  convertNote(id: string): string {
    return `/p/${id}`
  }

  convertResource(resource: CommonResource): string {
    return `./resource/${resource.id}.${resource.file_extension}`
  }
}

export interface WikiVuepressIntegratedConfig {
  tag: string
  rootPath: string
}

export class WikiVuepressIntegrated implements BaseIntegrated {
  constructor(private readonly config: WikiVuepressIntegratedConfig) {}

  async init() {
    await this.resourceWriter.clean()
    const sidebarConfigPath = path.resolve(
      this.config.rootPath,
      '.vuepress/sidebar.json',
    )
    await mkdirp(path.resolve(this.config.rootPath, 'p/resource'))
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

  parse(
    note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] },
  ): string {
    const wikiVuepressSingleNoteHandler = new WikiVuepressSingleNoteHandler()
    return JoplinNoteHandler.format(
      JoplinNoteHandler.convertLink(
        JoplinNoteHandler.parse(note.body),
        note,
        wikiVuepressSingleNoteHandler,
      ),
    )
  }

  private readonly resourceWriter = new ResourceWriter({
    postPath: path.resolve(this.config.rootPath, 'p'),
    resourcePath: path.resolve(this.config.rootPath, 'p/resource'),
  })

  copy = this.resourceWriter.copy.bind(this.resourceWriter)
  write = this.resourceWriter.write.bind(this.resourceWriter)
}
