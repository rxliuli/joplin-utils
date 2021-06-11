import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { Card } from 'antd'

type HomePageProps = {}

const content = `# joplin-batch-web

处理一些 Joplin 本身不支持的批量操作，以可视化界面的形式展现出来。

## FAQ

### 为什么不使用 cli 的形式

cli 的形式不太适合这种场景，例如需要预览异常的附件或笔记，在命令行下比较麻烦。
`

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Card>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Card>
  )
}
