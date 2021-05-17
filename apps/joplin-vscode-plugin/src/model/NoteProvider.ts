import * as vscode from 'vscode'
import { folderApi } from 'joplin-api'
import { FolderOrNote } from './FolderOrNote'
import {
  appConfig,
  SortNotesTypeEnum,
  SortOrderEnum,
} from '../config/AppConfig'
import { FolderListAllRes } from 'joplin-api/dist/modal/FolderListAllRes'
import { joplinNoteApi } from '../api/JoplinNoteApi'
import { treeEach } from '@liuli-util/tree'

export class NoteListProvider implements vscode.TreeDataProvider<FolderOrNote> {
  private _onDidChangeTreeData: vscode.EventEmitter<
    FolderOrNote | undefined
  > = new vscode.EventEmitter<FolderOrNote | undefined>()
  readonly onDidChangeTreeData: vscode.Event<FolderOrNote | undefined> = this
    ._onDidChangeTreeData.event

  async refresh() {
    await this.init()
    console.log('joplin folder tree refresh: ', this.folderList.length)
    this._onDidChangeTreeData.fire(undefined)
  }

  constructor() {
    // noinspection JSIgnoredPromiseFromCall
    this.init()
  }

  private folderList: FolderListAllRes[] = []
  private folderMap = new Map<string, FolderListAllRes>()

  private async init() {
    this.folderList = await folderApi.listAll()

    treeEach(
      this.folderList,
      (item: FolderListAllRes) => {
        this.folderMap.set(item.id, item)
      },
      {
        id: 'id',
        children: 'children',
      },
    )
  }

  /**
   * 实现自定义渲染每个元素
   * @param element
   */
  getTreeItem(element: FolderOrNote): vscode.TreeItem {
    return element
  }

  /**
   * 实现获取子列表的方法
   * @param element
   */
  async getChildren(element?: FolderOrNote) {
    if (!element) {
      if (this.folderList.length === 0) {
        await this.init()
      }
      return this.folderList.map((item) => new FolderOrNote(item))
    }
    const folder = this.folderMap.get(element.id)
    if (!folder || (folder.note_count === 0 && !folder.children)) {
      return []
    }
    const folderItemList =
      folder.children?.map((folder) => new FolderOrNote(folder)) || []
    const noteItemList = (await joplinNoteApi.notesByFolderId(folder.id)).map(
      (note) => new FolderOrNote(note),
    )
    if (process.env.DEBUG) {
      console.log('\n\nnoteItemList: \n')
      console.log(noteItemList)
      console.log('appConfig: ', appConfig)
    }
    if (appConfig.sortNotes) {
      const compareMap: Record<
        SortNotesTypeEnum,
        (a: FolderOrNote, b: FolderOrNote) => number
      > = {
        [SortNotesTypeEnum.Alphabetical]: (a, b) => {
          return -b.item.title.localeCompare(a.item.title)
        },
        [SortNotesTypeEnum.Default]: () => 0,
      }
      noteItemList.sort(compareMap[appConfig.sortNotesType!])
      if (appConfig.sortOrder == SortOrderEnum.Desc) {
        noteItemList.reverse()
      }
    }
    return folderItemList.concat(noteItemList)
  }

  async getParent(element: FolderOrNote) {
    const parent = this.folderMap.get(element.item.parent_id)
    if (!parent) {
      return
    }
    return new FolderOrNote(parent)
  }
}
