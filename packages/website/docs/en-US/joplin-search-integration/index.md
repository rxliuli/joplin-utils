# Joplin Search Integration

<a href="https://chrome.google.com/webstore/detail/joplin-search-integration/mcjkdcifkhjenpfjacnbhpdcnjknjkhj"><img src="https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png" alt="Get uBlock Origin for Chromium"></a> <a href="https://addons.mozilla.org/zh-CN/firefox/addon/joplin-search-integration/"><img src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png" alt="Get uBlock Origin for Firefox"></a>

## Introduction

When using the search, relevant Joplin notes will also appear in the search results.

![search result](https://joplin-utils.rxliuli.com/images/joplin-search-integration-search.png)
![note preview](https://joplin-utils.rxliuli.com/images/joplin-search-integration-detail.png)

Currently supported search engines include:

- Google
- Bing
- Baidu
- DuckDuckGo
- Searx
- MetaGer

## FAQ

### What are token/port, and where can I find them?

They can generally be found in **Tools > Options > Web Clipper**.

![joplin web clipper](https://img.rxliuli.com/20210316092547.png)

### No search results in Brave browser

Brave typically blocks resources from other domains by default, so just disable it on the Google search site.

![joplin web clipper](https://img.rxliuli.com/20210320142144.png)

### Cannot read or modify data on this website

Sometimes after installing the plugin and configuring it, it might not take effect. If the plugin appears gray and indicates that it cannot read or modify data on this website, you need to manually configure it to allow access.

![error](/images/read-and-change-data-error.jpg)

Chrome

![chrome](/images/read-and-change-data-on-firefox.jpg)

Firefox

![firefox](/images/read-and-change-data-on-firefox.jpg)

## Contribute

If you want to add support for a new search engine, you can raise an issue or fork and submit a PR (it's very simple).

1. Add the URL of the matching search engine in the manifest.json.
2. Implement the BaseSearchEngineAdapter interface.
