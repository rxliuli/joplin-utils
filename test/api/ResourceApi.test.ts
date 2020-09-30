import { resourceApi } from '../../src'
import { pathExistsSync, writeFileSync, createReadStream } from 'fs-extra'
import { resolve } from 'path'
import FormData from 'form-data'
import axios from 'axios'
import { ApiUtil } from '../../src/util/ApiUtil'
import fetch from 'node-fetch'

describe('test ResourceApi', () => {
  const id = 'd2baabaeebe54e87bf7571d6eff230e9'
  it('test list', async () => {
    const res = await resourceApi.list()
    console.log(res)
    expect(res.length).toBeGreaterThan(0)
  })
  it('test get', async () => {
    const res = await resourceApi.get(id)
    console.log(res)
    expect(res.id).toBe(id)
  })
  it('test create', async () => {
    const fd = new FormData()
    const path = resolve(__dirname, '../resource/resourcesByFileId.png')
    const title = 'image title'
    fd.append('props', JSON.stringify({ title: title }))
    fd.append('data', createReadStream(path))
    const json = await resourceApi.create(fd)
    expect(json.title).toBe(title)
  })
  describe('diff fetch and axios', () => {
    function getFormData() {
      const fd = new FormData()
      const path = resolve(__dirname, '../resource/resourcesByFileId.png')
      const title = 'image title'
      fd.append('props', JSON.stringify({ title: title }))
      fd.append('data', createReadStream(path))
      return fd
    }

    it('test create by fetch', async () => {
      const fd = getFormData()
      const resp = await fetch(ApiUtil.baseUrl('/resources'), {
        method: 'post',
        body: fd,
      })
      const json = await resp.json()
      console.log('json: ', json)
    })
    it.skip('test create by axios', async () => {
      const fd = getFormData()
      const resp = await axios.post(ApiUtil.baseUrl('/resources'), fd, {
        headers: fd.getHeaders(),
      })
      console.log('resp.data: ', resp.data)
    })
  })
  it('test update', async () => {
    const getRes = await resourceApi.get(id)
    getRes.title = `new title ${Date.now()}`
    const updateRes = await resourceApi.update(getRes)
    expect(updateRes.title).toBe(getRes.title)
  })
  it.skip('test remove ', async () => {
    const deleteId = '52fe0b8f8ce5468489345b94227261d8'
    await resourceApi.remove(deleteId)
  })
  it('test fileByResourceId', async () => {
    const res = await resourceApi.fileByResourceId(id)
    console.log(typeof res)
    const path = resolve(__dirname, '../resource/resourcesByFileId.png')
    writeFileSync(path, res)
    expect(pathExistsSync(path)).toBeTruthy()
  })
})
