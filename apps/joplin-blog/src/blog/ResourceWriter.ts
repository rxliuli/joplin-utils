import path from 'path'
import { copyFile, writeFile } from 'fs-extra'
import { CommonNote } from '../model/CommonNote'

interface ResourceWriterConfig {
  postPath: string
  resourcePath: string
}

/**
 * 将最后的资源复制粘贴抽离出来
 */
export class ResourceWriter {
  constructor(private config: ResourceWriterConfig) {}

  async copy(resourcePath: string) {
    await copyFile(
      path.resolve(resourcePath),
      path.resolve(this.config.resourcePath, path.basename(resourcePath)),
    )
  }

  async write(note: CommonNote & { text: string }) {
    await writeFile(
      path.resolve(this.config.postPath, note.id + '.md'),
      note.text,
    )
  }
}
