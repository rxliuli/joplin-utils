# joplin-blog

> [中文](https://joplin-utils.rxliuli.com/zh/joplin-blog/)

## Introduction

CLI tool to publish Joplin notes as a static website, currently supports both blog/wiki forms, framework supports hexo/vuepress/docsify.

- blog
  - [hexo](https://joplin-utils.rxliuli.com/blog/hexo/)
  - [vuepress](https://joplin-utils.rxliuli.com/blog/vuepress/)
  - [jeykll](https://joplin-utils.rxliuli.com/blog/jeykll/)
- wiki
  - [vuepress](https://joplin-utils.rxliuli.com/wiki/vuepress/)
  - [docsify](https://joplin-utils.rxliuli.com/wiki/docsify/)

![blog demo](https://raw.githubusercontent.com/rxliuli/joplin-utils/master/apps/joplin-blog/docs/blog.png)
![wiki demo](https://raw.githubusercontent.com/rxliuli/joplin-utils/master/apps/joplin-blog/docs/wiki.png)

## Requirements

- Install nodejs and yarn
- Knowledge of command line
- Understanding VSCode

## Use

1. Navigate to the relevant directory at the command line
2. Add dependencies `yarn add -D joplin-blog`.
3. add a configuration file `.joplin-blog.json` (see [configuration](#configuration) for details)
4. add an npm script file `"gen": "joplin-blog blog"` (if you want to generate a wiki then `"gen": "joplin-blog wiki"`)
5. Run the command `yarn gen` 6.
6. Then you can see that the relevant directory already contains the notes and attached resources

> Please add two files _.joplin-blog.json_ and _.joplin-cache.json_ to the _.gitignore_ ignore file, the former contains sensitive information `token`, the latter is automatically generated.

## examples

The supported frameworks have examples in the examples directory, which you can clone locally to see.

- [blog hexo](https://github.com/rxliuli/joplin-utils/tree/master/examples/blog-hexo-example)
- [blog vuepress](https://github.com/rxliuli/joplin-utils/tree/master/examples/blog-vuepress-example)
- [blog jeykll](https://github.com/rxliuli/joplin-utils/tree/master/examples/blog-jeykll-example)
- [wiki vuepress](https://github.com/rxliuli/joplin-utils/tree/master/examples/wiki-vuepress-example)
- [wiki docsify](https://github.com/rxliuli/joplin-utils/tree/master/examples/wiki-docsify-example)

## Configuration

public

| configuration | type                    | description                                           |
| ------------- | ----------------------- | ----------------------------------------------------- |
| `type`        | `hexo/vuepress/docsify` | type of integrated blog                               |
| `rootPath`    | `string`                | hexo/vuepress directory, which should normally be `.` |
| `token`       | `string`                | joplin web clipper's token                            |
| `port`        | `number`                | the port of the joplin web clipper, usually `41184`   |
| `tag`         | `string`                | joplin's blog tag                                     |

hexo

| configuration     | type       | description                                                                                                             |
| ----------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| `stickyTopIdList` | `string[]` | Topped note id (only valid under [fluid topic](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/README_en.md)) |

I've shared over 190 notes with this tool, [blog address (Chinese)](https://blog.rxliuli.com/)

## FAQ

### What does token/port refer to and where can I find it?

You can usually see it in **Tools > Options > Web Clipper**

![joplin web clipper](https://img.rxliuli.com/20210316092547.png)

### Why did the note id of the exported blog, wiki change?

Some possible reasons are

- Export jex and then import jex, all notes here are created operations, refer to: <https://discourse.joplinapp.org/t/when-will-joplin-modify-the-id-of-the-note/17806>
- Notes conflict when syncing
