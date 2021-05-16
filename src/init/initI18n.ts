import { i18n, LanguageEnum } from '../util/I18n'
import * as vscode from 'vscode'

export async function initI18n() {
  const language = vscode.env.language.toLocaleLowerCase().includes('zh')
    ? LanguageEnum.ZhCN
    : LanguageEnum.En
  await i18n.load(language)
}
