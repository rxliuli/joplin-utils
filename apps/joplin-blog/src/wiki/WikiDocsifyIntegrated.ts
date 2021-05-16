import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import { BaseIntegrated } from '../blog/Application'
import {
  JoplinNoteHandler,
  JoplinNoteHandlerLinkConverter,
} from '../blog/JoplinNoteHandler'
import { ResourceWriter } from '../blog/ResourceWriter'
import path from 'path'
import { writeFile } from 'fs-extra'
import { folderApi, PageUtil, searchApi, TypeEnum } from 'joplin-api'
import { groupBy } from '@liuli-util/array'
import { treeFilter, treeMap } from '@liuli-util/tree'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'

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
    const folderList = await folderApi.listAll()
    const noteList = await PageUtil.pageToAllList((pageParam) =>
      searchApi.search({
        ...(pageParam as any),
        fields: [
          'id',
          'title',
          'body',
          'user_created_time',
          'user_updated_time',
          'parent_id',
        ],
        type: TypeEnum.Note,
        query: `tag:${this.config.tag}`,
      }),
    )
    const noteGroupMap = groupBy(
      noteList.map((note) => ({
        ...note,
        title: JoplinMarkdownUtil.trimTitle(note.title),
        type_: TypeEnum.Note,
      })),
      (note) => note.parent_id,
    )
    const options = {
      id: 'id',
      children: 'children',
    } as const
    const tree = treeFilter(
      treeMap(
        folderList,
        (item) => {
          const noteChildren = noteGroupMap.get(item.id) || []
          return {
            ...item,
            children: [...(item.children || []), ...noteChildren],
          }
        },
        options,
      ),
      (item) =>
        item.type_ === TypeEnum.Note ||
        (item.type_ === TypeEnum.Folder && item.children!.length !== 0),
      options,
    )
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
