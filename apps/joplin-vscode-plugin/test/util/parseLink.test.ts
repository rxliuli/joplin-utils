import * as MarkdownIt from 'markdown-it'

it('测试解析链接', () => {
  const note = `
# test

## title 1

## title 2

[reimu-1.mp4](resources/2b9cab1180ee4aa69e53307c7351949a.mp4)

[589ebf8e5bb13.pdf](resources/8efa8ed158c749ffb6881e6e9ea65aff.pdf)

[test.txt](resources/8289011b132841f49b99b2fede6ce470.txt)

[test2.txt2](resources/49692ed049fe415c88eac612b1864f56.txt2)

![20201010112349.png](resources/0e7a27b11a35477cadd79f1a2d88c527.png)
![20201010144417.png](resources/bbb8ac1ed2c5413f953ea2f513763270.png)

[# Joplin VSCode 插件编写](:/03c8b00ed350410baf41c33daddf3005)

[github](https://github.com/)

<!-- Begin markdown -->

[Sample Link](https://myhost.com/Redirect?url=http%3A%2F%2Fwww.bing.com%3Fsearch%3Dtom)

<!-- End markdown -->
`

  const md = new MarkdownIt()
  const [token] = md.parseInline(note, null)
  const linkTokens = token
    .children!.filter((token) => token.type === 'link_open')
    .map((token) => token.attrGet('href'))
  console.log(linkTokens)
})
