import { story } from '../../../component/story'
import MarkdownView from './MarkdownView'

const { meta, of } = story(MarkdownView)

export default meta({
  title: '组件/MarkdownView',
})

export const BasicExample = of({
  storyName: '基本示例',
  args: {
    note: {
      id: '047cf9d34a3142a3ad7c486dd6ba43a5',
      title: '# test',
      body:
        '## title 1\n\n[测试笔记](:/301c709ebd804ba39ae458fcb1976e93)\n\n## title 2\n\n[reimu-1.mp4](:/3538f5d1063a4fc3803aac03d568598b)\n\n[589ebf8e5bb13.pdf](:/1488ac4fc32741e0a10dee5224fb0b94)\n\n[test.txt](:/e1a7858be1224ae89d2e85229dd980c5)\n\n[test2.txt2](:/41a8849ab25b40d89e5e1e5598e5a58d)\n\n![20201010112349.png](:/6fe15ae7c7bc4a3c94f1bc8e292de991)\n![20201010144417.png](:/bd6dd8fc5d2f4de490b8a06c985a4b91)\n\n[# Joplin VSCode 插件编写](:/f10544a849324536a579327affe1d624)\n[github](https://github.com/)\n\n<!-- Begin markdown -->\n\n[Sample Link](https://myhost.com/Redirect?url=http%3A%2F%2Fwww.bing.com%3Fsearch%3Dtom)\n\n<!-- End markdown -->\n\n![object uml.drawio.svg](:/bad7d7a6cf4848f8bbe6822bdde24e3b)\n\ntest content\n\n[test.drawio.svg](:/ce5a8c4653b64a229daa7554fc25482d)\n\n[test.km](:/ec4ce8436056429f89b92f27acfe05bc)\n',
      resourceList: [
        {
          id: '1488ac4fc32741e0a10dee5224fb0b94',
          title: '589ebf8e5bb13.pdf',
          type_: 4,
        },
        {
          id: '3538f5d1063a4fc3803aac03d568598b',
          title: 'reimu-1.mp4',
          type_: 4,
        },
        {
          id: '41a8849ab25b40d89e5e1e5598e5a58d',
          title: 'test2.txt2',
          type_: 4,
        },
        {
          id: '6fe15ae7c7bc4a3c94f1bc8e292de991',
          title: '20201010112349.png',
          type_: 4,
        },
        {
          id: 'bad7d7a6cf4848f8bbe6822bdde24e3b',
          title: '对象关系图.drawio.svg',
          type_: 4,
        },
        {
          id: 'bd6dd8fc5d2f4de490b8a06c985a4b91',
          title: '20201010144417.png',
          type_: 4,
        },
        {
          id: 'ce5a8c4653b64a229daa7554fc25482d',
          title: 'test.drawio.svg',
          type_: 4,
        },
        {
          id: 'e1a7858be1224ae89d2e85229dd980c5',
          title: 'test.txt',
          type_: 4,
        },
        { id: 'ec4ce8436056429f89b92f27acfe05bc', title: 'test.km', type_: 4 },
      ],
    },
  },
})
