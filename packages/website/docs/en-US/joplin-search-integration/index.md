# Joplin Search Integration

<a href="https://chrome.google.com/webstore/detail/joplin-search-integration/mcjkdcifkhjenpfjacnbhpdcnjknjkhj"><img src="https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png" alt="Get uBlock Origin for Chromium"></a> <a href="https://addons.mozilla.org/zh-CN/firefox/addon/joplin-search-integration/"><img src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png" alt="Get uBlock Origin for Firefox"></a>

## Introduction

While using search, relevant Joplin notes will also be displayed in the search results.

![search result](https://joplin-utils.rxliuli.com/images/joplin-search-integration-search.png)
![note preview](https://joplin-utils.rxliuli.com/images/joplin-search-integration-detail.png)

The currently supported search engines include

- Google
- Bing
- Baidu
- DuckDuckGo
- Searx
- MetaGer

## Frequently Asked Questions

### What does token/port refer to, and where can I find it?

Generally, it can be seen in **Tools > Options > Web Clipper**

![joplin web clipper](https://img.rxliuli.com/20210316092547.png)

### There are no search results in the Brave browser

In practice, Brave will by default block resources from other domains, so just turn it off on the Google search site.

![joplin web clipper](https://img.rxliuli.com/20210320142144.png)

### Cannot read or modify data on this site

Sometimes after installing the plugin and making the correct configuration, there is no effect. Viewing the plugin appears gray, indicating that it cannot read or change the data on this site.

In this case, you need to manually configure it to allow.

![error](/images/read-and-change-data-error.jpg)

Chrome

![chrome](/images/read-and-change-data-on-firefox.jpg)

Firefox

![firefox](/images/read-and-change-data-on-firefox.jpg)

## Contribution

If you want to add support for new search engines, you can raise an issue, or modify and propose PR after forking (very simple ).

1. Add the URL of the matched search engine in manifest.json
2. Implement the BaseSearchEngineAdapter interface
