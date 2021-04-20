import git from 'isomorphic-git'
import http from 'isomorphic-git/http/node'
import path from 'path'
import * as fs from 'fs'
import { remove } from 'fs-extra'

describe('测试使用 git 克隆项目', () => {
  it('基本示例', async () => {
    const dir = path.resolve(__dirname, 'temp/hexo-starter')
    await remove(dir)
    await git.clone({
      url: 'https://github.com/rxliuli/hexo-starter',
      dir: dir,
      fs,
      http,
    })
  })
})
