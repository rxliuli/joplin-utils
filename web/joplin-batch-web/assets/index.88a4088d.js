import{r as t}from"./react.bcb0ff15.js";import{i as e,c as s,n as g}from"./index.f906e9a9.js";import{F as o,C as f,I as a,B as b,m as n}from"./antd.42db6bc7.js";import{u as x}from"./react-use.f90ee3b0.js";import"./classnames.fcae7549.js";import"./@liuli-util/react-router.aa8aeb03.js";import"./history.c39af881.js";import"./@babel/runtime.c7487f46.js";import"./@liuli-util/tree.28f56635.js";import"./react-router.ab39842d.js";import"./@remix-run/router.6675ec4c.js";import"./@liuli-util/i18next-util.0f611299.js";import"./i18next.4cf220a7.js";import"./react-dom.8eae3107.js";import"./scheduler.5bc07c2b.js";import"./@liuli-util/object.c3c9f8dd.js";import"./query-string.7a820323.js";import"./strict-uri-encode.82768c6e.js";import"./decode-uri-component.ca13c355.js";import"./split-on-first.cf03b920.js";import"./filter-obj.a2c77fe2.js";import"./@liuli-util/dom.7c7381d8.js";import"./@liuli-util/array.c1e23abd.js";import"./rc-util.f428f10c.js";import"./react-is.e13562bd.js";import"./rc-resize-observer.2035469b.js";import"./resize-observer-polyfill.d94677fa.js";import"./rc-motion.d81caebe.js";import"./@ant-design/icons.94a990fc.js";import"./@ant-design/icons-svg.ef1e3299.js";import"./@ant-design/colors.c9ebc826.js";import"./@ctrl/tinycolor.f9239932.js";import"./rc-menu.a6fb28fd.js";import"./shallowequal.9e085e62.js";import"./rc-overflow.0e71b119.js";import"./rc-trigger.99fa7870.js";import"./rc-align.2cb686aa.js";import"./dom-align.6f4926e0.js";import"./lodash.9f59e410.js";import"./rc-checkbox.c3f49b94.js";import"./rc-tabs.9a13c0cd.js";import"./rc-dropdown.f95b8d8f.js";import"./rc-select.1953886b.js";import"./rc-virtual-list.626f37f6.js";import"./rc-field-form.5c6c5039.js";import"./async-validator.e56392a6.js";import"./scroll-into-view-if-needed.93ce78d3.js";import"./compute-scroll-into-view.9b2bf0c9.js";import"./rc-image.2725ce8a.js";import"./rc-dialog.908bfba3.js";import"./rc-pagination.b5879506.js";import"./rc-textarea.c1453a04.js";import"./copy-to-clipboard.04c46956.js";import"./toggle-selection.ddb32806.js";import"./memoize-one.d2b40972.js";import"./rc-picker.cf8fb510.js";import"./rc-notification.c681ae48.js";import"./rc-tooltip.ae08d5b8.js";import"./rc-input.acb52a36.js";import"./tslib.42edd759.js";const Ut=()=>{var p;const[m]=o.useForm();async function l(){if(!await m.validateFields())return;const i=m.getFieldsValue();console.log("onFinish: ",i);try{s.token=i.token,s.baseUrl=i.baseUrl,await g.list({limit:1}),c(i),n.success(e.t("settings.msg.success"))}catch(u){console.error(u),n.error(e.t("settings.msg.error"))}}const[r,c]=x("settings");return t.exports.createElement(f,null,t.exports.createElement("h2",null,e.t("settings.title")),t.exports.createElement(o,{form:m,onFinish:l,initialValues:{token:r==null?void 0:r.token,baseUrl:(p=r==null?void 0:r.baseUrl)!=null?p:"http://localhost:41184"}},t.exports.createElement(o.Item,{name:"baseUrl",label:e.t("settings.form.baseUrl"),rules:[{required:!0}]},t.exports.createElement(a,{type:"url"})),t.exports.createElement(o.Item,{name:"token",label:e.t("settings.form.token"),rules:[{required:!0}]},t.exports.createElement(a.Password,null)),t.exports.createElement(o.Item,null,t.exports.createElement(b,{type:"primary",htmlType:"submit"},e.t("settings.action.submit")))))};export{Ut as default};