# joplin-vscode-plugin

在 VSCode 中集成 joplin，目前允许直接对目录、笔记进行操作，同时支持搜索功能。

![预览图](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png)

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

- 缺少快捷键支持

## 发布说明

### 0.1.2

- 在激活 Joplin for vscode 时，首先调用一次 ping 接口，如果未能成功则添加明显的错误信息

### 0.1.1

- 更新说明，添加截图

### 0.1.0

- 创建笔记后直接打开
- 关闭笔记后关闭同步
- 在 Joplin 中对目录/笔记做操作时 VSCode 中的目录树定时自动更新
- 添加开发环境变量
- 支持国际化
- 将 icon 替换为 joplin 的

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

## 常问问题

### 插件没有显示列表

请检查完 joplin 的配置项之后，重新启动 VSCode。

### 在侧边栏中点击无法打开笔记

请使用 Pre 版本 [v1.0.224](https://github.com/laurent22/joplin/releases/tag/v1.0.224)，因为它包含了必须的几个新 API，例如在 VSCode 中根据 noteId 打开笔记。
