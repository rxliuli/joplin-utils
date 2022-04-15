import { omit } from '@liuli-util/object'
import { eventApi } from '../../src'

describe('test EventApi', () => {
  const compare = (a: any, b: any) => a - b
  // initTestFolderAndNote()
  describe('test list', () => {
    it('basic example', async () => {
      const res = await eventApi.list({ cursor: '0' })
      expect(res.items.length).toBeGreaterThan(0)
    })
    it('no param', async () => {
      const res = await eventApi.list()
      expect(res.items.length).toBe(0)
      expect(res.has_more).toBeFalsy()
      expect(res.cursor).toBeTruthy()
    })
    it('specify fields', async () => {
      const res = await eventApi.list({ cursor: '0', fields: ['id', 'item_type', 'item_id'] })
      // console.log(res.items[0])
      expect(Object.keys(res.items[0]).sort(compare)).toEqual(['id', 'item_type', 'item_id'].sort(compare))
    })
  })
  describe('test get', () => {
    it('basic example', async () => {
      const res = (await eventApi.list({ cursor: '0' })).items[0]!
      // console.log(res)
      expect(omit(await eventApi.get(res.id), 'type_')).toEqual(res)
    })
    it('specify fields', async () => {
      const id = (await eventApi.list({ cursor: '0' })).items[0]!.id
      const res = await eventApi.get(id, ['id', 'item_type', 'item_id', 'source'])
      // console.log(res)
      expect(Object.keys(res).sort(compare)).toEqual(['id', 'item_type', 'item_id', 'source', 'type_'].sort(compare))
    })
  })
})
