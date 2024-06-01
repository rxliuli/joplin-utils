import{_ as e,c as a,o,a3 as l,aa as i,ab as t}from"./chunks/framework.1smVRZMp.js";const g=JSON.parse('{"title":"快速启动","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/joplin-vscode-plugin/index.md","filePath":"zh-CN/joplin-vscode-plugin/index.md"}'),r={name:"zh-CN/joplin-vscode-plugin/index.md"},p=l('<h1 id="快速启动" tabindex="-1">快速启动 <a class="header-anchor" href="#快速启动" aria-label="Permalink to &quot;快速启动&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><blockquote><p><a href="https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin&amp;ssr=false#overview" target="_blank" rel="noreferrer"><img src="https://img.shields.io/visual-studio-marketplace/i/rxliuli.joplin-vscode-plugin" alt="install"></a></p></blockquote><p>Joplin VSCode Plugin 提供在 VSCode 中管理 Joplin 笔记的功能，包括常见的查看、编辑笔记，管理笔记的标签，添加、修改附件，内部链接、搜索等功能。</p><p>Joplin Web Clipper 旨在通过 REST Web API 与浏览器扩展进行通信，共享笔记、笔记本、标签等。Joplin VSCode Plugin 连接到相同的 REST 端点，可以在不离开编辑器的情况下查看和修改笔记。</p><blockquote><p>为什么会有这个插件？阅读 <a href="./faq.html">我的动机</a> 了解开发它的原因。</p><p>它能做什么？<a href="./feature.html">功能</a> 列出了现有的功能。</p></blockquote><h2 id="要求" tabindex="-1">要求 <a class="header-anchor" href="#要求" aria-label="Permalink to &quot;要求&quot;">​</a></h2><ul><li>Joplin 版本 &gt; v2.8</li><li>VSCode 版本 &gt; v1.66.2</li><li>启用 Joplin Web Clipper</li></ul><h2 id="安装-joplin-vscode-插件" tabindex="-1">安装 Joplin VSCode 插件 <a class="header-anchor" href="#安装-joplin-vscode-插件" aria-label="Permalink to &quot;安装 Joplin VSCode 插件&quot;">​</a></h2><p>在 VSCode 市场中搜索 joplin。找到 Joplin VSCode Plugin 并点击安装。</p><p><img src="'+i+'" alt="安装插件"></p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>要访问 Joplin 数据库，我们需要连接到 Joplin Web Clipper 打开的 API 端点。这意味着 Joplin 必须运行，Web Clipper 必须启用。</p><blockquote><p>关于 Web Clipper 的帮助，请参考 <a href="https://joplinapp.org/clipper/" target="_blank" rel="noreferrer">Joplin Web Clipper</a>。</p></blockquote><p>要启动并运行，需要注意两个设置。</p><p>授权令牌</p><ul><li>从 Joplin 设置中复制你的授权令牌并粘贴到这里。 <strong>网页剪辑 -&gt; 高级选项 -&gt; 拷贝 Token 令牌</strong>。</li></ul><p>基本路径</p><ul><li>一般而言，如果你使用本地安装的 Joplin 桌面客户端，则不需要特殊配置。如果使用远端的 Joplin 服务，则需要进行配置。 例如 <a href="http://127.0.0.1:41184" target="_blank" rel="noreferrer">http://127.0.0.1:41184</a></li></ul><p><img src="'+t+'" alt="安装插件"></p><h2 id="开始使用" tabindex="-1">开始使用 <a class="header-anchor" href="#开始使用" aria-label="Permalink to &quot;开始使用&quot;">​</a></h2><p>输入快捷键 <code>Ctrl+J Ctrl+J</code>，然后庆祝 🎉。这个快捷键组合激活了 <code>view: show joplin</code> 命令，打开侧边栏，显示所有的笔记本。</p><p><img src="https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png" alt="预览"></p><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><p>您的所有笔记和记事本都可以在侧边栏中找到，展开笔记本可以看到下面的子笔记本和笔记。</p><p>点击一个笔记，在编辑器中打开一个工作副本，保存它以将修改推送回 Joplin。</p><p>你可以随心所欲地创建、编辑和删除 <strong>笔记</strong> 和 <strong>笔记本</strong>，一切都在 VSCode 中不间断的完成。🦸♀️</p><h2 id="命令和快捷键" tabindex="-1">命令和快捷键 <a class="header-anchor" href="#命令和快捷键" aria-label="Permalink to &quot;命令和快捷键&quot;">​</a></h2><p>VSCode 有很多快捷键，为了避免与内置的快捷键冲突，该插件假定了一个快捷键前缀 <code>Ctrl+J</code>，在后面继续添加二步快捷键。</p><p>提示：探索在命令调色板中输入 <code>joplin</code> 的结果，找出这里没有告诉你的功能。</p>',30),n=[p];function s(d,c,h,u,b,m){return o(),a("div",null,n)}const f=e(r,[["render",s]]);export{g as __pageData,f as default};
