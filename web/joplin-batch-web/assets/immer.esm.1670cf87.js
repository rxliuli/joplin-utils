function y(t){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(n){return"'"+n+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function g(t){return!!t&&!!t[l]}function P(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var r=Object.getPrototypeOf(e);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===dt}(t)||Array.isArray(t)||!!t[ot]||!!t.constructor[ot]||$(t)||C(t))}function w(t,e,r){r===void 0&&(r=!1),O(t)===0?(r?Object.keys:H)(t).forEach(function(o){r&&typeof o=="symbol"||e(o,t[o],t)}):t.forEach(function(o,n){return e(n,o,t)})}function O(t){var e=t[l];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:$(t)?2:C(t)?3:0}function R(t,e){return O(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function ct(t,e){return O(t)===2?t.get(e):t[e]}function nt(t,e,r){var o=O(t);o===2?t.set(e,r):o===3?(t.delete(e),t.add(r)):t[e]=r}function at(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function $(t){return yt&&t instanceof Map}function C(t){return vt&&t instanceof Set}function b(t){return t.o||t.t}function X(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=ht(t);delete e[l];for(var r=H(e),o=0;o<r.length;o++){var n=r[o],i=e[n];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[n]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[n]})}return Object.create(Object.getPrototypeOf(t),e)}function q(t,e){return e===void 0&&(e=!1),B(t)||g(t)||!P(t)||(O(t)>1&&(t.set=t.add=t.clear=t.delete=st),Object.freeze(t),e&&w(t,function(r,o){return q(o,!0)},!0)),t}function st(){y(2)}function B(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function d(t){var e=bt[t];return e||y(18,t),e}function T(){return A}function k(t,e){e&&(d("Patches"),t.u=[],t.s=[],t.v=e)}function F(t){K(t),t.p.forEach(lt),t.p=null}function K(t){t===A&&(A=t.l)}function Z(t){return A={p:[],l:A,h:t,m:!0,_:0}}function lt(t){var e=t[l];e.i===0||e.i===1?e.j():e.O=!0}function z(t,e){e._=e.p.length;var r=e.p[0],o=t!==void 0&&t!==r;return e.h.g||d("ES5").S(e,t,o),o?(r[l].P&&(F(e),y(4)),P(t)&&(t=x(e,t),e.l||_(e,t)),e.u&&d("Patches").M(r[l].t,t,e.u,e.s)):t=x(e,r,[]),F(e),e.u&&e.v(e.u,e.s),t!==it?t:void 0}function x(t,e,r){if(B(e))return e;var o=e[l];if(!o)return w(e,function(i,u){return V(t,o,e,i,u,r)},!0),e;if(o.A!==t)return e;if(!o.P)return _(t,o.t,!0),o.t;if(!o.I){o.I=!0,o.A._--;var n=o.i===4||o.i===5?o.o=X(o.k):o.o;w(o.i===3?new Set(n):n,function(i,u){return V(t,o,n,i,u,r)}),_(t,n,!1),r&&t.u&&d("Patches").R(o,r,t.u,t.s)}return o.o}function V(t,e,r,o,n,i){if(g(n)){var u=x(t,n,i&&e&&e.i!==3&&!R(e.D,o)?i.concat(o):void 0);if(nt(r,o,u),!g(u))return;t.m=!1}if(P(n)&&!B(n)){if(!t.h.F&&t._<1)return;x(t,n),e&&e.A.l||_(t,n)}}function _(t,e,r){r===void 0&&(r=!1),t.h.F&&t.m&&q(e,r)}function I(t,e){var r=t[l];return(r?b(r):t)[e]}function Y(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var o=Object.getOwnPropertyDescriptor(r,e);if(o)return o;r=Object.getPrototypeOf(r)}}function W(t){t.P||(t.P=!0,t.l&&W(t.l))}function M(t){t.o||(t.o=X(t.t))}function U(t,e,r){var o=$(e)?d("MapSet").N(e,r):C(e)?d("MapSet").T(e,r):t.g?function(n,i){var u=Array.isArray(n),c={i:u?1:0,A:i?i.A:T(),P:!1,I:!1,D:{},l:i,t:n,k:null,o:null,j:null,C:!1},s=c,f=N;u&&(s=[c],f=j);var a=Proxy.revocable(s,f),m=a.revoke,v=a.proxy;return c.k=v,c.j=m,v}(e,r):d("ES5").J(e,r);return(r?r.A:T()).p.push(o),o}function pt(t){return g(t)||y(22,t),function e(r){if(!P(r))return r;var o,n=r[l],i=O(r);if(n){if(!n.P&&(n.i<4||!d("ES5").K(n)))return n.t;n.I=!0,o=tt(r,i),n.I=!1}else o=tt(r,i);return w(o,function(u,c){n&&ct(n.t,u)===c||nt(o,u,e(c))}),i===3?new Set(o):o}(t)}function tt(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return X(t)}var et,A,G=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",yt=typeof Map<"u",vt=typeof Set<"u",rt=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",it=G?Symbol.for("immer-nothing"):((et={})["immer-nothing"]=!0,et),ot=G?Symbol.for("immer-draftable"):"__$immer_draftable",l=G?Symbol.for("immer-state"):"__$immer_state",dt=""+Object.prototype.constructor,H=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,ht=Object.getOwnPropertyDescriptors||function(t){var e={};return H(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},bt={},N={get:function(t,e){if(e===l)return t;var r=b(t);if(!R(r,e))return function(n,i,u){var c,s=Y(i,u);return s?"value"in s?s.value:(c=s.get)===null||c===void 0?void 0:c.call(n.k):void 0}(t,r,e);var o=r[e];return t.I||!P(o)?o:o===I(t.t,e)?(M(t),t.o[e]=U(t.A.h,o,t)):o},has:function(t,e){return e in b(t)},ownKeys:function(t){return Reflect.ownKeys(b(t))},set:function(t,e,r){var o=Y(b(t),e);if(o!=null&&o.set)return o.set.call(t.k,r),!0;if(!t.P){var n=I(b(t),e),i=n==null?void 0:n[l];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(at(r,n)&&(r!==void 0||R(t.t,e)))return!0;M(t),W(t)}return t.o[e]===r&&typeof r!="number"&&(r!==void 0||e in t.o)||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return I(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,M(t),W(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=b(t),o=Reflect.getOwnPropertyDescriptor(r,e);return o&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:o.enumerable,value:r[e]}},defineProperty:function(){y(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){y(12)}},j={};w(N,function(t,e){j[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),j.deleteProperty=function(t,e){return j.set.call(this,t,e,void 0)},j.set=function(t,e,r){return N.set.call(this,t[0],e,r,t[0])};var Pt=function(){function t(r){var o=this;this.g=rt,this.F=!0,this.produce=function(n,i,u){if(typeof n=="function"&&typeof i!="function"){var c=i;i=n;var s=o;return function(h){var ut=this;h===void 0&&(h=c);for(var E=arguments.length,L=Array(E>1?E-1:0),D=1;D<E;D++)L[D-1]=arguments[D];return s.produce(h,function(ft){var Q;return(Q=i).call.apply(Q,[ut,ft].concat(L))})}}var f;if(typeof i!="function"&&y(6),u!==void 0&&typeof u!="function"&&y(7),P(n)){var a=Z(o),m=U(o,n,void 0),v=!0;try{f=i(m),v=!1}finally{v?F(a):K(a)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(h){return k(a,u),z(h,a)},function(h){throw F(a),h}):(k(a,u),z(f,a))}if(!n||typeof n!="object"){if((f=i(n))===void 0&&(f=n),f===it&&(f=void 0),o.F&&q(f,!0),u){var S=[],J=[];d("Patches").M(n,f,S,J),u(S,J)}return f}y(21,n)},this.produceWithPatches=function(n,i){if(typeof n=="function")return function(f){for(var a=arguments.length,m=Array(a>1?a-1:0),v=1;v<a;v++)m[v-1]=arguments[v];return o.produceWithPatches(f,function(S){return n.apply(void 0,[S].concat(m))})};var u,c,s=o.produce(n,i,function(f,a){u=f,c=a});return typeof Promise<"u"&&s instanceof Promise?s.then(function(f){return[f,u,c]}):[s,u,c]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){P(r)||y(8),g(r)&&(r=pt(r));var o=Z(this),n=U(this,r,void 0);return n[l].C=!0,K(o),n},e.finishDraft=function(r,o){var n=r&&r[l],i=n.A;return k(i,o),z(void 0,i)},e.setAutoFreeze=function(r){this.F=r},e.setUseProxies=function(r){r&&!rt&&y(20),this.g=r},e.applyPatches=function(r,o){var n;for(n=o.length-1;n>=0;n--){var i=o[n];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}n>-1&&(o=o.slice(n+1));var u=d("Patches").$;return g(r)?u(r,o):this.produce(r,function(c){return u(c,o)})},t}(),p=new Pt,mt=p.produce;p.produceWithPatches.bind(p);p.setAutoFreeze.bind(p);p.setUseProxies.bind(p);p.applyPatches.bind(p);p.createDraft.bind(p);p.finishDraft.bind(p);const gt=mt;export{gt as p};
