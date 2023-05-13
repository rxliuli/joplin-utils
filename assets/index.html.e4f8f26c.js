import{_ as e,o as i,c as r,f as a}from"./app.d04c4254.js";const t={},n=a('<h1 id="joplin-search-integration" tabindex="-1"><a class="header-anchor" href="#joplin-search-integration" aria-hidden="true">#</a> Joplin Search Integration</h1><p><a href="https://chrome.google.com/webstore/detail/joplin-search-integration/mcjkdcifkhjenpfjacnbhpdcnjknjkhj"><img src="https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png" alt="Get uBlock Origin for Chromium"></a> <a href="https://addons.mozilla.org/zh-CN/firefox/addon/joplin-search-integration/"><img src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png" alt="Get uBlock Origin for Firefox"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>When using search, related Joplin notes are also displayed in the search results.</p><p><img src="https://joplin-utils.rxliuli.com/images/joplin-search-integration-search.png" alt="search result"><img src="https://joplin-utils.rxliuli.com/images/joplin-search-integration-detail.png" alt="note preview"></p><p>Currently supported search engines include</p><ul><li>Google</li><li>Bing</li><li>Baidu</li><li>DuckDuckGo</li><li>Searx</li><li>MetaGer</li></ul><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="what-does-token-port-refer-to-and-where-can-i-find-it" tabindex="-1"><a class="header-anchor" href="#what-does-token-port-refer-to-and-where-can-i-find-it" aria-hidden="true">#</a> What does token/port refer to and where can I find it?</h3><p>You can usually see it in <strong>Tools &gt; Options &gt; Web Clipper</strong></p><p><img src="https://img.rxliuli.com/20210316092547.png" alt="joplin web clipper"></p><h3 id="no-search-results-in-brave-browser" tabindex="-1"><a class="header-anchor" href="#no-search-results-in-brave-browser" aria-hidden="true">#</a> No search results in Brave browser</h3><p>In fact, Brave will block resources from other domains by default, so you can turn it off on the Google search site.</p><p><img src="https://img.rxliuli.com/20210320142144.png" alt="joplin web clipper"></p><h2 id="contribute" tabindex="-1"><a class="header-anchor" href="#contribute" aria-hidden="true">#</a> Contribute</h2><p>If you want to add new search engine support, you can raise an issue, or fork it and then modify it to mention PR (very simple)</p><ol><li>in manifest.json add the url of matching search engine</li><li>implement BaseSearchEngineAdapter interface</li></ol>',17),o=[n];function s(l,c){return i(),r("div",null,o)}const d=e(t,[["render",s],["__file","index.html.vue"]]);export{d as default};
