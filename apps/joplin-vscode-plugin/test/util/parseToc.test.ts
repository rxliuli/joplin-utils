import MarkdownIt = require('markdown-it')
import { readFile } from 'fs-extra'
import * as path from 'path'

it('解析 markdown toc', async () => {
  const md = new MarkdownIt()
  const text = await readFile(
    path.resolve(
      __dirname,
      './resource/edit-f5493f653ac447de99582acbf91a6ed2.md',
    ),
    {
      encoding: 'utf-8',
    },
  )
  const tokens = md.parse(text, {})
  const tocTokens = tokens.filter((token) => token.type === 'heading_open')
  // console.log(tocTokens.map((token) => token.tag))
  console.log(tokens[1])
})
