// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { NoteListProvider } from './model/NoteProvider'
import { initDevEnv } from './util/initDevEnv'
import { JoplinNoteCommandService } from './service/JoplinNoteCommandService'
import { joplinApi, TypeEnum } from 'joplin-api'
import { appConfig } from './config/AppConfig'
import { handlerService } from './service/HandlerService'
import * as nls from 'vscode-nls'
import { safeExec } from './util/safeExec'

initDevEnv()

nls.config({
  messageFormat: nls.MessageFormat.bundle,
  bundleFormat: nls.BundleFormat.standalone,
})()
const localize: nls.LocalizeFunc = nls.loadMessageBundle()
console.log('i18n: ', localize('', 'say.hello', 'world'), vscode.env.language)

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  if (!appConfig.token) {
    vscode.window.showInformationMessage(
      'Please configure joplin token first, and then restart VSCode!',
    )
    return
  }
  const errMsg = () =>
    vscode.window.showErrorMessage(
      `Joplin's token/port is set incorrectly, unable to access Joplin service!`,
    )
  try {
    if (!(await joplinApi.ping())) {
      errMsg()
      return
    }
  } catch (e) {
    errMsg()
    return
  }
  if (!safeExec(() => joplinApi.ping(), Promise.resolve(false))) {
    return
  }
  const joplinNoteView = new NoteListProvider()
  const joplinNoteCommandService = new JoplinNoteCommandService(joplinNoteView)
  joplinNoteCommandService.init(appConfig)
  vscode.window.registerTreeDataProvider('joplin-note', joplinNoteView)

  //region 注册命令

  vscode.workspace.onDidCloseTextDocument(
    handlerService.handleCloseTextDocument.bind(handlerService),
  )

  vscode.commands.registerCommand(
    'joplinNote.refreshNoteList',
    joplinNoteView.refresh.bind(joplinNoteView),
  )
  vscode.commands.registerCommand(
    'joplinNote.openNote',
    joplinNoteCommandService.openNote.bind(joplinNoteCommandService),
  )
  vscode.commands.registerCommand('joplinNote.createFolder', (item) =>
    joplinNoteCommandService.create(item, TypeEnum.Folder),
  )
  vscode.commands.registerCommand('joplinNote.createNote', (item) =>
    joplinNoteCommandService.create(item, TypeEnum.Note),
  )
  vscode.commands.registerCommand(
    'joplinNote.search',
    joplinNoteCommandService.search.bind(joplinNoteCommandService),
  )
  vscode.commands.registerCommand(
    'joplinNote.rename',
    joplinNoteCommandService.rename.bind(joplinNoteCommandService),
  )
  vscode.commands.registerCommand(
    'joplinNote.remove',
    joplinNoteCommandService.remove.bind(joplinNoteCommandService),
  )

  //endregion
}

// this method is called when your extension is deactivated
export function deactivate() {}
