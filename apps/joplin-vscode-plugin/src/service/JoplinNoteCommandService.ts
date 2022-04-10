import { FolderOrNote, JoplinListNote } from '../model/FolderOrNote'
import * as vscode from 'vscode'
import { QuickPickItem, TreeView } from 'vscode'
import {
  config,
  folderExtApi,
  noteApi,
  noteExtApi,
  PageUtil,
  resourceApi,
  searchApi,
  tagApi,
  TypeEnum,
} from 'joplin-api'
import { NoteExplorerProvider } from '../model/NoteExplorerProvider'
import { FolderOrNoteExtendsApi } from '../api/FolderOrNoteExtendsApi'
import { appConfig, AppConfig } from '../config/AppConfig'
import { JoplinNoteUtil } from '../util/JoplinNoteUtil'
import * as path from 'path'
import { createReadStream, mkdirp, pathExists, readFile, remove, writeFile } from 'fs-extra'
import { createEmptyFile } from '../util/createEmptyFile'
import { UploadResourceUtil } from '../util/UploadResourceUtil'
import { uploadResourceService } from './UploadResourceService'
import { difference } from 'lodash-es'
import { TagGetRes } from 'joplin-api/dist/modal/TagGetRes'
import { HandlerService } from './HandlerService'
import { TagUseService } from './TagUseService'
import { sortBy } from '@liuli-util/array'
import { i18n } from '../constants/i18n'
import { GlobalContext } from '../state/GlobalContext'
import { watch } from 'chokidar'
import { AsyncArray } from '@liuli-util/async'
import { filenamify } from '../util/filenamify'

export class JoplinNoteCommandService {
  private folderOrNoteExtendsApi = new FolderOrNoteExtendsApi()
  public handlerService!: HandlerService

  constructor(
    private config: {
      noteViewProvider: NoteExplorerProvider
      noteListTreeView: TreeView<FolderOrNote>
    },
  ) {}

  async init(appConfig: AppConfig) {
    if (!appConfig.token) {
      return
    }
    config.token = appConfig.token
    config.port = appConfig.port

    setInterval(async () => {
      await this.config.noteViewProvider.refresh()
    }, 1000 * 10)
    const tempNoteDirPath = path.resolve(GlobalContext.context.globalStorageUri.fsPath, '.tempNote')
    const tempResourceDirPath = path.resolve(GlobalContext.context.globalStorageUri.fsPath, '.tempResource')
    await AsyncArray.forEach([tempNoteDirPath, tempResourceDirPath], async (path) => {
      await remove(path)
      await mkdirp(path)
    })
    watch(tempNoteDirPath).on('change', async (filePath) => {
      const id = GlobalContext.openNoteMap.get(filePath)
      if (!id) {
        return
      }
      const content = await readFile(filePath, 'utf-8')
      await noteApi.update({
        id,
        body: content,
      })
      const resourceList = await noteApi.resourcesById(id)
      GlobalContext.openNoteResourceMap.set(id, resourceList)
    })
    watch(tempResourceDirPath).on('change', async (filePath) => {
      const id = GlobalContext.openResourceMap.get(filePath)
      if (!id) {
        return
      }
      await resourceApi.update({
        id,
        data: createReadStream(filePath),
      })
    })
  }

  /**
   * create folder or note
   * @param type
   * @param item
   */
  async create(type: TypeEnum, item: FolderOrNote = this.config.noteListTreeView.selection[0]) {
    const parentFolderId = !item ? '' : item.item.type_ === TypeEnum.Folder ? item.item.id : item.item.parent_id
    console.log('joplinNote.create: ', item, parentFolderId)

    const title = await vscode.window.showInputBox({
      placeHolder: i18n.t('Please enter what you want to create {{type}} name', {
        type: i18n.t(type === TypeEnum.Folder ? 'folder' : 'note'),
      }),
    })
    if (!title) {
      return
    }

    const { id } = await this.folderOrNoteExtendsApi.create({
      title,
      parent_id: parentFolderId,
      type_: type,
    })
    await this.config.noteViewProvider.refresh()
    if (type === TypeEnum.Note) {
      await GlobalContext.handlerService.openNote(id)
    }
  }

