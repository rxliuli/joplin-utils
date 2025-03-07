import * as vscode from 'vscode'
import { NoteExplorerProvider } from './provider/NoteExplorerProvider'
import { JoplinNoteCommandService } from './service/JoplinNoteCommandService'
import { HandlerService } from './service/HandlerService'
import { checkJoplinServer } from './util/checkJoplinServer'
import { uploadResourceService } from './service/UploadResourceService'
import { MarkdownProvider } from './provider/MarkdownProvider'
import { GlobalContext } from './constants/context'
import { registerCommand } from './util/registerCommand'
import { ClassUtil } from '@liuli-util/object'
import { initLogger } from './constants/logger'
import path from 'pathe'
import { linkCommands, noteCommands, tagCommands } from './commands'
import { initI18n } from './constants/i18n'
import { extendMarkdownIt } from './util/markdown'
import { initConfig } from './constants/config'
import { NoteSearchProvider } from './provider/NoteSearchProvider'
import { rm } from 'node:fs/promises'
import { AsyncArray } from '@liuli-util/async'

async function cleanTempNote() {
  // TODO: wait for https://github.com/microsoft/vscode/issues/242867
  const tabs = vscode.window.tabGroups.all
    .flatMap((it) => it.tabs)
    .filter((it) => {
      if (typeof it.input === 'object' && it.input && 'uri' in it.input && it.input.uri instanceof vscode.Uri) {
        const fsPath = path.resolve(it.input.uri.fsPath)
        const tempNodePath = path.resolve(GlobalContext.context.globalStorageUri.fsPath, '.tempNote')
        const tempResourcePath = path.resolve(GlobalContext.context.globalStorageUri.fsPath, '.tempResource')
        return fsPath.startsWith(tempNodePath) || fsPath.startsWith(tempResourcePath)
      }
      return false
    })
  if (tabs.length > 0) {
    await vscode.window.tabGroups.close(tabs, false)
  }
}

