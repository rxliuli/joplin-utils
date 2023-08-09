import{r as f}from"./react.bcb0ff15.js";var a={exports:{}},s={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=f.exports;function d(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var p=typeof Object.is=="function"?Object.is:d,S=u.useState,v=u.useEffect,l=u.useLayoutEffect,y=u.useDebugValue;function m(t,e){var r=e(),o=S({inst:{value:r,getSnapshot:e}}),n=o[0].inst,i=o[1];return l(function(){n.value=r,n.getSnapshot=e,c(n)&&i({inst:n})},[t,r,e]),v(function(){return c(n)&&i({inst:n}),t(function(){c(n)&&i({inst:n})})},[t]),y(r),r}function c(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!p(t,r)}catch{return!0}}function x(t,e){return e()}var h=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?x:m;s.useSyncExternalStore=u.useSyncExternalStore!==void 0?u.useSyncExternalStore:h;(function(t){t.exports=s})(a);export{a as s};
