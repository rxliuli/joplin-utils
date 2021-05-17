import { story } from '../../pages/options/component/story'
import JoplinNoteList from './JoplinNoteList'

const { meta, of } = story(JoplinNoteList)

export default meta({
  title: '组件/笔记列表',
})

export const BasicExample = of({
  storyName: '基本示例',
  args: {
    noteList: [
      {
        id: '1',
        title: 'VSCode VS WebStorm',
      },
    ],
  },
})
