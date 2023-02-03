import { GeneratorEvents, ProcessInfo } from '../../Application'

export class GeneratorEventsImpl implements GeneratorEvents {
  copyResources(options: ProcessInfo): void {
    console.log(`${options.rate}/${options.all} 正在读取笔记附件与标签: `, options.title)
  }

  parseAndWriteNotes(options: ProcessInfo): void {
    console.log(
      `${options.rate}/${options.all} 正在解析笔记中的 Joplin 内部链接与附件资源: ${options.title}`,
      options.title,
    )
  }

  readNoteAttachmentsAndTags(options: ProcessInfo): void {
    console.log(`${options.rate}/${options.all} 正在写入笔记: ${options.title}`, options.title)
  }

  writeNote(options: ProcessInfo): void {
    console.log(`${options.rate}/${options.all} 正在处理资源: ${options.title}`)
  }
}