export async function activate(context: vscode.ExtensionContext) {
  GlobalContext.context = context
  initConfig()
  const logPath = path.resolve(context.globalStorageUri.fsPath, 'log')
  await cleanTempNote()
  initLogger(logPath)
  await initI18n({
    language: vscode.env.language.toLocaleLowerCase().includes('zh') ? 'zh-CN' : 'en-US',
  })
  checkJoplinServer()
  const noteExplorerProvider = new NoteExplorerProvider()
  const noteListTreeView = vscode.window.createTreeView('noteExplorer', {
    treeDataProvider: noteExplorerProvider,
    showCollapseAll: true,
    dragAndDropController: noteExplorerProvider,
    canSelectMany: false,
  })
  context.subscriptions.push(noteListTreeView)
  const noteSearchProvider = new NoteSearchProvider()
  const noteSearchTreeView = vscode.window.createTreeView('noteSearch', {
    treeDataProvider: noteSearchProvider,
    showCollapseAll: false,
    canSelectMany: false,
  })
  GlobalContext.noteExplorerProvider = noteExplorerProvider
  GlobalContext.noteSearchProvider = noteSearchProvider
  context.subscriptions.push(noteSearchTreeView)

  const joplinNoteCommandService = ClassUtil.bindMethodThis(
    new JoplinNoteCommandService({
      noteViewProvider: noteExplorerProvider,
      noteListTreeView,
    }),
  )
  await joplinNoteCommandService.init()
  const handlerService = ClassUtil.bindMethodThis(new HandlerService(joplinNoteCommandService))
  GlobalContext.handlerService = handlerService
  joplinNoteCommandService.handlerService = handlerService

  //region register commands

  registerCommand('joplin.refreshNoteList', noteExplorerProvider.refresh.bind(noteExplorerProvider))
  registerCommand('joplin.search', joplinNoteCommandService.search)
  registerCommand('joplin.openNote', joplinNoteCommandService.openNote)

  registerCommand('joplin.createFolder', (item) => joplinNoteCommandService.create('folder', item))
  registerCommand('joplin.createNote', (item) => joplinNoteCommandService.create('note', item))
  registerCommand('joplin.createTodo', (item) => joplinNoteCommandService.create('todo', item))
  registerCommand('joplin.rename', joplinNoteCommandService.rename)
  registerCommand('joplin.copyLink', joplinNoteCommandService.copyLink)
  registerCommand('joplin.remove', joplinNoteCommandService.remove)
  registerCommand('joplin.cut', joplinNoteCommandService.cut)
  registerCommand('joplin.paste', joplinNoteCommandService.paste)
  registerCommand('joplin.toggleTodoState', joplinNoteCommandService.toggleTodoState)
  registerCommand('joplin.createResource', joplinNoteCommandService.createResource)
  registerCommand('joplin.removeResource', joplinNoteCommandService.removeResource)
  const note = noteCommands()
  registerCommand('joplin.createBySelection', note.createBySelection)
  const tag = tagCommands()
  registerCommand('joplin.manageTags', tag.manageTags)
  registerCommand('joplin.createTag', tag.createTag)
  registerCommand('joplin.removeTag', tag.removeTag)
  registerCommand('joplin.showCurrentlyOpenNote', async () => {
    {
      const activeFileName = vscode.window.activeTextEditor?.document.fileName
      activeFileName && (await joplinNoteCommandService.onDidChangeActiveTextEditor(activeFileName))
    }
  })
  registerCommand('joplin.showResources', async () => {
    {
      const activeFileName = vscode.window.activeTextEditor?.document.fileName
      activeFileName && (await joplinNoteCommandService.showResources(activeFileName))
    }
  })
  const link = linkCommands()
  registerCommand('joplin.insertNoteLink', link.insertNoteLink)
  registerCommand('joplin.showLinkThisNotes', link.showLinkThisNotes)
  registerCommand('joplin.showThisNoteLinks', link.showThisNoteLinks)
  registerCommand('joplin.showLogFileDir', () => vscode.env.openExternal(vscode.Uri.file(logPath)))
  vscode.window.onDidChangeActiveTextEditor((e) =>
    joplinNoteCommandService.onDidChangeActiveTextEditor(e?.document.fileName),
  )

  //endregion

  //region register image upload

  registerCommand(
    'joplin.uploadImageFromClipboard',
    uploadResourceService.uploadImageFromClipboard.bind(uploadResourceService),
  )
  registerCommand(
    'joplin.uploadImageFromExplorer',
    uploadResourceService.uploadImageFromExplorer.bind(uploadResourceService),
  )
  registerCommand(
    'joplin.uploadFileFromExplorer',
    uploadResourceService.uploadFileFromExplorer.bind(uploadResourceService),
  )

  //endregion

  //region register other service

  vscode.workspace.onDidCloseTextDocument(handlerService.handleCloseTextDocument)
  vscode.window.registerUriHandler({
    handleUri: handlerService.uriHandler,
  })
  const docFilter: vscode.DocumentSelector = {
    language: 'markdown',
    scheme: 'file',
  }
  const markdownProvider = new MarkdownProvider()
  context.subscriptions.push(vscode.languages.registerDocumentLinkProvider(docFilter, markdownProvider))

  registerCommand('joplin.closeWindows', async () => {
    const tabs = vscode.window.tabGroups.all.flatMap((it) => it.tabs)
    await vscode.window.tabGroups.close(tabs)
  })

  //endregion

  //region register markdown support

  return { extendMarkdownIt }

  //endregion
}

export async function deactivate() {
  const files = [...GlobalContext.openNoteMap.keys(), ...GlobalContext.openResourceMap.keys()].filter((k) =>
    path.isAbsolute(k),
  )
  await AsyncArray.forEach(files, async (file) => {
    await rm(file, { force: true })
  })
}
