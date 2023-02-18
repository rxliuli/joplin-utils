import{_ as i,r as o,o as l,c as r,a as e,b as t,w as c,d as n,e as d,f as p}from"./app.99421431.js";const h={},u=e("h1",{id:"development",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#development","aria-hidden":"true"},"#"),n(" Development")],-1),m=p(`<h2 id="main-technology-stack" tabindex="-1"><a class="header-anchor" href="#main-technology-stack" aria-hidden="true">#</a> Main technology stack</h2><ul><li>pnpm monorepo</li><li>typescript</li><li>react</li></ul><h2 id="initialize-the-project" tabindex="-1"><a class="header-anchor" href="#initialize-the-project" aria-hidden="true">#</a> Initialize the project</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Clone the project to local</span>
<span class="token function">git</span> clone https://github.com/<span class="token operator">&lt;</span>YOUR GITHUB NAME<span class="token operator">&gt;</span>/joplin-utils.git
<span class="token comment"># Install dependencies and initialize</span>
<span class="token function">pnpm</span> <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> run setup
<span class="token comment"># Enter the corresponding module development code, refer to README for details</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="joplin-vscode-plugin" tabindex="-1"><a class="header-anchor" href="#joplin-vscode-plugin" aria-hidden="true">#</a> joplin-vscode-plugin</h2>`,5),_=e("li",null,"code apps/joplin-vscode-plugin",-1),b={href:"https://joplinapp.org/api/references/development_mode/",target:"_blank",rel:"noopener noreferrer"},v=e("img",{src:"https://user-images.githubusercontent.com/24560368/198864483-b30f050f-e990-4a49-868a-2954eea75443.png",alt:"image"},null,-1),g=e("li",null,[n("enable clipper service "),e("img",{src:"https://user-images.githubusercontent.com/24560368/198864546-473dbc9b-6f09-4cf5-8585-87da13b8b039.png",alt:"image"})],-1),f=e("li",null,"cp .vscode/_launch.json .vscode/launch.json",-1),j=e("li",null,[n("modify .vscode/launch.json, set "),e("em",null,"env.JOPLIN_TOKEN"),n(", example: "),e("img",{src:"https://user-images.githubusercontent.com/24560368/198864435-ac47e951-79ad-40c5-b848-9e5dbafad478.png",alt:"image"})],-1),k=e("li",null,"pnpm dev",-1),x=e("li",null,"F5 run debug",-1),E=e("h2",{id:"joplin-batch-web",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#joplin-batch-web","aria-hidden":"true"},"#"),n(" joplin-batch-web")],-1),N=e("ol",null,[e("li",null,"code apps/joplin-batch-web"),e("li",null,"pnpm dev")],-1),w=e("h2",{id:"refer-to",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#refer-to","aria-hidden":"true"},"#"),n(" refer to")],-1),I={href:"https://joplinapp.org/api/overview/",target:"_blank",rel:"noopener noreferrer"};function y(L,O){const s=o("RouterLink"),a=o("ExternalLinkIcon");return l(),r("div",null,[u,e("blockquote",null,[e("p",null,[t(s,{to:"/dev/require.html"},{default:c(()=>[n("environment requirements")]),_:1})])]),m,e("ol",null,[_,e("li",null,[n("run joplin dev mode, ref: "),e("a",b,[n("https://joplinapp.org/api/references/development_mode/"),t(a)]),v]),g,f,j,k,x]),E,N,w,e("ul",null,[e("li",null,[e("a",I,[n("joplin data api documentation"),t(a)])])]),d(" TODO to be added ")])}const z=i(h,[["render",y],["__file","dev.html.vue"]]);export{z as default};
