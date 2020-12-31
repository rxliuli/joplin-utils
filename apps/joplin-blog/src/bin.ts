import { pathExists, readJson } from 'fs-extra'
import * as path from 'path'
import {
  JoplinHexoIntegrated,
  JoplinHexoIntegratedConfig,
} from './JoplinHexoIntegrated'
import { i18nLoader } from './util/constant'
import { LanguageEnum } from './util/I18nLoader'
import osLocale = require('os-locale')
import {
  JoplinVuepressIntegrated,
  JoplinVuepressIntegratedConfig,
} from './JoplinVuepressIntegrated'
import { BaseJoplinIntegrated } from './BaseJoplinIntegrated'

async function getLanguageEnum(): Promise<LanguageEnum> {
  const language = await osLocale()
  if (language.toLocaleLowerCase().includes('zh')) {
    return LanguageEnum.ZhCN
  }
  return LanguageEnum.En
}

async function getJoplinIntegrated(configPath: string) {
  const config = (await readJson(configPath)) as
    | JoplinHexoIntegratedConfig
    | JoplinVuepressIntegratedConfig
  let instance: BaseJoplinIntegrated
  switch (config.type) {
    case 'hexo':
      instance = new JoplinHexoIntegrated(config)
      break
    case 'vuepress':
      instance = new JoplinVuepressIntegrated(config)
      break
  }
  return instance
}

async function main() {
  await i18nLoader.load(await getLanguageEnum())
  const configPath = path.resolve('.joplin-blog.json')
  console.log('configPath: ', configPath)
  if (!(await pathExists(configPath))) {
    console.log(i18nLoader.getText('notFoundConfig'))
    return
  }
  const instance = await getJoplinIntegrated(configPath)
  await instance.handle()
}

main()
