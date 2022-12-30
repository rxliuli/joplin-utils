# joplin 搜索集成

> [GitHub](https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-search-integration),
> [Chrome 商店](https://chrome.google.com/webstore/detail/joplin-search-integration/mcjkdcifkhjenpfjacnbhpdcnjknjkhj)

## 简介

使用搜索时，相关的乔普林笔记也会显示在搜索结果中。

![search result](https://img.rxliuli.com/20210315180552.png)
![note preview](https://img.rxliuli.com/20210315180626.png)

目前支持的搜索引擎包括

- Google
- Bing
- Baidu

## 常见问题

### token/port 指的是什么，在哪儿可以找到？

一般可以在 **工具 > 选项 > 网页剪辑器** 中看到

![joplin web clipper](https://img.rxliuli.com/20210316092547.png)

### 在 Brave 浏览器中没有搜索结果

实际上是 Brave 会默认阻止其他域的资源，所以在 Google 搜索网站关闭它即可。

![joplin web clipper](https://img.rxliuli.com/20210320142144.png)

## 贡献

如果你希望添加新的搜索引擎支持，可以提出 issue，或者 fork 后修改提 PR（非常简单
）

1. 在 manifest.json 添加匹配的搜索引擎的 url
2. 实现 BaseSearchEngineAdapter 接口
