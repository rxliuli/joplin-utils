import * as vscode from 'vscode'
import { folderApi, folderExtApi, noteExtApi } from 'joplin-api'
import { JoplinTreeItem } from './JoplinTreeItem'
import { FolderListAllRes } from 'joplin-api'
import { joplinNoteApi } from '../api/JoplinNoteApi'
import { treeEach } from '@liuli-util/tree'
import { logger } from '../constants/logger'
import { t } from '../constants/i18n'
import { ExtConfig, SortNotesTypeEnum, SortOrderEnum } from '../constants/config'
import { checkJoplinServer } from '../util/checkJoplinServer'

export class NoteExplorerProvider
  implements vscode.TreeDataProvider<JoplinTreeItem>, vscode.TreeDragAndDropController<JoplinTreeItem>
{
  private _onDidChangeTreeData: vscode.EventEmitter<JoplinTreeItem | undefined> = new vscode.EventEmitter<
    JoplinTreeItem | undefined
  >()
  readonly onDidChangeTreeData: vscode.Event<JoplinTreeItem | undefined> = this._onDidChangeTreeData.event

  async refresh() {
    await this.init()
    console.log('joplin folder tree refresh: ', this.folderList.length)
    this._onDidChangeTreeData.fire(undefined)
  }

  async fire() {
    this._onDidChangeTreeData.fire(undefined)
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
  getTreeItem(element: JoplinTreeItem): vscode.TreeItem {
    return element
  }

  /**
   * 实现获取子列表的方法
   * @param element
   */
  async getChildren(element?: JoplinTreeItem) {
    if (!element) {
      if (this.folderList.length === 0) {
        try {
          await this.init()
        } catch {
          await checkJoplinServer()
        }
      }
      return this.folderList.map((item) => new JoplinTreeItem(item))
    }
    const folder = this.folderMap.get(element.id)
    if (!folder || (folder.note_count === 0 && !folder.children)) {
      return []
    }
    const folderItemList = folder.children?.map((folder) => new JoplinTreeItem(folder)) || []
    const noteItemList = (await joplinNoteApi.notesByFolderId(folder.id)).map((note) => new JoplinTreeItem(note))
    const extConfig = vscode.workspace.getConfiguration('joplin') as vscode.WorkspaceConfiguration & ExtConfig
    if (process.env.DEBUG) {
      console.log('\n\nnoteItemList: \n')
      console.log(noteItemList)
      console.log('appConfig: ', extConfig)
    }
    if (extConfig.sortNotes) {
      const compareMap: Record<SortNotesTypeEnum, (a: JoplinTreeItem, b: JoplinTreeItem) => number> = {
        [SortNotesTypeEnum.Alphabetical]: (a, b) => {
          return -b.item.title.localeCompare(a.item.title)
        },
        [SortNotesTypeEnum.Default]: () => 0,
      }
      noteItemList.sort(compareMap[extConfig.sortNotesType!])
      if (extConfig.sortOrder == SortOrderEnum.Desc) {
        noteItemList.reverse()
      }
    }
    return folderItemList.concat(noteItemList)
  }

  async getParent(element: JoplinTreeItem) {
    const parent = this.folderMap.get(element.item.parent_id)
    if (!parent) {
      return
    }
    return new JoplinTreeItem(parent)
  }

  dropMimeTypes = ['application/vnd.code.tree.joplin']
  dragMimeTypes = this.dropMimeTypes
  handleDrag(
    source: readonly JoplinTreeItem[],
    dataTransfer: vscode.DataTransfer,
    token: vscode.CancellationToken,
  ): void | Thenable<void> {
    console.log('handleDrag: ', source)
    dataTransfer.set('application/vnd.code.tree.joplin', new vscode.DataTransferItem(source))
  }
  async handleDrop(
    target: JoplinTreeItem | undefined,
    dataTransfer: vscode.DataTransfer,
    token: vscode.CancellationToken,
  ): Promise<void> {
    const transferItem = dataTransfer.get('application/vnd.code.tree.joplin')
    if (!transferItem) {
      return
    }
    const targetId = target?.id
    if (!targetId) {
      return
    }
    logger.info('handleDrop: ', transferItem.value, target)
    if (target && !target.collapsibleState) {
      return
    }
    const source = (transferItem.value as JoplinTreeItem[])[0]
    if (source.item.parent_id === targetId) {
      return
    }
    if (!source.collapsibleState) {
      await noteExtApi.move(source.id, targetId ?? '')
      await this.refresh()
      return
    }
    if (target) {
      const paths = await folderExtApi.path(target.id)
      if (paths.some((item) => item.id === source.id)) {
        vscode.window.showWarningMessage(t('paste-error-canTPasteSub'))
        return
      }
    }
    await folderExtApi.move(source.id, targetId)
    await this.refresh()
  }
}
