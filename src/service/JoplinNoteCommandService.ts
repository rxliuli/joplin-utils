import { FolderOrNote } from '../model/FolderOrNote'
import * as vscode from 'vscode'
import { QuickPickItem } from 'vscode'
import { actionApi, config, folderApi, searchApi, TypeEnum } from 'joplin-api'
import { NoteListProvider } from '../model/NoteProvider'
import { NoteGetRes } from 'joplin-api/dist/modal/NoteGetRes'
import { FolderOrNoteExtendsApi } from '../api/FolderOrNoteExtendsApi'
import { AppConfig } from '../config/AppConfig'

export class JoplinNoteCommandService {
  private folderOrNoteExtendsApi = new FolderOrNoteExtendsApi()
  constructor(private joplinNoteView: NoteListProvider) {}
  init(appConfig: AppConfig) {
    if (!appConfig.token) {
      return
    }
    config.token = appConfig.token
    config.port = appConfig.port
  }

  /**
   * create folder or note
   * @param item
   * @param type
   */
  async create(item: FolderOrNote, type: TypeEnum) {
    console.log('joplinNote.create: ', item)
    if (!item) {
      const title = await vscode.window.showInputBox({
        placeHolder: '请输入笔记目录名',
      })
      if (!title) {
        return
      }
      const folder = {
        title,
        parent_id: '',
      }
      await folderApi.create(folder)
      await this.joplinNoteView.refresh()
      return
    }
    const title = await vscode.window.showInputBox({
      placeHolder: `请输入要创建的${
        type === TypeEnum.Folder ? '目录' : '笔记'
      }名`,
    })
    if (item.item.type_ !== TypeEnum.Folder) {
      return
    }
    if (!title) {
      return
    }
    console.log('create: ', item, type)
    const { id } = await this.folderOrNoteExtendsApi.create({
      title,
      parent_id: item.item.id,
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
  async remove(item: FolderOrNote) {
    const folderOrNote = item.item
    const res = await vscode.window.showQuickPick(['确认', '取消'], {
      placeHolder: `是否删除${
        folderOrNote.type_ === TypeEnum.Folder
          ? '目录'
          : (folderOrNote as NoteGetRes).is_todo
          ? '待办事项'
          : '笔记'
      } [${folderOrNote.title}]`,
    })
    console.log(res)
    if (res !== '确认') {
      return
    }
    await this.folderOrNoteExtendsApi.remove(item.item)
    await this.joplinNoteView.refresh()
  }

  async rename(item: FolderOrNote) {
    console.log('joplinNote.rename: ', item)
    const title = await vscode.window.showInputBox({
      placeHolder: `请输入新的名字`,
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

  /**
   * open note in vscode
   * @param item
   */
  async openNote(item: Omit<FolderOrNote, 'item'> & { item: NoteGetRes }) {
    await actionApi.openAndWatch(item.item.id)
  }

  /**
   * show search input box
   */
  async search() {
    interface SearchNoteItem extends QuickPickItem {
      noteId: string
    }
    const searchQuickPickBox = vscode.window.createQuickPick<SearchNoteItem>()
    searchQuickPickBox.placeholder = '请输入关键字'
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
}
