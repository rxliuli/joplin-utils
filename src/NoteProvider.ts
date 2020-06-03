import * as vscode from 'vscode'
import path = require('path')

export class NoteListProvider implements vscode.TreeDataProvider<Note> {
  constructor() {}

  /**
   * 实现自定义渲染每个元素
   * @param element
   */
  getTreeItem(element: Note): vscode.TreeItem {
    return element
  }
  /**
   * 实现获取子列表的方法
   * @param element
   */
  getChildren(element?: Note): Thenable<Note[]> {
    return Promise.resolve([
      new Note('测试 1', vscode.TreeItemCollapsibleState.Collapsed),
      new Note('测试 2', vscode.TreeItemCollapsibleState.Collapsed),
    ])
  }
}

class Note extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super(label, collapsibleState)
  }

  get tooltip(): string {
    return 'tooltip'
  }

  get description(): string {
    return 'description'
  }

  iconPath = {
    light: path.resolve(__dirname, './resources/light/dependency.svg'),
    dark: path.resolve(__dirname, './resources/dark/dependency.svg'),
  }
}
