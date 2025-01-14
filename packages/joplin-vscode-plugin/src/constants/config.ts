import { ApiConfig, joplinDataApi } from 'joplin-api'
import * as vscode from 'vscode'
import { GlobalContext } from './context'

export enum SortNotesTypeEnum {
  Alphabetical = 'alphabetical',
  Default = 'default',
}

export enum SortOrderEnum {
  Asc = 'asc',
  Desc = 'desc',
}

export interface ExtConfig {
  token?: string
  baseUrl: string
  deleteConfirm?: boolean
  sortNotes?: boolean
  sortNotesType?: SortNotesTypeEnum
  sortOrder?: SortOrderEnum
}

function initApi() {
  const extConfig = vscode.workspace.getConfiguration('joplin') as vscode.WorkspaceConfiguration & ExtConfig
  GlobalContext.api = joplinDataApi({
    type: 'rest',
    baseUrl: extConfig.baseUrl,
    token: extConfig.token!,
  })
}

export async function initConfig() {
  initApi()
  vscode.workspace.onDidChangeConfiguration((ev) => {
    if (ev.affectsConfiguration('joplin.baseUrl')) {
      initApi()
    }
    if (ev.affectsConfiguration('joplin.token')) {
      initApi()
    }
  })
}
