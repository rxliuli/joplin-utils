# 快速启动

## 概述

> [![install](https://img.shields.io/visual-studio-marketplace/i/rxliuli.joplin-vscode-plugin)](https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin&ssr=false#overview)

Joplin VSCode Plugin 提供在 VSCode 中管理 Joplin 笔记的功能，包括常见的查看、编辑笔记，管理笔记的标签，添加、修改附件，内部链接、搜索等功能。

Joplin Web Clipper 旨在通过 REST Web API 与浏览器扩展进行通信，共享笔记、笔记本、标签等。Joplin VSCode Plugin 连接到相同的 REST 端点，可以在不离开编辑器的情况下查看和修改笔记。

> 为什么会有这个插件？阅读 [我的动机](./faq.md) 了解开发它的原因。
>
> 它能做什么？[功能](./feature.md) 列出了现有的功能。

## 要求

- Joplin 版本 > v2.8
- VSCode 版本 > v1.66.2
- 启用 Joplin Web Clipper

## 安装 Joplin VSCode 插件

在 VSCode 市场中搜索 joplin。找到 Joplin VSCode Plugin 并点击安装。

![安装插件](/images/install-plugin.png)

## 配置

要访问 Joplin 数据库，我们需要连接到 Joplin Web Clipper 打开的 API 端点。这意味着 Joplin 必须运行，Web Clipper 必须启用。

> 关于 Web Clipper 的帮助，请参考 [Joplin Web Clipper](https://joplinapp.org/clipper/)。

要启动并运行，需要注意两个设置。

授权令牌

- 从 Joplin 设置中复制你的授权令牌并粘贴到这里。
  **网页剪辑 -> 高级选项 -> 拷贝 Token 令牌**。

基本路径

- 一般而言，如果你使用本地安装的 Joplin 桌面客户端，则不需要特殊配置。如果使用远端的 Joplin 服务，则需要进行配置。
  例如 <http://127.0.0.1:41184>

![安装插件](/images/joplin-settings.png)

## 开始使用

输入快捷键 `Ctrl+J Ctrl+J`，然后庆祝 :tada:。这个快捷键组合激活了 `view: show joplin` 命令，打开侧边栏，显示所有的笔记本。

![预览](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png)

## 功能

您的所有笔记和记事本都可以在侧边栏中找到，展开笔记本可以看到下面的子笔记本和笔记。

点击一个笔记，在编辑器中打开一个工作副本，保存它以将修改推送回 Joplin。

你可以随心所欲地创建、编辑和删除 **笔记** 和 **笔记本**，一切都在 VSCode 中不间断的完成。🦸♀️

## 命令和快捷键

VSCode 有很多快捷键，为了避免与内置的快捷键冲突，该插件假定了一个快捷键前缀 `Ctrl+J`，在后面继续添加二步快捷键。

提示：探索在命令调色板中输入 `joplin` 的结果，找出这里没有告诉你的功能。
