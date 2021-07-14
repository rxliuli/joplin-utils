import * as React from 'react'
import { useState } from 'react'
import { Button, Card, Input, List, message, Space, Typography } from 'antd'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import { useAsyncFn } from 'react-use'
import {
  ConvertExternalLinkService,
  MappingContentLink,
  NoteModel,
} from './service/ConvertExternalLinkService'
import css from './ConvertExternalLinkPage.module.css'
import { JoplinMarkdownUtil } from 'joplin-blog/src/util/JoplinMarkdownUtil'
import produce from 'immer'
import { joplinApiGenerator } from '../../constants/joplinApiGenerator'
import { i18n } from '../../constants/i18n'

type ConvertExternalLinkPageProps = {}

const convertExternalLinkService = new ConvertExternalLinkService()

type MatchNoteListProps = {
  url: MappingContentLink
  onConvertNote(matchNote: Pick<NoteProperties, 'id' | 'title'>): Promise<void>
}

export const MatchNoteList: React.FC<MatchNoteListProps> = (props) => {
  const [onConvertNoteState, onConvertNote] = useAsyncFn(props.onConvertNote)

  return (
    <List
      dataSource={props.url.matchNotes}
      className={css.sub2}
      loading={onConvertNoteState.loading}
      renderItem={(matchNote) => (
        <List.Item key={matchNote.id}>
          <Space>
            <Typography.Text>{matchNote.title}</Typography.Text>
            <Button onClick={() => onConvertNote(matchNote)}>
              {i18n.t('convertExternalLink.action.convert')}
            </Button>
          </Space>
        </List.Item>
      )}
    />
  )
}
const filterEmptyUrlsNote = (note: NoteModel) => note.urls.length !== 0

/**
 * 转换外部链接为内部引用笔记
 */
export const ConvertExternalLinkPage: React.FC<ConvertExternalLinkPageProps> = (
  props,
) => {
  const [list, setList] = useState<NoteModel[]>([])

  const [onSearchState, onSearch] = useAsyncFn(async function onSearch(
    keyword: string,
  ) {
    if (keyword === '') {
      setList([])
      return
    }
    const list = await convertExternalLinkService.search(keyword)
    console.log('onSearch: ', list)
    setList(list.filter(filterEmptyUrlsNote))
  })

  async function onConvertNote(data: {
    noteId: string
    linkNoteId: string
    linkNoteTitle: string
    url: string
    noteIndex: number
    urlIndex: number
  }) {
    console.log('onConvertNote: ', data)
    await convertExternalLinkService.convert(data.noteId, {
      [data.url]: {
        title: JoplinMarkdownUtil.trimTitle(data.linkNoteTitle),
        url: `:/${data.linkNoteId}`,
      },
    })
    setList(
      produce((list) => {
        console.log('remove: ', data.noteIndex, data.urlIndex)
        list[data.noteIndex].urls.splice(data.urlIndex, 1)
        list.filter((note) => note.urls.length !== 0)
      }),
    )
    setList((list) => list.filter(filterEmptyUrlsNote))
    message.success(i18n.t('convertExternalLink.msg.success'))
  }

  async function onOpenNote(id: string) {
    await joplinApiGenerator.noteActionApi.openAndWatch(id)
  }

  return (
    <Card title={i18n.t('convertExternalLink.title')}>
      <Input.Search
        onSearch={onSearch}
        allowClear={true}
        loading={onSearchState.loading}
      />
      <List
        dataSource={list}
        itemLayout={'vertical'}
        loading={onSearchState.loading}
        renderItem={(note, noteIndex) => (
          <List.Item
            key={note.id}
            extra={[
              <Button onClick={() => onOpenNote(note.id)}>
                {i18n.t('convertExternalLink.action.open')}
              </Button>,
            ]}
          >
            <Typography.Title level={4}>{note.title}</Typography.Title>
            <List
              dataSource={note.urls}
              className={css.sub1}
              itemLayout={'vertical'}
              renderItem={(url, urlIndex) => (
                <List.Item key={urlIndex}>
                  <Typography.Title level={5}>{url.title}</Typography.Title>
                  <Typography.Link>{url.url}</Typography.Link>

                  {url.matchNotes && url.matchNotes.length !== 0 && (
                    <MatchNoteList
                      url={url}
                      onConvertNote={(matchNote) =>
                        onConvertNote({
                          noteId: note.id,
                          url: url.url,
                          linkNoteId: matchNote.id,
                          linkNoteTitle: matchNote.title,
                          noteIndex,
                          urlIndex,
                        })
                      }
                    />
                  )}
                </List.Item>
              )}
            />
          </List.Item>
        )}
      />
    </Card>
  )
}
