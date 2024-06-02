import * as vscode from 'vscode'
import { GlobalContext } from '../../constants/context'
import { TypeEnum } from 'joplin-api'
import { wrapLink } from '../../util/markdown'

async function createBySelection() {
  const editor = vscode.window.activeTextEditor
  const activeFileName = editor?.document.fileName
  if (!(activeFileName && GlobalContext.openNoteMap.has(activeFileName))) {
    return
  }
  if (editor.selections.length > 1) {
    await vscode.window.showInformationMessage('Only one content can be selected')
    return
  }
  const id = GlobalContext.openNoteMap.get(activeFileName)!

  const note = await GlobalContext.api.note.get(id, ['parent_id'])
  const body = editor.document.getText(editor.selection)
  if (!body) {
    await vscode.window.showInformationMessage('No content selected')
    return
  }
  const title = await vscode.window.showInputBox({ prompt: 'Enter the title of the new note' })
  if (!title) {
    return
  }
  const newNote = await GlobalContext.api.note.create({ title, body, parent_id: note.parent_id })
  const link = `[${title}](:/${newNote.id})`
  await editor.edit((editBuilder) => {
    editBuilder.replace(editor.selection, link)
  })
  await editor.document.save()
  await GlobalContext.handlerService.openNote(newNote.id)
  await GlobalContext.noteExplorerProvider.refresh()
}

export function noteCommands() {
  return {
    createBySelection,
  }
}
