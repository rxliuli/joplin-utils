import * as React from 'react'
import { Button, Card, List, message, Space, Typography } from 'antd'
import { useAsyncFn } from 'react-use'
import { joplinApiGenerator } from '../../constants/joplinApiGenerator'
import { CheckParentNotebookService } from './service/CheckParentNotebookService'
import { useState } from 'react'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'

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
      title={'检查没有父级目录的笔记'}
      extra={
        <Button loading={onCheckState.loading} onClick={onCheck}>
          检查
        </Button>
      }
    >
      <List
        dataSource={list}
        locale={{ emptyText: '没有检查到父目录异常的笔记' }}
        renderItem={(item) => (
          <List.Item
            id={item.id}
            extra={<Button onClick={() => onRemove(item.id)}>删除</Button>}
          >
            <Typography.Text>{item.title}</Typography.Text>
          </List.Item>
        )}
      />
    </Card>
  )
}
