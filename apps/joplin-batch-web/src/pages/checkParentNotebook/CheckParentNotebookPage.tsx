import * as React from 'react'
import { useState } from 'react'
import { Button, Card, List, Typography } from 'antd'
import { useAsyncFn } from 'react-use'
import { joplinApiGenerator } from '../../constants/joplinApiGenerator'
import { CheckParentNotebookService } from './service/CheckParentNotebookService'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import { i18n } from '../../constants/i18n'

type CheckParentNotebookPageProps = {}

const checkParentNotebookService = new CheckParentNotebookService()

/**
 * 检查没有父级目录的笔记
 */
export const CheckParentNotebookPage: React.FC<CheckParentNotebookPageProps> = (
  props,
) => {
  const [list, setList] = useState<
    Pick<NoteProperties, 'id' | 'title' | 'parent_id'>[]
  >([])
  const [onCheckState, onCheck] = useAsyncFn(async () => {
    const list = await checkParentNotebookService.check()
    console.log('list: ', list)
    setList(list)
  })

  async function onRemove(id: string) {
    await joplinApiGenerator.noteApi.remove(id)
    setList((list) => list.filter((item) => item.id !== id))
  }

  return (
    <Card
      title={i18n.t('checkParentNotebook.title')}
      extra={
        <Button loading={onCheckState.loading} onClick={onCheck}>
          {i18n.t('checkParentNotebook.action.check')}
        </Button>
      }
    >
      <List
        dataSource={list}
        locale={{ emptyText: i18n.t('checkParentNotebook.listEmptyText') }}
        renderItem={(item) => (
          <List.Item
            id={item.id}
            extra={
              <Button onClick={() => onRemove(item.id)}>
                {i18n.t('checkParentNotebook.action.remove')}
              </Button>
            }
          >
            <Typography.Text>{item.title}</Typography.Text>
          </List.Item>
        )}
      />
    </Card>
  )
}
