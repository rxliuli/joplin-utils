import { JoplinService } from './JoplinService'
import { JoplinNoteParser } from './JoplinNoteParser'
import { arrayToMap } from './util/arrayToMap'
import { noteApi, TypeEnum } from 'joplin-api'
import { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'
import { CommonNote } from './model/CommonNote'
import { copyFile, mkdirp, pathExists, remove, writeFile } from 'fs-extra'
import * as path from 'path'
import { forEach } from './util/forEach'
import { map } from './util/map'
import { asyncLimiting } from './util/asyncLimiting'

export interface JoplinHexoIntegratedConfig {
  hexoPath: string
  joplinProfilePath: string
  token: string
  port: number
  tag: string
  stickyTopIdList: string[]
}

/**
 * joplin 与 hexo 的集成
 */
export class JoplinHexoIntegrated {
  private readonly joplinService: JoplinService
  private readonly joplinNoteParser = new JoplinNoteParser()

  constructor(private readonly config: JoplinHexoIntegratedConfig) {
    this.joplinService = new JoplinService(config.token, config.port)
  }

  /**
   * 导出
   */
  async exp() {
    const noteList = await this.joplinService.findByTag(this.config.tag)
    const resourceList: Pick<
      ResourceProperties,
      'id' | 'title' | 'file_extension'
    >[] = []
    const fn = asyncLimiting(async (item: CommonNote) => {
      console.log(`正在转换笔记 [${item.title}]`)
      return await this.convertNote(item, resourceList)
    }, 10)
    const fileNoteList = await map(noteList, fn)
    //写入笔记
    const hexoPostPath = path.resolve(this.config.hexoPath, 'source/_posts')
    await remove(hexoPostPath)
    await mkdirp(hexoPostPath)
    await forEach(fileNoteList, async (item) => {
      console.log(`正在写入笔记 [${item.title}]`)
      await writeFile(
        path.resolve(hexoPostPath, item.id + '.md'),
        item.content,
        {
          encoding: 'utf-8',
        },
      )
    })
    //复制资源
    const hexoResourcePath = path.resolve(
      this.config.hexoPath,
      'source/resource',
    )
    await remove(hexoResourcePath)
    await mkdirp(hexoResourcePath)
    await forEach(resourceList, async (item) => {
      console.log(`正在写复制资源 [${item.title}]`)

      const fileName = item.id + '.' + item.file_extension
      await copyFile(
        path.resolve(this.config.joplinProfilePath, 'resources', fileName),
        path.resolve(this.config.hexoPath, 'source/resource', fileName),
      )
    })
  }

  private async convertNote(
    note: CommonNote,
    resourceList: Pick<ResourceProperties, 'id' | 'file_extension'>[],
  ) {
    const idList = this.joplinNoteParser.scanResource(note.body)
    const noteLinkIdList = await this.joplinNoteParser.mapResource(
      note.id,
      idList,
    )
    resourceList.push(
      ...(noteLinkIdList.filter(
        (item) => item.type === TypeEnum.Resource,
      ) as any),
    )
    const map = arrayToMap(
      noteLinkIdList,
      (item) => item.id,
      (item) => {
        if (item.type === TypeEnum.Resource) {
          return `/resource/${item.id}.${item.file_extension}`
        }
        return `/p/${item.id}`
      },
    )
    const content = this.joplinNoteParser.convertResource(note.body, map)
    const tags = (await noteApi.tagsById(note.id))
      .map((tag) => tag.title)
      .filter((tag) => tag !== this.config.tag)
    const contentRes = this.joplinNoteParser.addMeta(content, {
      layout: 'post',
      title: note.title,
      abbrlink: note.id,
      tags,
      date: note.createdTime,
      updated: note.updatedTime,
      sticky: this.config.stickyTopIdList.includes(note.id)
        ? Number.MAX_SAFE_INTEGER
        : undefined,
    })
    return {
      id: note.id,
      title: note.title,
      content: contentRes,
    }
  }
}
