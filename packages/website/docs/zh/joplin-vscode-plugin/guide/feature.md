# 其他功能

## 配置表

| 字段            | 默认值                   | 可选值         | 说明                         |
| --------------- | ------------------------ | -------------- | ---------------------------- |
| `token`         |                          | `string`       | joplin web 服务的 token      |
| `baseUrl`       | `http://localhost:41184` | `string`       | joplin api 基础路径          |
| `deleteConfirm` | `true`                   | `boolean`      | 删除时是否提醒               |
| `sortNotes`     | `false`                  | `boolean`      | 是否对笔记进行排序           |
| `sortNotesType` | `alphabetical`           |                | 笔记排序的类型               |
|                 |                          | `alphabetical` | 按照标题的字母顺序排序       |
|                 |                          | `default`      | Joplin 默认的排序            |
| `sortOrder`     | `asc`                    |                | 笔记排序的顺序（升序或降序） |
|                 |                          | `asc`          | 升序                         |
|                 |                          | `desc`         | 降序                         |
| `language`      | `english`                |                | 插件显示的语言，跟随 VSCode  |
|                 |                          | `en`           | 英语                         |
|                 |                          | `zh`           | 简体中文                     |

## 快捷键

- `f2`: 重命名笔记或目录
- `delete`: 删除笔记或目录
- `ctrl+alt+u`: 从剪切板上传图片
- `ctrl+alt+e`: 从文件选择器上传图片
- `ctrl+alt+shift+e`: 从文件选择器添加附件
- `ctrl+j ctrl+o`: 搜索笔记，默认显示最近修改的 20 条笔记
- `ctrl+j ctrl+i`: 创建附件
- `ctrl+j ctrl+m`: 管理标签
- `ctrl+j ctrl+l`: 显示当前笔记的附件资源

## 编辑附件

由于在 vscode 编辑器中实现的点击跳转功能经常存在问题，所以在 `v0.7.8` 之后实现了显示当前笔记附件列表的功能，用以快速编辑指定附件资源，默认快捷键为 `ctrl+j ctrl+l`

![editResource](/images/editResource.gif)

## 粘贴图片

`v0.1.7` 之后新增了图片粘贴功能，可以通过右键菜单、命令或快捷键将图片上传到 Joplin 并粘贴链接到 VSCode 中。

1. `ctrl+alt+u` 粘贴剪切板的图片
2. `ctrl+alt+e` 使用文件管理器选择图片粘贴

![pasteImage](/images/pasteImage.gif)

## 添加附件

`v0.1.10` 之后新增了添加附件的功能，可以通过命令或快捷键将文件作为附件资源添加到 Joplin 笔记中。

1. `ctrl+alt+shift+e` 选择要添加为附件的文件

## 创建附件

在 `v0.3.0` 之后实现了右键创建附件资源的功能，主要用于快速创建并添加一个思维导图（由百度脑图提供支持）或流程图（由 draw.io 提供支持）。

## 管理标签

在 `v0.3.0` 之后支持管理标签，命令是 `> Joplin: Manage tags`，默认快捷键为 `ctrl+j ctrl+m` 即可弹出复选框。

## 创建标签

在 `v0.3.0` 之后支持创建标签，命令是 `> Joplin: Create tag`。

## 链接笔记

在笔记上右键菜单可以看到 **复制链接**，点击即复制到剪切板。

![Link notes](/images/copy-link.gif)

使用 `Ctrl+单击` 打开到其他笔记中。
