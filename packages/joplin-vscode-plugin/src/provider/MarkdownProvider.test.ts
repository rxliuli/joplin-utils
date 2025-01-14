import { beforeEach, expect, it } from 'vitest'
import { MarkdownProvider } from './MarkdownProvider'
import { GlobalContext } from '../constants/context'
import { pick } from 'lodash-es'
import { TypeEnum } from 'joplin-api'

let provider: MarkdownProvider
beforeEach(() => {
  provider = new MarkdownProvider()
})

it('MarkdownProvider', async () => {
  const md = `
# Some note

This link to [Another note](:/76cc95540bc54cdd9e425898e6fd25df) works great!
And this link to [Another note](:/76cc95540bc54cdd9e425898e6fd25df) causes an error because the line contains (text in brackets).
And this link to [Another note](:/76cc95540bc54cdd9e425898e6fd25df) causes an error because the line contains smile ;-)
`.trim()
  const r = await provider.resolveLinks(md)
  expect(r).matchSnapshot()
})

it('include image', async () => {
  const md = `
![test.drawio.svg](:/8c08a859711c4cfd846bf916b540ee00)
`.trim()
  const r = await provider.resolveLinks(md)
  expect(r[0].id).eq('8c08a859711c4cfd846bf916b540ee00')
  expect(r).matchSnapshot()
})

it('include resources', async () => {
  const md = `
[test.user.js](:/76cc95540bc54cdd9e425898e6fd25df)
`.trim()
  GlobalContext.openNoteResourceMap.set('76cc95540bc54cdd9e425898e6fd25df', [
    {
      id: '76cc95540bc54cdd9e425898e6fd25df',
      title: 'test.user.js',
      type_: TypeEnum.Resource,
    },
  ])
  const r = await provider.resolveLinks(md)
  expect(pick(r[0], 'id', 'type')).toEqual({
    id: '76cc95540bc54cdd9e425898e6fd25df',
    type: TypeEnum.Resource,
  })
})
