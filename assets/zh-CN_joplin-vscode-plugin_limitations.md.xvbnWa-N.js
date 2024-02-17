import{_ as e,c as t,o,V as i}from"./chunks/framework.BjDc6e-2.js";const m=JSON.parse('{"title":"限制","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/joplin-vscode-plugin/limitations.md","filePath":"zh-CN/joplin-vscode-plugin/limitations.md"}'),s={name:"zh-CN/joplin-vscode-plugin/limitations.md"},a=i('<h1 id="限制" tabindex="-1">限制 <a class="header-anchor" href="#限制" aria-label="Permalink to &quot;限制&quot;">​</a></h1><p>虽然目前插件已经实现了 joplin 的常用功能，但却是存在一些难以处理的限制。也正是由于这些限制的存在，所以吾辈才没有使用直接基于 vscode 的笔记插件。</p><ul><li>无法拖放笔记，参考: <a href="https://github.com/Microsoft/vscode/issues/32592" target="_blank" rel="noreferrer">https://github.com/Microsoft/vscode/issues/32592</a></li><li>无法将文件（例如图片）拖放到编辑器中并自动创建引用，参考: <a href="https://github.com/microsoft/vscode/issues/5240" target="_blank" rel="noreferrer">https://github.com/microsoft/vscode/issues/5240</a></li><li>无法预览显示音视频，参考: <a href="https://github.com/microsoft/vscode/issues/32540" target="_blank" rel="noreferrer">https://github.com/microsoft/vscode/issues/32540</a></li><li>无法自定义插件的 ui, 参考: <a href="https://code.visualstudio.com/api/extension-capabilities/overview#no-dom-access" target="_blank" rel="noreferrer">https://code.visualstudio.com/api/extension-capabilities/overview#no-dom-access</a></li><li>默认的快捷键设置比较麻烦，您需要考虑与现有快捷键的冲突（目前已通过将之分配到 <code>ctrl+j</code> 命名空间下暂时解决）</li></ul>',3),r=[a];function c(l,n,d,h,p,_){return o(),t("div",null,r)}const f=e(s,[["render",c]]);export{m as __pageData,f as default};
