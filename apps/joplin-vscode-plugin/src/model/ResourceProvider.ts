import { noteApi } from 'joplin-api'
import { ResourceGetRes } from 'joplin-api/dist/modal/ResourceGetRes'
import * as vscode from 'vscode'

/**
 * 展示当前笔记的附加资源列表
 */
export class ResourceProvider implements vscode.TreeDataProvider<Resource> {
  private resourceList: Resource[] = []
  private _onDidChangeTreeData: vscode.EventEmitter<
    Resource | undefined
  > = new vscode.EventEmitter<Resource | undefined>()
  private async init(noteId: string) {
    this.resourceList = (await noteApi.resourcesById(noteId)).map(
      (r) => new Resource(r),
    )
  }
  async refresh(noteId: string) {
    await this.init(noteId)
    console.log('joplin resources list refresh: ', noteId, this.resourceList)
    this._onDidChangeTreeData.fire(undefined)
  }
  getTreeItem(element: Resource): Resource | Thenable<Resource> {
    return element
  }
  getChildren(element?: Resource): vscode.ProviderResult<Resource[]> {
    console.log('getChildren: ', element, this.resourceList)
    return this.resourceList
  }
}

export class Resource extends vscode.TreeItem {
  constructor(public readonly _resource: ResourceGetRes) {
    super(_resource.title, vscode.TreeItemCollapsibleState.None)
    this.id = _resource.id
    this.label = _resource.title
    this.contextValue = 'resource'
  }
}
