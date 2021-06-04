import * as React from 'react'
import { Button, List } from 'antd'
import { useState } from 'react'
import { ResourceGetRes } from 'joplin-api/dist/modal/ResourceGetRes'
import { UnusedResourceService } from './service/UnusedResourceService'
import { joplinApiGenerator } from '../../constants/joplinApiGenerator'

type UnusedResourcePageProps = {}

const unusedResourceService = new UnusedResourceService(joplinApiGenerator)

/**
 * 检查未使用的资源
 */
export const UnusedResourcePage: React.FC<UnusedResourcePageProps> = (
  props,
) => {
  const [list, setList] = useState<ResourceGetRes[]>([])

  async function onCheck() {
    const list = await unusedResourceService.getUnusedResource()
    console.log('list: ', list)
    setList(list)
  }

  return (
    <div>
      <h2>检查未使用的资源</h2>
      <Button onClick={onCheck}>检查</Button>
      <List
        dataSource={list}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta title={item.title} />
          </List.Item>
        )}
      />
    </div>
  )
}
