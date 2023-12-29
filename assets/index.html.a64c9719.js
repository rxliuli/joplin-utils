import{_ as o,r as s,o as i,c,a as t,d as e,b as n,e as d}from"./app.e8602879.js";const r={},p=t("h1",{id:"joplin-api",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#joplin-api","aria-hidden":"true"},"#"),e(" joplin api")],-1),l={href:"https://joplin-utils.rxliuli.com/api/joplin-api/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://joplinapp.org/api/references/rest_api/",target:"_blank",rel:"noopener noreferrer"},h=d(`<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>Joplin api \u7684 js \u5C01\u88C5\uFF0C\u4F7F\u7528 ts \u7F16\u5199\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49\uFF0C\u5305\u542B\u76EE\u524D\u6240\u6709\u5728\u6587\u6863\u4E2D\u516C\u5F00\u7684 api\u3002</p><h2 id="\u5FEB\u901F\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u542F\u52A8" aria-hidden="true">#</a> \u5FEB\u901F\u542F\u52A8</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> config<span class="token punctuation">,</span> noteApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;joplin-api&#39;</span>

config<span class="token punctuation">.</span>baseUrl <span class="token operator">=</span> <span class="token string">&#39;http://127.0.0.1:27583&#39;</span>
config<span class="token punctuation">.</span>token <span class="token operator">=</span> <span class="token string">&#39;***&#39;</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> noteApi<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k={href:"https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__",target:"_blank",rel:"noopener noreferrer"},_=d('<h2 id="api-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#api-\u53C2\u8003" aria-hidden="true">#</a> API \u53C2\u8003</h2><table><thead><tr><th>\u5BF9\u8C61</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>eventApi</code></td><td>\u4E8B\u4EF6\u76F8\u5173\u7684 api\uFF0C\u4F8B\u5982\u83B7\u53D6\u7B14\u8BB0\u4FEE\u6539\u5386\u53F2</td></tr><tr><td><code>folderApi</code></td><td>\u76EE\u5F55\u76F8\u5173 api\uFF0C\u4F8B\u5982\u83B7\u53D6\u76EE\u5F55\u6811</td></tr><tr><td><code>folderExtApi</code></td><td>\u76EE\u5F55\u6269\u5C55 api\uFF0C\u4F8B\u5982\u79FB\u52A8\u76EE\u5F55</td></tr><tr><td><code>joplinApi</code></td><td>joplin \u57FA\u7840 api\uFF0C\u4F8B\u5982\u68C0\u67E5 joplin web \u670D\u52A1\u662F\u5426\u6253\u5F00</td></tr><tr><td><code>noteActionApi</code></td><td>\u7B14\u8BB0\u76F8\u5173\u52A8\u4F5C api\uFF0C\u4F8B\u5982\u5728\u5916\u90E8\u7F16\u8F91\u5668\u6253\u5F00\u7B14\u8BB0</td></tr><tr><td><code>noteApi</code></td><td>\u7B14\u8BB0\u76F8\u5173 api\uFF0C\u4F8B\u5982\u83B7\u53D6\u7B14\u8BB0\u7684\u5185\u5BB9</td></tr><tr><td><code>noteExtApi</code></td><td>\u7B14\u8BB0\u6269\u5C55 api\uFF0C\u4F8B\u5982\u91CD\u547D\u540D</td></tr><tr><td><code>resourceActionApi</code></td><td>\u8D44\u6E90\u52A8\u4F5C api\uFF0C\u4F8B\u5982\u5728\u5916\u90E8\u7F16\u8F91\u5668\u6253\u5F00\u9644\u4EF6\u8D44\u6E90</td></tr><tr><td><code>resourceApi</code></td><td>\u8D44\u6E90\u76F8\u5173 api\uFF0C\u4F8B\u5982\u4E0A\u4F20\u56FE\u7247</td></tr><tr><td><code>searchApi</code></td><td>\u641C\u7D22\u76F8\u5173 api</td></tr><tr><td><code>tagApi</code></td><td>\u6807\u7B7E\u76F8\u5173 api\uFF0C\u4F8B\u5982\u4FEE\u6539\u7B14\u8BB0\u7684\u6807\u7B7E</td></tr><tr><td><code>config</code></td><td>\u5168\u5C40 joplin web clipper \u914D\u7F6E</td></tr><tr><td><code>PageUtil</code></td><td>\u5206\u9875\u76F8\u5173\u7684\u9759\u6001\u5DE5\u5177\u7C7B\uFF0C\u4F8B\u5982\u83B7\u53D6\u5168\u91CF\u7B14\u8BB0\u5217\u8868</td></tr></tbody></table><h2 id="\u7EA6\u5B9A\u4FD7\u79F0" tabindex="-1"><a class="header-anchor" href="#\u7EA6\u5B9A\u4FD7\u79F0" aria-hidden="true">#</a> \u7EA6\u5B9A\u4FD7\u79F0</h2><ul><li>\u4F7F\u7528 class \u5C01\u88C5 API\uFF0C\u4F8B\u5982 note \u76F8\u5173\u7684 API \u88AB\u5C01\u88C5\u5728 <code>NoteApi</code> \u7C7B\u4E2D\u3002</li><li>\u540C\u4E00\u4E2A\u529F\u80FD\u542B\u4E49\u4FDD\u6301\u7EDF\u4E00\u7684\u547D\u540D\u3002\u4F8B\u5982\u7B14\u8BB0\u5217\u8868\u662F <code>NoteApi.list</code>\u3002\u4EE5\u4E0B\u4E3A\u5B8C\u6574\u5BF9\u7167\u8868</li></ul><table><thead><tr><th>\u542B\u4E49</th><th>\u547D\u540D</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td>\u5217\u8868</td><td><code>list</code></td><td><code>noteApi.list</code></td></tr><tr><td>\u6839\u636E id \u83B7\u53D6</td><td><code>get</code></td><td><code>noteApi.get</code></td></tr><tr><td>\u521B\u5EFA</td><td><code>create</code></td><td><code>noteApi.create</code></td></tr><tr><td>\u4FEE\u6539</td><td><code>update</code></td><td><code>noteApi.update</code></td></tr><tr><td>\u5220\u9664</td><td><code>remove</code></td><td><code>noteApi.remove</code></td></tr></tbody></table><ul><li>\u5B58\u5728\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\uFF0C\u4F8B\u5982\u6D89\u53CA\u5230\u591A\u4E2A\u5B9E\u4F53\u7684 api\uFF0C\u547D\u540D\u5219\u4E00\u822C\u662F <code>\u64CD\u4F5C\u5B9E\u4F53 + by + \u4F9D\u636E\u5B9E\u4F53</code>\uFF0C\u4F8B\u5982 \u6839\u636E\u7B14\u8BB0 id \u83B7\u53D6\u6807\u7B7E\u5217\u8868\u7684 api \u662F <code>noteApi.tagsById</code></li></ul><h2 id="\u4E00\u4E9B\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u95EE\u9898" aria-hidden="true">#</a> \u4E00\u4E9B\u95EE\u9898</h2><ul><li><code>get</code> \u65B9\u6CD5\u4E0D\u5E94\u8BE5\u62A5\u9519\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5E94\u8BE5\u8FD4\u56DE <code>null</code> \u800C\u975E\u629B\u51FA\u5F02\u5E38</li></ul>',8);function b(f,A){const a=s("ExternalLinkIcon");return i(),c("div",null,[p,t("blockquote",null,[t("p",null,[t("a",l,[e("API \u6587\u6863"),n(a)]),e(", "),t("a",u,[e("Joplin \u5B98\u65B9\u6587\u6863"),n(a)])])]),h,t("blockquote",null,[t("p",null,[e("\u66F4\u591A\u793A\u4F8B\u53C2\u8003: "),t("a",k,[e("https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__"),n(a)])])]),_])}const m=o(r,[["render",b],["__file","index.html.vue"]]);export{m as default};
