import * as React from 'react'
import { useState } from 'react'
import { Button, Card, List, SpinProps } from 'antd'
import { useAsyncFn } from 'react-use'
import { openNote } from '../../constants/joplinApiGenerator'
import { NotFoundResourceCheckService } from './service/NotFoundResourceCheckService'
import { ResourceProperties } from 'joplin-api'
import { NoteProperties } from 'joplin-api'
import css from './NotFoundResourceCheckView.module.css'
import { i18n } from '../../constants/i18n'

const notFoundResourceCheckService = new NotFoundResourceCheckService()

/**
 * 检查笔记中引用失效的资源
 */
export const NotFoundResourceCheckView: React.FC = () => {
  const [list, setList] = useState<
    (Pick<NoteProperties, 'id' | 'title' | 'user_updated_time'> & {
      errorLinks: Pick<ResourceProperties, 'id' | 'title'>[]
    })[]
  >([])
  const [loadingMsg, setLoadingMsg] = useState('')
  const [state, onCheck] = useAsyncFn(async () => {
    const list = await notFoundResourceCheckService
      .check()
      .on('load', (title) => setLoadingMsg(title))
      .on('parse', (info) => {
        setLoadingMsg(`[${info.rate}/${info.all}] ${info.title}`)
      })
    console.log('list: ', list)
    setList(list)
  })

  return (
    <Card
      title={i18n.t('notFoundResource.title')}
      extra={<Button onClick={onCheck}>{i18n.t('common.action.check')}</Button>}
    >
      <List
        dataSource={list}
        locale={{
          emptyText: i18n.t('notFoundResource.listEmptyText'),
        }}
        renderItem={(note) => (
          <List.Item
            key={'note-' + note.id}
            actions={[<Button onClick={() => openNote(note.id)}>{i18n.t('common.action.open')}</Button>]}
          >
            <List.Item.Meta
              title={note.title}
              description={
                <List
                  className={css.subList}
                  dataSource={note.errorLinks}
                  renderItem={(item) => (
                    <List.Item key={'resource-' + note.id + '-' + item.id}>
                      <List.Item.Meta title={item.title || i18n.t('notFoundResource.unknownFileName', item)} />
                    </List.Item>
                  )}
                />
              }
            />
          </List.Item>
        )}
        loading={
          {
            spinning: state.loading,
            tip: loadingMsg,
          } as SpinProps
        }
      />
    </Card>
  )
}
