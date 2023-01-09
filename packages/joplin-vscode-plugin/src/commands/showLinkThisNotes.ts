import { PageUtil, searchApi } from 'joplin-api'
import * as vscode from 'vscode'
import { GlobalContext } from '../state/GlobalContext'
import { JoplinNoteUtil } from '../util/JoplinNoteUtil'

export async function showQuickListNotes(f: (id: string) => Promise<(vscode.QuickPickItem & { id: string })[]>) {
  const activeFileName = vscode.window.activeTextEditor?.document.fileName
  if (!activeFileName || !GlobalContext.openNoteMap.has(activeFileName)) {
    return
  }
  const id = JoplinNoteUtil.getNoteIdByFileName(activeFileName)
  if (!id) {
    return
  }
  const r = await vscode.window.showQuickPick(await f(id))
  if (!r) {
    return
  }
  await GlobalContext.handlerService.openNote(r.id)
}

export async function showLinkThisNotes() {
  await showQuickListNotes(async (id) => {
    const notes = await PageUtil.pageToAllList(searchApi.search, { query: id, fields: ['id', 'title'] })
    return notes.map((item) => ({ id: item.id, label: item.title } as vscode.QuickPickItem & { id: string }))
  })
}
