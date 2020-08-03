import * as vscode from 'vscode'
import { folderApi } from 'joplin-api'
import { FolderListRes } from 'joplin-api/dist/modal/FolderListRes'
import { treeMapping } from '../util/treeMapping'
import { INode } from '../util/INode'
import { FolderOrNote } from './FolderOrNote'

export class NoteListProvider implements vscode.TreeDataProvider<FolderOrNote> {
  private _onDidChangeTreeData: vscode.EventEmitter<
    FolderOrNote | undefined
  > = new vscode.EventEmitter<FolderOrNote | undefined>()
  readonly onDidChangeTreeData: vscode.Event<FolderOrNote | undefined> = this
    ._onDidChangeTreeData.event

  async refresh() {
    console.log('joplin folder tree refresh: ', new Date().toLocaleString())
    await this.init()
    this._onDidChangeTreeData.fire(undefined)
  }

  constructor() {
    // noinspection JSIgnoredPromiseFromCall
    this.init()
  }

  private folderList: FolderListRes[] = []
  private folderMap = new Map<string, FolderListRes>()
  private async init() {
    this.folderList = await folderApi.list()
    this.folderList.forEach((item) =>
      treeMapping(item, {
        before: (folder) => {
          this.folderMap.set(folder.id, folder)
          return {
            id: folder.id,
            parentId: folder.parent_id,
            child: folder.children as any,
            path: '',
          } as INode
        },
      }),
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
      return this.folderList.map((folder) => new FolderOrNote(folder))
    }
    const folder = this.folderMap.get(element.id)
    if (!folder || (folder.note_count === 0 && !folder.children)) {
      return []
    }
    const folderItemList =
      folder.children?.map((folder) => new FolderOrNote(folder)) || []
    const noteItemList = (await folderApi.notesByFolderId(folder.id)).map(
      (note) => new FolderOrNote(note),
    )
  if (process.env.DEBUG) {
    console.log('\n\nFolderItemList: \n',JSON.stringify(folderItemList,null,2),'\n\nnoteItemList: \n',JSON.stringify(noteItemList))
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
