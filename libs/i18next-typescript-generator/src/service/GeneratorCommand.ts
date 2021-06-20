import { Scanner } from './Scanner'
import { Parser } from './Parser'
import { Generator } from './Generator'
import { writeFile } from 'fs-extra'
import path from 'path'
import { AsyncArray } from '@liuli-util/async'
import { Watcher } from './Watcher'
import ora from 'ora'
import { i18n } from '../util/I18n'
import { DateTime } from 'luxon'

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
    const formatter = 'yyyy-MM-dd hh:mm:ss'
    const spinner = ora({ color: 'blue' })
    const dtsPath = path.join(dirPath, 'index.d.ts')
    spinner.start(
      i18n.t('generator.begin', {
        time: DateTime.now().toFormat(formatter),
        dtsPath,
      }),
    )
    const scanner = new Scanner()
    const parser = new Parser()
    const generator = new Generator()
    const locales = await scanner.scan(dirPath)
    const configs = parser.parse(locales)
    const code = generator.generate(configs)
    await writeFile(dtsPath, code)
    spinner.stopAndPersist({
      text: i18n.t('generator.end', {
        time: DateTime.now().toFormat(formatter),
        dtsPath,
      }),
    })
  }
}
