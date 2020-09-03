# joplin-vscode-plugin

> [English](https://github.com/rxliuli/joplin-vscode-plugin/blob/master/README.md), [简体中文](https://github.com/rxliuli/joplin-vscode-plugin/blob/master/README.ZH_CN.md)  
> [VSCode Plugin Marketplace](https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin&ssr=false#overview), [WebSite](https://rxliuli.com/joplin-vscode-plugin/)

在 VSCode 中集成 joplin，目前允许直接对目录、笔记进行操作，同时支持搜索功能。

![预览图](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png)

## 功能

- 在 VSCode 中有一个选项卡可以展示目录树
- 在 VSCode 中创建/更新/删除目录/笔记
- 在 VSCode 中点击即直接编辑
- 在 VSCode 中搜索所有笔记
- 在 VSCode 中引用/跳转笔记

## 要求

- Joplin version > v1.0.224
- VSCode version > v1.45.0

## 插件设置

- `joplin.token`: joplin web 服务的 token
- `joplin.port`: joplin web 服务的端口，默认为 41184

## 已知问题

- 缺少快捷键支持

## 发布说明

### 0.1.5

- 支持在 vscode 中复制 vscode:// 协议的 joplin 笔记链接
- 支持在 vscode 中打开 _vscode://rxliuli.joplin-vscode-plugin/open?id=_ 链接

### 0.1.4

- 支持自定义笔记显示排序，目前支持按照字母/默认排序，同时支持倒序
- 添加这个插件的官网（缺少英文翻译）
- 修复一些提示的英文文法问题
- 修复开发环境下 `token/port` 在代码中写死的问题

### 0.1.3

- 实现点击笔记切换到对应目录
- 只保留重命名与删除的快捷键
- 修复点击笔记之后光标强制转移到了编辑器的问题（未能完全解决）

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

### 显示错误信息 **Joplin’s token/port is set incorrectly, unable to access Joplin service!**

请尝试在 CMD/Bash 执行以下命令，如果没有问题，它应该返回 **JoplinClipperServer**，否则你需要向 Joplin 官方提 issue。

```cmd
curl http://127.0.0.1:41184/ping
```

### 点击后没有在 VSCode 中打开

请参考官方的默认外部编辑器设置：[How can I edit my note in an external text editor?](https://joplinapp.org/faq/#how-can-i-edit-my-note-in-an-external-text-editor)

### 插件没有显示列表

请检查完 joplin 的配置项之后，重新启动 VSCode。

### 在侧边栏中点击无法打开笔记

请使用版本 [v1.0.224](https://github.com/laurent22/joplin/releases/tag/v1.0.224) 或更高，因为它包含了必须的几个新 API，例如在 VSCode 中根据 noteId 打开笔记。
