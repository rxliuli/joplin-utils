import{_ as t,c as e,o as i,a3 as a}from"./chunks/framework.rXM8bS_u.js";const g=JSON.parse('{"title":"Joplin API","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/joplin-api/index.md","filePath":"en-US/joplin-api/index.md"}'),s={name:"en-US/joplin-api/index.md"},n=a(`<h1 id="joplin-api" tabindex="-1">Joplin API <a class="header-anchor" href="#joplin-api" aria-label="Permalink to &quot;Joplin API&quot;">​</a></h1><blockquote><p><a href="https://joplin-utils.rxliuli.com/api/joplin-api/" target="_blank" rel="noreferrer">API Documentation</a>, <a href="https://joplinapp.org/api/references/rest_api/" target="_blank" rel="noreferrer">Official Joplin Documentation</a></p></blockquote><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>A JavaScript wrapper for the Joplin API written in TypeScript. It provides complete type definitions and covers all currently documented APIs.</p><h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick Start&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { config, noteApi } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;joplin-api&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config.baseUrl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:27583&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config.token </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;***&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> noteApi.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre></div><blockquote><p>More examples can be found at: <a href="https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__" target="_blank" rel="noreferrer">https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__</a></p></blockquote><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><table><thead><tr><th>Object</th><th>Description</th></tr></thead><tbody><tr><td><code>eventApi</code></td><td>Event-related API, such as fetching note revision history</td></tr><tr><td><code>folderApi</code></td><td>Folder-related API, such as retrieving the folder tree</td></tr><tr><td><code>folderExtApi</code></td><td>Folder extension API, such as moving folders</td></tr><tr><td><code>joplinApi</code></td><td>Basic Joplin API, such as checking if the Joplin web service is running</td></tr><tr><td><code>noteActionApi</code></td><td>Note action API, such as opening notes in an external editor</td></tr><tr><td><code>noteApi</code></td><td>Note-related API, such as fetching the content of notes</td></tr><tr><td><code>noteExtApi</code></td><td>Note extension API, such as renaming notes</td></tr><tr><td><code>resourceActionApi</code></td><td>Resource action API, such as opening attachments in an external editor</td></tr><tr><td><code>resourceApi</code></td><td>Resource-related API, such as uploading images</td></tr><tr><td><code>searchApi</code></td><td>Search-related API</td></tr><tr><td><code>tagApi</code></td><td>Tag-related API, such as modifying note tags</td></tr><tr><td><code>config</code></td><td>Global Joplin web clipper configuration</td></tr><tr><td><code>PageUtil</code></td><td>Static utility class for pagination, such as retrieving the full list of notes</td></tr></tbody></table><h2 id="conventions" tabindex="-1">Conventions <a class="header-anchor" href="#conventions" aria-label="Permalink to &quot;Conventions&quot;">​</a></h2><ul><li>The API is wrapped in classes, such as note-related APIs being encapsulated in the <code>NoteApi</code> class.</li><li>The same functionality has consistent naming. For instance, the note list is <code>NoteApi.list</code>. Here is the full comparison table:</li></ul><table><thead><tr><th>Function</th><th>Naming</th><th>Example</th></tr></thead><tbody><tr><td>List</td><td><code>list</code></td><td><code>noteApi.list</code></td></tr><tr><td>Get by ID</td><td><code>get</code></td><td><code>noteApi.get</code></td></tr><tr><td>Create</td><td><code>create</code></td><td><code>noteApi.create</code></td></tr><tr><td>Update</td><td><code>update</code></td><td><code>noteApi.update</code></td></tr><tr><td>Delete</td><td><code>remove</code></td><td><code>noteApi.remove</code></td></tr></tbody></table><ul><li>There are some special cases. For example, in APIs involving multiple entities, the naming is generally <code>actionEntity + by + referenceEntity</code>. For example, the API for getting the tag list by note ID is <code>noteApi.tagsById</code>.</li></ul><h2 id="some-issues" tabindex="-1">Some Issues <a class="header-anchor" href="#some-issues" aria-label="Permalink to &quot;Some Issues&quot;">​</a></h2><ul><li>The <code>get</code> method should not throw an error. If an item does not exist, it should return <code>null</code> instead of throwing an exception.</li></ul>`,15),o=[n];function d(r,l,c,p,h,u){return i(),e("div",null,o)}const A=t(s,[["render",d]]);export{g as __pageData,A as default};
