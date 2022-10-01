import { fileURLToPath } from 'url'
import * as vscode from 'vscode'
import { TreeItemCollapsibleState } from 'vscode'
import { FolderListAllRes } from 'joplin-api'
import { CommonType } from 'joplin-api'
import { NoteProperties } from 'joplin-api'
import { TypeEnum } from 'joplin-api'
import path from 'path'

export type JoplinListFolder = FolderListAllRes & CommonType
export type JoplinListNote = Pick<NoteProperties, 'id' | 'parent_id' | 'title' | 'is_todo' | 'todo_completed'> &
  CommonType

export class JoplinTreeItem extends vscode.TreeItem {
  constructor(public item: JoplinListFolder | JoplinListNote) {
    super(
      item.title,
      item.type_ === TypeEnum.Folder ? vscode.TreeItemCollapsibleState.Collapsed : TreeItemCollapsibleState.None,
    )
    const iconName = JoplinTreeItem.getIconName(item)
    this.iconPath = {
      light: path.resolve(path.dirname(fileURLToPath(import.meta.url)), `../resources/light/${iconName}.svg`),
      dark: path.resolve(path.dirname(fileURLToPath(import.meta.url)), `../resources/dark/${iconName}.svg`),
    }
    if (item.type_ === TypeEnum.Note) {
      this.command = {
        command: 'joplinNote.openNote',
        title: item.title,
        // TODO 此处引用自身居然会导致不能拖拽？
        arguments: [item],
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

  id = this.item.id
  label = this.item.title
  tooltip = this.item.title
  description = ''
  contextValue = 'joplinNote.' + JoplinTreeItem.getIconName(this.item)
}