  /**
   * remove folder or note
   * @param item
   */
  async remove(item: FolderOrNote = this.config.noteListTreeView.selection[0]) {
    console.log('joplinNote.remove: ', item)
    const folderOrNote = item.item
    if (appConfig.deleteConfirm) {
      const confirmMsg = i18n.t('confirm')
      const cancelMsg = i18n.t('cancel')
      const res = await vscode.window.showQuickPick([confirmMsg, cancelMsg], {
        placeHolder: i18n.t('delete or not {{type}} [{{title}}]', {
          type: i18n.t(
            folderOrNote.type_ === TypeEnum.Folder
              ? 'folder'
              : (folderOrNote as JoplinListNote).is_todo
              ? 'todo'
              : 'note',
          ),
          title: folderOrNote.title,
        }),
      })
      console.log(res)
      if (res !== confirmMsg) {
        return
      }
    }

    await this.folderOrNoteExtendsApi.remove(item.item)
    await this.config.noteViewProvider.refresh()
  }

  async rename(item: FolderOrNote = this.config.noteListTreeView.selection[0]) {
    console.log('joplinNote.rename: ', item)
    const title = await vscode.window.showInputBox({
      placeHolder: i18n.t('Please enter a new name'),
      value: item.item.title,
    })
    if (!title) {
      return
    }
    await this.folderOrNoteExtendsApi.rename({
      id: item.item.id,
      title,
      type_: item.item.type_,
    })
    await this.config.noteViewProvider.refresh()
  }

  async copyLink(item: FolderOrNote = this.config.noteListTreeView.selection[0]) {
    console.log('joplinNote.copyLink: ', item)
    const label = JoplinNoteUtil.trimTitleStart(item.label!.trim())
    const url = `[${label}](:/${item.id})`
    vscode.env.clipboard.writeText(url)
  }

  async toggleTodoState(item: FolderOrNote = this.config.noteListTreeView.selection[0]) {
    await noteExtApi.toggleTodo(item.id)
    await this.config.noteViewProvider.refresh()
  }

  /**
   * open note in vscode
   * @param item
   */
  async openNote(item: Omit<FolderOrNote, 'item'> & { item: JoplinListNote }) {
    // 如果已经打开了笔记，则应该切换并且保持 treeview 的焦点
    if (GlobalContext.openNoteMap.has(item.id)) {
      const filePath = GlobalContext.openNoteMap.get(item.id)!
      if (vscode.window.activeTextEditor?.document.fileName !== filePath) {
        await vscode.commands.executeCommand('vscode.open', vscode.Uri.file(filePath))
      }
      await this.focus(item.id)
      return
    }
    const tempNoteDirPath = path.resolve(GlobalContext.context.globalStorageUri.fsPath, '.tempNote')
    const filename = item.label + (GlobalContext.openNoteMap.get(item.label) ? item.id : '')
    const tempNotePath = path.resolve(tempNoteDirPath, filenamify(`${filename}.md`))
    const note = await noteApi.get(item.id, ['body', 'title'])
    await writeFile(tempNotePath, note.body)
    GlobalContext.openNoteMap.set(item.id, tempNotePath)
    GlobalContext.openNoteResourceMap.set(item.id, await noteApi.resourcesById(item.id))
    await vscode.commands.executeCommand('vscode.open', vscode.Uri.file(tempNotePath))
  }

  /**
   * show search input box
   */
  async search() {
    interface SearchNoteItem extends QuickPickItem {
      noteId: string
    }

    const searchQuickPickBox = vscode.window.createQuickPick<SearchNoteItem>()
    searchQuickPickBox.placeholder = i18n.t('Please enter key words')
    searchQuickPickBox.canSelectMany = false
    searchQuickPickBox.items = await this.loadLastNoteList()

    searchQuickPickBox.onDidChangeValue(async (value: string) => {
      if (value.trim() === '') {
        searchQuickPickBox.items = await this.loadLastNoteList()
        return
      }
      const { items: noteList } = await searchApi.search({
        query: value,
        type: TypeEnum.Note,
        fields: ['id', 'title'],
        limit: 100,
        order_by: 'user_updated_time',
        order_dir: 'DESC',
      })
      searchQuickPickBox.items = noteList.map((note) => ({
        label: note.title,
        noteId: note.id,
        alwaysShow: true,
      }))
      console.log('search: ', value, JSON.stringify(searchQuickPickBox.items))
    })
    searchQuickPickBox.onDidAccept(() => {
      const selectItem = searchQuickPickBox.selectedItems[0]
      GlobalContext.handlerService.openNote(selectItem.noteId)
    })
    searchQuickPickBox.show()
  }

