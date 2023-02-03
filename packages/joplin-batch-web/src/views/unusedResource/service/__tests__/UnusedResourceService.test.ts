import { expect, it, describe } from 'vitest'
import { PageUtil, resourceApi } from 'joplin-api'
import { UnusedResourceService } from '../UnusedResourceService'

describe('测试 UnusedResourceService', () => {
  describe('测试 joplin api', () => {
    it('测试 checkUsed', async () => {
      const unusedResourceService = new UnusedResourceService()
      const usedId = '9a54a3b73dbc438aa65023e7b6f581c4'
      const unusedId = 'faf99736d4bd4a0b8d2b959887635f73'
      expect(await unusedResourceService.checkUsed(usedId)).toBeTruthy()
      expect(await unusedResourceService.checkUsed(unusedId)).toBeFalsy()
    })
  })
  it('测试获取所有附件资源', async () => {
    const list = await PageUtil.pageToAllList(resourceApi.list.bind(resourceApi))
    console.log(list)
  })
})
