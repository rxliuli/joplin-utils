import * as React from 'react'
import MarkdownView from './component/MarkdownView'
import { useAsync } from 'react-use'
import { config, noteApi } from 'joplin-api'
import { getSettings } from '../../../../content/util/getSettings'
import { useHistory, useParams } from 'react-router'

type NoteViewProps = {}

const NoteView: React.FC<NoteViewProps> = () => {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const content = useAsync(async () => {
    const settings = await getSettings()
    if (!settings) {
      history.push('/')
      return
    }
    config.token = settings.token
    config.port = settings.port
    const res = await noteApi.get(id, ['title', 'body'])
    return res.title + '\n' + res.body
  })
  return <div>{content.value && <MarkdownView content={content.value} />}</div>
}

export default NoteView
