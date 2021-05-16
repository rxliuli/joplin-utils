# joplin-blog

## 场景

将 Joplin 笔记发布为静态网站的 CLI 工具，目前支持 blog/wiki 两种形式，框架支持 hexo/vuepress/docsify。

- blog
  - hexo：由于 hexo 部署到网站子目录非常麻烦，故此处并未演示
  - [vuepress](https://rxliuli.com/joplin-blog/blog/vuepress/)
- wiki
  - [vuepress](https://rxliuli.com/joplin-blog/wiki/vuepress/p/947da6a714854075af6e07835de4a719.html)
  - [docsify](https://rxliuli.com/joplin-blog/wiki/docsify/#/p/947da6a714854075af6e07835de4a719)

![blog demo](docs/blog.png)
![wiki demo](docs/wiki.png)

## 要求

- 安装 nodejs 和 yarn
- 了解命令行
- 了解 VSCode

## 使用

1. 在命令行导航到相关目录
2. 添加依赖 `yarn add -D joplin-blog`
3. 添加配置文件 `.joplin-blog.json`（具体配置参考 [配置](#配置)）
4. 添加一个 npm script 脚本文件 `"gen": "joplin-blog blog"`（如果是要生成 wiki 则 `"gen": "joplin-blog wiki"`）
5. 运行命令 `yarn gen`
6. 然后可以看到相关目录已经包含了笔记和附件资源

## 示例

支持的框架在 examples 目录中均有示例，你可以将之 clone 到本地查看。

- [blog hexo](https://github.com/rxliuli/joplin-blog/tree/master/examples/blog-hexo-example)
- [blog vuepress](https://github.com/rxliuli/joplin-blog/tree/master/examples/blog-vuepress-example)
- [wiki vuepress](https://github.com/rxliuli/joplin-blog/tree/master/examples/wiki-vuepress-example)
- [wiki docsify](https://github.com/rxliuli/joplin-blog/tree/master/examples/wiki-docsify-example)

## 配置

公共

| 配置                | 类型            | 说明                                      |
| ------------------- | --------------- | ----------------------------------------- |
| `type`              | `hexo/vuepress/docsify` | 集成博客的类型                            |
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

一般而言，如果你使用便携程序，它应该就是程序目录下的 `./JoplinProfile` 目录，你应该可以在其中看到 `resources、templates、tmp` 目录。

![joplinProfilePath](https://img.rxliuli.com/20210316092834.png)
