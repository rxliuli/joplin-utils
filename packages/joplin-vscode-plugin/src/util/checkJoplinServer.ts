import * as vscode from 'vscode'
import { joplinApi } from 'joplin-api'
import { t } from '../constants/i18n'
import { extConfig } from '../constants/config'

/**
 * check joplin server
 */
export async function checkJoplinServer(): Promise<boolean> {
  async function errMsg(): Promise<boolean> {
    const reconnect = t('checkJoplinServer.reconnect')
    const r = await vscode.window.showErrorMessage(t('checkJoplinServer.error'), reconnect)
    if (r === reconnect) {
      return await checkJoplinServer()
    }
    return false
  }
  if (!extConfig.token) {
    vscode.window.showInformationMessage('Please configure joplin token first, and then restart VSCode!')
    return false
  }
  try {
    if (!(await joplinApi.ping())) {
      return await errMsg()
    }
  } catch (e) {
    console.log('Error message: \n', e)
    return await errMsg()
  }

  return true
}
