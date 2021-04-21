import path from 'path'
import { deploy } from '../utils'

describe('测试 gh-pages', () => {
  it('推送到远端', () => {
    deploy(path.resolve(__dirname, 'temp/gh-pages'), {
      user: 'rxliuli',
      repo: 'joplin-blog',
      token: process.env.GH_TOKEN!,
    })
  })
})
