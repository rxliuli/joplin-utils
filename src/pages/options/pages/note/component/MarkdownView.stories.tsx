import { story } from '../../../component/story'
import MarkdownView from './MarkdownView'

const { meta, of } = story(MarkdownView)

export default meta({
  title: '组件/MarkdownView',
})

export const BasicExample = of({
  storyName: '基本示例',
  args: {
    content: `# test

\`\`\`ts
import { app } from "electron";
import path = require("path");

/**
 * 客户端默认支持的协议
 */
export class DefaultProtocolClient {
  constructor(public readonly protocol: string) {
  }

  /**
   * 注册一个默认支持打开的协议
   */
  register() {
    // 开发模式下在 window 运行需要做兼容
    if (
      process.env.NODE_ENV === "development" &&
      process.platform === "win32"
    ) {
      // 设置 electron.exe 和 app 的路径
      app.setAsDefaultProtocolClient(this.protocol, process.execPath, [
        path.resolve(process.argv[1]),
      ]);
    } else {
      app.setAsDefaultProtocolClient(this.protocol);
    }
  }
}

const defaultProtocolClient = new DefaultProtocolClient("custom-protocol");

await defaultProtocolClient.register();
\`\`\`

command

\`\`\`shell
ts-node f.ts
\`\`\`

- \`Foo.getName();\` // 2。静态函数
- \`getName();\` // 4。首先，这里声明了两次，\`var\` 一次，\`function\` 一次，虽然 \`var/function\` 都会进行变量提升，但 var 的赋值仍在原来的位置
- \`Foo().getName();\` // 1。非构造方法调用 this=window，这里调用了函数 \`Foo\`，导致 \`getName\` 被重新赋值
- \`getName();\` // 1。重新定义后的结果
- \`new Foo.getName();\` // 2。静态函数
- \`new Foo().getName();\` // 3。原型链上的函数
- \`new new Foo().getName();\` // 3。原型链上的函数`,
  },
})
