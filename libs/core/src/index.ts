import type { NoteGetRes } from 'joplin-api/dist/modal/NoteGetRes'
import { writeFile } from 'fs-extra'
import * as path from 'path'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'

export interface NoteFile {
  fileName: string
  content: string
}

export interface BaseExportBlogHooks {
  /**
   * 导出的笔记 id 列表
   */
  noteList(): Promise<Pick<NoteProperties, 'id' | 'title' | 'body'>[]>

  /**
   * 处理笔记
   */
  resolve(
    noteList: Pick<NoteProperties, 'id' | 'title' | 'body'>[],
  ): Promise<NoteFile[]>

  /**
   * 导出的目录
   */
  path(): Promise<string>

  /**
   * 发布笔记到远端，例如 github、netlify
   */
  pub(): Promise<void>
}

/**
 * 定义一系列流程
 * 然后依次执行这些流程及其 hooks
 * 1. 确定导出的目录，或者即时下载一个
 * 2. 确定要导出的数据，主要根据 tag 进行筛选
 * 3. 确定导出的框架对笔记做不同的处理，例如 hexo、hugo、vuepress
 * 4. 发布至远端，例如 github、netlify
 */
export class ExportBlogProcess {
  constructor(private readonly config: BaseExportBlogHooks) {}

  async exp() {
    const noteList = await this.config.noteList()
    const fileList = await this.config.resolve(noteList)
    const dirPath = await this.config.path()
    await Promise.all(
      fileList.map(async (file) => {
        await writeFile(path.resolve(dirPath, file.fileName), file.content, {
          encoding: 'utf-8',
        })
      }),
    )
    await this.config.pub()
  }
}
