import { clone, push } from 'isomorphic-git'
import http from 'isomorphic-git/http/node'
import path from 'path'
import * as fs from 'fs'
import { remove } from 'fs-extra'
import { resetGit } from '../utils'

describe('测试使用 git 克隆项目', () => {
  const dir = path.resolve(__dirname, 'temp/hexo-starter')
  it('基本示例', async () => {
    const repo = {
      dir: dir,
      fs,
    }
    await remove(dir)
    await clone({
      ...repo,
      url: 'https://github.com/rxliuli/hexo-starter',
      http,
    })
    await resetGit(dir)
  })
  it('测试推送到远端', () => {
    push({
      remote: '',
      dir,
      fs,
      http,
    })
  })
})
