# 文档

> [环境要求](./require.md)

## 初始化本地环境

首先，在 github 上 fork 项目，参考：[复刻仓库](https://docs.github.com/cn/github/getting-started-with-github/quickstart/fork-a-repo)

```sh
# 克隆项目到本地
git clone https://github.com/<YOUR GITHUB NAME>/joplin-utils.git
# 进入到文档模块
cd website/
# 安装依赖
yarn
# 启动本地开发环境
yarn docs:dev
```

你应该可以在 <http://localhost:8080/> 看到本地文档的预览。

## 添加文档翻译

1. 检查现有的 [文件优化进度列表](https://github.com/rxliuli/joplin-utils/issues/9)，可以选择某项任务，在 issue 中选择并回复指定行
2. 由于吾辈使用了 [vuepress2](https://v2.vuepress.vuejs.org/zh/)，所以需要了解基本的配置，即如何修改导航栏、侧边栏，以及如何添加文档
3. 在 _docs/_ 或 _docs/zh/_ 下添加文档，然后在 _docs/.vuepress/config.js_ 中配置即可

仔细观察你会发现，导航栏基本上是一个嵌套数组，而每个侧边栏配置其实是针对导航栏的末节点的 link 做配置。
例如吾辈在导航栏中有这样一个配置

```json
{
  "navbar": [
    {
      "text": "joplin-vscode-plugin",
      "link": "/zh/joplin-vscode-plugin/"
    }
  ]
}
```

那么吾辈必须配置 `"/zh/joplin-vscode-plugin/"` 对应的侧边栏列表

```json
{
  "sidebar": {
    "/zh/joplin-vscode-plugin/": [
      {
        "text": "指南",
        "children": [
          "/zh/joplin-vscode-plugin/",
          "/zh/joplin-vscode-plugin/guide/faq",
          "/zh/joplin-vscode-plugin/guide/feature",
          "/zh/joplin-vscode-plugin/guide/recommended-extension",
          "/zh/joplin-vscode-plugin/guide/limitations"
        ]
      }
    ]
  }
}
```
