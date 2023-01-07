import { searchApi, TypeEnum } from 'joplin-api'
import * as vscode from 'vscode'
import { i18n } from '../constants/i18n'
import { uploadResourceService } from '../service/UploadResourceService'
import { loadLastNoteList } from '../util/api'

export async function insertNoteLink() {
  type SearchNoteItem = vscode.QuickPickItem & { id: string }
  const searchQuickPickBox = vscode.window.createQuickPick<SearchNoteItem>()
  searchQuickPickBox.placeholder = i18n.t('Please enter key words')
  searchQuickPickBox.canSelectMany = false
  searchQuickPickBox.items = await loadLastNoteList()

  searchQuickPickBox.onDidChangeValue(async (value: string) => {
    if (value.trim() === '') {
      searchQuickPickBox.items = await loadLastNoteList()
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
