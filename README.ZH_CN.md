# joplin-vscode-plugin

在 VSCode 中集成 joplin，目前允许直接对目录、笔记进行操作，同时支持搜索功能。

## 功能

- 在 VSCode 中有一个选项卡可以展示目录树
- 在 VSCode 中创建/更新/删除目录/笔记
- 在 VSCode 中点击即直接编辑
- 在 VSCode 中搜索所有笔记

## 要求

- [Joplin Pre v1.0.221](https://github.com/laurent22/joplin/releases/tag/v1.0.221)
- VSCode version > v1.45.0

## 插件设置

- `joplin.token`: joplin web 服务的 token
- `joplin.port`: joplin web 服务的端口，默认为 41184

## 已知问题

- 创建笔记后没有直接打开
- 关闭笔记后没有关闭同步
- 在 Joplin 中对目录/笔记做操作时 VSCode 中的目录树没有更新
- 打包和开发环境变量未生效
- 没有国际化处理

## 发布说明

### 0.0.1

- 在 VSCode 中有一个选项卡可以展示目录树
- 在 VSCode 中创建/更新/删除目录/笔记
- 在 VSCode 中点击即直接编辑
- 在 VSCode 中搜索所有笔记

## 使用 Markdown

**Note:** You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
- Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
- Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
