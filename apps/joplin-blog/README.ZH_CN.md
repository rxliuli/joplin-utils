# joplin-blog

## 场景

你是否和吾辈一样烦恼同时维护笔记和博客的同步麻烦，如果你使用 joplin 作为笔记工具，而使用 hexo 作为博客生成器的话，你可以选择这个工具来连接它们。

## 使用

方式 1

1. 添加配置文件 `.joplin-blog.json`（具体配置参考 [配置](#配置)）
2. 使用命令导出笔记为博客 `npx joplin-blog`

方式 2

1. 在命令行导航到 hexo 博客目录
2. 添加依赖 `yarn add -D joplin-blog`
3. 添加配置文件 `.joplin-blog.json`（具体配置参考 [配置](#配置)）
4. 添加一个 npm script 脚本文件 `"imp": "joplin-hexo"`
5. 运行命令 `yarn imp`
6. 可以看到 `source/_posts` 目录下已经包含了所有导出的笔记

## 配置

公共

| 配置                | 类型            | 说明                            |
| ------------------- | --------------- | ------------------------------- |
| `type`              | `hexo/vuepress` | 集成博客的类型                  |
| `rootPath`          | `string`        | hexo 目录的位置，一般应该为 `.` |
| `joplinProfilePath` | `string`        | joplin 个人文件夹               |
| `token`             | `string`        | joplin web service 的 token     |
| `port`              | `number`        | joplin web service 的端口       |
| `tag`               | `string`        | joplin 的博客标签               |

hexo

| 配置              | 类型       | 说明                                   |
| ----------------- | ---------- | -------------------------------------- |
| `stickyTopIdList` | `string[]` | 置顶的笔记 id（仅在 fluid 主题下生效） |
