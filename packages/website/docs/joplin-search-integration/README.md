# Joplin Search Integration

> [GitHub](https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-search-integration),
> [Chrome Store](https://chrome.google.com/webstore/detail/joplin-search-integration/mcjkdcifkhjenpfjacnbhpdcnjknjkhj)

## Introduction

When using search, related Joplin notes are also displayed in the search results.

![search result](https://joplin-utils.rxliuli.com/images/joplin-search-integration-search.png)
![note preview](https://joplin-utils.rxliuli.com/images/joplin-search-integration-detail.png)

Currently supported search engines include

- Google
- Bing
- Baidu
- DuckDuckGo
- Searx
- MetaGer

## FAQ

### What does token/port refer to and where can I find it?

You can usually see it in **Tools > Options > Web Clipper**

![joplin web clipper](https://img.rxliuli.com/20210316092547.png)

### No search results in Brave browser

In fact, Brave will block resources from other domains by default, so you can
turn it off on the Google search site.

![joplin web clipper](https://img.rxliuli.com/20210320142144.png)

## Contribute

If you want to add new search engine support, you can raise an issue, or fork it
and then modify it to mention PR (very simple)

1. in manifest.json add the url of matching search engine
2. implement BaseSearchEngineAdapter interface
