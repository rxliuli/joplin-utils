import * as React from 'react'
import { Button, Card, List, SpinProps } from 'antd'
import { useAsyncFn } from 'react-use'
import { joplinApiGenerator } from '../../constants/joplinApiGenerator'
import { NotFoundResourceCheckService } from './service/NotFoundResourceCheckService'
import { useState } from 'react'
import { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import css from './NotFoundResourceCheckPage.module.css'

type NotFoundResourceCheckPageProps = {}

const notFoundResourceCheckService = new NotFoundResourceCheckService(
  joplinApiGenerator,
)

/**
 * 检查笔记中引用失效的资源
 */
export const NotFoundResourceCheckPage: React.FC<NotFoundResourceCheckPageProps> =
  () => {
    const [list, setList] = useState<
      (Pick<NoteProperties, 'id' | 'title' | 'user_updated_time'> & {
        resources: Pick<ResourceProperties, 'id' | 'title'>[]
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

    async function openNote(id: string) {
      await joplinApiGenerator.noteActionApi.openAndWatch(id)
    }

    return (
      <Card
        title={'检查笔记中引用失效的资源'}
        extra={<Button onClick={onCheck}>检查</Button>}
      >
        <List
          dataSource={list}
          locale={{
            emptyText: '没有找到任何引用失效的资源',
          }}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                <Button onClick={() => openNote(item.id)}>打开</Button>,
              ]}
            >
              <List.Item.Meta
                title={item.title}
                description={
                  <List
                    className={css.subList}
                    dataSource={item.resources}
                    renderItem={(item) => (
                      <List.Item key={item.id}>
                        <List.Item.Meta
                          title={item.title || `未知文件名 ${item.id}`}
                        />
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
