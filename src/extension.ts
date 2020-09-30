// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { NoteListProvider } from './model/NoteProvider'
import { initDevEnv } from './util/initDevEnv'
import { JoplinNoteCommandService } from './service/JoplinNoteCommandService'
import { TypeEnum } from 'joplin-api'
import { appConfig } from './config/AppConfig'
import { HandlerService } from './service/HandlerService'
import * as nls from 'vscode-nls'
import { checkJoplinServer } from './util/checkJoplinServer'
import * as MarkdownIt from 'markdown-it'
import { useJoplinLink } from './util/useJoplinLink'
import { uploadImageService } from './service/UploadImageService'

initDevEnv()

nls.config({
  messageFormat: nls.MessageFormat.bundle,
  bundleFormat: nls.BundleFormat.standalone,
})()

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// noinspection JSUnusedLocalSymbols
export async function activate(context: vscode.ExtensionContext) {
  if (!(await checkJoplinServer())) {
    return
  }
  const joplinNoteView = new NoteListProvider()
  // vscode.window.registerTreeDataProvider('joplin-note', joplinNoteView)
  const treeView = vscode.window.createTreeView('joplin-note', {
    treeDataProvider: joplinNoteView,
  })
  const joplinNoteCommandService = new JoplinNoteCommandService(
    joplinNoteView,
    treeView,
  )
  joplinNoteCommandService.init(appConfig)
  const handlerService = new HandlerService(joplinNoteCommandService)

  //region register commands

  vscode.commands.registerCommand(
    'joplinNote.refreshNoteList',
    joplinNoteView.refresh.bind(joplinNoteView),
  )
  vscode.commands.registerCommand(
    'joplinNote.search',
    joplinNoteCommandService.search.bind(joplinNoteCommandService),
  )
  vscode.commands.registerCommand(
    'joplinNote.openNote',
    joplinNoteCommandService.openNote.bind(joplinNoteCommandService),
  )

  vscode.commands.registerCommand('joplinNote.createFolder', (item) =>
    joplinNoteCommandService.create(TypeEnum.Folder, item),
  )
  vscode.commands.registerCommand('joplinNote.createNote', (item) =>
    joplinNoteCommandService.create(TypeEnum.Note, item),
  )
  vscode.commands.registerCommand(
    'joplinNote.rename',
    joplinNoteCommandService.rename.bind(joplinNoteCommandService),
  )
  vscode.commands.registerCommand(
    'joplinNote.copyLink',
    joplinNoteCommandService.copyLink.bind(joplinNoteCommandService),
  )
  vscode.commands.registerCommand(
    'joplinNote.remove',
    joplinNoteCommandService.remove.bind(joplinNoteCommandService),
  )
  vscode.window.onDidChangeActiveTextEditor((e) =>
    joplinNoteCommandService.focus(e?.document.fileName),
  )

  //endregion

  //region register image upload

  vscode.commands.registerCommand(
    'joplin.uploadImageFromClipboard',
    uploadImageService.uploadImageFromClipboard.bind(uploadImageService),
  )
  vscode.commands.registerCommand(
    'joplin.uploadImageFromExplorer',
    uploadImageService.uploadImageFromExplorer.bind(uploadImageService),
  )

  //endregion

  //region register other service

  vscode.workspace.onDidCloseTextDocument(
    handlerService.handleCloseTextDocument.bind(handlerService),
  )
  vscode.window.registerUriHandler({
    handleUri: handlerService.uriHandler.bind(handlerService),
  })

  //endregion

  //region register markdown support

  return {
    extendMarkdownIt(md: MarkdownIt) {
      return md.use(useJoplinLink())
    },
  }

  //endregion
}

// this method is called when your extension is deactivated
export function deactivate() {}
