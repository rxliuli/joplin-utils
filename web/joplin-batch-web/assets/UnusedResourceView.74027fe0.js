import{r as s}from"./react.bcb0ff15.js";import{A as x,a as E}from"./@liuli-util/async.20364c00.js";import{P as k,r as i,s as U,i as r}from"./index.355718d3.js";import{P as v}from"./PromiseUtil.2bdf064a.js";import{B as A,T as S}from"./@liuli-util/dom.7c7381d8.js";import{p as C}from"./immer.616ba876.js";import{a as p}from"./react-use.f90ee3b0.js";import{m as b,C as L,a as I,B as c,b as d,c as P}from"./antd.829d9a81.js";class T{getUnusedResource(){return v.warpOnEvent(async t=>{const a=await k.pageToAllList(i.list.bind(i),{fields:["id","title","mime"]});let l=0;return await x.filter(a,E(async n=>{const m=!await this.checkUsed(n.id);return t.process({title:n.title,all:a.length,rate:l++}),m},10))})}async checkUsed(t){return(await U.search({query:`"](:/${t})"`})).items.length>0}}const $=new T;function g(o){const t=A(localStorage).settings;return`${t==null?void 0:t.baseUrl}/resources/${o}/file?token=${t==null?void 0:t.token}`}const z=()=>{const[o,t]=s.exports.useState([]),[a,l]=s.exports.useState(""),[n,m]=p(async()=>{try{const e=await $.getUnusedResource().on("process",u=>{l(r.t("unusedResource.msg.process",u))});console.log("list: ",e),t(e)}catch{b.error(r.t("unusedResource.msg.error"))}});async function y(e){t(C(u=>u.filter(w=>w.id!==e))),await i.remove(e)}async function f(e){await S(g(e))}const[R,h]=p(async()=>{await x.forEach(o,async e=>{await i.remove(e.id)}),t([])},[o]);return s.exports.createElement(L,{title:r.t("unusedResource.title"),extra:s.exports.createElement(I,null,s.exports.createElement(c,{onClick:m},r.t("common.action.check")),s.exports.createElement(c,{disabled:o.length===0,danger:!0,loading:R.loading,onClick:h},r.t("unusedResource.action.removeAll")))},s.exports.createElement(d,{dataSource:o,locale:{emptyText:r.t("unusedResource.listEmptyText")},renderItem:e=>s.exports.createElement(d.Item,{key:e.id,actions:[s.exports.createElement(c,{onClick:()=>y(e.id)},r.t("common.action.remove")),s.exports.createElement(c,{onClick:()=>f(e.id)},r.t("common.action.download"))],extra:e.mime.startsWith("image/")&&s.exports.createElement(P,{src:g(e.id),width:300})},s.exports.createElement(d.Item.Meta,{title:e.title})),loading:{spinning:n.loading,tip:a}}))};export{z as U,g as b};
