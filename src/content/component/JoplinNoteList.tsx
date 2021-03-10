import * as React from 'react'
import { SearchNote } from '../model/SearchNote'
import { ActionTypeEnum } from '../../background/model/ActionTypeEnum'

type JoplinNoteListProps = {
  noteList: SearchNote[]
}

const JoplinNoteList: React.FC<JoplinNoteListProps> = (props) => {
  async function onOpenNote(note: SearchNote) {
    await browser.runtime.sendMessage({
      action: ActionTypeEnum.OpenNote,
      data: { id: note.id },
    })
  }

  return (
    <ul>
      {props.noteList.map((note) => {
        return (
          <li key={note.id}>
            <a href={'javascript:void(0)'} onClick={() => onOpenNote(note)}>
              {note.title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default JoplinNoteList
