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
    joplinNoteView.refresh()
  })
}

// this method is called when your extension is deactivated
export function deactivate() {}
