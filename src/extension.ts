// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { NoteListProvider } from './model/NoteProvider'
import { initDevEnv } from './util/initDevEnv'
import { JoplinNoteCommandService } from './service/JoplinNoteCommandService'
import { TypeEnum } from 'joplin-api'
import { appConfig } from './config/AppConfig'

initDevEnv()

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  if (!appConfig.token || !appConfig.programPath) {
    vscode.window.showInformationMessage('请先配置 joplin token 与安装路径！')
    return
  }
  const joplinNoteView = new NoteListProvider()
  const service = new JoplinNoteCommandService(joplinNoteView)
  service.init(appConfig)
  vscode.window.registerTreeDataProvider('joplin-note', joplinNoteView)

  //region 注册命令

  vscode.commands.registerCommand(
    'joplinNote.refreshNoteList',
    joplinNoteView.refresh.bind(joplinNoteView),
  )
  vscode.commands.registerCommand(
    'joplinNote.openNote',
    service.openNote.bind(service),
  )
  vscode.commands.registerCommand('joplinNote.createFolder', (item) =>
    service.create(item, TypeEnum.Folder),
  )
  vscode.commands.registerCommand('joplinNote.createNote', (item) =>
    service.create(item, TypeEnum.Note),
  )
  vscode.commands.registerCommand(
    'joplinNote.search',
    service.search.bind(service),
  )
  vscode.commands.registerCommand(
    'joplinNote.rename',
    service.rename.bind(service),
  )
  vscode.commands.registerCommand(
    'joplinNote.remove',
    service.remove.bind(service),
  )

  //endregion
}

// this method is called when your extension is deactivated
export function deactivate() {}
