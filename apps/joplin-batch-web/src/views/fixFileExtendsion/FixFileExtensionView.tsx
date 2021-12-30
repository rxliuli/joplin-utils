import * as React from 'react'
import { useState } from 'react'
import { i18n } from '../../constants/i18n'
import { Button, Card, Image, List, message, Space, SpinProps } from 'antd'
import { useAsyncFn } from 'react-use'
import { PageUtil } from 'joplin-api'
import { buildResourceUrl } from '../unusedResource/UnusedResourceView'
import { joplinApiGenerator } from '../../constants/joplinApiGenerator'
import { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'
import { AsyncArray, asyncLimiting } from '@liuli-util/async'
import { MimeUtils } from './util/MimeUtils'

export const FixFileExtensionView: React.FC = () => {
  const [list, setList] = useState<
    Pick<ResourceProperties, 'id' | 'title' | 'file_extension' | 'mime'>[]
  >([])
  const [loadState, fetch] = useAsyncFn(async () => {
    setList(
      (
        await PageUtil.pageToAllList(
          joplinApiGenerator.resourceApi.list.bind(
            joplinApiGenerator.resourceApi,
          ),
          {
            fields: ['id', 'title', 'file_extension', 'mime'],
          },
        )
      )
        .filter((item) => !item.file_extension)
        .map((item) => ({
          ...item,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          file_extension: MimeUtils.toFileExtension(item.mime)!,
        })),
    )
  })

  async function onFix() {
    const hide = message.loading(i18n.t('fixFileExtension.action.progress'))
    try {
      await AsyncArray.forEach(
        list,
        asyncLimiting(async (item) => {
          await joplinApiGenerator.resourceApi.update({
            id: item.id,
            file_extension: item.file_extension,
          })
        }, 10),
      )
      setList([])
      message.success(i18n.t('fixFileExtension.action.complete'))
    } finally {
      hide()
    }
  }

  return (
    <Card
      title={i18n.t('fixFileExtension.title')}
      extra={
        <Space>
          <Button onClick={fetch}>{i18n.t('common.action.check')}</Button>
          <Button disabled={list.length === 0} onClick={onFix}>
            {i18n.t('fixFileExtension.action.fix')}
          </Button>
        </Space>
      }
    >
      <List
        dataSource={list ?? []}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            extra={
              item.mime.startsWith('image/') && (
                <Image src={buildResourceUrl(item.id)} width={300} />
              )
            }
          >
            <List.Item.Meta
              title={item.title}
              description={`${i18n.t('fixFileExtension.tip')}${
                item.file_extension
              }`}
            />
          </List.Item>
        )}
        loading={
          {
            spinning: loadState.loading,
          } as SpinProps
        }
      />
    </Card>
  )
}
