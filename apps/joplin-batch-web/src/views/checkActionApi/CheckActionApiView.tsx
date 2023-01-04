import * as React from 'react'
import { Button, Card, message } from 'antd'
import { i18n } from '../../constants/i18n'
import { openNote } from '../../constants/joplinApiGenerator'
import { noteApi } from 'joplin-api'

type CheckActionApiViewProps = {}

/**
 * 检查 action api
 */
export const CheckActionApiView: React.FC<CheckActionApiViewProps> = () => {
  async function onOpen() {
    const list = await noteApi.list({ limit: 1 })
    if (list.items.length === 0) {
      message.error('没有找到任何笔记')
      return
    }
    const note = list.items[0]
    openNote(note.id)
    message.success('打开笔记 ' + note.title)
  }

  return (
    <Card
      title={i18n.t('checkActionApi.title')}
      extra={<Button onClick={onOpen}>{i18n.t('common.action.open')}</Button>}
    >
      {i18n.t('checkActionApi.desc')}
    </Card>
  )
}
