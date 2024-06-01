import{_ as t,c as e,o as d,a3 as o,af as a,ag as c,ah as l}from"./chunks/framework.DGOKheZo.js";const q=JSON.parse('{"title":"其他功能","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/joplin-vscode-plugin/feature.md","filePath":"zh-CN/joplin-vscode-plugin/feature.md"}'),r={name:"zh-CN/joplin-vscode-plugin/feature.md"},i=o('<h1 id="其他功能" tabindex="-1">其他功能 <a class="header-anchor" href="#其他功能" aria-label="Permalink to &quot;其他功能&quot;">​</a></h1><h2 id="配置表" tabindex="-1">配置表 <a class="header-anchor" href="#配置表" aria-label="Permalink to &quot;配置表&quot;">​</a></h2><table><thead><tr><th>字段</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td><code>token</code></td><td></td><td><code>string</code></td><td>joplin web 服务的 token</td></tr><tr><td><code>baseUrl</code></td><td><code>http://localhost:41184</code></td><td><code>string</code></td><td>joplin api 基础路径</td></tr><tr><td><code>deleteConfirm</code></td><td><code>true</code></td><td><code>boolean</code></td><td>删除时是否提醒</td></tr><tr><td><code>sortNotes</code></td><td><code>false</code></td><td><code>boolean</code></td><td>是否对笔记进行排序</td></tr><tr><td><code>sortNotesType</code></td><td><code>alphabetical</code></td><td></td><td>笔记排序的类型</td></tr><tr><td></td><td></td><td><code>alphabetical</code></td><td>按照标题的字母顺序排序</td></tr><tr><td></td><td></td><td><code>default</code></td><td>Joplin 默认的排序</td></tr><tr><td><code>sortOrder</code></td><td><code>asc</code></td><td></td><td>笔记排序的顺序（升序或降序）</td></tr><tr><td></td><td></td><td><code>asc</code></td><td>升序</td></tr><tr><td></td><td></td><td><code>desc</code></td><td>降序</td></tr></tbody></table><h2 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h2><ul><li><code>f2</code>: 重命名笔记或目录</li><li><code>delete</code>: 删除笔记或目录</li><li><code>ctrl+alt+u</code>: 从剪切板上传图片</li><li><code>ctrl+alt+e</code>: 从文件选择器上传图片</li><li><code>ctrl+alt+shift+e</code>: 从文件选择器添加附件</li><li><code>ctrl+j ctrl+o</code>: 搜索笔记，默认显示最近修改的 20 条笔记</li><li><code>ctrl+j ctrl+i</code>: 创建附件</li><li><code>ctrl+j ctrl+m</code>: 管理标签</li><li><code>ctrl+j ctrl+l</code>: 显示当前笔记的附件资源</li></ul><h2 id="编辑附件" tabindex="-1">编辑附件 <a class="header-anchor" href="#编辑附件" aria-label="Permalink to &quot;编辑附件&quot;">​</a></h2><p>由于在 vscode 编辑器中实现的点击跳转功能经常存在问题，所以在 <code>v0.7.8</code> 之后实现了显示当前笔记附件列表的功能，用以快速编辑指定附件资源，默认快捷键为 <code>ctrl+j ctrl+l</code></p><p><img src="'+a+'" alt="editResource"></p><h2 id="粘贴图片" tabindex="-1">粘贴图片 <a class="header-anchor" href="#粘贴图片" aria-label="Permalink to &quot;粘贴图片&quot;">​</a></h2><p><code>v0.1.7</code> 之后新增了图片粘贴功能，可以通过右键菜单、命令或快捷键将图片上传到 Joplin 并粘贴链接到 VSCode 中。</p><ol><li><code>ctrl+alt+u</code> 粘贴剪切板的图片</li><li><code>ctrl+alt+e</code> 使用文件管理器选择图片粘贴</li></ol><p><img src="'+c+'" alt="pasteImage"></p><h2 id="添加附件" tabindex="-1">添加附件 <a class="header-anchor" href="#添加附件" aria-label="Permalink to &quot;添加附件&quot;">​</a></h2><p><code>v0.1.10</code> 之后新增了添加附件的功能，可以通过命令或快捷键将文件作为附件资源添加到 Joplin 笔记中。</p><ol><li><code>ctrl+alt+shift+e</code> 选择要添加为附件的文件</li></ol><h2 id="创建附件" tabindex="-1">创建附件 <a class="header-anchor" href="#创建附件" aria-label="Permalink to &quot;创建附件&quot;">​</a></h2><p>在 <code>v0.3.0</code> 之后实现了右键创建附件资源的功能，主要用于快速创建并添加一个思维导图（由百度脑图提供支持）或流程图（由 draw.io 提供支持）。</p><h2 id="管理标签" tabindex="-1">管理标签 <a class="header-anchor" href="#管理标签" aria-label="Permalink to &quot;管理标签&quot;">​</a></h2><p>在 <code>v0.3.0</code> 之后支持管理标签，命令是 <code>&gt; Joplin: Manage tags</code>，默认快捷键为 <code>ctrl+j ctrl+m</code> 即可弹出复选框。</p><h2 id="创建标签" tabindex="-1">创建标签 <a class="header-anchor" href="#创建标签" aria-label="Permalink to &quot;创建标签&quot;">​</a></h2><p>在 <code>v0.3.0</code> 之后支持创建标签，命令是 <code>&gt; Joplin: Create tag</code>。</p><h2 id="链接笔记" tabindex="-1">链接笔记 <a class="header-anchor" href="#链接笔记" aria-label="Permalink to &quot;链接笔记&quot;">​</a></h2><p>在笔记上右键菜单可以看到 <strong>复制链接</strong>，点击即复制到剪切板。</p><p><img src="'+l+'" alt="Link notes"></p><p>使用 <code>Ctrl+单击</code> 打开到其他笔记中。</p>',25),h=[i];function s(n,p,u,_,b,f){return d(),e("div",null,h)}const g=t(r,[["render",s]]);export{q as __pageData,g as default};
