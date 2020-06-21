import * as vscode from 'vscode'
import { TreeItemCollapsibleState } from 'vscode'
import { TypeEnum } from 'joplin-api'
import { FolderListRes } from 'joplin-api/dist/modal/FolderListRes'
import { NoteGetRes } from 'joplin-api/dist/modal/NoteGetRes'
import path = require('path')

export class FolderOrNote extends vscode.TreeItem {
  constructor(public item: FolderListRes | NoteGetRes) {
    super(
      item.title,
      item.type_ === TypeEnum.Folder
        ? vscode.TreeItemCollapsibleState.Collapsed
        : TreeItemCollapsibleState.None,
    )
    const iconName = item.type_ === TypeEnum.Folder ? 'folder' : 'note'
    this.iconPath = {
      light: path.resolve(__dirname, `../../resources/light/${iconName}.svg`),
      dark: path.resolve(__dirname, `../../resources/light/${iconName}.svg`),
    }
    if (item.type_ === TypeEnum.Note) {
      this.command = {
        command: 'joplinNote.openNote',
        title: this.item.title,
        arguments: [this],
      }
    }
  }

  /**
   * 使用 joplin 中的 id，避免额外的渲染
   */
  get id() {
    return this.item.id
  }
  get tooltip(): string {
    return this.item.title
  }
  get description(): string {
    return ''
  }
  get contextValue() {
    return this.item.type_ === TypeEnum.Folder
      ? 'joplinNote.folder'
      : 'joplinNote.note'
  }
}
