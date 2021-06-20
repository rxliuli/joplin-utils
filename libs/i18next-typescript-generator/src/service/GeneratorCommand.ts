import { Scanner } from './Scanner'
import { Parser } from './Parser'
import { Generator } from './Generator'
import { writeFile } from 'fs-extra'
import path from 'path'
import { AsyncArray } from '@liuli-util/async'

export class GeneratorCommandProgram {
  /**
   * 生成类型定义的主程序
   * @param options
   */
  async main(options: { dirs: string[]; watch: boolean }) {
    await AsyncArray.forEach(options.dirs, async (dirPath) => {
      const scanner = new Scanner()
      const parser = new Parser()
      const generator = new Generator()
      const locales = await scanner.scan(dirPath)
      const configs = parser.parse(locales)
      const code = generator.generate(configs)
      const dtsPath = path.join(dirPath, 'index.d.ts')
      await writeFile(dtsPath, code)
      console.log('类型定义生成完成: ', dtsPath)
    })
  }
}
