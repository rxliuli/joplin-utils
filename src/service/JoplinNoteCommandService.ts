import { FolderOrNote, JoplinListNote } from '../model/FolderOrNote'
import * as vscode from 'vscode'
import { QuickPickItem, TreeView } from 'vscode'
import {
  config,
  noteActionApi,
  noteApi,
  noteExtApi,
  searchApi,
  TypeEnum,
} from 'joplin-api'
import { NoteListProvider } from '../model/NoteProvider'
import { FolderOrNoteExtendsApi } from '../api/FolderOrNoteExtendsApi'
import { AppConfig } from '../config/AppConfig'
import { JoplinNoteUtil } from '../util/JoplinNoteUtil'

export class JoplinNoteCommandService {
  private folderOrNoteExtendsApi = new FolderOrNoteExtendsApi()

  constructor(
    private config: {
      noteViewProvider: NoteListProvider
      noteListTreeView: TreeView<FolderOrNote>
    },
  ) {}

  init(appConfig: AppConfig) {
    if (!appConfig.token) {
      return
    }
    config.token = appConfig.token
    config.port = appConfig.port

    setInterval(async () => {
      await this.config.noteViewProvider.refresh()
    }, 1000 * 10)
  }

  /**
   * create folder or note
   * @param type
   * @param item
   */
  async create(
    type: TypeEnum,
    item: FolderOrNote = this.config.noteListTreeView.selection[0],
  ) {
    const parentFolderId = !item
      ? ''
      : item.item.type_ === TypeEnum.Folder
      ? item.item.id
      : item.item.parent_id
    console.log('joplinNote.create: ', item, parentFolderId)

    const title = await vscode.window.showInputBox({
      placeHolder: `Please enter what you want to create ${
        type === TypeEnum.Folder ? 'folder' : 'note'
      } name`,
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
      await noteActionApi.openAndWatch(id)
    }
  }

  /**
   * remove folder or note
   * @param item
   */
  async remove(item: FolderOrNote = this.config.noteListTreeView.selection[0]) {
    console.log('joplinNote.remove: ', item)
    const folderOrNote = item.item
    const res = await vscode.window.showQuickPick(['Confirm', 'Cancel'], {
      placeHolder: `delete or not ${
        folderOrNote.type_ === TypeEnum.Folder
          ? 'folder'
          : (folderOrNote as JoplinListNote).is_todo
          ? 'todo'
          : 'note'
      } [${folderOrNote.title}]`,
    })
    console.log(res)
    if (res !== 'Confirm') {
      return
    }
    await this.folderOrNoteExtendsApi.remove(item.item)
    await this.config.noteViewProvider.refresh()
  }

  async rename(item: FolderOrNote = this.config.noteListTreeView.selection[0]) {
    console.log('joplinNote.rename: ', item)
    const title = await vscode.window.showInputBox({
      placeHolder: `Please enter a new name`,
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

  async copyLink(
    item: FolderOrNote = this.config.noteListTreeView.selection[0],
  ) {
    console.log('joplinNote.copyLink: ', item)
    const label = JoplinNoteUtil.trimTitleStart(item.label!)
    const url = `[${label}](:/${item.id})`
    vscode.env.clipboard.writeText(url)
  }

  async toggleTodoState(
    item: FolderOrNote = this.config.noteListTreeView.selection[0],
  ) {
    await noteExtApi.toggleTodo(item.id)
    await this.config.noteViewProvider.refresh()
  }

  /**
   * open note in vscode
   * @param item
   */
  async openNote(item: Omit<FolderOrNote, 'item'> & { item: JoplinListNote }) {
    await noteActionApi.openAndWatch(item.id)
    console.log('openNote: ', item.id, await noteActionApi.isWatch(item.id))
    const interval = setInterval(() => {
      this.config.noteListTreeView.reveal(item, {
        select: true,
        focus: true,
      })
    }, 17)
    await new Promise((resolve) =>
      setTimeout(() => resolve(clearInterval(interval)), 500),
    )
  }

  /**
   * show search input box
   */
  async search() {
    interface SearchNoteItem extends QuickPickItem {
      noteId: string
    }

    const searchQuickPickBox = vscode.window.createQuickPick<SearchNoteItem>()
    searchQuickPickBox.placeholder = 'Please enter key words'
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
      noteActionApi.openAndWatch(selectItem.noteId)
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
    const note = await noteApi.get(noteId, [
      'id',
      'parent_id',
      'title',
      'is_todo',
      'todo_completed',
    ])
    this.config.noteListTreeView.reveal(
      new FolderOrNote({
        ...note,
        type_: TypeEnum.Note,
      }),
    )
  }
}
