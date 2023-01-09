import { arrayToMap } from '@liuli-util/array'
import { AsyncArray } from '@liuli-util/async'
import { noteApi } from 'joplin-api'
import * as vscode from 'vscode'
import { GlobalContext } from '../state/GlobalContext'
import { extractJoplinLink } from '../util/extractJoplinLink'
import { showQuickListNotes } from './showLinkThisNotes'

export async function showThisNoteLinks() {
  const text = vscode.window.activeTextEditor?.document.getText()
  if (!text) {
    return
  }
  await showQuickListNotes(async (id) => {
    const resources = GlobalContext.openNoteResourceMap.get(id)!
    const s = arrayToMap(resources, (item) => item.id)
    const list = extractJoplinLink(text).filter((id) => !s.has(id))
    const r = await AsyncArray.map(
      list,
      async (id) =>
        ({
          id: id,
          label: (await noteApi.get(id)).title,
        } as vscode.QuickPickItem & { id: string }),
    )
    return r
  })
}
