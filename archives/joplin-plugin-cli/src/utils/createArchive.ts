import { create, CreateOptions } from 'tar'
import { promise } from 'glob-promise'
import * as path from 'path'

export interface ArchiveOptions {
  // sourceDir 源目录，一般设置为 dist
  sourceDir: string
  // destPath 目标位置，可能是 <packageName>.jpl
  destPath: string
}

/**
 * 创建 jpl 压缩文件
 * @param options
 */
export async function createArchive(options: ArchiveOptions): Promise<void> {
  const sourceDir = path.resolve(options.sourceDir)
  const destPath = path.resolve(options.destPath)
  console.log('createArchive: ', sourceDir, destPath)
  const distFiles = (await promise(`${sourceDir}/**/*`, { nodir: true })).map((f) => f.substr(sourceDir.length + 1))
  await create(
    {
      strict: true,
      portable: true,
      file: destPath,
      cwd: sourceDir,
      sync: true,
    } as Partial<CreateOptions>,
    distFiles,
  )
}
