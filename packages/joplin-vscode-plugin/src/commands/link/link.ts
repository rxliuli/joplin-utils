import { PageUtil, searchApi, TypeEnum } from 'joplin-api'
import * as vscode from 'vscode'
import { t } from '../../constants/i18n'
import { uploadResourceService } from '../../service/UploadResourceService'
import { joplinNoteApi } from '../../api/JoplinNoteApi'
import { GlobalContext } from '../../constants/context'
import { JoplinNoteUtil } from '../../util/JoplinNoteUtil'
import { arrayToMap } from '@liuli-util/array'
import { AsyncArray } from '@liuli-util/async'
import { noteApi } from 'joplin-api'
import { extractJoplinLink } from './utils/extractJoplinLink'

export function linkCommands() {
  /**
   * Insert a internal note link to the current note
   */
  async function insertNoteLink() {
    const activeFileName = vscode.window.activeTextEditor?.document.fileName
    if (!activeFileName) {
      return
    }
    type SearchNoteItem = vscode.QuickPickItem & { id: string }
    const searchQuickPickBox = vscode.window.createQuickPick<SearchNoteItem>()
    searchQuickPickBox.placeholder = t('Please enter key words')
    searchQuickPickBox.canSelectMany = false
    searchQuickPickBox.items = await joplinNoteApi.loadLastNoteList()

    searchQuickPickBox.onDidChangeValue(async (value: string) => {
      if (value.trim() === '') {
        searchQuickPickBox.items = await joplinNoteApi.loadLastNoteList()
        return
      }
      const { items: noteList } = await searchApi.search({
        query: value,
        type: TypeEnum.Note,
        fields: ['id', 'title'],
        limit: 100,
        order_by: 'user_updated_time',
        order_dir: 'DESC',
      })
      searchQuickPickBox.items = noteList.map((note) => ({
        label: note.title,
        id: note.id,
        alwaysShow: true,
      }))
      console.log('search: ', value, JSON.stringify(searchQuickPickBox.items))
    })
    searchQuickPickBox.onDidAccept(async () => {
      const note = searchQuickPickBox.selectedItems[0]
      await uploadResourceService.insertUrlByActiveEditor(`[${note.label}](:/${note.id})`)
      searchQuickPickBox.dispose()
    })
    searchQuickPickBox.show()
  }

  async function showQuickListNotes(f: (id: string) => Promise<(vscode.QuickPickItem & { id: string })[]>) {
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

  /**
   * Show all notes that link to this note
   */
  async function showLinkThisNotes() {
    await showQuickListNotes(async (id) => {
      const notes = await PageUtil.pageToAllList(searchApi.search, { query: id, fields: ['id', 'title'] })
      return notes.map((item) => ({ id: item.id, label: item.title } as vscode.QuickPickItem & { id: string }))
    })
  }

  /**
   * Show all notes that this note link to
   */
  async function showThisNoteLinks() {
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

  return {
    insertNoteLink,
    showLinkThisNotes,
    showThisNoteLinks,
  }
}
