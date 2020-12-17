import unified = require('unified')
import parser = require('remark-parse')
import { Link, Root } from 'mdast'
import visit = require('unist-util-visit')

describe('测试 remark.js', () => {
  it('基本示例 解析 markdown 然后输出 markdown', async () => {
    const text = `
# title

[Joplin VSCode 插件编写](:/d4ab4244b77b4529a68782f2fdcce07e)
[github](https://github.com/)
    `
    const tree = unified().use(parser).parse(text) as Root
    visit(tree, 'link', function (node: Link) {
      console.log(node.url)
    })
  })
})
