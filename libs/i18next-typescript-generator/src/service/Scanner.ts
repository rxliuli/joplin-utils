/**
 * 扫描指定目录下的 json 文件，得到结构化数据
 */
import { readdir, readJSON, stat } from 'fs-extra'
import path from 'path'
import { AsyncArray } from '@liuli-util/async'

export class Scanner {
  async scan(dirPath: string) {
    const files = await readdir(path.resolve(dirPath))
    await AsyncArray.map(
      files.filter((file) => file.endsWith('.json')),
      (file) => readJSON(path.resolve(dirPath, file)),
    )
  }
}
