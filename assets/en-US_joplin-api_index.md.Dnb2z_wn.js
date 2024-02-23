import{_ as t,c as e,o as i,V as a}from"./chunks/framework.BjDc6e-2.js";const g=JSON.parse('{"title":"Joplin API","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/joplin-api/index.md","filePath":"en-US/joplin-api/index.md"}'),s={name:"en-US/joplin-api/index.md"},o=a(`<h1 id="joplin-api" tabindex="-1">Joplin API <a class="header-anchor" href="#joplin-api" aria-label="Permalink to &quot;Joplin API&quot;">​</a></h1><blockquote><p><a href="https://joplin-utils.rxliuli.com/api/joplin-api/" target="_blank" rel="noreferrer">API Documentation</a>, <a href="https://joplinapp.org/api/references/rest_api/" target="_blank" rel="noreferrer">Joplin Official Documentation</a></p></blockquote><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>The js wrapper for Joplin api, written in ts, provides a complete type definition, incorporating all currently publicly documented apis.</p><h2 id="quickstart" tabindex="-1">Quickstart <a class="header-anchor" href="#quickstart" aria-label="Permalink to &quot;Quickstart&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { config, noteApi } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;joplin-api&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config.baseUrl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:27583&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config.token </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;***&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> noteApi.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre></div><blockquote><p>For more examples, refer to <a href="https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__" target="_blank" rel="noreferrer">https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__</a></p></blockquote><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><table><thead><tr><th>Object</th><th>Description</th></tr></thead><tbody><tr><td><code>eventApi</code></td><td>Event-related apis, such as obtaining note modification history</td></tr><tr><td><code>folderApi</code></td><td>Directory related apis, such as fetching directory tree</td></tr><tr><td><code>folderExtApi</code></td><td>Directory extension api, such as moving directories</td></tr><tr><td><code>joplinApi</code></td><td>Basic joplin api, for example, check if joplin web service is running</td></tr><tr><td><code>noteActionApi</code></td><td>Note-related action apis, such as opening notes in an external editor</td></tr><tr><td><code>noteApi</code></td><td>Note-related api, such as obtaining the content of notes</td></tr><tr><td><code>noteExtApi</code></td><td>Note extension api, such as renaming</td></tr><tr><td><code>resourceActionApi</code></td><td>Resource action apis, such as opening attached resources in an external editor</td></tr><tr><td><code>resourceApi</code></td><td>Resource related api, for example uploading pictures</td></tr><tr><td><code>searchApi</code></td><td>Search-related api</td></tr><tr><td><code>tagApi</code></td><td>Tag related api, such as modifying the tag of notes</td></tr><tr><td><code>config</code></td><td>Global joplin web clipper configuration</td></tr><tr><td><code>PageUtil</code></td><td>Pagination related static utility class, such as obtaining a full list of notes</td></tr></tbody></table><h2 id="naming-conventions" tabindex="-1">Naming Conventions <a class="header-anchor" href="#naming-conventions" aria-label="Permalink to &quot;Naming Conventions&quot;">​</a></h2><ul><li>Use class to encapsulate API, for example, the API related to note is encapsulated in the <code>NoteApi</code> class.</li><li>The same functionality keeps a unified name, such as the note list is <code>NoteApi.list</code>. Here is the complete comparison table</li></ul><table><thead><tr><th>Implication</th><th>Naming</th><th>Example</th></tr></thead><tbody><tr><td>List</td><td><code>list</code></td><td><code>noteApi.list</code></td></tr><tr><td>Get by id</td><td><code>get</code></td><td><code>noteApi.get</code></td></tr><tr><td>Create</td><td><code>create</code></td><td><code>noteApi.create</code></td></tr><tr><td>Update</td><td><code>update</code></td><td><code>noteApi.update</code></td></tr><tr><td>Delete</td><td><code>remove</code></td><td><code>noteApi.remove</code></td></tr></tbody></table><ul><li>There are some special cases, for example, api involving multiple entities, the naming is usually <code>operation entity + by + according to entity</code>, for example, the api of getting the tag list by note id is <code>noteApi.tagsById</code></li></ul><h2 id="some-issues" tabindex="-1">Some Issues <a class="header-anchor" href="#some-issues" aria-label="Permalink to &quot;Some Issues&quot;">​</a></h2><ul><li>The <code>get</code> method should not error out, if it does not exist it should return <code>null</code> instead of throwing an exception</li></ul>`,15),n=[o];function d(r,l,c,p,h,u){return i(),e("div",null,n)}const m=t(s,[["render",d]]);export{g as __pageData,m as default};
