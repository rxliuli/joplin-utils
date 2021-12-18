# joplin-vscode-plugin

> [![install](https://img.shields.io/visual-studio-marketplace/i/rxliuli.joplin-vscode-plugin) VSCode 插件商店](https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin&ssr=false#overview)，[在线文档](https://joplin-utils.rxliuli.com/zh/joplin-vscode-plugin/)

## 概述

joplin-vscode-plugin 提供在 vscode 中管理 joplin 笔记的功能，包括常见的查看、编辑笔记，管理笔记的标签，添加、修改附件，内部链接、搜索等功能。

Joplin Web Clipper 旨在通过 REST Web API 与浏览器扩展进行通信，共享笔记、笔记本、标签等。joplin-vscode-plugin 连接到相同的 REST 端点，可以在不离开编辑器的情况下查看和修改笔记。

> 为什么会有这个插件？阅读 [我的动机](https://joplin-utils.rxliuli.com/joplin-vscode-plugin/zh/other/) 了解开发它的原因。
>
> 它能做什么？[路线图](https://joplin-utils.rxliuli.com/joplin-vscode-plugin/zh/other/roadmap.html) 列出了现有和计划中的功能。
>
> 没听说过 [乔普林](https://joplinapp.org/)？你错过了一个不错的 [开源同步笔记应用](https://joplinapp.org/)。

## 要求

- Joplin 版本 > v1.4.19
- VSCode 版本 > v1.45.0
- 启用 Joplin Web Clipper
- 熟悉 Joplin 和 VSCode 的基本使用方法

## 安装 Joplin VSCode 插件

在 VSCode 市场中搜索 joplin。找到 joplin-vscode-plugin 并点击安装。

![安装插件](https://github.com/rxliuli/joplin-vscode-plugin/blob/master/docs/_media/install-plugin.png?raw=true)

## 配置

要访问 Joplin 数据库，我们需要连接到 Joplin Web Clipper 打开的 API 端点。这意味着 Joplin 必须运行，Web Clipper 必须启用。

> 关于 Web Clipper 的帮助，请参考 [Joplin Web Clipper](https://joplinapp.org/clipper/)。

要启动并运行，需要注意三个设置。

端口

- 从 Joplin 设置中复制端口号并粘贴到这里。启用 Web Clipper 后，会显示活动端口。
  **网页剪辑 -> 第 1 步：启用网页剪辑服务 -> 状态**。

授权令牌

- 从 Joplin 设置中复制你的授权令牌并粘贴到这里。
  **网页剪辑 -> 高级选项 -> 拷贝 Token 令牌**。

Joplin 程序的个人目录

如果你希望使用附件相关功能，该设置是必须的。

一般而言，如果你使用便携程序，它应该就是程序目录下的 `./JoplinProfile` 目录，你应该可以在其中看到 _resources_、_templates_、_tmp_ 目录。

![设置插件](https://github.com/rxliuli/joplin-vscode-plugin/blob/master/docs/_media/joplin-settings.png?raw=true)

## 重新启动 VSCode

目前配置编辑后不会自动重新连接，需要关闭 VSCode，下次启动时它就会连接到 Joplin。

## 开始使用

输入快捷键 `Ctrl+J Ctrl+J`，然后庆祝 :tada:。这个快捷键组合激活了 `view: show joplin` 命令，打开侧边栏，显示所有的笔记本。

![预览](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png)

## 功能

您的所有笔记和记事本都可以在侧边栏中找到，展开笔记本可以看到下面的子笔记本和笔记。

点击一个笔记，在编辑器中打开一个工作副本，保存它以将修改推送回 Joplin。

你可以随心所欲地创建、编辑和删除 **笔记** 和 **笔记本**，一切都在 VSCode 中不间断的完成。🦸♀️

## 命令和键绑定

VSCode 有很多快捷键键绑定，为了避免与内置的快捷键冲突，我们假定了一个快捷键前缀 `Ctrl+J`，在后面继续添加二步快捷键键。

提示：探索在命令调色板中输入 `joplin` 的结果，找出我没有告诉你的伟大功能。
