import { i18nLoader } from '../util/constant'
import { LanguageEnum } from '../i18n'
import * as vscode from 'vscode'

export async function initI18n() {
  const language = vscode.env.language.toLocaleLowerCase().includes('zh')
    ? LanguageEnum.ZhCN
    : LanguageEnum.En
  await i18nLoader.load(language)
}
