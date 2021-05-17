import * as React from 'react'
import MarkdownView from './component/MarkdownView'
import { useAsync } from 'react-use'
import { config, noteActionApi, noteApi } from 'joplin-api'
import { getSettings } from '../../../../content/util/getSettings'
import { useHistory, useParams } from 'react-router'
import { noteViewState } from './NoteView.state'
import { RenderNote } from './util/render'
import { JoplinNoteUtil } from '../../../../content/util/JoplinNoteUtil'
import css from './NoteView.module.css'

const NoteView: React.FC = () => {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const noteState = useAsync(async () => {
    const settings = await getSettings()
    if (!settings) {
      history.push('/')
      return
    }
    noteViewState.settings = settings
    config.token = settings.token
    config.port = settings.port
    const note = await noteApi.get(id, ['id', 'title', 'body'])
    document.title = JoplinNoteUtil.trimTitleStart(note.title)
    const resourceList = await noteApi.resourcesById(id)
    return {
      ...note,
      resourceList,
    } as RenderNote
  })

  async function onClick() {
    await noteActionApi.openAndWatch(id)
  }

  return (
    <div className={css.noteView}>
      <button onClick={onClick} className={css.control}>
        在编辑器中打开
      </button>
      <div>{noteState.value && <MarkdownView note={noteState.value} />}</div>
    </div>
  )
}

export default NoteView
