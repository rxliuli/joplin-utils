import{r as n,R as e}from"./react.bcb0ff15.js";import{i as o,s as v,T as x,n as y}from"./index.f906e9a9.js";import{H as T}from"./react-highlight-words.36ddf745.js";import{A,a as V}from"./@liuli-util/async.20364c00.js";import{F as i,C,I as w,d as I,a as R,B as m,b as d,m as E}from"./antd.42db6bc7.js";import"./classnames.fcae7549.js";import"./@liuli-util/react-router.aa8aeb03.js";import"./history.c39af881.js";import"./@babel/runtime.c7487f46.js";import"./@liuli-util/tree.28f56635.js";import"./react-router.ab39842d.js";import"./@remix-run/router.6675ec4c.js";import"./@liuli-util/i18next-util.0f611299.js";import"./i18next.4cf220a7.js";import"./react-use.f90ee3b0.js";import"./tslib.42edd759.js";import"./react-dom.8eae3107.js";import"./scheduler.5bc07c2b.js";import"./@liuli-util/object.c3c9f8dd.js";import"./query-string.7a820323.js";import"./strict-uri-encode.82768c6e.js";import"./decode-uri-component.ca13c355.js";import"./split-on-first.cf03b920.js";import"./filter-obj.a2c77fe2.js";import"./@liuli-util/dom.7c7381d8.js";import"./@liuli-util/array.c1e23abd.js";import"./rc-util.f428f10c.js";import"./react-is.e13562bd.js";import"./rc-resize-observer.2035469b.js";import"./resize-observer-polyfill.d94677fa.js";import"./rc-motion.d81caebe.js";import"./@ant-design/icons.94a990fc.js";import"./@ant-design/icons-svg.ef1e3299.js";import"./@ant-design/colors.c9ebc826.js";import"./@ctrl/tinycolor.f9239932.js";import"./rc-menu.a6fb28fd.js";import"./shallowequal.9e085e62.js";import"./rc-overflow.0e71b119.js";import"./rc-trigger.99fa7870.js";import"./rc-align.2cb686aa.js";import"./dom-align.6f4926e0.js";import"./lodash.9f59e410.js";import"./rc-checkbox.c3f49b94.js";import"./rc-tabs.9a13c0cd.js";import"./rc-dropdown.f95b8d8f.js";import"./rc-select.1953886b.js";import"./rc-virtual-list.626f37f6.js";import"./rc-field-form.5c6c5039.js";import"./async-validator.e56392a6.js";import"./scroll-into-view-if-needed.93ce78d3.js";import"./compute-scroll-into-view.9b2bf0c9.js";import"./rc-image.2725ce8a.js";import"./rc-dialog.908bfba3.js";import"./rc-pagination.b5879506.js";import"./rc-textarea.c1453a04.js";import"./copy-to-clipboard.04c46956.js";import"./toggle-selection.ddb32806.js";import"./memoize-one.d2b40972.js";import"./rc-picker.cf8fb510.js";import"./rc-notification.c681ae48.js";import"./rc-tooltip.ae08d5b8.js";import"./rc-input.acb52a36.js";const F="_ReplaceView_3ezz3_1",S="_content_3ezz3_7",_={ReplaceView:F,content:S},$e=()=>{const[a]=i.useForm(),[l,f]=n.exports.useState(),[p,k]=n.exports.useState(!1);async function c(){const t=a.getFieldsValue();console.log("onSearch: ",t);const r=await v.search({query:`body:${t.keyword}`,type:x.Note,limit:100,order_by:"user_updated_time",order_dir:"DESC",fields:["id","title","body","user_updated_time"]});console.log("res: ",r),f(r.items),u(void 0)}async function g(t){const r=a.getFieldsValue();await y.update({id:t.id,user_updated_time:p?t.user_updated_time:void 0,body:t.body.replaceAll(r.keyword,r.replaceText)}),await c(),E.success(o.t("replace.msg.replace"))}const[s,u]=n.exports.useState();async function b(t){const r=a.getFieldsValue();u({body:t.body,keyword:r.keyword})}async function h(){if(!l||!await a.validateFields())return;const t=a.getFieldsValue();await A.forEach(l,V(async r=>{await y.update({id:r.id,user_updated_time:p?r.user_updated_time:void 0,body:r.body.replaceAll(t.keyword,t.replaceText)})},10)),await c(),E.success(o.t("replace.msg.replaceAll"))}return e.createElement(C,{title:o.t("replace.title"),className:_.ReplaceView},e.createElement(i,{form:a,initialValues:{keyword:"",replaceText:""}},e.createElement(i.Item,{name:"keyword",label:o.t("replace.form.keyword"),rules:[{required:!0}]},e.createElement(w,null)),e.createElement(i.Item,{name:"replaceText",label:o.t("replace.form.replaceText"),rules:[{required:!0}]},e.createElement(w,null)),e.createElement(i.Item,null,e.createElement(I,{checked:p,onChange:()=>k(!p)},o.t("replace.form.keepUpdatedTime"))),e.createElement(i.Item,null,e.createElement(R,null,e.createElement(m,{type:"primary",onClick:c},o.t("replace.action.search")),e.createElement(m,{danger:!0,onClick:h},o.t("replace.action.replaceAll"))))),e.createElement("div",{className:_.content},e.createElement(d,{dataSource:l,renderItem:t=>e.createElement(d.Item,{key:t.id,actions:[e.createElement(m,{onClick:()=>g(t)},o.t("replace.action.replace")),e.createElement(m,{onClick:()=>b(t)},o.t("replace.action.preview"))]},e.createElement(d.Item.Meta,{title:t.title}))}),s&&e.createElement("pre",null,e.createElement(T,{textToHighlight:s.body,searchWords:[s.keyword]}))))};export{$e as default};
