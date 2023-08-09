import{r as S}from"./react-dom.040937d5.js";import{m as R,c as x,g as T,a as O,R as E,o as P}from"./mobx.c17624e6.js";import{r as l,R as p}from"./react.bcb0ff15.js";import{s as j}from"./use-sync-external-store.aff5ac42.js";if(!l.exports.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!R)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");function z(e){e()}function F(e){e||(e=z),x({reactionScheduler:e})}function _(e){return T(e)}var $=1e4,V=1e4,I=function(){function e(t){var r=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(a){a===void 0&&(a=$),clearTimeout(r.sweepTimeout),r.sweepTimeout=void 0;var n=Date.now();r.registrations.forEach(function(i,o){n-i.registeredAt>=a&&(r.finalize(i.value),r.registrations.delete(o))}),r.registrations.size>0&&r.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(t,r,a){this.registrations.set(a,{value:r,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(t){this.registrations.delete(t)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sweepTimeout===void 0&&(this.sweepTimeout=setTimeout(this.sweep,V))}}),e}(),D=typeof FinalizationRegistry<"u"?FinalizationRegistry:I,v=new D(function(e){var t;(t=e.reaction)===null||t===void 0||t.dispose(),e.reaction=null}),A=globalThis&&globalThis.__read||function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var a=r.call(e),n,i=[],o;try{for(;(t===void 0||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},B=function(){},h=O(),w=typeof h.stateVersion<"u";function y(e){e.reaction=new E("observer".concat(e.name),function(){var t;w||(e.stateVersion=Symbol()),(t=e.onStoreChange)===null||t===void 0||t.call(e)})}function N(e,t){t===void 0&&(t="observed");var r=p.useRef(null),a=A(p.useState(),2),n=a[1];if(!r.current){var i={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(f){return v.unregister(i),i.onStoreChange=f,i.reaction||(y(i),n(Symbol())),function(){var c;i.onStoreChange=null,(c=i.reaction)===null||c===void 0||c.dispose(),i.reaction=null}},getSnapshot:function(){return w?h.stateVersion:i.stateVersion}};r.current=i}var o=r.current;o.reaction||(y(o),v.register(r,o,o)),p.useDebugValue(o.reaction,_),j.exports.useSyncExternalStore(o.subscribe,o.getSnapshot,B);var u,s;if(o.reaction.track(function(){try{u=e()}catch(f){s=f}}),s)throw s;return u}var g=typeof Symbol=="function"&&Symbol.for,d=g?Symbol.for("react.forward_ref"):typeof l.exports.forwardRef=="function"&&l.exports.forwardRef(function(e){return null}).$$typeof,m=g?Symbol.for("react.memo"):typeof l.exports.memo=="function"&&l.exports.memo(function(e){return null}).$$typeof;function M(e,t){var r;if(m&&e.$$typeof===m)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var a=(r=t==null?void 0:t.forwardRef)!==null&&r!==void 0?r:!1,n=e,i=e.displayName||e.name;if(d&&e.$$typeof===d&&(a=!0,n=e.render,typeof n!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var o=function(u,s){return N(function(){return n(u,s)},i)};return o.displayName=e.displayName,Object.defineProperty(o,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(o.contextTypes=e.contextTypes),a&&(o=l.exports.forwardRef(o)),o=l.exports.memo(o),L(e,o),o}var G={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function L(e,t){Object.keys(e).forEach(function(r){G[r]||Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}function H(e,t){return l.exports.useState(function(){return P(e(),t,{autoBind:!0})})[0]}globalThis&&globalThis.__read;var b;F(S.exports.unstable_batchedUpdates);b=v.finalizeAllImmediately;export{M as o,H as u};
