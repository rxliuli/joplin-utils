import { NoteProperties, noteApi } from 'joplin-api'
import * as vscode from 'vscode'
import { highSearchKeyword } from './utils/highSearchKeyword'
import { JoplinNoteUtil } from '../util/JoplinNoteUtil'
import { indexToPostion } from './utils/indexToPostion'

type NoteSearchItem = vscode.TreeItem & {
  note: Pick<NoteProperties, 'id' | 'title' | 'body'>
  type: 'note' | 'match'
}

/**
 * Show a searched notes in tree view
 */
export class NoteSearchProvider implements vscode.TreeDataProvider<NoteSearchItem> {
  private searchKey = ''
  private searchList = [] as NoteSearchItem[]

  setSearchList(searchKey: string, noteList: Pick<NoteProperties, 'id' | 'title' | 'body'>[]) {
    this.searchKey = searchKey
    this.searchList = noteList.map((it) => {
      return {
        type: 'note',
        id: it.id,
        label: it.title,
        iconPath: new vscode.ThemeIcon('note'),
        note: it,
        command: { command: 'joplin.openNote', title: it.title, arguments: [it] },
        collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
      }
    })
    this._onDidChangeTreeData.fire(undefined)
  }
  async refresh(note: Pick<NoteProperties, 'id' | 'title' | 'body'>) {
    const findNote = this.searchList.find((it) => it.id === note.id)
    if (!findNote) {
      return
    }
    findNote.note = note
    findNote.label = note.title
    this._onDidChangeTreeData.fire(findNote)
  }
  private _onDidChangeTreeData: vscode.EventEmitter<NoteSearchItem | undefined> = new vscode.EventEmitter<
    NoteSearchItem | undefined
  >()
  onDidChangeTreeData?: vscode.Event<void | NoteSearchItem | NoteSearchItem[] | null | undefined> =
    this._onDidChangeTreeData.event

  getTreeItem(element: NoteSearchItem): NoteSearchItem | Thenable<NoteSearchItem> {
    return element
  }
  getChildren(element?: NoteSearchItem | undefined): vscode.ProviderResult<NoteSearchItem[]> {
    if (!element) {
      return this.searchList
    }
    if (element.type === 'note') {
      const content = JoplinNoteUtil.getNoteContent(element.note)
      const matchs = highSearchKeyword(content, this.searchKey).map((it) => {
        return {
          type: 'match',
          label: {
            label: it.context,
            highlights: [[it.start, it.end]],
          },
          note: element.note,
          command: {
            command: 'joplin.openNote',
            title: element.note.title,
            arguments: [element.note, indexToPostion(content, { start: it.globalStart, end: it.globalEnd })],
          },
          collapsibleState: vscode.TreeItemCollapsibleState.None,
        } as NoteSearchItem
      })
      // console.log('getChildren: ', element, this.searchKey, matchs)
      return matchs
    }
  }
}
