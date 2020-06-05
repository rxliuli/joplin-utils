// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { NoteListProvider } from './model/NoteProvider'
import { initTestEnv } from './util/initTestEnv'
import { FolderOrNote } from './FolderOrNote'
import { TypeEnum } from 'joplin-api'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const joplinNoteView = new NoteListProvider()
  initTestEnv()
  vscode.window.registerTreeDataProvider('joplin-note', joplinNoteView)
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
  vscode.commands.registerCommand('joplinNote.create', (title) => {
    console.log('joplinNote.create: ', title)
    vscode.window.showInformationMessage(`创建目录 ${title}`)
  })
  vscode.commands.registerCommand('joplinNote.rename', (title) => {
    console.log('joplinNote.rename: ', title)
    vscode.window.showInformationMessage(`重命名 ${title}`)
  })
  vscode.commands.registerCommand(
    'joplinNote.remove',
    async (item: FolderOrNote) => {
      const noteOrFolder = item.item
      const res = await vscode.window.showQuickPick(['确认', '取消'], {
        placeHolder: `是否删除${
          item.item.type_ === TypeEnum.Folder ? '目录' : '博客'
        } [${noteOrFolder.title}]`,
      })
      console.log(res)
      if (res !== '确认') {
        return
      }
      vscode.window.showInformationMessage('确认删除')
    },
  )
}

// this method is called when your extension is deactivated
export function deactivate() {}
