# joplin Search Integration

## Introduction

When using search, related Joplin notes are also displayed in the search results.

![search result](https://img.rxliuli.com/20210315180552.png)
![note preview](https://img.rxliuli.com/20210315180626.png)

Currently supported search engines include

- Google
- Bing
- Baidu

## Contribute

If you want to add new search engine support, you can raise an issue, or fork it and then modify it to mention PR (very simple)

1. in manifest.json add the url of matching search engine
2. implement BaseSearchEngineAdapter interface
