import { I18nLoader } from '../i18n'

export const JoplinNoteFileRegex = /^edit-.*\\.md/
export const JoplinIdRegex = /^\w{32}$/
export const JoplinLinkRegex = /^:\/(\w{32})$/
export const JoplinResourceRegex = /^resources\/(\w{32}).\w+$/

export const i18nLoader = new I18nLoader()
