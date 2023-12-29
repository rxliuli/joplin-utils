# Joplin Search Integration

<a href="https://chrome.google.com/webstore/detail/joplin-search-integration/mcjkdcifkhjenpfjacnbhpdcnjknjkhj"><img src="https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png" alt="Get uBlock Origin for Chromium"></a> <a href="https://addons.mozilla.org/zh-CN/firefox/addon/joplin-search-integration/"><img src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png" alt="Get uBlock Origin for Firefox"></a>

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

### It is not possible to access the station or modify the number.

At some point, the installation will be completed, and after the arrangement, there will be no effect, and the display will be gray.

Allows you to arrange manuals according to current demand.

![error](/images/read-and-change-data-error.jpg)

Chrome

![chrome](/images/read-and-change-data-on-firefox.jpg)

Firefox

![firefox](/images/read-and-change-data-on-firefox.jpg)

## Contribute

If you want to add new search engine support, you can raise an issue, or fork it
and then modify it to mention PR (very simple)

1. in manifest.json add the url of matching search engine
2. implement BaseSearchEngineAdapter interface
