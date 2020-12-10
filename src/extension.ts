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
import { uploadResourceService } from './service/UploadResourceService'
import { MDDocumentLinkProvider, MDHoverProvider } from './model/EditorProvider'
import { BindThisUtil } from './util/BindThisUtil'
import { globalState } from './state/GlobalState'

initDevEnv()

nls.config({
  messageFormat: nls.MessageFormat.bundle,
  bundleFormat: nls.BundleFormat.standalone,
})()

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// noinspection JSUnusedLocalSymbols
export async function activate(context: vscode.ExtensionContext) {
  globalState.context = context
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
  const joplinNoteCommandService = BindThisUtil.bindClassMethod(
    new JoplinNoteCommandService({
      noteViewProvider: noteListProvider,
      noteListTreeView,
    }),
  )
  joplinNoteCommandService.init(appConfig)
  const handlerService = BindThisUtil.bindClassMethod(
    new HandlerService(joplinNoteCommandService),
  )

  //region register commands

  vscode.commands.registerCommand(
    'joplinNote.refreshNoteList',
    noteListProvider.refresh.bind(noteListProvider),
  )
  vscode.commands.registerCommand(
    'joplinNote.search',
    joplinNoteCommandService.search,
  )
  vscode.commands.registerCommand(
    'joplinNote.openNote',
    joplinNoteCommandService.openNote,
  )

  vscode.commands.registerCommand('joplinNote.createFolder', (item) =>
    joplinNoteCommandService.create(TypeEnum.Folder, item),
  )
  vscode.commands.registerCommand('joplinNote.createNote', (item) =>
    joplinNoteCommandService.create(TypeEnum.Note, item),
  )
  vscode.commands.registerCommand(
    'joplinNote.rename',
    joplinNoteCommandService.rename,
  )
  vscode.commands.registerCommand(
    'joplinNote.copyLink',
    joplinNoteCommandService.copyLink,
  )
  vscode.commands.registerCommand(
    'joplinNote.remove',
    joplinNoteCommandService.remove,
  )
  vscode.commands.registerCommand(
    'joplinNote.toggleTodoState',
    joplinNoteCommandService.toggleTodoState,
  )
  vscode.commands.registerCommand(
    'joplinNote.createResource',
    joplinNoteCommandService.createResource,
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
    handlerService.handleCloseTextDocument,
  )
  vscode.window.registerUriHandler({
    handleUri: handlerService.uriHandler,
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
