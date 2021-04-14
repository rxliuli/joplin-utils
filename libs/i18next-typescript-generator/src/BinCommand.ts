import path from 'path'
import { readdir, readJSON, writeFile } from 'fs-extra'
import { AsyncArray } from '@liuli-util/async'
import { TranslateHandler } from './TranslateHandler'

export class BinCommand {
  /**
   * 生成类型定义
   */
  async gen(options: { input?: string }) {
    if (!options.input) {
      return
    }
    const i18nFolderPath = path.resolve(options.input)
    const list = await readdir(i18nFolderPath)
    const i18nJsonPathList = list
      .filter((name) => name.endsWith('.json'))
      .map((name) => path.resolve(i18nFolderPath, name))
    const jsonList = await AsyncArray.map(i18nJsonPathList, (filePath) =>
      readJSON(filePath),
    )
    const translateHandler = new TranslateHandler()
    const configList = translateHandler.parse(jsonList)
    const dts = translateHandler.build(configList)
    await writeFile(path.resolve(i18nFolderPath, 'index.d.ts'), dts)
  }
}
