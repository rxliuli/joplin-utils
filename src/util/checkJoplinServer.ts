import * as vscode from 'vscode'
import { joplinApi } from 'joplin-api'
import { appConfig } from '../config/AppConfig'

/**
 * check joplin server
 */
export async function checkJoplinServer() {
  const errMsg = () =>
    vscode.window.showErrorMessage(
      `Joplin's token/port is set incorrectly, unable to access Joplin service!`,
    )
  try {
    if (!(await joplinApi.ping())) {
      errMsg()
      return false
    }
  } catch (e) {
    errMsg()
    return false
  }
  if (!appConfig.token) {
    vscode.window.showInformationMessage(
      'Please configure joplin token first, and then restart VSCode!',
    )
    return false
  }
  return true
}
