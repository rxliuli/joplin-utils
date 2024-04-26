import{_ as t,c as a,o as i,a4 as r,a5 as n,a6 as e}from"./chunks/framework.B_zElukG.js";const b=JSON.parse('{"title":"Joplin Search Integration","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/joplin-search-integration/index.md","filePath":"en-US/joplin-search-integration/index.md"}'),o={name:"en-US/joplin-search-integration/index.md"},s=r('<h1 id="joplin-search-integration" tabindex="-1">Joplin Search Integration <a class="header-anchor" href="#joplin-search-integration" aria-label="Permalink to &quot;Joplin Search Integration&quot;">​</a></h1><p><a href="https://chrome.google.com/webstore/detail/joplin-search-integration/mcjkdcifkhjenpfjacnbhpdcnjknjkhj"><img src="https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png" alt="Get uBlock Origin for Chromium"></a> <a href="https://addons.mozilla.org/zh-CN/firefox/addon/joplin-search-integration/"><img src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png" alt="Get uBlock Origin for Firefox"></a></p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>While using search, relevant Joplin notes will also be displayed in the search results.</p><p><img src="https://joplin-utils.rxliuli.com/images/joplin-search-integration-search.png" alt="search result"><img src="https://joplin-utils.rxliuli.com/images/joplin-search-integration-detail.png" alt="note preview"></p><p>The currently supported search engines include</p><ul><li>Google</li><li>Bing</li><li>Baidu</li><li>DuckDuckGo</li><li>Searx</li><li>MetaGer</li></ul><h2 id="frequently-asked-questions" tabindex="-1">Frequently Asked Questions <a class="header-anchor" href="#frequently-asked-questions" aria-label="Permalink to &quot;Frequently Asked Questions&quot;">​</a></h2><h3 id="what-does-token-port-refer-to-and-where-can-i-find-it" tabindex="-1">What does token/port refer to, and where can I find it? <a class="header-anchor" href="#what-does-token-port-refer-to-and-where-can-i-find-it" aria-label="Permalink to &quot;What does token/port refer to, and where can I find it?&quot;">​</a></h3><p>Generally, it can be seen in <strong>Tools &gt; Options &gt; Web Clipper</strong></p><p><img src="https://img.rxliuli.com/20210316092547.png" alt="joplin web clipper"></p><h3 id="there-are-no-search-results-in-the-brave-browser" tabindex="-1">There are no search results in the Brave browser <a class="header-anchor" href="#there-are-no-search-results-in-the-brave-browser" aria-label="Permalink to &quot;There are no search results in the Brave browser&quot;">​</a></h3><p>In practice, Brave will by default block resources from other domains, so just turn it off on the Google search site.</p><p><img src="https://img.rxliuli.com/20210320142144.png" alt="joplin web clipper"></p><h3 id="cannot-read-or-modify-data-on-this-site" tabindex="-1">Cannot read or modify data on this site <a class="header-anchor" href="#cannot-read-or-modify-data-on-this-site" aria-label="Permalink to &quot;Cannot read or modify data on this site&quot;">​</a></h3><p>Sometimes after installing the plugin and making the correct configuration, there is no effect. Viewing the plugin appears gray, indicating that it cannot read or change the data on this site.</p><p>In this case, you need to manually configure it to allow.</p><p><img src="'+n+'" alt="error"></p><p>Chrome</p><p><img src="'+e+'" alt="chrome"></p><p>Firefox</p><p><img src="'+e+'" alt="firefox"></p><h2 id="contribution" tabindex="-1">Contribution <a class="header-anchor" href="#contribution" aria-label="Permalink to &quot;Contribution&quot;">​</a></h2><p>If you want to add support for new search engines, you can raise an issue, or modify and propose PR after forking (very simple ).</p><ol><li>Add the URL of the matched search engine in manifest.json</li><li>Implement the BaseSearchEngineAdapter interface</li></ol>',25),l=[s];function h(c,p,d,u,g,f){return i(),a("div",null,l)}const _=t(o,[["render",h]]);export{b as __pageData,_ as default};
