import * as vscode from 'vscode'
import { t } from '../constants/i18n'
import { ExtConfig } from '../constants/config'
import { GlobalContext } from '../constants/context'

/**
 * check joplin server
 */
export async function checkJoplinServer(): Promise<boolean> {
  async function errMsg(): Promise<boolean> {
    const reconnect = t('checkJoplinServer.reconnect')
    const r = await vscode.window.showErrorMessage(t('checkJoplinServer.error.dontConnect'), reconnect)
    if (r === reconnect) {
      return await checkJoplinServer()
    }
    return false
  }
  const extConfig = vscode.workspace.getConfiguration('joplin') as vscode.WorkspaceConfiguration & ExtConfig
  if (!extConfig.token) {
    vscode.window.showInformationMessage(t('checkJoplinServer.error.missToken'))
    return false
  }
  try {
    if (!(await GlobalContext.api.joplin.ping())) {
      return await errMsg()
    }
  } catch (e) {
    console.log('Error message: \n', e)
    return await errMsg()
  }

  return true
}
