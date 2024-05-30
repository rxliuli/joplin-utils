import { config } from 'joplin-api'
import * as vscode from 'vscode'

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

export function initConfig() {
  let extConfig = vscode.workspace.getConfiguration('joplin') as vscode.WorkspaceConfiguration & ExtConfig

  config.baseUrl = extConfig.baseUrl
  config.token = extConfig.token!
  vscode.workspace.onDidChangeConfiguration((ev) => {
    extConfig = vscode.workspace.getConfiguration('joplin') as vscode.WorkspaceConfiguration & ExtConfig
    if (ev.affectsConfiguration('joplin.baseUrl')) {
      config.baseUrl = extConfig.get('baseUrl')!
    }
    if (ev.affectsConfiguration('joplin.token')) {
      config.token = extConfig.get('token')!
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
  config.token = process.env.JOPLIN_TOKEN!
  config.baseUrl = process.env.JOPLIN_BASE_URL!
}
