import * as vscode from 'vscode'
import { TreeItemCollapsibleState } from 'vscode'
import path = require('path')
import { FolderListAllRes } from 'joplin-api/dist/modal/FolderListAllRes'
import { CommonType } from 'joplin-api/dist/modal/CommonType'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import { TypeEnum } from 'joplin-api'

export type JoplinListFolder = FolderListAllRes & CommonType
export type JoplinListNote = Pick<NoteProperties, 'id' | 'parent_id' | 'title' | 'is_todo' | 'todo_completed'> & CommonType

export class FolderOrNote extends vscode.TreeItem {
  constructor(public item: JoplinListFolder | JoplinListNote) {
    super(
      item.title,
      item.type_ === TypeEnum.Folder
        ? vscode.TreeItemCollapsibleState.Collapsed
        : TreeItemCollapsibleState.None,
    )
    const iconName = FolderOrNote.getIconName(item)
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

  private static getIconName(item: JoplinListFolder | JoplinListNote) {
    if (item.type_ === TypeEnum.Folder) {
      return 'folder'
    }
    const note = item as JoplinListNote
    if (!note.is_todo) {
      return 'note'
    }
    if (note.todo_completed) {
      return 'todo-done'
    }
    return 'todo-undone'
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
    return 'joplinNote.' + FolderOrNote.getIconName(this.item)
  }
}
