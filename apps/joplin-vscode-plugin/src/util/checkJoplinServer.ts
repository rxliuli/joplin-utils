import * as vscode from 'vscode'
import { joplinApi } from 'joplin-api'
import { appConfig } from '../config/AppConfig'

/**
 * check joplin server
 */
export async function checkJoplinServer() {
  const errMsg = () =>
    vscode.window.showErrorMessage(
      `Joplin's token/port is set incorrectly, unable to access Joplin service! Are you sure it is running and active?`,
    )
  try {
    if (!(await joplinApi.ping())) {
      errMsg()
      console.log('Could not ping Joplin service.')
      return false
    }
  } catch (e) {
    errMsg()
    console.log('Error message: \n', JSON.stringify(e))
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
