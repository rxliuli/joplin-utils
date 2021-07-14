import * as vscode from 'vscode'
import { LanguageEnum } from '@liuli-util/i18next-util'
import zhCN from '../i18n/zhCN.json'
import en from '../i18n/en.json'
import { i18n } from '../constants/i18n'

export async function initI18n() {
  const language = vscode.env.language.toLocaleLowerCase().includes('zh')
    ? LanguageEnum.ZhCN
    : LanguageEnum.En
  await i18n.init({ en, zhCN }, language)
}
