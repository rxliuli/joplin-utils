import{r as t}from"./react.bcb0ff15.js";import{i as e,c as s,n as g}from"./index.8f2caac7.js";import{F as o,C as f,I as a,B as b,m as n}from"./antd.829d9a81.js";import{u as x}from"./react-use.f90ee3b0.js";import"./classnames.fcae7549.js";import"./@liuli-util/react-router.19d629f6.js";import"./history.8c848a87.js";import"./@babel/runtime.77033aed.js";import"./@liuli-util/tree.28f56635.js";import"./react-router.ab39842d.js";import"./@remix-run/router.6675ec4c.js";import"./@liuli-util/i18next-util.367fde1b.js";import"./i18next.aeec162a.js";import"./react-dom.040937d5.js";import"./scheduler.5bc07c2b.js";import"./@liuli-util/object.c3c9f8dd.js";import"./query-string.7a820323.js";import"./strict-uri-encode.82768c6e.js";import"./decode-uri-component.ca13c355.js";import"./split-on-first.cf03b920.js";import"./filter-obj.a2c77fe2.js";import"./@liuli-util/dom.7c7381d8.js";import"./@liuli-util/array.c1e23abd.js";import"./rc-util.9e22709c.js";import"./react-is.e13562bd.js";import"./rc-resize-observer.ce41be3e.js";import"./resize-observer-polyfill.d94677fa.js";import"./rc-motion.4d67ed75.js";import"./@ant-design/icons.9bb0fd12.js";import"./@ant-design/icons-svg.ef1e3299.js";import"./@ant-design/colors.c9ebc826.js";import"./@ctrl/tinycolor.f9239932.js";import"./rc-menu.36873b05.js";import"./shallowequal.9e085e62.js";import"./rc-overflow.1c29c4d3.js";import"./rc-trigger.d92e6a44.js";import"./rc-align.8ac14694.js";import"./dom-align.6f4926e0.js";import"./lodash.9f59e410.js";import"./rc-checkbox.7c78741f.js";import"./rc-tabs.e6ff9661.js";import"./rc-dropdown.ef01eb3e.js";import"./rc-select.5290f568.js";import"./rc-virtual-list.03a0aeaa.js";import"./rc-field-form.bad3530c.js";import"./async-validator.e56392a6.js";import"./scroll-into-view-if-needed.93ce78d3.js";import"./compute-scroll-into-view.9b2bf0c9.js";import"./rc-image.6968645b.js";import"./rc-dialog.1314fb5b.js";import"./rc-pagination.d25a22f9.js";import"./rc-textarea.2a18f0c5.js";import"./copy-to-clipboard.04c46956.js";import"./toggle-selection.ddb32806.js";import"./memoize-one.d2b40972.js";import"./rc-picker.eb87d7c6.js";import"./rc-notification.a2f2b76e.js";import"./rc-tooltip.bb0bf028.js";import"./rc-input.b5c20646.js";import"./tslib.42edd759.js";const Ut=()=>{var p;const[m]=o.useForm();async function l(){if(!await m.validateFields())return;const i=m.getFieldsValue();console.log("onFinish: ",i);try{s.token=i.token,s.baseUrl=i.baseUrl,await g.list({limit:1}),c(i),n.success(e.t("settings.msg.success"))}catch(u){console.error(u),n.error(e.t("settings.msg.error"))}}const[r,c]=x("settings");return t.exports.createElement(f,null,t.exports.createElement("h2",null,e.t("settings.title")),t.exports.createElement(o,{form:m,onFinish:l,initialValues:{token:r==null?void 0:r.token,baseUrl:(p=r==null?void 0:r.baseUrl)!=null?p:"http://localhost:41184"}},t.exports.createElement(o.Item,{name:"baseUrl",label:e.t("settings.form.baseUrl"),rules:[{required:!0}]},t.exports.createElement(a,{type:"url"})),t.exports.createElement(o.Item,{name:"token",label:e.t("settings.form.token"),rules:[{required:!0}]},t.exports.createElement(a.Password,null)),t.exports.createElement(o.Item,null,t.exports.createElement(b,{type:"primary",htmlType:"submit"},e.t("settings.action.submit")))))};export{Ut as default};