  private readonly LastLimitCount = 20

  /**
   * 加载最后编辑的一些笔记
   * @private
   */
  private async loadLastNoteList() {
    return (
      await noteApi.list({
        fields: ['id', 'title'],
        limit: this.LastLimitCount,
        order_dir: 'DESC',
        order_by: 'user_updated_time',
      })
    ).items.map((item) => ({
      label: item.title,
      noteId: item.id,
      alwaysShow: true,
    }))
  }

  /**
   * 切换选中的文件时自动展开左侧的树
   * @param fileName
   */
  async onDidChangeActiveTextEditor(fileName?: string) {
    if (!this.config.noteListTreeView.visible) {
      return
    }
    const noteId = JoplinNoteUtil.getNoteIdByFileName(fileName)
    if (!noteId) {
      return
    }
    await Promise.all([this.focus(noteId), this.refreshResource(noteId)])
  }

  private async refreshResource(noteId: string) {
    console.log('refreshResource: ', noteId, this.config)
  }

  private async focus(noteId: string) {
    const note = await noteApi.get(noteId, ['id', 'parent_id', 'title', 'is_todo', 'todo_completed'])
    this.config.noteListTreeView.reveal(
      new FolderOrNote({
        ...note,
        type_: TypeEnum.Note,
      }),
    )
  }

  /**
   * 创建资源
   */
  async createResource() {
    const globalStoragePath = GlobalContext.context.globalStorageUri.fsPath
    const title = await vscode.window.showInputBox({
      placeHolder: i18n.t('Please enter what you want to create {{type}} name', {
        type: i18n.t('attachment'),
      }),
      value: '',
    })
    if (!title) {
      return
    }
    const filePath = path.resolve(globalStoragePath, `tempResource/${title}`)
    const dir = path.dirname(filePath)
    if (!(await pathExists(dir))) {
      await mkdirp(dir)
    }
    await createEmptyFile(filePath)
    let { res, markdownLink } = await UploadResourceUtil.uploadFileByPath(filePath)
    // 如果是 svg 图片则作为图片插入
    if (path.extname(filePath) === '.svg') {
      markdownLink = '!' + markdownLink
    }
    await Promise.all([
      uploadResourceService.insertUrlByActiveEditor(markdownLink),
      uploadResourceService.refreshResourceList(res.id),
    ])
    if (await pathExists(filePath)) {
      await remove(filePath)
    }
    vscode.window.showInformationMessage(i18n.t('Attachment resource created successfully'))
    await this.handlerService.openResource(res.id)
  }

  /**
   * 删除附件
   */
  async removeResource() {
    const list = (
      await PageUtil.pageToAllList(resourceApi.list, {
        order_by: 'user_updated_time',
        order_dir: 'DESC',
      })
    ).map(
      (item) =>
        ({
          label: item.title,
          id: item.id,
        } as vscode.QuickPickItem & { id: string }),
    )
    const selectItemList = await vscode.window.showQuickPick(list, {
      canPickMany: true,
      placeHolder: '请选择要删除的附件资源',
    })
    if (!selectItemList || selectItemList.length === 0) {
      return
    }
    await Promise.all(selectItemList.map(async (item) => resourceApi.remove(item.id)))
    vscode.window.showInformationMessage(selectItemList.map((item) => item.label).join('\n'), {
      title: '删除附件成功',
    })
  }

  private readonly tagUseService = new TagUseService(
    path.resolve(GlobalContext.context.globalStorageUri.fsPath, 'joplin-vscode-plugin.sqlite'),
  )

