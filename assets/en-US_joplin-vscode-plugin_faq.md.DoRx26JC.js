import{_ as e,c as i,o as t,V as o,a6 as s}from"./chunks/framework.BjDc6e-2.js";const m=JSON.parse('{"title":"Frequently Asked Questions","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/joplin-vscode-plugin/faq.md","filePath":"en-US/joplin-vscode-plugin/faq.md"}'),n={name:"en-US/joplin-vscode-plugin/faq.md"},a=o(`<h1 id="frequently-asked-questions" tabindex="-1">Frequently Asked Questions <a class="header-anchor" href="#frequently-asked-questions" aria-label="Permalink to &quot;Frequently Asked Questions&quot;">​</a></h1><h2 id="why-develop-this-plugin" tabindex="-1">Why develop this plugin <a class="header-anchor" href="#why-develop-this-plugin" aria-label="Permalink to &quot;Why develop this plugin&quot;">​</a></h2><ol><li>As a professional editor, vscode&#39;s editing function cannot be compared with note-taking tools, for example, shortcut key support.</li><li>vscode is not only an editor but also has a very large plugin ecosystem, so it has implemented markdown formatting, lint verification, pdf export, and other all functions. We don&#39;t have to recreate the editor&#39;s wheel within the note-taking tools - possibly a square wheel.</li><li>In fact, I have been using vscode to edit markdown documents and use git + vscode to store company-related documents. At the same time, joplin is used for storing personal notes, but after a while, I found that I needed the sync / search function of vscode + joplin.</li></ol><p>Therefore, I have written this plugin for people with the same needs.</p><h2 id="error-message-displayed-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service" tabindex="-1">Error message displayed <strong>Joplin’s token/port is set incorrectly, unable to access Joplin service!</strong> <a class="header-anchor" href="#error-message-displayed-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service" aria-label="Permalink to &quot;Error message displayed **Joplin’s token/port is set incorrectly, unable to access Joplin service!**&quot;">​</a></h2><p>Please try the following command in CMD/Bash, it should return <strong>JoplinClipperServer</strong> if there&#39;s no problem; otherwise, you need to raise an issue with Joplin official.</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">curl http://</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0.0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">41184</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/ping</span></span></code></pre></div><h2 id="how-to-list-joplin-notes-opened-in-vscode" tabindex="-1">How to list Joplin notes opened in VSCode <a class="header-anchor" href="#how-to-list-joplin-notes-opened-in-vscode" aria-label="Permalink to &quot;How to list Joplin notes opened in VSCode&quot;">​</a></h2><p>Although there is no official support, you can use <code>c+j c+o</code> shortcut key to list the last 20 modified Joplin notes to do similar things.</p><blockquote><p>The reason for the lack of official support might be the overlap of their functions. Besides, vscode&#39;s recently opened files are not just the files currently being opened by the editor, but also include the closed ones.</p></blockquote><h2 id="the-plugin-does-not-display-the-list" tabindex="-1">The plugin does not display the list <a class="header-anchor" href="#the-plugin-does-not-display-the-list" aria-label="Permalink to &quot;The plugin does not display the list&quot;">​</a></h2><p>Please check Joplin&#39;s configuration items and restart VSCode.</p><h2 id="unable-to-open-a-note-by-clicking-in-the-sidebar" tabindex="-1">Unable to open a note by clicking in the sidebar <a class="header-anchor" href="#unable-to-open-a-note-by-clicking-in-the-sidebar" aria-label="Permalink to &quot;Unable to open a note by clicking in the sidebar&quot;">​</a></h2><p>This problem may have multiple reasons</p><ol><li>Check if VSCode can be opened via the &quot;Toggle External Editor&quot; function in Joplin <ol><li>If not, you need to check the text editor command in the settings page, you need to set an editor, or there might be invalid settings, reference:<a href="https://github.com/laurent22/joplin/issues/5921#issuecomment-1002692774" target="_blank" rel="noreferrer">https://github.com/laurent22/joplin/issues/5921#issuecomment-1002692774</a></li><li>If the problem remains, please <a href="https://github.com/laurent22/joplin/issues" target="_blank" rel="noreferrer">raise an issue</a> in the official Joplin project</li></ol></li><li>Please use version v1.4 or higher, because it includes the necessary <a href="https://discourse.joplinapp.org/t/9277/11" target="_blank" rel="noreferrer">action api</a>, such as opening a note in VSCode based on noteId</li><li>Make sure to install Joplin desktop version on your current computer, this plugin doesn&#39;t support CLI, because it doesn&#39;t contain the aforementioned action api, reference: <a href="https://discourse.joplinapp.org/t/16735" target="_blank" rel="noreferrer">https://discourse.joplinapp.org/t/16735</a></li><li>Check if the following command can be properly executed, if it still can&#39;t be opened in the editor, you might need to ask @laurent22</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --location</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST &#39;http://localhost:41184/services/externalEditWatcher?token=***&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   --header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Content-Type: application/json&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   --data-raw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;action&quot;: &quot;openAndWatch&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;noteId&quot;: &quot;257f6a9dacc1409580ee526d50ac4d49&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   }&#39;</span></span></code></pre></div><h2 id="windows-10-cannot-upload-clipboard-images" tabindex="-1">Windows 10 cannot upload clipboard images <a class="header-anchor" href="#windows-10-cannot-upload-clipboard-images" aria-label="Permalink to &quot;Windows 10 cannot upload clipboard images&quot;">​</a></h2><p>It might be because powershell is not installed, check by entering powershell in CMD</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">powershell</span></span></code></pre></div><p><img src="https://user-images.githubusercontent.com/24560368/115563663-5d855c00-a2ea-11eb-8b08-dfa7dd773601.png" alt="powershell"></p><p>If the prompt <code>spawn powershell ENOENT</code> is shown, you need to install powershell, reference: <a href="https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1" target="_blank" rel="noreferrer">Installing PowerShell on Windows</a></p><h2 id="how-to-use-plugins-with-two-synced-vscode-configurations" tabindex="-1">How to use plugins with two synced vscode configurations <a class="header-anchor" href="#how-to-use-plugins-with-two-synced-vscode-configurations" aria-label="Permalink to &quot;How to use plugins with two synced vscode configurations&quot;">​</a></h2><p>By default, Joplin on each computer will generate a random token, but you can manually modify it, the general configuration file is located in <em>~/.config/joplin-desktop/settings.json</em>, you just need to change the <code>api.token</code> to the same token.</p><p><img src="`+s+'" alt="Manually set joplin&#39;s token"></p><blockquote><p>Reference: <a href="https://github.com/rxliuli/joplin-utils/issues/25" target="_blank" rel="noreferrer">https://github.com/rxliuli/joplin-utils/issues/25</a></p></blockquote><h2 id="markdown-preview-cannot-display-images" tabindex="-1">Markdown preview cannot display images <a class="header-anchor" href="#markdown-preview-cannot-display-images" aria-label="Permalink to &quot;Markdown preview cannot display images&quot;">​</a></h2><p>When you use the Joplin vscode plugin for the first time, you might encounter a problem where you cannot view images in the markdown preview. There is a prompt <strong>Some content has been disabled in this document</strong> in the preview, this problem can be simply solved.</p><ol><li>Enter command <code>markdown.showPreviewSecuritySelector</code></li><li>Choose <code>Allow insecure local content</code> from the list</li></ol><blockquote><p><a href="https://code.visualstudio.com/docs/languages/markdown#_markdown-preview-security" target="_blank" rel="noreferrer">vscode markdown document</a></p></blockquote><h2 id="incompatible-plugin-markdown-preview-enhanced" tabindex="-1">Incompatible plugin Markdown Preview Enhanced <a class="header-anchor" href="#incompatible-plugin-markdown-preview-enhanced" aria-label="Permalink to &quot;Incompatible plugin Markdown Preview Enhanced&quot;">​</a></h2><p>Since Markdown Preview Enhanced has built its own markdown file rendering webview page, and does not care about the <a href="https://code.visualstudio.com/api/extension-guides/markdown-extension" target="_blank" rel="noreferrer">markdown-it extension interface api</a> provided by vscode, it&#39;s currently incompatible. We recommend using <a href="https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one" target="_blank" rel="noreferrer">Markdown All in One</a>, reference: <a href="https://github.com/rxliuli/joplin-utils/issues/46" target="_blank" rel="noreferrer">https://github.com/rxliuli/joplin-utils/issues/46</a></p><h2 id="unable-to-paste-images-into-notes-on-linux" tabindex="-1">Unable to paste images into notes on Linux <a class="header-anchor" href="#unable-to-paste-images-into-notes-on-linux" aria-label="Permalink to &quot;Unable to paste images into notes on Linux&quot;">​</a></h2><p>First install <a href="https://github.com/astrand/xclip" target="_blank" rel="noreferrer">xclip</a> and <a href="https://github.com/bugaevc/wl-clipboard" target="_blank" rel="noreferrer">wl-clipboard</a>.</p>',33),l=[a];function r(p,h,d,c,u,g){return t(),i("div",null,l)}const b=e(n,[["render",r]]);export{m as __pageData,b as default};
