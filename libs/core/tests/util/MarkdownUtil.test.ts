import { MarkdownUtil } from '../../src/util/MarkdownUtil'
import { DateTime } from 'luxon'
import { noteApi } from 'joplin-api'

describe('测试 MarkdownUtil', () => {
  it.skip('测试 addMeta', () => {
    const now = Date.now()
    const res = MarkdownUtil.addMeta('test content', {
      layout: 'post',
      title: 'test title',
      abbrlink: '1',
      date: now,
      updated: now,
      tags: [],
    })
    const formatter = 'yyyy-MM-dd hh:mm:ss'
    expect(res).toBe(`---
layout: post
title: test title
abbrlink: "1"
date: ${DateTime.fromMillis(now).toFormat(formatter)}
updated: ${DateTime.fromMillis(now).toFormat(formatter)}
tags: []
---

test content`)
  })
  it.skip('测试 scanResource', async () => {
    const res = MarkdownUtil.scanResource(`
[reimu-1.mp4](:/2b9cab1180ee4aa69e53307c7351949a)
[589ebf8e5bb13.pdf](:/8efa8ed158c749ffb6881e6e9ea65aff)
[test.txt](:/8289011b132841f49b99b2fede6ce470)
[test2.txt2](:/49692ed049fe415c88eac612b1864f56)
![20201010112349.png](:/0e7a27b11a35477cadd79f1a2d88c527)
![20201010144417.png](:/bbb8ac1ed2c5413f953ea2f513763270)
[# Joplin VSCode 插件编写](:/d4ab4244b77b4529a68782f2fdcce07e)
[github](https://github.com/)
[Sample Link](https://myhost.com/Redirect?url=http%3A%2F%2Fwww.bing.com%3Fsearch%3Dtom)
![object uml.drawio.svg](:/b774afaec4d945c6b60496a507206c09)
[test.drawio.svg](:/d570b0105eab487fbb62966d97eb4a99)
[test.km](:/101c6c32e5cb4b4e81365c8f41e15f21)
    `)
    res.forEach((link) => {
      expect(link.length).toBe(32)
    })
    expect(res.length).toBe(10)
  })
  it('测试 convertResource', async () => {
    const note = await noteApi.get('5d8273edf5a14756ad629358b6c8c005', [
      'id',
      'body',
    ])
    console.log(await noteApi.get('d4ab4244b77b4529a68782f2fdcce07e'))
    const res = MarkdownUtil.convertLink(note.body)
    console.log(res)
  })
})
