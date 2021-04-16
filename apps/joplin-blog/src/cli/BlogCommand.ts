import { pathExists, readJson } from 'fs-extra'
import { Application, ApplicationConfig } from '../blog/Application'
import { HexoIntegrated, HexoIntegratedConfig } from '../blog/HexoIntegrated'
import {
  VuepressIntegrated,
  VuepressIntegratedConfig,
} from '../blog/VuepressIntegrated'
import { i18n } from '../util/I18n'
import path from 'path'

class BlogCommand {
  private static async getJoplinIntegrated(configPath: string) {
    const config = (await readJson(configPath)) as ApplicationConfig & {
      type: 'hexo' | 'vuepress'
    } & (HexoIntegratedConfig | {})
    switch (config.type) {
      case 'hexo':
        await new Application(
          config,
          new HexoIntegrated(config as HexoIntegratedConfig),
        ).gen()
        break
      case 'vuepress':
        await new Application(
          config,
          new VuepressIntegrated(config as VuepressIntegratedConfig),
        ).gen()
        break
    }
  }

  async gen() {
    await i18n.load(await i18n.getLanguage())
    const configPath = path.resolve('.joplin-blog.json')
    // console.log('configPath: ', configPath)
    if (!(await pathExists(configPath))) {
      console.error(
        i18n.t("blog.Can't find configuration file _joplin-blog_json"),
      )
      return
    }
    await BlogCommand.getJoplinIntegrated(configPath)
  }
}

export const blogCliCommand = new BlogCommand()
