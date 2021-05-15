import { Application, GeneratorEvents, ProcessInfo } from '../Application'
import path from 'path'
import { writeFile } from 'fs-extra'
import { config, noteApi } from 'joplin-api'
import { HexoIntegrated } from '../HexoIntegrated'
import { VuepressIntegrated } from '../VuepressIntegrated'

describe('测试 Application', () => {
  const joplinConfig: typeof config = {
    token: process.env.token!,
    port: Number.parseInt(process.env.port!),
  }

  it('单独测试 HexoIntegrated', async () => {
    config.token = joplinConfig.token
    config.port = joplinConfig.port
    const hexoHandler = new HexoIntegrated({
      tag: 'blog',
      rootPath: path.resolve(__dirname, 'temp/hexo-example'),
    })
    const noteId = '21a3eba7f4b445ccbc123bf52831d387'
    const {
      user_created_time,
      user_updated_time,
      ...note
    } = await noteApi.get(noteId, [
      'id',
      'title',
      'body',
      'user_created_time',
      'user_updated_time',
    ])
    const tags = await noteApi.tagsById(noteId)
    const resources = await noteApi.resourcesById(noteId, [
      'id',
      'title',
      'file_extension',
    ])
    const res = hexoHandler.parse({
      ...note,
      createdTime: user_created_time,
      updatedTime: user_updated_time,
      tags,
      resources,
    })
    await writeFile(path.resolve(__dirname, 'temp/test.md'), res)
  })

  class GeneratorEventsImpl implements GeneratorEvents {
    copyResources(options: ProcessInfo): void {
      console.log(
        `${options.rate}/${options.all} 正在读取笔记附件与标签: `,
        options.title,
      )
    }

    parseAndWriteNotes(options: ProcessInfo): void {
      console.log(
        `${options.rate}/${options.all} 正在解析笔记中的 Joplin 内部链接与附件资源: ${options.title}`,
        options.title,
      )
    }

    readNoteAttachmentsAndTags(options: ProcessInfo): void {
      console.log(
        `${options.rate}/${options.all} 正在写入笔记: ${options.title}`,
        options.title,
      )
    }

    writeNote(options: ProcessInfo): void {
      console.log(
        `${options.rate}/${options.all} 正在处理资源: ${options.title}`,
      )
    }
  }

  it('集成 HexoIntegrated', async () => {
    const application = new Application(
      {
        token: joplinConfig.token,
        port: joplinConfig.port,
        tag: 'blog',
        joplinProfilePath: path.resolve(
          'C:/Users/rxliuli/.config/joplindev-desktop',
        ),
      },
      new HexoIntegrated({
        tag: 'blog',
        rootPath: path.resolve(__dirname, 'temp/hexo-example'),
      }),
    )

    const generatorEvents = new GeneratorEventsImpl()
    await application
      .gen()
      .on(
        'readNoteAttachmentsAndTags',
        generatorEvents.readNoteAttachmentsAndTags,
      )
      .on('parseAndWriteNotes', generatorEvents.parseAndWriteNotes)
      .on('writeNote', generatorEvents.writeNote)
      .on('copyResources', generatorEvents.copyResources)
  }, 100_000)
  it('集成 VuepressIntegrated', async () => {
    const application = new Application(
      {
        token: joplinConfig.token,
        port: joplinConfig.port,
        tag: 'blog',
        joplinProfilePath: path.resolve(
          'C:/Users/rxliuli/.config/joplindev-desktop',
        ),
      },
      new VuepressIntegrated({
        rootPath: path.resolve(__dirname, 'temp/vuepress-example'),
        tag: 'blog',
      }),
    )

    const generatorEvents = new GeneratorEventsImpl()
    await application
      .gen()
      .on(
        'readNoteAttachmentsAndTags',
        generatorEvents.readNoteAttachmentsAndTags,
      )
      .on('parseAndWriteNotes', generatorEvents.parseAndWriteNotes)
      .on('writeNote', generatorEvents.writeNote)
      .on('copyResources', generatorEvents.copyResources)
  }, 100_000)
})
