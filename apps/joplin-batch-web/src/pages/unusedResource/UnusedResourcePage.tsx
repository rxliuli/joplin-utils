import * as React from 'react'
import { Button, Card, Image, List, message, SpinProps } from 'antd'
import { useState } from 'react'
import { UnusedResourceService } from './service/UnusedResourceService'
import { joplinApiGenerator } from '../../constants/joplinApiGenerator'
import { useAsyncFn } from 'react-use'
import { Config } from 'joplin-api'
import { downloadUrl, proxyStorage } from '@liuli-util/dom'
import { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'
import produce from 'immer'

type UnusedResourcePageProps = {}

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
export const UnusedResourcePage: React.FC<UnusedResourcePageProps> = () => {
  const [list, setList] = useState<
    Pick<ResourceProperties, 'id' | 'title' | 'mime'>[]
  >([])
  const [loadingMsg, setLoadingMsg] = useState('')
  const [state, onCheck] = useAsyncFn(async () => {
    try {
      const list = await unusedResourceService
        .getUnusedResource()
        .on('process', (info) => {
          setLoadingMsg(`[${info.rate}/${info.all}] 正在检查资源 ${info.title}`)
        })
      console.log('list: ', list)
      setList(list)
    } catch (e) {
      message.error('请检查 joplin token/port 配置')
    }
  })

  async function onRemoveResource(id: string) {
    setList(produce((list) => list.filter((item) => item.id !== id)))
    await joplinApiGenerator.resourceApi.remove(id)
  }

  async function onOpenResource(id: string) {
    await downloadUrl(buildResourceUrl(id))
  }

  return (
    <Card>
      <h2>检查未使用的资源</h2>
      <Button onClick={onCheck}>检查</Button>
      <List
        dataSource={list}
        locale={{
          emptyText: '没有找到任何未使用的附件资源',
        }}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Button onClick={() => onRemoveResource(item.id)}>删除</Button>,
              <Button onClick={() => onOpenResource(item.id)}>下载</Button>,
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
