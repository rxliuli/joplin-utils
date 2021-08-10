import * as React from 'react'
import { useState } from 'react'
import { Button, Card, Image, List, message, Space, SpinProps } from 'antd'
import { UnusedResourceService } from './service/UnusedResourceService'
import { joplinApiGenerator } from '../../constants/joplinApiGenerator'
import { useAsyncFn } from 'react-use'
import { Config } from 'joplin-api'
import { downloadUrl, proxyStorage } from '@liuli-util/dom'
import produce from 'immer'
import { AsyncArray } from '@liuli-util/async'
import { i18n } from '../../constants/i18n'
import { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'

const unusedResourceService = new UnusedResourceService(joplinApiGenerator)

function resourceUrlBuilder(getConfig: () => Config | null | undefined) {
  const settings = getConfig()
  return (id: string) =>
    `http://localhost:${settings?.port}/resources/${id}/file?token=${settings?.token}`
}

const buildResourceUrl = resourceUrlBuilder(
  () => proxyStorage<{ settings: Config }>(localStorage).settings,
)

/**
 * 检查未使用的资源
 */
export const UnusedResourcePage: React.FC = () => {
  const [list, setList] = useState<
    Pick<ResourceProperties, 'id' | 'title' | 'mime'>[]
  >([])
  const [loadingMsg, setLoadingMsg] = useState('')
  const [state, onCheck] = useAsyncFn(async () => {
    try {
      const list = await unusedResourceService
        .getUnusedResource()
        .on('process', (info) => {
          setLoadingMsg(i18n.t('unusedResource.msg.process', info))
        })
      console.log('list: ', list)
      setList(list)
    } catch (e) {
      message.error(i18n.t('unusedResource.msg.error'))
    }
  })

  async function onRemoveResource(id: string) {
    setList(produce((list) => list.filter((item) => item.id !== id)))
    await joplinApiGenerator.resourceApi.remove(id)
  }

  async function onOpenResource(id: string) {
    await downloadUrl(buildResourceUrl(id))
  }

  const [onRemoveAllState, onRemoveAll] = useAsyncFn(async () => {
    await AsyncArray.forEach(list, async (item) => {
      await joplinApiGenerator.resourceApi.remove(item.id)
    })
    setList([])
  }, [list])

  return (
    <Card
      title={i18n.t('unusedResource.title')}
      extra={
        <Space>
          <Button onClick={onCheck}>
            {i18n.t('unusedResource.action.check')}
          </Button>
          <Button
            disabled={list.length === 0}
            danger={true}
            loading={onRemoveAllState.loading}
            onClick={onRemoveAll}
          >
            {i18n.t('unusedResource.action.removeAll')}
          </Button>
        </Space>
      }
    >
      <List
        dataSource={list}
        locale={{
          emptyText: i18n.t('unusedResource.listEmptyText'),
        }}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Button onClick={() => onRemoveResource(item.id)}>
                {i18n.t('unusedResource.action.remove')}
              </Button>,
              <Button onClick={() => onOpenResource(item.id)}>
                {i18n.t('unusedResource.action.download')}
              </Button>,
            ]}
            extra={
              item.mime.startsWith('image/') && (
                <Image src={buildResourceUrl(item.id)} width={300} />
              )
            }
          >
            <List.Item.Meta title={item.title} />
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
