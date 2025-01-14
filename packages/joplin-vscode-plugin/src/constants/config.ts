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

  console.log('process.env: ', JSON.parse(JSON.stringify(process.env)))
  if (!process.env.JOPLIN_DEBUG) {
    return
  }
  // rxliuli: do not insert your own vars to the code. Use something else for that
  // such as ENV vars or, at least, do not commit them to the final code. (you
  // could also use different branch for that). These configs were messing up
  // with my use of the source code, for instance.
  GlobalContext.api = joplinDataApi({
    type: 'rest',
    baseUrl: process.env.JOPLIN_BASE_URL!,
    token: process.env.JOPLIN_TOKEN!,
  })
}
