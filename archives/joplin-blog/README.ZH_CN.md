# joplin-blog

## 场景

将 Joplin 笔记发布为静态网站的 CLI 工具，目前支持 blog/wiki 两种形式，框架支持 hexo/vuepress/jeykll/docsify。

- blog
  - [hexo](https://joplin-utils.rxliuli.com/blog/hexo/)
  - [vuepress](https://joplin-utils.rxliuli.com/blog/vuepress/)
  - [jeykll](https://joplin-utils.rxliuli.com/blog/jeykll/)
- wiki
  - [vuepress](https://joplin-utils.rxliuli.com/wiki/vuepress/)
  - [docsify](https://joplin-utils.rxliuli.com/wiki/docsify/)

![blog demo](https://raw.githubusercontent.com/rxliuli/joplin-utils/master/apps/joplin-blog/docs/blog.png)
![wiki demo](https://raw.githubusercontent.com/rxliuli/joplin-utils/master/apps/joplin-blog/docs/wiki.png)

## 要求

- 安装 nodejs 和 npm（默认随附安装）
- 了解命令行
- 了解 VSCode

## 使用

1. 在命令行导航到相关目录
2. 添加依赖 `npm i -D joplin-blog`
3. 添加配置文件 `.joplin-blog.json`（具体配置参考 [配置](#配置)）
4. 添加一个 npm script 脚本文件 `"gen": "joplin-blog blog"`（如果是要生成 wiki 则 `"gen": "joplin-blog wiki"`）
5. 运行命令 `npm run gen`
6. 然后可以看到相关目录已经包含了笔记和附件资源

> 请将 _.joplin-blog.json_ 和 _.joplin-cache.json_ 两个文件添加到 _.gitignore_ 忽略文件中，前者包含敏感信息 `token`，后者是自动生成。

## 示例

支持的框架在 examples 目录中均有示例，你可以将之 clone 到本地查看。

- [blog hexo](https://github.com/rxliuli/joplin-utils/tree/master/examples/blog-hexo-example)
- [blog vuepress](https://github.com/rxliuli/joplin-utils/tree/master/examples/blog-vuepress-example)
- [blog jeykll](https://github.com/rxliuli/joplin-utils/tree/master/examples/blog-jeykll-example)
- [wiki vuepress](https://github.com/rxliuli/joplin-utils/tree/master/examples/wiki-vuepress-example)
- [wiki docsify](https://github.com/rxliuli/joplin-utils/tree/master/examples/wiki-docsify-example)

## 配置

公共

| 配置       | 类型                    | 必填 | 说明                                                           |
| ---------- | ----------------------- | ---- | -------------------------------------------------------------- |
| `type`     | `hexo/vuepress/docsify` | 是   | 集成博客的类型                                                 |
| `rootPath` | `string`                | 否   | hexo/vuepress 目录，默认是 `.`                                 |
| `token`    | `string`                | 是   | joplin web clipper 的 token                                    |
| `baseUrl`  | `string`                | 否   | joplin web clipper 的基础路径，默认是 `http://localhost:41184` |
| `tag`      | `string`                | 是   | joplin 的博客标签                                              |

hexo

| 配置              | 类型       | 说明                                                                                                              |
| ----------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| `stickyTopIdList` | `string[]` | 置顶的笔记 id（仅在 [fluid 主题](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/README_en.md) 下生效） |

我用这个工具分享了 190 多篇笔记，[博客地址（中文）](https://blog.rxliuli.com/)

## 常见问题

### token/port 指的是什么，在哪儿可以找到？

一般可以在 **工具 > 选项 > 网页剪辑器** 中看到

![joplin web clipper](https://img.rxliuli.com/20210316092547.png)

### 为什么导出的 blog、wiki 的笔记 id 变了？

一些可能的原因是

- 导出 jex 然后再导入 jex，这里的笔记全部都是创建操作，参考：<https://discourse.joplinapp.org/t/when-will-joplin-modify-the-id-of-the-note/17806>
- 同步时笔记发生冲突

### nodejs 18 不完全兼容

目前有 ArchLinux 用户报告无法使用 joplin-blog，排查之后发现更换 nodejs 16 lts 即可，请优先使用 nodejs 16 lts。

相关 issue：<https://github.com/rxliuli/joplin-utils/issues/45>
