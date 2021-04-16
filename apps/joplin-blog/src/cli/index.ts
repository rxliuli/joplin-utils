import { pathExists, readJson } from 'fs-extra'
import * as path from 'path'
import {
  VuepressIntegrated,
  VuepressIntegratedConfig,
} from '../blog/VuepressIntegrated'
import { HexoIntegrated, HexoIntegratedConfig } from '../blog/HexoIntegrated'
import { Application, ApplicationConfig } from '../blog/Application'
import { i18n, I18n } from '../util/I18n'

async function getJoplinIntegrated(configPath: string) {
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

export async function main() {
  await i18n.load(await I18n.getLanguage())
  const configPath = path.resolve('.joplin-blog.json')
  console.log('configPath: ', configPath)
  if (!(await pathExists(configPath))) {
    console.log(i18n.t('notFoundConfig'))
    return
  }
  await getJoplinIntegrated(configPath)
}
