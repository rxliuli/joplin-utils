import * as React from 'react'
import MarkdownView from './component/MarkdownView'
import { useAsync } from 'react-use'
import { config, noteApi } from 'joplin-api'
import { getSettings } from '../../../../content/util/getSettings'
import { useHistory, useParams } from 'react-router'
import { noteViewState } from './NoteView.state'
import { RenderNote } from './util/render'

type NoteViewProps = {}

const NoteView: React.FC<NoteViewProps> = () => {
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
    const resourceList = await noteApi.resourcesById(id)
    return {
      ...note,
      resourceList,
    } as RenderNote
  })
  return <div>{noteState.value && <MarkdownView note={noteState.value} />}</div>
}

export default NoteView
