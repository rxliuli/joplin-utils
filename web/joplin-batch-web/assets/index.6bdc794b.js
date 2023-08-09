import{r as t}from"./react.bcb0ff15.js";import{L as i}from"./@liuli-util/i18next-util.367fde1b.js";import{g as r}from"./index.355718d3.js";import{u as e}from"./react-use.f90ee3b0.js";import{C as n}from"./antd.829d9a81.js";import{R as p}from"./react-markdown.64120013.js";import"./classnames.fcae7549.js";import"./i18next.aeec162a.js";import"./@babel/runtime.77033aed.js";import"./@liuli-util/react-router.19d629f6.js";import"./history.8c848a87.js";import"./@liuli-util/tree.28f56635.js";import"./react-router.ab39842d.js";import"./@remix-run/router.6675ec4c.js";import"./react-dom.040937d5.js";import"./scheduler.5bc07c2b.js";import"./@liuli-util/object.c3c9f8dd.js";import"./query-string.7a820323.js";import"./strict-uri-encode.82768c6e.js";import"./decode-uri-component.ca13c355.js";import"./split-on-first.cf03b920.js";import"./filter-obj.a2c77fe2.js";import"./@liuli-util/dom.7c7381d8.js";import"./@liuli-util/array.c1e23abd.js";import"./rc-util.9e22709c.js";import"./react-is.e13562bd.js";import"./rc-resize-observer.ce41be3e.js";import"./resize-observer-polyfill.d94677fa.js";import"./rc-motion.4d67ed75.js";import"./@ant-design/icons.9bb0fd12.js";import"./@ant-design/icons-svg.ef1e3299.js";import"./@ant-design/colors.c9ebc826.js";import"./@ctrl/tinycolor.f9239932.js";import"./rc-menu.36873b05.js";import"./shallowequal.9e085e62.js";import"./rc-overflow.1c29c4d3.js";import"./rc-trigger.d92e6a44.js";import"./rc-align.8ac14694.js";import"./dom-align.6f4926e0.js";import"./lodash.9f59e410.js";import"./rc-checkbox.7c78741f.js";import"./rc-tabs.e6ff9661.js";import"./rc-dropdown.ef01eb3e.js";import"./rc-select.5290f568.js";import"./rc-virtual-list.03a0aeaa.js";import"./rc-field-form.bad3530c.js";import"./async-validator.e56392a6.js";import"./scroll-into-view-if-needed.93ce78d3.js";import"./compute-scroll-into-view.9b2bf0c9.js";import"./rc-image.6968645b.js";import"./rc-dialog.1314fb5b.js";import"./rc-pagination.d25a22f9.js";import"./rc-textarea.2a18f0c5.js";import"./copy-to-clipboard.04c46956.js";import"./toggle-selection.ddb32806.js";import"./memoize-one.d2b40972.js";import"./rc-picker.eb87d7c6.js";import"./rc-notification.a2f2b76e.js";import"./rc-tooltip.bb0bf028.js";import"./rc-input.b5c20646.js";import"./tslib.42edd759.js";import"./remark-parse.ae27876c.js";import"./mdast-util-from-markdown.44cf8fe8.js";import"./mdast-util-to-string.fb536fe5.js";import"./micromark.74065510.js";import"./micromark-util-combine-extensions.697f0677.js";import"./micromark-util-chunked.52039b2e.js";import"./micromark-factory-space.8ec3c024.js";import"./micromark-util-character.2c47e118.js";import"./micromark-core-commonmark.3fac04b8.js";import"./micromark-util-classify-character.f47a059b.js";import"./micromark-util-resolve-all.d38fe386.js";import"./decode-named-character-reference.0cf99f69.js";import"./micromark-util-subtokenize.980f7106.js";import"./micromark-factory-destination.f465b346.js";import"./micromark-factory-label.bdfeb2ce.js";import"./micromark-factory-title.f3aaaa31.js";import"./micromark-factory-whitespace.1bcc98ff.js";import"./micromark-util-normalize-identifier.d8c35b62.js";import"./micromark-util-html-tag-name.94b32f7b.js";import"./micromark-util-decode-numeric-character-reference.a2285e6c.js";import"./micromark-util-decode-string.5840a04a.js";import"./unist-util-stringify-position.9bacc487.js";import"./prop-types.da681dba.js";import"./property-information.89563893.js";import"./unist-util-visit.23fe510a.js";import"./unist-util-visit-parents.7a4d7581.js";import"./unist-util-is.01e12dde.js";import"./hast-util-whitespace.a4a4a501.js";import"./space-separated-tokens.35ab6e8e.js";import"./comma-separated-tokens.09eb054d.js";import"./style-to-object.75795970.js";import"./inline-style-parser.94222170.js";import"./unified.cb173dc7.js";import"./bail.2d65b3d4.js";import"./is-buffer.8f2d14e8.js";import"./extend.9f70b7a3.js";import"./is-plain-obj.5914775f.js";import"./trough.51e639e8.js";import"./vfile.7e51f900.js";import"./vfile-message.84519071.js";import"./remark-rehype.2216e902.js";import"./mdast-util-to-hast.f14eb9e2.js";import"./unist-builder.2e9ab696.js";import"./unist-util-position.4af3aa9c.js";import"./unist-util-generated.204d4e65.js";import"./mdast-util-definitions.a742159e.js";import"./micromark-util-sanitize-uri.c047199a.js";import"./trim-lines.43d268d3.js";const m=`# joplin-batch-web

Handles some batch operations that are not supported by Joplin itself, and presents them as a visual interface.

- [x] Check for unreferenced attachment resources
      Some unused attachment resources are not cleaned up in time
- [x] Check for referenced attachment resources that do not exist
      Some attachments that are being used may not exist for various reasons
- [x] Convert external links to internal note references
      Would like to be able to convert previous blog links to internal \`:/id\` links to ensure they never expire
- [x] Check for notes that don't have a parent directory (usually an error)

## Getting Started

1. open joplin desktop version
2. Enable the web clipper
3. Fill out the configuration in the [Settings](https://joplin-utils.rxliuli.com/web/joplin-batch-web/#/settings) page
4. Navigate to the relevant function page

![guide](https://github.com/rxliuli/joplin-utils/raw/master/packages/joplin-batch-web/docs/images/guide.gif)

> If you want to participate in the development or run locally, you can refer to [Participate in the project](./docs/dev.md)

## FAQ

### Why not use the cli form

The cli form is not very suitable for this scenario, e.g. when you need to preview unusual attachments or notes, which is more troublesome at the command line.

### Will it record my note data

The website works locally, there is no back-end server, if you are still worried, you can check the source code [joplin-batch-web](https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-batch-web)
`,a=`# joplin-batch-web

\u5904\u7406\u4E00\u4E9B Joplin \u672C\u8EAB\u4E0D\u652F\u6301\u7684\u6279\u91CF\u64CD\u4F5C\uFF0C\u4EE5\u53EF\u89C6\u5316\u754C\u9762\u7684\u5F62\u5F0F\u5C55\u73B0\u51FA\u6765\u3002

- [x] \u68C0\u67E5\u662F\u5426\u5B58\u5728\u6CA1\u6709\u5F15\u7528\u7684\u9644\u4EF6\u8D44\u6E90
      \u4E00\u4E9B\u6CA1\u6709\u4F7F\u7528\u7684\u9644\u4EF6\u8D44\u6E90\u6CA1\u6709\u88AB\u53CA\u65F6\u6E05\u7406
- [x] \u68C0\u67E5\u5F15\u7528\u7684\u9644\u4EF6\u8D44\u6E90\u4E0D\u5B58\u5728\u7684\u60C5\u51B5
      \u4E00\u4E9B\u6B63\u5728\u4F7F\u7528\u7684\u9644\u4EF6\u53EF\u80FD\u7531\u4E8E\u5404\u79CD\u539F\u56E0\u4E0D\u5B58\u5728\u4E86
- [x] \u8F6C\u6362\u5916\u90E8\u94FE\u63A5\u4E3A\u5185\u90E8\u7B14\u8BB0\u5F15\u7528
      \u5E0C\u671B\u80FD\u591F\u5C06\u4E4B\u524D\u7684 blog \u94FE\u63A5\u8F6C\u6362\u4E3A\u5185\u90E8\u7684 \`:/id\` \u94FE\u63A5\u4EE5\u4FDD\u8BC1\u6C38\u4E0D\u8FC7\u671F
- [x] \u68C0\u67E5\u662F\u5426\u5B58\u5728\u6CA1\u6709\u7236\u7EA7\u76EE\u5F55\u7684\u7B14\u8BB0\uFF08\u4E00\u822C\u662F\u9519\u8BEF\uFF09

## \u5F00\u59CB

1. \u6253\u5F00 joplin \u684C\u9762\u7248
2. \u542F\u7528\u7F51\u9875\u526A\u8F91\u5668
3. \u5728 [\u8BBE\u7F6E](https://joplin-utils.rxliuli.com/web/joplin-batch-web/#/settings) \u9875\u9762\u586B\u5199\u914D\u7F6E
4. \u5BFC\u822A\u5230\u76F8\u5173\u529F\u80FD\u9875\u9762

![guide](https://github.com/rxliuli/joplin-utils/raw/master/packages/joplin-batch-web/docs/images/guide.gif)

> \u5982\u679C\u60A8\u5E0C\u671B\u53C2\u4E0E\u5F00\u53D1\u6216\u5728\u672C\u5730\u8FD0\u884C\uFF0C\u53EF\u4EE5\u53C2\u8003 [\u53C2\u4E0E\u9879\u76EE](./docs/zh/dev.md)

## FAQ

### \u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528 cli \u7684\u5F62\u5F0F

cli \u7684\u5F62\u5F0F\u4E0D\u592A\u9002\u5408\u8FD9\u79CD\u573A\u666F\uFF0C\u4F8B\u5982\u9700\u8981\u9884\u89C8\u5F02\u5E38\u7684\u9644\u4EF6\u6216\u7B14\u8BB0\uFF0C\u5728\u547D\u4EE4\u884C\u4E0B\u6BD4\u8F83\u9EBB\u70E6\u3002

### \u5B83\u4F1A\u8BB0\u5F55\u6211\u7684\u7B14\u8BB0\u6570\u636E\u4E48

\u7F51\u7AD9\u662F\u5168\u672C\u5730\u5DE5\u4F5C\u7684\uFF0C\u6CA1\u6709\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u5982\u679C\u4F60\u4ECD\u7136\u62C5\u5FE7\uFF0C\u53EF\u4EE5\u68C0\u67E5\u6E90\u4EE3\u7801 [joplin-batch-web](https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-batch-web)
`,s="_home_19rhz_1",l={home:s},uo=()=>{const[o]=e("language",r());return t.exports.createElement(n,null,t.exports.createElement(p,{className:l.home},o===i.En?m:a))};export{uo as default};
