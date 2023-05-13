import{_ as l,r as t,o as c,c as p,a as n,b as e,w as r,d as s,f as o}from"./app.d04c4254.js";const u={},d=n("h1",{id:"documentation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),s(" Documentation")],-1),v=n("h2",{id:"setting-up-the-local-environment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#setting-up-the-local-environment","aria-hidden":"true"},"#"),s(" Setting up the local environment")],-1),m={href:"https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"},h=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Clone the repo locally</span>
<span class="token function">git</span> clone https://github.com/<span class="token operator">&lt;</span>YOUR GITHUB NAME<span class="token operator">&gt;</span>/joplin-utils.git
<span class="token comment"># Navigate to documentation folder</span>
<span class="token builtin class-name">cd</span> website/
<span class="token comment"># Install required dependencies</span>
<span class="token function">yarn</span>
<span class="token comment"># Start the local development environment</span>
<span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"adding-document-translations",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#adding-document-translations","aria-hidden":"true"},"#"),s(" Adding document translations")],-1),g={href:"https://github.com/rxliuli/joplin-utils/issues/9",target:"_blank",rel:"noopener noreferrer"},_={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},f=n("li",null,[s("Add new documents to "),n("em",null,"docs/"),s(" then modify "),n("em",null,"docs/.vuepress/config.js"),s(" to add them to the website")],-1),q=o(`<p>You will notice that the configuration for the navigation bar is basically a nested array, the sidebar configuration is set via a link within the navigation bar. For example, this is an existing configuration for the joplin-vscode-plugin documentation</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;navbar&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;joplin-vscode-plugin&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;joplin-vscode-plugin/&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can then configure <code>&quot;/joplin-vscode-plugin/&quot;</code> in the corresponding sidebar list</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;sidebar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;/zh/joplin-vscode-plugin/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Guide&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;/joplin-vscode-plugin/&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;/joplin-vscode-plugin/guide/faq&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;/joplin-vscode-plugin/guide/feature&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;/joplin-vscode-plugin/guide/recommended-extension&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;/joplin-vscode-plugin/guide/limitations&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function j(x,y){const i=t("RouterLink"),a=t("ExternalLinkIcon");return c(),p("div",null,[d,n("blockquote",null,[n("p",null,[e(i,{to:"/dev/require.html"},{default:r(()=>[s("Required Dependencies")]),_:1})])]),v,n("p",null,[s("To start you need to fork the project on GitHub, see: "),n("a",m,[s("Fork a repo"),e(a)])]),h,n("p",null,[s("You should be able to see a preview of the local documentation at "),n("a",k,[s("http://localhost:8080/"),e(a)])]),b,n("ol",null,[n("li",null,[s("Check the existing "),n("a",g,[s("documentation optimization"),e(a)]),s(" list. Select a task and reply to the specific line in the issue")]),n("li",null,[s("As we are using "),n("a",_,[s("vuepress2"),e(a)]),s(" you need to understand the basic configuration i.e. how to modify the navigation bar and sidebar as well as how to add new documents")]),f]),q])}const N=l(u,[["render",j],["__file","doc.html.vue"]]);export{N as default};
