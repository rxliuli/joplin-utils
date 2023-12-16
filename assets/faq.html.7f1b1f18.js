import{_ as r}from"./manually-set-token-of-joplin.5d852cf0.js";import{_ as t,r as i,o as l,c as d,a as e,d as n,b as s,e as a}from"./app.a62b3536.js";const c={},p=a(`<h1 id="\u5E38\u95EE\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u95EE\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u95EE\u95EE\u9898</h1><h2 id="\u663E\u793A\u9519\u8BEF\u4FE1\u606F-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service" tabindex="-1"><a class="header-anchor" href="#\u663E\u793A\u9519\u8BEF\u4FE1\u606F-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service" aria-hidden="true">#</a> \u663E\u793A\u9519\u8BEF\u4FE1\u606F <strong>Joplin\u2019s token/port is set incorrectly, unable to access Joplin service!</strong></h2><p>\u8BF7\u5C1D\u8BD5\u5728 CMD/Bash \u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5982\u679C\u6CA1\u6709\u95EE\u9898\uFF0C\u5B83\u5E94\u8BE5\u8FD4\u56DE <strong>JoplinClipperServer</strong>\uFF0C\u5426\u5219\u4F60\u9700\u8981\u5411 Joplin \u5B98\u65B9\u63D0 issue\u3002</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>curl http://127.0.0.1:41184/ping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5982\u4F55\u5217\u51FA-vscode-\u6253\u5F00\u7684-joplin-\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5217\u51FA-vscode-\u6253\u5F00\u7684-joplin-\u7B14\u8BB0" aria-hidden="true">#</a> \u5982\u4F55\u5217\u51FA VSCode \u6253\u5F00\u7684 joplin \u7B14\u8BB0</h2><p>\u867D\u7136\u6CA1\u6709\u6B63\u5F0F\u7684\u652F\u6301\uFF0C\u4F46\u4F60\u53EF\u4EE5\u4F7F\u7528\u5FEB\u6377\u952E <code>c+j c+o</code> \u6765\u5217\u51FA\u6700\u540E\u4FEE\u6539\u7684 20 \u4E2A joplin \u7B14\u8BB0\u505A\u5230\u7C7B\u4F3C\u7684\u4E8B\u60C5\u3002</p><blockquote><p>\u4E4B\u6240\u4EE5\u6CA1\u6709\u6B63\u5F0F\u652F\u6301\uFF0C\u53EF\u80FD\u5C31\u662F\u56E0\u4E3A\u4E24\u8005\u7684\u529F\u80FD\u91CD\u53E0\uFF0C\u53E6\u5916\uFF0Cvscode \u7684\u6700\u8FD1\u6253\u5F00\u7684\u6587\u4EF6\u4E5F\u4E0D\u4EC5\u4EC5\u662F\u5F53\u524D\u7F16\u8F91\u5668\u6B63\u5728\u6253\u5F00\u7684\u6587\u4EF6\uFF0C\u800C\u662F\u5305\u62EC\u5DF2\u7ECF\u5173\u95ED\u7684\u3002</p></blockquote><h2 id="\u63D2\u4EF6\u6CA1\u6709\u663E\u793A\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u6CA1\u6709\u663E\u793A\u5217\u8868" aria-hidden="true">#</a> \u63D2\u4EF6\u6CA1\u6709\u663E\u793A\u5217\u8868</h2><p>\u8BF7\u68C0\u67E5\u5B8C joplin \u7684\u914D\u7F6E\u9879\u4E4B\u540E\uFF0C\u91CD\u65B0\u542F\u52A8 VSCode\u3002</p><h2 id="\u5728\u4FA7\u8FB9\u680F\u4E2D\u70B9\u51FB\u65E0\u6CD5\u6253\u5F00\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u5728\u4FA7\u8FB9\u680F\u4E2D\u70B9\u51FB\u65E0\u6CD5\u6253\u5F00\u7B14\u8BB0" aria-hidden="true">#</a> \u5728\u4FA7\u8FB9\u680F\u4E2D\u70B9\u51FB\u65E0\u6CD5\u6253\u5F00\u7B14\u8BB0</h2><p>\u8FD9\u4E2A\u95EE\u9898\u53EF\u80FD\u6709\u591A\u4E2A\u539F\u56E0</p>`,11),h=e("p",null,[n("\u68C0\u67E5\u662F\u5426\u53EF\u4EE5\u5728 joplin \u4E2D\u901A\u8FC7 "),e("strong",null,"\u5207\u6362\u5916\u90E8\u7F16\u8F91"),n(" \u529F\u80FD\u6253\u5F00 vscode")],-1),u={href:"https://github.com/laurent22/joplin/issues/5921#issuecomment-1002692774",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/laurent22/joplin/issues",target:"_blank",rel:"noopener noreferrer"},m={href:"https://discourse.joplinapp.org/t/9277/11",target:"_blank",rel:"noopener noreferrer"},b={href:"https://discourse.joplinapp.org/t/16735",target:"_blank",rel:"noopener noreferrer"},v=a(`<li><p>\u68C0\u67E5\u4E0B\u9762\u547D\u4EE4\u662F\u5426\u80FD\u591F\u6B63\u5E38\u6267\u884C\uFF0C\u5982\u679C\u4ECD\u7136\u65E0\u6CD5\u5728\u7F16\u8F91\u5668\u4E2D\u6253\u5F00\uFF0C\u53EF\u80FD\u8981\u8BE2\u95EE @laurent22</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> POST <span class="token string">&#39;http://localhost:41184/services/externalEditWatcher?token=***&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--header</span> <span class="token string">&#39;Content-Type: application/json&#39;</span> <span class="token punctuation">\\</span>
--data-raw <span class="token string">&#39;{
 &quot;action&quot;: &quot;openAndWatch&quot;,
 &quot;noteId&quot;: &quot;257f6a9dacc1409580ee526d50ac4d49&quot;
}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),g=a(`<h2 id="windows-10-\u65E0\u6CD5\u4E0A\u4F20\u526A\u5207\u7248\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#windows-10-\u65E0\u6CD5\u4E0A\u4F20\u526A\u5207\u7248\u56FE\u7247" aria-hidden="true">#</a> Windows 10 \u65E0\u6CD5\u4E0A\u4F20\u526A\u5207\u7248\u56FE\u7247</h2><p>\u53EF\u80FD\u662F\u6CA1\u6709\u5B89\u88C5 powershell\uFF0C\u5728 CMD \u4E2D\u8F93\u5165 powershell \u68C0\u67E5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>powershell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://user-images.githubusercontent.com/24560368/115563663-5d855c00-a2ea-11eb-8b08-dfa7dd773601.png" alt="powershell"></p>`,4),k=e("code",null,"spawn powershell ENOENT",-1),w={href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"\u5982\u4F55\u5728\u4E24\u4E2A\u914D\u7F6E\u540C\u6B65\u7684-vscode-\u4F7F\u7528\u63D2\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5982\u4F55\u5728\u4E24\u4E2A\u914D\u7F6E\u540C\u6B65\u7684-vscode-\u4F7F\u7528\u63D2\u4EF6","aria-hidden":"true"},"#"),n(" \u5982\u4F55\u5728\u4E24\u4E2A\u914D\u7F6E\u540C\u6B65\u7684 vscode \u4F7F\u7528\u63D2\u4EF6")],-1),x=e("p",null,[n("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u53F0\u7535\u8111\u4E0A\u7684 joplin \u4F1A\u751F\u6210\u968F\u673A\u7684 token\uFF0C\u4F46\u60A8\u53EF\u4EE5\u624B\u52A8\u4FEE\u6539\u5B83\uFF0C\u4E00\u822C\u914D\u7F6E\u6587\u4EF6\u5728 "),e("em",null,"~/.config/joplin-desktop/settings.json"),n("\uFF0C\u60A8\u53EA\u9700\u8981\u4FEE\u6539\u5176\u4E2D\u7684 "),e("code",null,"api.token"),n(" \u4E3A\u76F8\u540C\u7684 token \u5373\u53EF\u3002")],-1),j=e("p",null,[e("img",{src:r,alt:"\u624B\u52A8\u8BBE\u7F6E joplin \u7684 token"})],-1),q={href:"https://github.com/rxliuli/joplin-utils/issues/25",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"markdown-\u9884\u89C8\u65E0\u6CD5\u663E\u793A\u56FE\u7247",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-\u9884\u89C8\u65E0\u6CD5\u663E\u793A\u56FE\u7247","aria-hidden":"true"},"#"),n(" markdown \u9884\u89C8\u65E0\u6CD5\u663E\u793A\u56FE\u7247")],-1),C=e("p",null,[n("\u5F53\u4F60\u7B2C\u4E00\u6B21\u4F7F\u7528 joplin vscode \u63D2\u4EF6\u65F6\uFF0C\u4F60\u4E5F\u8BB8\u4F1A\u9047\u5230\u65E0\u6CD5\u5728 markdown \u9884\u89C8\u4E2D\u67E5\u770B\u56FE\u7247\u7684\u95EE\u9898\uFF0C\u5728\u9884\u89C8\u4E2D\u5B58\u5728\u63D0\u793A "),e("strong",null,"Some content has been disabled in this document"),n("\uFF0C\u8FD9\u4E2A\u95EE\u9898\u53EF\u4EE5\u5F88\u7B80\u5355\u7684\u89E3\u51B3\u3002")],-1),E=e("ol",null,[e("li",null,[n("\u8F93\u5165\u547D\u4EE4 "),e("code",null,"markdown.showPreviewSecuritySelector")]),e("li",null,[n("\u5728\u5217\u8868\u4E2D\u9009\u62E9 "),e("code",null,"Allow insecure local content")])],-1),y={href:"https://code.visualstudio.com/docs/languages/markdown#_markdown-preview-security",target:"_blank",rel:"noopener noreferrer"},N=e("h2",{id:"\u4E0D\u517C\u5BB9\u63D2\u4EF6-markdown-preview-enhanced",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E0D\u517C\u5BB9\u63D2\u4EF6-markdown-preview-enhanced","aria-hidden":"true"},"#"),n(" \u4E0D\u517C\u5BB9\u63D2\u4EF6 Markdown Preview Enhanced")],-1),V={href:"https://code.visualstudio.com/api/extension-guides/markdown-extension",target:"_blank",rel:"noopener noreferrer"},I={href:"https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/rxliuli/joplin-utils/issues/46",target:"_blank",rel:"noopener noreferrer"},M=e("h2",{id:"linux-\u4E0A\u65E0\u6CD5\u7C98\u8D34\u56FE\u7247\u5230\u7B14\u8BB0\u4E2D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux-\u4E0A\u65E0\u6CD5\u7C98\u8D34\u56FE\u7247\u5230\u7B14\u8BB0\u4E2D","aria-hidden":"true"},"#"),n(" Linux \u4E0A\u65E0\u6CD5\u7C98\u8D34\u56FE\u7247\u5230\u7B14\u8BB0\u4E2D")],-1),P={href:"https://github.com/astrand/xclip",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/bugaevc/wl-clipboard",target:"_blank",rel:"noopener noreferrer"};function L(T,W){const o=i("ExternalLinkIcon");return l(),d("div",null,[p,e("ol",null,[e("li",null,[h,e("ol",null,[e("li",null,[n("\u5982\u679C\u4E0D\u80FD\u6253\u5F00\uFF0C\u5219\u9700\u8981\u68C0\u67E5\u8BBE\u7F6E\u9875\u9762\u4E2D\u7684\u6587\u672C\u7F16\u8F91\u5668\u547D\u4EE4\uFF0C\u4F60\u9700\u8981\u8BBE\u7F6E\u4E00\u4E2A\u7F16\u8F91\u5668\uFF0C\u6216\u8005\u6709\u65E0\u6548\u7684\u8BBE\u7F6E\uFF0C\u53C2\u8003\uFF1A"),e("a",u,[n("https://github.com/laurent22/joplin/issues/5921#issuecomment-1002692774"),s(o)])]),e("li",null,[n("\u5982\u679C\u4ECD\u7136\u6709\u95EE\u9898\uFF0C\u8BF7\u53BB joplin \u5B98\u65B9\u9879\u76EE "),e("a",_,[n("\u63D0\u51FA issue"),s(o)])])])]),e("li",null,[e("p",null,[n("\u8BF7\u4F7F\u7528\u7248\u672C v1.4 \u6216\u66F4\u9AD8\uFF0C\u56E0\u4E3A\u5B83\u5305\u542B\u4E86\u5FC5\u987B\u7684 "),e("a",m,[n("action api"),s(o)]),n("\uFF0C\u4F8B\u5982\u5728 VSCode \u4E2D\u6839\u636E noteId \u6253\u5F00\u7B14\u8BB0")])]),e("li",null,[e("p",null,[n("\u786E\u5B9A\u662F\u5728\u5F53\u524D\u7535\u8111\u4E0A\u5B89\u88C5 Joplin \u684C\u9762\u7248\uFF0C\u8BE5\u63D2\u4EF6\u5E76\u4E0D\u652F\u6301 CLI\uFF0C\u56E0\u4E3A\u5B83\u5E76\u4E0D\u5305\u542B\u4E0A\u8FF0\u7684 action api\uFF0C\u53C2\u8003: "),e("a",b,[n("https://discourse.joplinapp.org/t/16735"),s(o)])])]),v]),g,e("p",null,[n("\u5982\u679C\u63D0\u793A "),k,n(" \u5219\u9700\u8981\u5B89\u88C5 powershell\uFF0C\u53C2\u8003\uFF1A"),e("a",w,[n("\u5728 Windows \u4E0A\u5B89\u88C5 PowerShell"),s(o)])]),f,x,j,e("blockquote",null,[e("p",null,[n("\u53C2\u8003\uFF1A"),e("a",q,[n("https://github.com/rxliuli/joplin-utils/issues/25"),s(o)])])]),S,C,E,e("blockquote",null,[e("p",null,[e("a",y,[n("vscode markdown \u6587\u6863"),s(o)])])]),N,e("p",null,[n("\u7531\u4E8E Markdown Preview Enhanced \u81EA\u884C\u6784\u5EFA\u4E86 markdown \u6587\u4EF6\u6E32\u67D3\u7684 webview \u9875\u9762\uFF0C\u800C\u4E14\u4E0D\u5728\u4E4E vscode \u63D0\u4F9B\u7684 "),e("a",V,[n("markdown-it \u6269\u5C55\u63A5\u53E3 api"),s(o)]),n("\uFF0C\u6240\u4EE5\u73B0\u5728\u65E0\u6CD5\u517C\u5BB9\uFF0C\u63A8\u8350\u4F7F\u7528 "),e("a",I,[n("Markdown All in One"),s(o)]),n("\uFF0C\u53C2\u8003\uFF1A"),e("a",J,[n("https://github.com/rxliuli/joplin-utils/issues/46"),s(o)])]),M,e("p",null,[n("\u8BF7\u5148\u5B89\u88C5 "),e("a",P,[n("xclip"),s(o)]),n(" \u548C "),e("a",B,[n("wl-clipboard"),s(o)]),n("\u3002")])])}const D=t(c,[["render",L],["__file","faq.html.vue"]]);export{D as default};
