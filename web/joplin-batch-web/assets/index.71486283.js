import{r as n,R as e}from"./react.bcb0ff15.js";import{i as o,s as v,T as x,n as y}from"./index.8f2caac7.js";import{H as T}from"./react-highlight-words.36ddf745.js";import{A,a as V}from"./@liuli-util/async.20364c00.js";import{F as i,C,I as w,d as I,a as R,B as m,b as d,m as E}from"./antd.829d9a81.js";import"./classnames.fcae7549.js";import"./@liuli-util/react-router.19d629f6.js";import"./history.8c848a87.js";import"./@babel/runtime.77033aed.js";import"./@liuli-util/tree.28f56635.js";import"./react-router.ab39842d.js";import"./@remix-run/router.6675ec4c.js";import"./@liuli-util/i18next-util.367fde1b.js";import"./i18next.aeec162a.js";import"./react-use.f90ee3b0.js";import"./tslib.42edd759.js";import"./react-dom.040937d5.js";import"./scheduler.5bc07c2b.js";import"./@liuli-util/object.c3c9f8dd.js";import"./query-string.7a820323.js";import"./strict-uri-encode.82768c6e.js";import"./decode-uri-component.ca13c355.js";import"./split-on-first.cf03b920.js";import"./filter-obj.a2c77fe2.js";import"./@liuli-util/dom.7c7381d8.js";import"./@liuli-util/array.c1e23abd.js";import"./rc-util.9e22709c.js";import"./react-is.e13562bd.js";import"./rc-resize-observer.ce41be3e.js";import"./resize-observer-polyfill.d94677fa.js";import"./rc-motion.4d67ed75.js";import"./@ant-design/icons.9bb0fd12.js";import"./@ant-design/icons-svg.ef1e3299.js";import"./@ant-design/colors.c9ebc826.js";import"./@ctrl/tinycolor.f9239932.js";import"./rc-menu.36873b05.js";import"./shallowequal.9e085e62.js";import"./rc-overflow.1c29c4d3.js";import"./rc-trigger.d92e6a44.js";import"./rc-align.8ac14694.js";import"./dom-align.6f4926e0.js";import"./lodash.9f59e410.js";import"./rc-checkbox.7c78741f.js";import"./rc-tabs.e6ff9661.js";import"./rc-dropdown.ef01eb3e.js";import"./rc-select.5290f568.js";import"./rc-virtual-list.03a0aeaa.js";import"./rc-field-form.bad3530c.js";import"./async-validator.e56392a6.js";import"./scroll-into-view-if-needed.93ce78d3.js";import"./compute-scroll-into-view.9b2bf0c9.js";import"./rc-image.6968645b.js";import"./rc-dialog.1314fb5b.js";import"./rc-pagination.d25a22f9.js";import"./rc-textarea.2a18f0c5.js";import"./copy-to-clipboard.04c46956.js";import"./toggle-selection.ddb32806.js";import"./memoize-one.d2b40972.js";import"./rc-picker.eb87d7c6.js";import"./rc-notification.a2f2b76e.js";import"./rc-tooltip.bb0bf028.js";import"./rc-input.b5c20646.js";const F="_ReplaceView_3ezz3_1",S="_content_3ezz3_7",_={ReplaceView:F,content:S},$e=()=>{const[a]=i.useForm(),[l,f]=n.exports.useState(),[p,k]=n.exports.useState(!1);async function c(){const t=a.getFieldsValue();console.log("onSearch: ",t);const r=await v.search({query:`body:${t.keyword}`,type:x.Note,limit:100,order_by:"user_updated_time",order_dir:"DESC",fields:["id","title","body","user_updated_time"]});console.log("res: ",r),f(r.items),u(void 0)}async function g(t){const r=a.getFieldsValue();await y.update({id:t.id,user_updated_time:p?t.user_updated_time:void 0,body:t.body.replaceAll(r.keyword,r.replaceText)}),await c(),E.success(o.t("replace.msg.replace"))}const[s,u]=n.exports.useState();async function b(t){const r=a.getFieldsValue();u({body:t.body,keyword:r.keyword})}async function h(){if(!l||!await a.validateFields())return;const t=a.getFieldsValue();await A.forEach(l,V(async r=>{await y.update({id:r.id,user_updated_time:p?r.user_updated_time:void 0,body:r.body.replaceAll(t.keyword,t.replaceText)})},10)),await c(),E.success(o.t("replace.msg.replaceAll"))}return e.createElement(C,{title:o.t("replace.title"),className:_.ReplaceView},e.createElement(i,{form:a,initialValues:{keyword:"",replaceText:""}},e.createElement(i.Item,{name:"keyword",label:o.t("replace.form.keyword"),rules:[{required:!0}]},e.createElement(w,null)),e.createElement(i.Item,{name:"replaceText",label:o.t("replace.form.replaceText"),rules:[{required:!0}]},e.createElement(w,null)),e.createElement(i.Item,null,e.createElement(I,{checked:p,onChange:()=>k(!p)},o.t("replace.form.keepUpdatedTime"))),e.createElement(i.Item,null,e.createElement(R,null,e.createElement(m,{type:"primary",onClick:c},o.t("replace.action.search")),e.createElement(m,{danger:!0,onClick:h},o.t("replace.action.replaceAll"))))),e.createElement("div",{className:_.content},e.createElement(d,{dataSource:l,renderItem:t=>e.createElement(d.Item,{key:t.id,actions:[e.createElement(m,{onClick:()=>g(t)},o.t("replace.action.replace")),e.createElement(m,{onClick:()=>b(t)},o.t("replace.action.preview"))]},e.createElement(d.Item.Meta,{title:t.title}))}),s&&e.createElement("pre",null,e.createElement(T,{textToHighlight:s.body,searchWords:[s.keyword]}))))};export{$e as default};
