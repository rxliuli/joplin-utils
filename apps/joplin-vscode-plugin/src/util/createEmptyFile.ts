import { open } from 'fs-extra'

/**
 * 创建一个空文件
 * @param path
 */
export async function createEmptyFile(path: string) {
  return await open(path, 'w')
}
