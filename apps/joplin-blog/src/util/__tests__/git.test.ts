import { clone } from 'isomorphic-git'
import http from 'isomorphic-git/http/node'
import path from 'path'
import * as fs from 'fs'
import { remove } from 'fs-extra'
import { resetGit } from '../utils'

describe('测试使用 git 克隆项目', () => {
  it('基本示例', async () => {
    const dir = path.resolve(__dirname, 'temp/hexo-starter')
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
})
