import { Scanner } from './Scanner'
import { Parser } from './Parser'
import { Generator } from './Generator'
import { writeFile } from 'fs-extra'
import path from 'path'
import { AsyncArray } from '@liuli-util/async'
import { Watcher } from './Watcher'

export class GeneratorCommandProgram {
  /**
   * 生成类型定义的主程序
   * @param options
   */
  async main(options: { dirs: string[]; watch: boolean }) {
    if (options.watch) {
      new Promise((resolve, reject) => {
        new Watcher().watchDirs(options.dirs, this.exec).on('error', reject)
      })
    }
    await AsyncArray.forEach(options.dirs, this.exec)
  }

  // noinspection JSMethodCanBeStatic
  private async exec(dirPath: string) {
    const scanner = new Scanner()
    const parser = new Parser()
    const generator = new Generator()
    const locales = await scanner.scan(dirPath)
    const configs = parser.parse(locales)
    const code = generator.generate(configs)
    const dtsPath = path.join(dirPath, 'index.d.ts')
    await writeFile(dtsPath, code)
    console.log('类型定义生成完成: ', dtsPath)
  }
}
