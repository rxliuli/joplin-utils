// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { NoteListProvider } from './model/NoteProvider'
import { initDevEnv } from './util/initDevEnv'
import { JoplinNoteCommandService } from './service/JoplinNoteCommandService'
import { TypeEnum, noteApi, resourceApi } from 'joplin-api'
import { appConfig } from './config/AppConfig'
import { HandlerService } from './service/HandlerService'
import * as nls from 'vscode-nls'
import { checkJoplinServer } from './util/checkJoplinServer'
import * as MarkdownIt from 'markdown-it'
import { useJoplinLink, wrapLink } from './util/useJoplinLink'
import { uploadResourceService } from './service/UploadResourceService'
import { getReferenceAtPosition, matchAll } from './util/utils'
import { JoplinLinkRegex, JoplinResourceRegex } from './util/constant'
import { formatSize } from './util/formatSize'
import { isInFencedCodeBlock, isInCodeSpan } from './util/externalUtils'
import { MDDocumentLinkProvider, MDHoverProvider } from './model/EditorProvider'

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
  const noteListProvider = new NoteListProvider()
  // vscode.window.registerTreeDataProvider('joplin-note', joplinNoteView)
  const noteListTreeView = vscode.window.createTreeView('joplin-note', {
    treeDataProvider: noteListProvider,
  })
  // 暂时不再需要 resource view 了
  // const resourceProvider = new ResourceProvider()
  // const resourceTreeView = vscode.window.createTreeView(
  //   'joplin-note-resource',
  //   {
  //     treeDataProvider: resourceProvider,
  //   },
  // )
  const joplinNoteCommandService = new JoplinNoteCommandService({
    noteViewProvider: noteListProvider,
    noteListTreeView,
    // resourceProvider,
    // resourceTreeView,
  })
  joplinNoteCommandService.init(appConfig)
  const handlerService = new HandlerService(joplinNoteCommandService)

  //region register commands

  vscode.commands.registerCommand(
    'joplinNote.refreshNoteList',
    noteListProvider.refresh.bind(noteListProvider),
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
  vscode.commands.registerCommand(
    'joplinNote.toggleTodoState',
    joplinNoteCommandService.toggleTodoState.bind(joplinNoteCommandService),
  )
  vscode.commands.registerCommand('joplinNote.resource.refresh', () => {
    const fileName = vscode.window.activeTextEditor?.document.fileName
    joplinNoteCommandService.onDidChangeActiveTextEditor(fileName)
  })
  vscode.window.onDidChangeActiveTextEditor((e) =>
    joplinNoteCommandService.onDidChangeActiveTextEditor(e?.document.fileName),
  )

  //endregion

  //region register image upload

  vscode.commands.registerCommand(
    'joplinNote.uploadImageFromClipboard',
    uploadResourceService.uploadImageFromClipboard.bind(uploadResourceService),
  )
  vscode.commands.registerCommand(
    'joplinNote.uploadImageFromExplorer',
    uploadResourceService.uploadImageFromExplorer.bind(uploadResourceService),
  )
  vscode.commands.registerCommand(
    'joplinNote.uploadFileFromExplorer',
    uploadResourceService.uploadFileFromExplorer.bind(uploadResourceService),
  )

  //endregion

  //region register other service

  vscode.workspace.onDidCloseTextDocument(
    handlerService.handleCloseTextDocument.bind(handlerService),
  )
  vscode.window.registerUriHandler({
    handleUri: handlerService.uriHandler.bind(handlerService),
  })
  const docFilter = {
    language: 'markdown',
    scheme: 'file',
    pattern: '**/edit-*.md',
  }
  context.subscriptions.push(
    vscode.languages.registerDocumentLinkProvider(
      docFilter,
      new MDDocumentLinkProvider(),
    ),
    vscode.languages.registerHoverProvider(docFilter, new MDHoverProvider()),
  )

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
