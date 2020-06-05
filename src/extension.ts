// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { NoteListProvider } from './NoteProvider'
import { initTestEnv } from './util/initTestEnv'

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
  vscode.commands.registerCommand('extension.openNote', (id: string) => {
    vscode.window.showInformationMessage(`打开笔记 ${id}`)
  })
  vscode.commands.registerCommand('joplinNote.create', (title) => {
    console.log('joplinNote.create: ', title)
    vscode.window.showInformationMessage(`创建目录 ${title}`)
  })
  vscode.commands.registerCommand('joplinNote.rename', (title) => {
    console.log('joplinNote.rename: ', title)
    vscode.window.showInformationMessage(`重命名 ${title}`)
  })
  vscode.commands.registerCommand('joplinNote.remove', (id) => {
    console.log('joplinNote.remove: ', id)
    vscode.window.showInformationMessage(`删除 ${id}`)
  })
}

// this method is called when your extension is deactivated
export function deactivate() {}
