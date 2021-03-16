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
4. 添加一个 npm script 脚本文件 `"imp": "joplin-blog"`
5. 运行命令 `yarn imp`
6. 可以看到 `source/_posts` 目录下已经包含了所有导出的笔记

## 示例

- [hexo](https://github.com/rxliuli/joplin-blog/tree/master/tutorials/hexo-example)
- [vuepress](https://github.com/rxliuli/joplin-blog/tree/master/tutorials/vuepress-example)

## 配置

公共

| 配置                | 类型            | 说明                                      |
| ------------------- | --------------- | ----------------------------------------- |
| `type`              | `hexo/vuepress` | 集成博客的类型                            |
| `rootPath`          | `string`        | hexo/vuepress 目录，一般应该为 `.`        |
| `joplinProfilePath` | `string`        | joplin 个人文件夹                         |
| `token`             | `string`        | joplin web clipper 的 token               |
| `port`              | `number`        | joplin web clipper 的端口，一般是 `41184` |
| `tag`               | `string`        | joplin 的博客标签                         |

hexo

| 配置              | 类型       | 说明                                                                                                              |
| ----------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| `stickyTopIdList` | `string[]` | 置顶的笔记 id（仅在 [fluid 主题](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/README_en.md) 下生效） |

我用这个工具分享了 170 多篇笔记，[博客地址（中文）](https://blog.rxliuli.com/)

## 常见问题

### token/port 指的是什么，在哪儿可以找到？

一般可以在 **工具 > 选项 > 网页剪辑器** 中看到

![joplin web clipper](https://img.rxliuli.com/20210316092547.png)

### joplin 个人文件夹在哪儿？

一般而言，如果你使用便携程序，它应该就是程序目录下的 `./JoplinProfile` 目录，你应该可以在其中看到 `resources、_templates、_tmp` 目录。

![joplinProfilePath](https://img.rxliuli.com/20210316092834.png)
