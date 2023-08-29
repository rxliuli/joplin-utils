import { NoteProperties } from 'joplin-api'
import * as vscode from 'vscode'

type NoteSearchItem = vscode.TreeItem & {
  note: Pick<NoteProperties, 'id' | 'title' | 'body'>
}

/**
 * Show a searched notes in tree view
 */
export class NoteSearchProvider implements vscode.TreeDataProvider<NoteSearchItem> {
  private searchKey = ''
  private searchList = [] as NoteSearchItem[]

  setSearchList(noteList: Pick<NoteProperties, 'id' | 'title' | 'body'>[]) {
    this.searchList = noteList.map((it) => ({
      id: it.id,
      label: it.title,
      iconPath: new vscode.ThemeIcon('note'),
      note: it,
      command: { command: 'joplin.openNote', title: it.title, arguments: [it] },
    }))
    this._onDidChangeTreeData.fire(undefined)
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
    return this.searchList
  }
}
