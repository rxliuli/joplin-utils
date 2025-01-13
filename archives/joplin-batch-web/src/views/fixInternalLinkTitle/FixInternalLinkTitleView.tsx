import { Button, Card, Checkbox, Form, List, Space, message } from 'antd'
import React from 'react'
import { i18n } from '../../constants/i18n'
import { NoteProperties, PageUtil, noteApi } from 'joplin-api'
import { useAsyncFn, useMount } from 'react-use'
import { observer, useLocalObservable } from 'mobx-react-lite'
import { AsyncArray, asyncLimiting } from '@liuli-util/async'
import { openNote } from '../../constants/joplinApiGenerator'
import { keyBy } from 'lodash-es'

export interface CheckResult {
  id: string
  url: string
  title: string
  noteTitle: string
}

interface CheckedNote {
  note: Pick<NoteProperties, 'id' | 'title' | 'body' | 'user_updated_time'>
  result: CheckResult[]
}

function generateId(title: string) {
  return title.trim().replace(' ', '-')
}

function trimTitle(title: string) {
  return (title.startsWith('# ') ? title.slice(2) : title).trim()
}

export function checkNote(map: Record<string, Pick<NoteProperties, 'title' | 'body'>>, body: string): CheckResult[] {
  const s = body.match(/(?<!\!)\[[^\[\]]*?\]\(\:\/.*?\)/g)
  if (!s) {
    return []
  }
  return [...s]
    .map((it): CheckResult => {
      const [title, url] = it.slice(1, -1).split('](:/')
      let id: string = url,
        noteTitle: string
      if (!url.trim().startsWith('#') && url.includes('#')) {
        let encodedTitle: string
        ;[id, encodedTitle] = url.split('#')
        const note = map[id]
        if (!note) {
          return { id, url, title, noteTitle: title }
        }
        const findTitle = note.body
          .match(/^(#{1,6})\s+(.*)$/gm)
          ?.map((it) => it.slice(it.indexOf(' ')).trim())
          ?.find((it) => generateId(it) === encodedTitle)
          ?.trim()
        if (findTitle) {
          noteTitle = trimTitle(note.title) + ' # ' + findTitle
        } else {
          noteTitle = trimTitle(note.title) + ' # ' + encodedTitle
        }
      } else {
        if (!map[id]) {
          return { id, url, title, noteTitle: title }
        }
        noteTitle = trimTitle(map[id].title)
      }
      return { url, id, title, noteTitle: noteTitle }
    })
    .filter((it) => map[it.id] && it.title !== it.noteTitle)
}

export const FixInternalLinkTitleView: React.FC = observer(() => {
  const [messageApi, contextHolder] = message.useMessage()

  const state = useLocalObservable(() => ({
    keepUpdatedTime: true,
    list: [] as CheckedNote[],
  }))

  async function onCheck() {
    // 获取所有的笔记
    const list = await PageUtil.pageToAllList(noteApi.list, {
      fields: ['id', 'title', 'body', 'user_updated_time'],
      order_by: 'user_updated_time',
      order_dir: 'DESC',
    })
    // 检查笔记中的内部引用链接的标题是否正确
    const map = keyBy(list, 'id')
    console.log(list, map)
    const checked = list
      .map((it) => ({
        note: it,
        result: checkNote(map, it.body),
      }))
      .filter((it) => it.result.length > 0)
    console.log(checked)
    state.list = checked
  }

  const key = 'updatable'

  const [updateState, updateNote] = useAsyncFn(async function (checked: CheckedNote) {
    messageApi.open({
      key,
      type: 'loading',
      content: i18n.t('fixInternalLinkTitle.msg.loading', { title: checked.note.title }),
    })
    const s = checked.result.reduce(
      (acc, it) => acc.replaceAll(`[${it.title}](:/${it.url})`, `[${it.noteTitle}](:/${it.url})`),
      checked.note.body,
    )
    await noteApi.update({
      id: checked.note.id,
      body: s,
      user_updated_time: state.keepUpdatedTime ? checked.note.user_updated_time : undefined,
    })
    state.list = state.list.filter((it) => it.note.id !== checked.note.id)
  })

  async function onUpdate(checked: CheckedNote) {
    messageApi.open({ key, type: 'loading', content: 'loading...' })
    await updateNote(checked)
    messageApi.open({ key, type: 'success', content: i18n.t('fixInternalLinkTitle.msg.success'), duration: 2 })
  }

  async function onAllUpdate() {
    messageApi.open({ key, type: 'loading', content: 'loading...' })
    await AsyncArray.forEach(
      state.list,
      asyncLimiting(async (it) => {
        await updateNote(it)
      }, 5),
    )
    messageApi.open({ key, type: 'success', content: i18n.t('fixInternalLinkTitle.msg.success'), duration: 2 })
  }

  return (
    <Card title={i18n.t('fixInternalLinkTitle.title')}>
      <Form>
        <Form.Item>
          <Checkbox checked={state.keepUpdatedTime} onChange={(ev) => (state.keepUpdatedTime = ev.target.checked)}>
            {i18n.t('replace.form.keepUpdatedTime')}
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button loading={updateState.loading} onClick={onCheck}>
              {i18n.t('common.action.check')}
            </Button>
            <Button
              disabled={state.list.length === 0}
              loading={updateState.loading}
              danger={true}
              onClick={onAllUpdate}
            >
              {i18n.t('fixInternalLinkTitle.action.updateAll')}
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <List
        dataSource={state.list}
        rowKey={(it) => it.note.id}
        renderItem={(it) => (
          <List.Item
            actions={[
              <Button type={'primary'} loading={updateState.loading} onClick={() => onUpdate(it)}>
                {i18n.t('fixInternalLinkTitle.action.update')}
              </Button>,
              <Button onClick={() => openNote(it.note.id)}>{i18n.t('common.action.open')}</Button>,
            ]}
          >
            <List.Item.Meta
              title={it.note.title}
              description={
                <>
                  <ul>
                    {it.result.map((it, i) => (
                      <li key={i}>
                        [<del>{it.title}</del>
                        {it.noteTitle}](:/{it.url})
                      </li>
                    ))}
                  </ul>
                </>
              }
            ></List.Item.Meta>
          </List.Item>
        )}
      ></List>
      {contextHolder}
    </Card>
  )
})
