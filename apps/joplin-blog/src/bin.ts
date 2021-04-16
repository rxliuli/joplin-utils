import { pathExists, readJson } from 'fs-extra'
import * as path from 'path'
import { i18nLoader } from './util/constant'
import { LanguageEnum } from './util/I18nLoader'
import { Application, ApplicationConfig } from './blog/Application'
import { HexoIntegrated, HexoIntegratedConfig } from './blog/HexoIntegrated'
import {
  VuepressIntegrated,
  VuepressIntegratedConfig,
} from './blog/VuepressIntegrated'
import osLocale = require('os-locale')

async function getLanguageEnum(): Promise<LanguageEnum> {
  const language = await osLocale()
  if (language.toLocaleLowerCase().includes('zh')) {
    return LanguageEnum.ZhCN
  }
  return LanguageEnum.En
}

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

async function main() {
  await i18nLoader.load(await getLanguageEnum())
  const configPath = path.resolve('.joplin-blog.json')
  console.log('configPath: ', configPath)
  if (!(await pathExists(configPath))) {
    console.log(i18nLoader.getText('notFoundConfig'))
    return
  }
  await getJoplinIntegrated(configPath)
}

main()
