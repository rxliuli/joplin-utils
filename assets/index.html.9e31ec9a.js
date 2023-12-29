import{_ as i,r as s,o as d,c,a as e,d as t,b as a,e as o}from"./app.e8602879.js";const r={},p=e("h1",{id:"joplin-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#joplin-api","aria-hidden":"true"},"#"),t(" joplin api")],-1),l={href:"https://joplin-utils.rxliuli.com/api/joplin-api/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://joplinapp.org/api/references/rest_api/",target:"_blank",rel:"noopener noreferrer"},h=o(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Joplin api&#39;s js package, written in ts, provides a complete type definition, including all currently exposed api in the document.</p><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> config<span class="token punctuation">,</span> noteApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;joplin-api&#39;</span>

config<span class="token punctuation">.</span>baseUrl <span class="token operator">=</span> <span class="token string">&#39;http://127.0.0.1:27583&#39;</span>
config<span class="token punctuation">.</span>token <span class="token operator">=</span> <span class="token string">&#39;***&#39;</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> noteApi<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g={href:"https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__",target:"_blank",rel:"noopener noreferrer"},m=o('<h2 id="api-reference" tabindex="-1"><a class="header-anchor" href="#api-reference" aria-hidden="true">#</a> API Reference</h2><table><thead><tr><th>Object</th><th>Description</th></tr></thead><tbody><tr><td><code>eventApi</code></td><td>event-related api, such as getting note modification history</td></tr><tr><td><code>folderApi</code></td><td>Directory-related api, such as getting directory tree</td></tr><tr><td><code>folderExtApi</code></td><td>Directory extension api, such as mobile directory</td></tr><tr><td><code>joplinApi</code></td><td>joplin basic api, such as checking whether joplin web service is open</td></tr><tr><td><code>noteActionApi</code></td><td>Note-related action api, such as opening a note in an external editor</td></tr><tr><td><code>noteApi</code></td><td>Note related api, such as getting the content of the note</td></tr><tr><td><code>noteExtApi</code></td><td>Note extension api, such as renaming</td></tr><tr><td><code>resourceActionApi</code></td><td>Resource action api, such as opening an attachment resource in an external editor</td></tr><tr><td><code>resourceApi</code></td><td>Resource-related api, such as uploading pictures</td></tr><tr><td><code>searchApi</code></td><td>Search related api</td></tr><tr><td><code>tagApi</code></td><td>Tag related api, such as modifying the tag of a note</td></tr><tr><td><code>config</code></td><td>Global joplin web clipper configuration</td></tr><tr><td><code>PageUtil</code></td><td>Paging-related static tools, such as getting the full list of notes</td></tr></tbody></table><h2 id="conventional-name" tabindex="-1"><a class="header-anchor" href="#conventional-name" aria-hidden="true">#</a> Conventional name</h2><ul><li>Use class to encapsulate API, for example note related API is encapsulated in <code>NoteApi</code> class.</li><li>Keep the same naming for the same function meaning. For example, the note list is <code>NoteApi.list</code>. The following is a complete comparison table</li></ul><table><thead><tr><th>Meaning</th><th>Naming</th><th>Examples</th></tr></thead><tbody><tr><td>List</td><td><code>list</code></td><td><code>noteApi.list</code></td></tr><tr><td>Get by id</td><td><code>get</code></td><td><code>noteApi.get</code></td></tr><tr><td>Create</td><td><code>create</code></td><td><code>noteApi.create</code></td></tr><tr><td>Modify</td><td><code>update</code></td><td><code>noteApi.update</code></td></tr><tr><td>Remove</td><td><code>remove</code></td><td><code>noteApi.remove</code></td></tr></tbody></table><ul><li>There are some special cases, such as APIs involving multiple entities, the naming is generally <code>operation entity + by + according to entity</code>, for example, the API to get the tag list according to the note id is <code>noteApi.tagsById</code></li></ul>',6);function f(k,b){const n=s("ExternalLinkIcon");return d(),c("div",null,[p,e("blockquote",null,[e("p",null,[e("a",l,[t("API documentation"),a(n)]),t(", "),e("a",u,[t("Joplin official document"),a(n)])])]),h,e("blockquote",null,[e("p",null,[t("More examples reference: "),e("a",g,[t("https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__"),a(n)])])]),m])}const v=i(r,[["render",f],["__file","index.html.vue"]]);export{v as default};
