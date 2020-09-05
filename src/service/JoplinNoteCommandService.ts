import { FolderOrNote } from '../model/FolderOrNote'
import * as vscode from 'vscode'
import { QuickPickItem, TreeView } from 'vscode'
import { actionApi, config, noteApi, searchApi, TypeEnum } from 'joplin-api'
import { NoteListProvider } from '../model/NoteProvider'
import { NoteGetRes } from 'joplin-api/dist/modal/NoteGetRes'
import { FolderOrNoteExtendsApi } from '../api/FolderOrNoteExtendsApi'
import { AppConfig } from '../config/AppConfig'
import * as path from 'path'

export class JoplinNoteCommandService {
  private folderOrNoteExtendsApi = new FolderOrNoteExtendsApi()

  constructor(
    private joplinNoteView: NoteListProvider,
    private treeView: TreeView<FolderOrNote>,
  ) {
  }

  init(appConfig: AppConfig) {
    if (!appConfig.token) {
      return
    }
    config.token = appConfig.token
    config.port = appConfig.port

    setInterval(async () => {
      await this.joplinNoteView.refresh()
    }, 1000 * 10)
  }

  /**
   * create folder or note
   * @param type
   * @param item
   */
  async create(
    type: TypeEnum,
    item: FolderOrNote = this.treeView.selection[0],
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
    await this.joplinNoteView.refresh()
    if (type === TypeEnum.Note) {
      await actionApi.openAndWatch(id)
    }
  }

  /**
   * remove folder or note
   * @param item
   */
  async remove(item: FolderOrNote = this.treeView.selection[0]) {
    console.log('joplinNote.remove: ', item)
    const folderOrNote = item.item
    const res = await vscode.window.showQuickPick(['Confirm', 'Cancel'], {
      placeHolder: `delete or not ${
        folderOrNote.type_ === TypeEnum.Folder
          ? 'folder'
          : (folderOrNote as NoteGetRes).is_todo
          ? 'todo'
          : 'note'
      } [${folderOrNote.title}]`,
    })
    console.log(res)
    if (res !== 'Confirm') {
      return
    }
    await this.folderOrNoteExtendsApi.remove(item.item)
    await this.joplinNoteView.refresh()
  }

  async rename(item: FolderOrNote = this.treeView.selection[0]) {
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
    await this.joplinNoteView.refresh()
  }

  async copyLink(item: FolderOrNote = this.treeView.selection[0]) {
    console.log('joplinNote.copyLink: ', item)
    //The special logic here refers to deleting the '# '
    const label = item.label?.startsWith('#')
      ? item.label?.replace('# ', '')
      : item.label
    const url = `[${label}](:/${item.id})`
    vscode.env.clipboard.writeText(url)
  }

  /**
   * open note in vscode
   * @param item
   */
  async openNote(item: Omit<FolderOrNote, 'item'> & { item: NoteGetRes }) {
    await actionApi.openAndWatch(item.id)
    console.log('openNote: ', item.id, await actionApi.noteIsWatched(item.id))
    const interval = setInterval(() => {
      this.treeView.reveal(item, {
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
    searchQuickPickBox.onDidChangeValue(async (value: string) => {
      if (value.trim() === '') {
        searchQuickPickBox.items = []
        return
      }
      const noteList = await searchApi.search({
        query: value,
        type: TypeEnum.Note,
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
      actionApi.openAndWatch(selectItem.noteId)
    })
    searchQuickPickBox.show()
  }

  /**
   * 切换选中的文件时自动展开左侧的树
   * @param fileName
   */
  async focus(fileName?: string) {
    if (!fileName) {
      return
    }
    if (!this.treeView.visible) {
      return
    }
    const joplinMdRegexp = new RegExp(`${path.sep}edit-(\\w{32})\\.md$`)
    console.log('focus: ', fileName, joplinMdRegexp.exec(fileName))
    if (!joplinMdRegexp.test(fileName)) {
      return
    }
    const noteId = joplinMdRegexp.exec(fileName)![1]
    const note = await noteApi.get(noteId)
    this.treeView.reveal(new FolderOrNote(note))
  }
}
