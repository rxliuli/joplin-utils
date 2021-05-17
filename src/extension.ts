// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { NoteListProvider } from './model/NoteProvider'
import { JoplinNoteCommandService } from './service/JoplinNoteCommandService'
import { TypeEnum } from 'joplin-api'
import { appConfig } from './config/AppConfig'
import { HandlerService } from './service/HandlerService'
import { checkJoplinServer } from './util/checkJoplinServer'
import MarkdownIt from 'markdown-it'
import { useJoplinLink } from './util/useJoplinLink'
import { uploadResourceService } from './service/UploadResourceService'
import { MDDocumentLinkProvider, MDHoverProvider } from './model/EditorProvider'
import { globalState } from './state/GlobalState'
import { init } from './init'
import { registerCommand } from './util/registerCommand'
import { ClassUtil } from '@liuli-util/object'

init()

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// noinspection JSUnusedLocalSymbols
export async function activate(context: vscode.ExtensionContext) {
  globalState.context = context
  if (!(await checkJoplinServer())) {
    return
  }
  const noteListProvider = new NoteListProvider()
  const noteListTreeView = vscode.window.createTreeView('joplin-note', {
    treeDataProvider: noteListProvider,
  })
  const joplinNoteCommandService = ClassUtil.bindMethodThis(
    new JoplinNoteCommandService({
      noteViewProvider: noteListProvider,
      noteListTreeView,
    }),
  )
  joplinNoteCommandService.init(appConfig)
  const handlerService = ClassUtil.bindMethodThis(
    new HandlerService(joplinNoteCommandService),
  )
  joplinNoteCommandService.handlerService = handlerService

  //region register commands

  registerCommand(
    'joplinNote.refreshNoteList',
    noteListProvider.refresh.bind(noteListProvider),
  )
  registerCommand('joplinNote.search', joplinNoteCommandService.search)
  registerCommand('joplinNote.openNote', joplinNoteCommandService.openNote)

  registerCommand('joplinNote.createFolder', (item) =>
    joplinNoteCommandService.create(TypeEnum.Folder, item),
  )
  registerCommand('joplinNote.createNote', (item) =>
    joplinNoteCommandService.create(TypeEnum.Note, item),
  )
  registerCommand('joplinNote.rename', joplinNoteCommandService.rename)
  registerCommand('joplinNote.copyLink', joplinNoteCommandService.copyLink)
  registerCommand('joplinNote.remove', joplinNoteCommandService.remove)
  registerCommand('joplinNote.cut', joplinNoteCommandService.cut)
  registerCommand('joplinNote.paste', joplinNoteCommandService.paste)
  registerCommand(
    'joplinNote.toggleTodoState',
    joplinNoteCommandService.toggleTodoState,
  )
  registerCommand(
    'joplinNote.createResource',
    joplinNoteCommandService.createResource,
  )
  registerCommand(
    'joplinNote.removeResource',
    joplinNoteCommandService.removeResource,
  )
  registerCommand('joplinNote.manageTags', joplinNoteCommandService.manageTags)
  registerCommand('joplinNote.createTag', joplinNoteCommandService.createTag)
  registerCommand('joplinNote.removeTag', joplinNoteCommandService.removeTag)
  registerCommand('joplinNote.showCurrentlyOpenNote', async () => {
    {
      const activeFileName = vscode.window.activeTextEditor?.document.fileName
      if (!activeFileName) {
        return
      }
      await joplinNoteCommandService.onDidChangeActiveTextEditor(activeFileName)
    }
  })
  vscode.window.onDidChangeActiveTextEditor((e) =>
    joplinNoteCommandService.onDidChangeActiveTextEditor(e?.document.fileName),
  )

  //endregion

  //region register image upload

  registerCommand(
    'joplinNote.uploadImageFromClipboard',
    uploadResourceService.uploadImageFromClipboard.bind(uploadResourceService),
  )
  registerCommand(
    'joplinNote.uploadImageFromExplorer',
    uploadResourceService.uploadImageFromExplorer.bind(uploadResourceService),
  )
  registerCommand(
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
