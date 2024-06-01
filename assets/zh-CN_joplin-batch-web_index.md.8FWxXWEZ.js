import{_ as e,c as a,o as i,a3 as l}from"./chunks/framework.rXM8bS_u.js";const _=JSON.parse('{"title":"Joplin Batch Web","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/joplin-batch-web/index.md","filePath":"zh-CN/joplin-batch-web/index.md"}'),t={name:"zh-CN/joplin-batch-web/index.md"},o=l('<h1 id="joplin-batch-web" tabindex="-1">Joplin Batch Web <a class="header-anchor" href="#joplin-batch-web" aria-label="Permalink to &quot;Joplin Batch Web&quot;">​</a></h1><blockquote><p><a href="https://joplin-utils.rxliuli.com/web/joplin-batch-web/" target="_blank" rel="noreferrer">前往使用</a></p></blockquote><p>处理一些 Joplin 本身不支持的批量操作，以可视化界面的形式展现出来。</p><ul><li>[x] 检查是否存在没有引用的附件资源 一些没有使用的附件资源没有被及时清理</li><li>[x] 检查引用的附件资源不存在的情况 一些正在使用的附件可能由于各种原因不存在了</li><li>[x] 转换外部链接为内部笔记引用 希望能够将之前的 blog 链接转换为内部的 <code>:/id</code> 链接以保证永不过期</li><li>[x] 检查是否存在没有父级目录的笔记（一般是错误）</li></ul><h2 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h2><ol><li>打开 joplin 桌面版</li><li>启用网页剪辑器</li><li>在 <a href="https://joplin-utils.rxliuli.com/web/joplin-batch-web/#/settings" target="_blank" rel="noreferrer">设置</a> 页面填写配置</li><li>导航到相关功能页面</li></ol><p><img src="https://github.com/rxliuli/joplin-utils/raw/master/packages/joplin-batch-web/docs/images/guide.gif" alt="guide"></p><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="为什么不使用-cli-的形式" tabindex="-1">为什么不使用 cli 的形式 <a class="header-anchor" href="#为什么不使用-cli-的形式" aria-label="Permalink to &quot;为什么不使用 cli 的形式&quot;">​</a></h3><p>cli 的形式不太适合这种场景，例如需要预览异常的附件或笔记，在命令行下比较麻烦。</p><h3 id="它会记录我的笔记数据么" tabindex="-1">它会记录我的笔记数据么 <a class="header-anchor" href="#它会记录我的笔记数据么" aria-label="Permalink to &quot;它会记录我的笔记数据么&quot;">​</a></h3><p>网站是全本地工作的，没有后端服务器，如果你仍然担忧，可以检查源代码 <a href="https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-batch-web" target="_blank" rel="noreferrer">joplin-batch-web</a></p>',12),r=[o];function n(c,h,s,p,b,d){return i(),a("div",null,r)}const f=e(t,[["render",n]]);export{_ as __pageData,f as default};
