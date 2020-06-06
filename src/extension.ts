// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { NoteListProvider } from './model/NoteProvider'
import { initTestEnv } from './util/initTestEnv'
import { FolderOrNote } from './model/FolderOrNote'
import { JoplinNoteCommandService } from './service/JoplinNoteCommandService'
import { TypeEnum } from 'joplin-api'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const joplinNoteView = new NoteListProvider()
  const service = new JoplinNoteCommandService(joplinNoteView)
  initTestEnv()
  vscode.window.registerTreeDataProvider('joplin-note', joplinNoteView)

  //region 注册命令

  vscode.commands.registerCommand('joplinNote.refreshNoteList', () => {
    // noinspection JSIgnoredPromiseFromCall
    joplinNoteView.refresh()
  })
  vscode.commands.registerCommand(
    'extension.openNote',
    (item: FolderOrNote) => {
      vscode.window.showInformationMessage(`打开笔记 ${item.item.title}`)
    },
  )
  vscode.commands.registerCommand('joplinNote.createFolder', (item) =>
    service.create(item, TypeEnum.Folder),
  )
  vscode.commands.registerCommand('joplinNote.createNote', (item) =>
    service.create(item, TypeEnum.Note),
  )
  vscode.commands.registerCommand('joplinNote.rename', (title) => {
    console.log('joplinNote.rename: ', title)
    vscode.window.showInformationMessage(`重命名 ${title}`)
  })
  vscode.commands.registerCommand(
    'joplinNote.remove',
    service.remove.bind(service),
  )

  //endregion
}

// this method is called when your extension is deactivated
export function deactivate() {}
