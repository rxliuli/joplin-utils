var b=Object.defineProperty;var N=(n,t,r)=>t in n?b(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var x=(n,t,r)=>(N(n,typeof t!="symbol"?t+"":t,r),r);import{r as o}from"./react.bcb0ff15.js";import{P as C,s as u,n as f,i as l,o as I}from"./index.355718d3.js";import{A as w}from"./@liuli-util/async.20364c00.js";import{w as S}from"./comlink.2466bcbe.js";import{p as _}from"./immer.616ba876.js";import{s as T}from"./yaml.934606dc.js";import{a as h}from"./react-use.f90ee3b0.js";import{C as W,I as U,b as p,B as v,T as c,a as A,m as M}from"./antd.829d9a81.js";import"./classnames.fcae7549.js";import"./@liuli-util/react-router.19d629f6.js";import"./history.8c848a87.js";import"./@babel/runtime.77033aed.js";import"./@liuli-util/tree.28f56635.js";import"./react-router.ab39842d.js";import"./@remix-run/router.6675ec4c.js";import"./@liuli-util/i18next-util.367fde1b.js";import"./i18next.aeec162a.js";import"./react-dom.040937d5.js";import"./scheduler.5bc07c2b.js";import"./@liuli-util/object.c3c9f8dd.js";import"./query-string.7a820323.js";import"./strict-uri-encode.82768c6e.js";import"./decode-uri-component.ca13c355.js";import"./split-on-first.cf03b920.js";import"./filter-obj.a2c77fe2.js";import"./@liuli-util/dom.7c7381d8.js";import"./@liuli-util/array.c1e23abd.js";import"./rc-util.9e22709c.js";import"./react-is.e13562bd.js";import"./rc-resize-observer.ce41be3e.js";import"./resize-observer-polyfill.d94677fa.js";import"./rc-motion.4d67ed75.js";import"./@ant-design/icons.9bb0fd12.js";import"./@ant-design/icons-svg.ef1e3299.js";import"./@ant-design/colors.c9ebc826.js";import"./@ctrl/tinycolor.f9239932.js";import"./rc-menu.36873b05.js";import"./shallowequal.9e085e62.js";import"./rc-overflow.1c29c4d3.js";import"./rc-trigger.d92e6a44.js";import"./rc-align.8ac14694.js";import"./dom-align.6f4926e0.js";import"./lodash.9f59e410.js";import"./rc-checkbox.7c78741f.js";import"./rc-tabs.e6ff9661.js";import"./rc-dropdown.ef01eb3e.js";import"./rc-select.5290f568.js";import"./rc-virtual-list.03a0aeaa.js";import"./rc-field-form.bad3530c.js";import"./async-validator.e56392a6.js";import"./scroll-into-view-if-needed.93ce78d3.js";import"./compute-scroll-into-view.9b2bf0c9.js";import"./rc-image.6968645b.js";import"./rc-dialog.1314fb5b.js";import"./rc-pagination.d25a22f9.js";import"./rc-textarea.2a18f0c5.js";import"./copy-to-clipboard.04c46956.js";import"./toggle-selection.ddb32806.js";import"./memoize-one.d2b40972.js";import"./rc-picker.eb87d7c6.js";import"./rc-notification.a2f2b76e.js";import"./rc-tooltip.bb0bf028.js";import"./rc-input.b5c20646.js";import"./tslib.42edd759.js";function B(){return new Worker(""+new URL("MarkdownLinkUtil.21c66b9e.js",import.meta.url).href)}class d{constructor(){x(this,"markdownLinkUtilWorker",S(new B))}async search(t){const r=await C.pageToAllList(u.search.bind(u),{query:`body:"${t}"`,fields:["id","title","body","user_updated_time"],order_by:"user_updated_time",order_dir:"DESC"});return await w.map(r,async e=>{const m=await this.markdownLinkUtilWorker.parseLink(e.body);return Reflect.deleteProperty(e,"body"),{...e,urls:await d.mapContentLinks(m,t)}})}static mapContentLinks(t,r){return w.map(t.filter(e=>e.url.startsWith(r)),async e=>{if(!e.title)return e;const m=(await u.search({query:`title:"${e.title}"`,limit:3,fields:["id","title"]})).items;return{...e,matchNotes:m}})}async convert(t,r){const e=await f.get(t,["id","body"]),m=await this.markdownLinkUtilWorker.convertLink(e.body,r);await f.update({id:e.id,body:m,user_updated_time:Date.now()})}}const R="_sub1_sym9i_9",$="_sub2_sym9i_15",g={sub1:R,sub2:$};class j{static addMeta(t,r){const e=T(r);return`---
`+e+`---

`+t}static trimTitle(t){return(t.startsWith("#")?t.substr(1).trimLeft():t).replace(new RegExp(`[\r
]`),"")}static trimBodyHeader(t){return t.startsWith("# ")?t.split(`
`).slice(1).join(`
`).trimLeft():t}}const E=new d,q=n=>{const[t,r]=h(n.onConvertNote);return o.exports.createElement(p,{dataSource:n.url.matchNotes,className:g.sub2,loading:t.loading,renderItem:e=>o.exports.createElement(p.Item,{key:e.id},o.exports.createElement(A,null,o.exports.createElement(c.Text,null,e.title),o.exports.createElement(v,{onClick:()=>r(e)},l.t("convertExternalLink.action.convert"))))})},L=n=>n.urls.length!==0,Xt=()=>{const[n,t]=o.exports.useState([]),[r,e]=h(async function(a){if(a===""){t([]);return}const s=await E.search(a);console.log("onSearch: ",s),t(s.filter(L))});async function m(i){console.log("onConvertNote: ",i),await E.convert(i.noteId,{[i.url]:{title:j.trimTitle(i.linkNoteTitle),url:`:/${i.linkNoteId}`}}),t(_(a=>{console.log("remove: ",i.noteIndex,i.urlIndex),a[i.noteIndex].urls.splice(i.urlIndex,1),a.filter(s=>s.urls.length!==0)})),t(a=>a.filter(L)),M.success(l.t("convertExternalLink.msg.success"))}return o.exports.createElement(W,{title:l.t("convertExternalLink.title")},o.exports.createElement(U.Search,{onSearch:e,allowClear:!0,loading:r.loading}),o.exports.createElement(p,{dataSource:n,itemLayout:"vertical",loading:r.loading,renderItem:(i,a)=>o.exports.createElement(p.Item,{key:i.id,extra:[o.exports.createElement(v,{onClick:()=>I(i.id)},l.t("common.action.open"))]},o.exports.createElement(c.Title,{level:4},i.title),o.exports.createElement(p,{dataSource:i.urls,className:g.sub1,itemLayout:"vertical",renderItem:(s,k)=>o.exports.createElement(p.Item,{key:k},o.exports.createElement(c.Title,{level:5},s.title),o.exports.createElement(c.Link,null,s.url),s.matchNotes&&s.matchNotes.length!==0&&o.exports.createElement(q,{url:s,onConvertNote:y=>m({noteId:i.id,url:s.url,linkNoteId:y.id,linkNoteTitle:y.title,noteIndex:a,urlIndex:k})}))}))}))};export{Xt as default};