  /**
   * 管理标签
   * 有两种模式
   * 1. 在笔记侧边栏
   * 2. 在笔记编辑器中
   * @param item
   */
  async manageTags(item?: Omit<FolderOrNote, 'item'> & { item: JoplinListNote }) {
    const noteId = item?.id || JoplinNoteUtil.getNoteIdByFileName(vscode.window.activeTextEditor?.document.fileName)
    if (!noteId) {
      return
    }
    const oldSelectIdList = (await noteApi.tagsById(noteId)).map((tag) => tag.id)

    const lastUseTimeMap = await this.tagUseService.getMap()
    const selectTagSet = new Set(oldSelectIdList)
    const items = sortBy(
      await PageUtil.pageToAllList(tagApi.list),
      (item) => -(selectTagSet.has(item.id) ? Date.now() : lastUseTimeMap.get(item.id)?.lastUseTime ?? 0),
    ).map(
      (tag) =>
        ({
          label: tag.title,
          picked: selectTagSet.has(tag.id),
          tag,
        } as vscode.QuickPickItem & { tag: TagGetRes }),
    )

    const selectItems = await vscode.window.showQuickPick(items, {
      placeHolder: i18n.t('Please select a tag for this note'),
      canPickMany: true,
    })
    if (!selectItems) {
      return
    }
    const selectIdList = selectItems.map((item) => item.tag.id)
    const addIdList = difference(selectIdList, oldSelectIdList)
    const deleteIdList = difference(oldSelectIdList, selectIdList)
    console.log('选择项: ', selectItems, addIdList, deleteIdList)
    await Promise.all(addIdList.map((id) => tagApi.addTagByNoteId(id, noteId)))
    await Promise.all(deleteIdList.map((id) => tagApi.removeTagByNoteId(id, noteId)))
    await this.tagUseService.save(selectItems.map((item) => item.tag))
  }

  async createTag() {
    const title = await vscode.window.showInputBox({
      placeHolder: i18n.t('Please enter the name of the new tag'),
    })
    if (!title) {
      return
    }
    await tagApi.create({
      title,
    })
    vscode.window.showInformationMessage(
      i18n.t('Create tag [{{title}}] success', {
        title,
      }),
    )
  }

  async removeTag() {
    const items = (await PageUtil.pageToAllList(tagApi.list)).map(
      (tag) =>
        ({
          label: tag.title,
          tag,
        } as vscode.QuickPickItem & { tag: TagGetRes }),
    )
    const selectItem = await vscode.window.showQuickPick(items, {
      placeHolder: i18n.t('Please select the tag to delete'),
    })
    if (!selectItem) {
      return
    }
    await tagApi.remove(selectItem.tag.id)
    vscode.window.showInformationMessage(
      i18n.t('Remove tag [{{title}}] success', {
        title: selectItem.tag.title,
      }),
    )
  }

  private clipboard: FolderOrNote | null = null

  /**
   * 剪切
   */
  cut(item: FolderOrNote = this.config.noteListTreeView.selection[0]) {
    console.log('joplinNote.cut: ', item)
    this.clipboard = item
    vscode.window.showInformationMessage(i18n.t('cut-success'))
  }

  /**
   * 粘贴
   */
  async paste(item: FolderOrNote = this.config.noteListTreeView.selection[0]) {
    const clipboard = this.clipboard?.item
    console.log('paste: ', clipboard, item)
    if (!clipboard) {
      vscode.window.showWarningMessage(i18n.t('paste-error-clipboardNotFound'))
      return
    }
    if (!item) {
      vscode.window.showWarningMessage(i18n.t('paste-error-itemNotFound'))
      return
    }
    if (item.item.type_ !== TypeEnum.Folder) {
      vscode.window.showWarningMessage(i18n.t('paste-error-targetNotDir'))
      return
    }
    if (clipboard.id === item.id) {
      vscode.window.showWarningMessage(i18n.t('paste-error-targetNotThis'))
      return
    }
    if (clipboard.type_ === TypeEnum.Folder) {
      const paths = await folderExtApi.path(item.id)
      console.log('paths: ', paths)
      if (paths.some((item) => item.id === clipboard.id)) {
        vscode.window.showWarningMessage(i18n.t('paste-error-canTPasteSub'))
        return
      }
      await folderExtApi.move(clipboard.id, item.id)
    } else {
      await noteExtApi.move(clipboard.id, item.id)
    }
    await this.config.noteViewProvider.refresh()
    vscode.window.showInformationMessage(i18n.t('paste-success'))
    this.clipboard = null
  }
}
