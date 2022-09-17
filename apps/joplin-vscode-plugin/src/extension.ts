// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { NoteExplorerProvider } from './model/NoteExplorerProvider'
import { JoplinNoteCommandService } from './service/JoplinNoteCommandService'
import { TypeEnum } from 'joplin-api'
import { appConfig } from './config/AppConfig'
import { HandlerService } from './service/HandlerService'
import { checkJoplinServer } from './util/checkJoplinServer'
import MarkdownIt from 'markdown-it'
import { useJoplinImage, useJoplinLink } from './util/useJoplinLink'
import { uploadResourceService } from './service/UploadResourceService'
import { JoplinMarkdownLinkProvider } from './model/JoplinMarkdownLinkProvider'
import { GlobalContext } from './state/GlobalContext'
import { init } from './init'
import { registerCommand } from './util/registerCommand'
import { ClassUtil } from '@liuli-util/object'
import { logger } from './constants/logger'
import { transports } from 'winston'
import path from 'path'
import { mkdirp } from 'fs-extra'
import { htmlImageLink } from './util/htmlImageLink'
import { ReverseTextOnDropProvider } from './service/MarkdownDrop'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// noinspection JSUnusedLocalSymbols
export async function activate(context: vscode.ExtensionContext) {
  GlobalContext.context = context
  appConfig.loadConfig()
  console.log('logPath: ', context.logUri.fsPath)
  await mkdirp(context.logUri.fsPath)
  logger
    .add(new transports.File({ filename: path.resolve(context.logUri.fsPath, 'error.log'), level: 'error' }))
    .add(new transports.File({ filename: path.resolve(context.logUri.fsPath, 'combined.log') }))
  await init()
  if (!(await checkJoplinServer())) {
    return
  }
  const noteExplorerProvider = new NoteExplorerProvider()
  const noteListTreeView = vscode.window.createTreeView('joplin', {
    treeDataProvider: noteExplorerProvider,
    showCollapseAll: true,
    dragAndDropController: noteExplorerProvider,
    canSelectMany: false,
  })
  context.subscriptions.push(noteListTreeView)

  const joplinNoteCommandService = ClassUtil.bindMethodThis(
    new JoplinNoteCommandService({
      noteViewProvider: noteExplorerProvider,
      noteListTreeView,
    }),
  )
  await joplinNoteCommandService.init(appConfig)
  const handlerService = ClassUtil.bindMethodThis(new HandlerService(joplinNoteCommandService))
  GlobalContext.handlerService = handlerService
  joplinNoteCommandService.handlerService = handlerService

  //region register commands

  registerCommand('joplinNote.refreshNoteList', noteExplorerProvider.refresh.bind(noteExplorerProvider))
  registerCommand('joplinNote.search', joplinNoteCommandService.search)
  registerCommand('joplinNote.openNote', joplinNoteCommandService.openNote)

  registerCommand('joplinNote.createFolder', (item) => joplinNoteCommandService.create(TypeEnum.Folder, item))
  registerCommand('joplinNote.createNote', (item) => joplinNoteCommandService.create(TypeEnum.Note, item))
  registerCommand('joplinNote.rename', joplinNoteCommandService.rename)
  registerCommand('joplinNote.copyLink', joplinNoteCommandService.copyLink)
  registerCommand('joplinNote.remove', joplinNoteCommandService.remove)
  registerCommand('joplinNote.toggleTodoState', joplinNoteCommandService.toggleTodoState)
  registerCommand('joplinNote.createResource', joplinNoteCommandService.createResource)
  registerCommand('joplinNote.removeResource', joplinNoteCommandService.removeResource)
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
  registerCommand('joplinNote.showResources', async () => {
    {
      const activeFileName = vscode.window.activeTextEditor?.document.fileName
      if (!activeFileName) {
        return
      }
      await joplinNoteCommandService.showResources(activeFileName)
    }
  })
  registerCommand('joplinNote.showLogFileDir', () => vscode.env.openExternal(context.logUri))
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
  // Enable our providers in plaintext files
  const selector: vscode.DocumentSelector = { language: 'markdown' }

  // Register our providers
  context.subscriptions.push(
    vscode.languages.registerDocumentDropEditProvider(selector, new ReverseTextOnDropProvider()),
  )
  // context.subscriptions.push(
  //   vscode.languages.registerDocumentDropEditProvider(selector, new FileNameListOnDropProvider()),
  // )

  //endregion

  //region register other service

  vscode.workspace.onDidCloseTextDocument(handlerService.handleCloseTextDocument)
  vscode.window.registerUriHandler({
    handleUri: handlerService.uriHandler,
  })
  const docFilter: vscode.DocumentSelector = {
    language: 'markdown',
    scheme: 'file',
    pattern: '**/rxliuli.joplin-vscode-plugin/.tempNote/*.md',
  }
  const linkProvider = new JoplinMarkdownLinkProvider()
  context.subscriptions.push(
    vscode.languages.registerDocumentLinkProvider(docFilter, linkProvider),
    vscode.languages.registerHoverProvider(docFilter, linkProvider),
  )

  //endregion

  //region register markdown support

  return {
    extendMarkdownIt(md: MarkdownIt) {
      return md
        .use(useJoplinLink(GlobalContext.openNoteResourceMap))
        .use(
          useJoplinImage({
            token: appConfig.token!,
            baseUrl: appConfig.baseUrl!,
          }),
        )
        .use(
          htmlImageLink({
            token: appConfig.token!,
            baseUrl: appConfig.baseUrl!,
          }),
        )
    },
  }

  //endregion
}

// this method is called when your extension is deactivated
export function deactivate() {}
