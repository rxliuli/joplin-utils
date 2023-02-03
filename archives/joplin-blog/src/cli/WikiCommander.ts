import { Application, ApplicationConfig, BaseIntegrated } from '../blog/Application'
import { BlogHexoIntegratedConfig } from '../blog/BlogHexoIntegrated'
import path from 'path'
import { pathExists, readJson } from '@liuli-util/fs-extra'
import { figletPromise } from '../util/utils'
import ora from 'ora'
import { Command } from 'commander'
import { WikiDocsifyIntegrated, WikiDocsifyIntegratedConfig } from '../wiki/WikiDocsifyIntegrated'
import { WikiVuepressIntegrated, WikiVuepressIntegratedConfig } from '../wiki/WikiVuepressIntegrated'
import { i18n } from '../constants/i18n'
import { getLanguage } from '../util/getLanguage'
import { LanguageEnum } from '@liuli-util/i18next-util'

type JoplinBlogConfig = ApplicationConfig & {
  type: 'docsify' | 'vuepress'
  language?: LanguageEnum
} & (BlogHexoIntegratedConfig | {})

export class WikiCommanderProgram {
  private static async getBlogApplication(config: JoplinBlogConfig) {
    if (!config.rootPath) {
      config.rootPath = process.cwd()
    }
    let integrated: BaseIntegrated
    switch (config.type) {
      case 'docsify':
        integrated = new WikiDocsifyIntegrated(config as WikiDocsifyIntegratedConfig)
        break
      case 'vuepress':
        integrated = new WikiVuepressIntegrated(config as WikiVuepressIntegratedConfig)
        break
      default:
        throw new Error(i18n.t('wiki.generate.errorType'))
    }
    return new Application(config, integrated)
  }

  async checkConfig(): Promise<JoplinBlogConfig | false> {
    const configPath = path.resolve('.joplin-blog.json')
    if (!(await pathExists(configPath))) {
      console.error(i18n.t('common.notFoundConfig'))
      return false
    }
    return (await readJson(configPath)) as JoplinBlogConfig
  }

  async getApp() {
    const config = await this.checkConfig()
    if (!config) {
      return
    }
    await i18n.changeLang(config.language || (await getLanguage()))
    return await WikiCommanderProgram.getBlogApplication(config)
  }

  async main() {
    console.log(await figletPromise('joplin-blog'))
    const app = await this.getApp()
    if (app) {
      await this.gen(app)
    }
  }

  async clean() {
    const app = await this.getApp()
    await app?.clean()
  }

  async gen(app: Application) {
    const checkInfo = await app.check()
    if (checkInfo !== true) {
      console.error(i18n.t('common.joplinServiceError'), checkInfo)
      return
    }
    const spinner = ora({
      color: 'blue',
    })

    spinner.start(i18n.t('common.filter.begin'))
    const arr = await app.filter()
    if (arr.length === 0) {
      spinner.warn(i18n.t('common.filter.empty')).stopAndPersist()
      return
    }
    spinner.stopAndPersist({
      text: i18n.t('common.filter.end', {
        length: arr.length,
      }),
    })

    spinner.start(i18n.t('common.readResourceAndTag.begin'))
    const allNoteList = await app.readNoteAttachmentsAndTags(arr).on('process', (options) => {
      spinner.text = i18n.t('common.readResourceAndTag.process', options)
    })
    spinner.text = i18n.t('common.readResourceAndTag.end')
    spinner.stopAndPersist()

    spinner.start(i18n.t('common.init.begin'))
    await app.initDir()
    await app.handler.init?.()
    spinner.stopAndPersist({
      text: i18n.t('common.init.end'),
    })

    spinner.start(i18n.t('common.cache.begin'))
    const { noteList, resourceList, skipResourceCount, updateCache } = await app.cache(allNoteList)
    const skipCount = allNoteList.length - noteList.length
    spinner.stopAndPersist({ text: i18n.t('common.cache.end', { skipCount }) })

    spinner.start(i18n.t('common.parse.begin'))
    const replaceContentNoteList = await app.parseAndWriteNotes(noteList).on('process', (options) => {
      spinner.text = i18n.t('common.parse.process', options)
    })
    spinner.stopAndPersist({
      text: i18n.t('common.parse.end'),
    })

    spinner.start(i18n.t('common.writeNote.begin'))
    await app.writeNote(replaceContentNoteList).on('process', (options) => {
      spinner.text = i18n.t('common.writeNote.process', options)
    })
    spinner.stopAndPersist({
      text: i18n.t('common.writeNote.end'),
    })

    if (skipResourceCount !== 0) {
      spinner.stopAndPersist({
        text: i18n.t('common.cache.resource.skip', {
          skipCount: skipResourceCount,
        }),
      })
    }
    spinner.start(i18n.t('common.copyResource.begin'))
    await app.copyResources(resourceList).on('process', (options) => {
      spinner.text = i18n.t('common.copyResource.process', options)
    })
    spinner.stopAndPersist({
      text: i18n.t('common.copyResource.end'),
    })

    spinner.start().stopAndPersist({
      text: i18n.t('wiki.generate.end'),
    })

    await updateCache()
  }
}

/**
 * 之所以使用函数的形式是因为 i18n 必须先异步初始化
 */
export const wikiCommander = () => {
  const wikiCommanderProgram = new WikiCommanderProgram()
  return new Command('wiki')
    .addCommand(
      new Command('clean').description(i18n.t('common.cache.clean')).action(() => wikiCommanderProgram.clean()),
    )
    .description(i18n.t('wiki.description'))
    .action(() => wikiCommanderProgram.main())
}
