import{_ as e,c as t,o as a,a3 as o}from"./chunks/framework.1smVRZMp.js";const m=JSON.parse('{"title":"Joplin Batch Web","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/joplin-batch-web/index.md","filePath":"en-US/joplin-batch-web/index.md"}'),i={name:"en-US/joplin-batch-web/index.md"},n=o('<h1 id="joplin-batch-web" tabindex="-1">Joplin Batch Web <a class="header-anchor" href="#joplin-batch-web" aria-label="Permalink to &quot;Joplin Batch Web&quot;">​</a></h1><blockquote><p><a href="https://joplin-utils.rxliuli.com/web/joplin-batch-web/" target="_blank" rel="noreferrer">Go to use</a></p></blockquote><p>Handle some bulk operations that Joplin itself does not support and present them in a visual interface.</p><ul><li>[x] Check if there are any unused attachment resources Some unused attachments haven&#39;t been cleaned up.</li><li>[x] Check if there are missing referenced attachment resources Some used attachments might be missing for various reasons.</li><li>[x] Convert external links to internal note references Want to convert previous blog links to internal <code>:/id</code> links to ensure they never expire.</li><li>[x] Check if there are notes without a parent directory (usually an error)</li></ul><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><ol><li>Open Joplin Desktop</li><li>Enable web clipper</li><li>Fill in the configuration on the <a href="https://joplin-utils.rxliuli.com/web/joplin-batch-web/#/settings" target="_blank" rel="noreferrer">Settings</a> page</li><li>Navigate to the relevant function page</li></ol><p><img src="https://github.com/rxliuli/joplin-utils/raw/master/packages/joplin-batch-web/docs/images/guide.gif" alt="guide"></p><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="why-not-use-a-cli-form" tabindex="-1">Why not use a CLI form <a class="header-anchor" href="#why-not-use-a-cli-form" aria-label="Permalink to &quot;Why not use a CLI form&quot;">​</a></h3><p>CLI form is not very suitable for this scenario, for example, checking abnormal attachments or notes which can be cumbersome on the command line.</p><h3 id="does-it-record-my-note-data" tabindex="-1">Does it record my note data <a class="header-anchor" href="#does-it-record-my-note-data" aria-label="Permalink to &quot;Does it record my note data&quot;">​</a></h3><p>The website works entirely locally, with no backend servers. If you still have concerns, you can check the source code <a href="https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-batch-web" target="_blank" rel="noreferrer">joplin-batch-web</a>.</p>',12),r=[n];function l(s,c,h,d,p,u){return a(),t("div",null,r)}const f=e(i,[["render",l]]);export{m as __pageData,f as default};
