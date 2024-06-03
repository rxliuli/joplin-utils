import{_ as e,c as t,o as i,a3 as a,a4 as o,a5 as l,a6 as r,a7 as s,a8 as n,a9 as h,aa as p,ab as c,ac as u,ad as d,ae as g}from"./chunks/framework.eSCkdOEp.js";const J=JSON.parse('{"title":"Joplin Publisher","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/joplin-publisher/index.md","filePath":"zh-CN/joplin-publisher/index.md"}'),b={name:"zh-CN/joplin-publisher/index.md"},_=a('<h1 id="joplin-publisher" tabindex="-1">Joplin Publisher <a class="header-anchor" href="#joplin-publisher" aria-label="Permalink to &quot;Joplin Publisher&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>发布 Joplin 笔记到 GitHub，并通过 GitHub Actions 来自动化构建部署。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="github" tabindex="-1">GitHub <a class="header-anchor" href="#github" aria-label="Permalink to &quot;GitHub&quot;">​</a></h3><ol><li>如果你还没有的话，<a href="https://github.com/signup" target="_blank" rel="noreferrer">注册</a>一个 GitHub 账户。</li><li>使用模版项目 <a href="https://github.com/joplin-utils/joplin-blog-template" target="_blank" rel="noreferrer">joplin-blog-template</a> 作为模版创建一个新的仓库，名字是 <code>&lt;github username&gt;.github.io</code><img src="'+o+'" alt="create 1"><img src="'+l+'" alt="create 2"><img src="'+r+'" alt="create 3"></li><li>修改 Settings &gt; Pages &gt; Build and deployment，选择 GitHub Actions <img src="'+s+'" alt="setting 1"></li><li><a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noreferrer">创建</a>一个 github token，至少选择 content 和 <code>&lt;github username&gt;.github.io</code> 仓库的权限，创建完成之后复制得到的 token <img src="'+n+'" alt="setting 2"></li></ol><h3 id="joplin" tabindex="-1">Joplin <a class="header-anchor" href="#joplin" aria-label="Permalink to &quot;Joplin&quot;">​</a></h3><ol><li>安装插件</li><li>打开 Joplin &gt; Settings &gt; Plugins &gt; Publisher，分别设置 GitHub token/username/repo <img src="'+h+'" alt="setting 1"></li><li>选择一个笔记，添加标签 <strong>blog</strong><img src="'+p+'" alt="setting 2"></li><li>点击 Tools &gt; Publish to GitHub 发布 <img src="'+c+'" alt="publish 1"></li></ol><p>稍等两分钟，就可以前往 <code>&lt;github username&gt;.github.io</code> 查看你发布的笔记了。</p><p><img src="'+u+'" alt="blog"></p><p>你可以继续为希望发布的笔记添加标签 blog，然后重新运行 <strong>Publish to GitHub</strong>，这会将笔记更新到网站上。</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>由于使用 Hexo 进行渲染，所以可以在创建的 GitHub 仓库中配置。目前使用的主题是 Fluid，也可以修改对应的主题配置。</p><p>例如，想要修改站点的标题，可以修改 <code>_config.yml</code> 中的 <code>title</code></p><p><img src="'+d+'" alt="hexo-setting-1"></p><p>如果想要更新首页的背景图，可以修改 <code>_config.fluid.yml</code> 中的 <code>index.banner_img</code></p><p><img src="'+g+'" alt="hexo-setting-2"></p><p>参考</p><ul><li>hexo 文档：<a href="https://hexo.io/" target="_blank" rel="noreferrer">https://hexo.io/</a></li><li>fluid 主题的文档：<a href="https://hexo.fluid-dev.com/docs/en/guide/" target="_blank" rel="noreferrer">https://hexo.fluid-dev.com/docs/en/guide/</a></li></ul>',19),m=[_];function f(x,P,k,q,H,j){return i(),t("div",null,m)}const S=e(b,[["render",f]]);export{J as __pageData,S as default};
