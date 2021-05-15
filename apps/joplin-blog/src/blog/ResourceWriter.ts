import path from 'path'
import { copyFile, mkdirp, pathExists, remove, writeFile } from 'fs-extra'
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

  async clean() {
    const postPath = path.resolve(this.config.postPath)
    const resourcePath = path.resolve(this.config.resourcePath)

    async function clean(dirPath: string) {
      if (await pathExists(dirPath)) {
        await remove(dirPath)
      }
      await mkdirp(dirPath)
    }

    await Promise.all([clean(postPath), clean(resourcePath)])
  }
}
