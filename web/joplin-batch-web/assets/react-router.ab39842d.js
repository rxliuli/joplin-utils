import{i,p as U,m as M,j as b,A as B,s as F,a as L}from"./@remix-run/router.6675ec4c.js";import{a as g,r as o}from"./react.bcb0ff15.js";/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function I(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const N=typeof Object.is=="function"?Object.is:I,{useState:T,useEffect:V,useLayoutEffect:_,useDebugValue:$}=g;function k(e,t,n){const r=t(),[{inst:s},l]=T({inst:{value:r,getSnapshot:t}});return _(()=>{s.value=r,s.getSnapshot=t,C(s)&&l({inst:s})},[e,r,t]),V(()=>(C(s)&&l({inst:s}),e(()=>{C(s)&&l({inst:s})})),[e]),$(r),r}function C(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!N(n,r)}catch{return!0}}function G(e,t,n){return t()}const J=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",W=!J,X=W?G:k;"useSyncExternalStore"in g&&(e=>e.useSyncExternalStore)(g);const Y=o.exports.createContext(null),q=o.exports.createContext(null),j=o.exports.createContext(null),z=o.exports.createContext(null),v=o.exports.createContext(null),E=o.exports.createContext({outlet:null,matches:[]}),w=o.exports.createContext(null);function S(){return o.exports.useContext(v)!=null}function K(){return S()||i(!1),o.exports.useContext(v).location}const Q=o.exports.createContext(null);function Z(e){let t=o.exports.useContext(E).outlet;return t&&o.exports.createElement(Q.Provider,{value:e},t)}function A(e,t){S()||i(!1);let n=o.exports.useContext(j),{matches:r}=o.exports.useContext(E),s=r[r.length-1],l=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let c=K(),p;if(t){var d;let u=typeof t=="string"?U(t):t;a==="/"||((d=u.pathname)==null?void 0:d.startsWith(a))||i(!1),p=u}else p=c;let h=p.pathname||"/",m=a==="/"?h:h.slice(a.length)||"/",x=M(e,{pathname:m}),f=re(x&&x.map(u=>Object.assign({},u,{params:Object.assign({},l,u.params),pathname:b([a,u.pathname]),pathnameBase:u.pathnameBase==="/"?a:b([a,u.pathnameBase])})),r,n||void 0);return t?o.exports.createElement(v.Provider,{value:{location:y({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:B.Pop}},f):f}function H(){let e=ne(),t=L(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r};return o.exports.createElement(o.exports.Fragment,null,o.exports.createElement("h2",null,"Unhandled Thrown Error!"),o.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?o.exports.createElement("pre",{style:s},n):null,o.exports.createElement("p",null,"\u{1F4BF} Hey developer \u{1F44B}"),o.exports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own\xA0",o.exports.createElement("code",{style:l},"errorElement")," props on\xA0",o.exports.createElement("code",{style:l},"<Route>")))}class ee extends o.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?o.exports.createElement(w.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function te(e){let{routeContext:t,match:n,children:r}=e,s=o.exports.useContext(Y);return s&&n.route.errorElement&&(s._deepestRenderedBoundaryId=n.route.id),o.exports.createElement(E.Provider,{value:t},r)}function re(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,s=n==null?void 0:n.errors;if(s!=null){let l=r.findIndex(a=>a.route.id&&(s==null?void 0:s[a.route.id]));l>=0||i(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,a,c)=>{let p=a.route.id?s==null?void 0:s[a.route.id]:null,d=n?a.route.errorElement||o.exports.createElement(H,null):null,h=()=>o.exports.createElement(te,{match:a,routeContext:{outlet:l,matches:t.concat(r.slice(0,c+1))}},p?d:a.route.element!==void 0?a.route.element:l);return n&&(a.route.errorElement||c===0)?o.exports.createElement(ee,{location:n.location,component:d,error:p,children:h()}):h()},null)}var R;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(R||(R={}));function oe(e){let t=o.exports.useContext(j);return t||i(!1),t}function ne(){var e;let t=o.exports.useContext(w),n=oe(R.UseRouteError),r=o.exports.useContext(E),s=r.matches[r.matches.length-1];return t||(r||i(!1),s.route.id||i(!1),(e=n.errors)==null?void 0:e[s.route.id])}function ue(e){return Z(e.context)}function se(e){i(!1)}function ie(e){let{basename:t="/",children:n=null,location:r,navigationType:s=B.Pop,navigator:l,static:a=!1}=e;S()&&i(!1);let c=t.replace(/^\/*/,"/"),p=o.exports.useMemo(()=>({basename:c,navigator:l,static:a}),[c,l,a]);typeof r=="string"&&(r=U(r));let{pathname:d="/",search:h="",hash:m="",state:x=null,key:f="default"}=r,u=o.exports.useMemo(()=>{let D=F(d,c);return D==null?null:{pathname:D,search:h,hash:m,state:x,key:f}},[c,d,h,m,x,f]);return u==null?null:o.exports.createElement(z.Provider,{value:p},o.exports.createElement(v.Provider,{children:n,value:{location:u,navigationType:s}}))}function ce(e){let{children:t,location:n}=e,r=o.exports.useContext(q),s=r&&!t?r.router.routes:P(t);return A(s,n)}var O;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(O||(O={}));new Promise(()=>{});function P(e,t){t===void 0&&(t=[]);let n=[];return o.exports.Children.forEach(e,(r,s)=>{if(!o.exports.isValidElement(r))return;if(r.type===o.exports.Fragment){n.push.apply(n,P(r.props.children,t));return}r.type!==se&&i(!1);let l=[...t,s],a={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=P(r.props.children,l)),n.push(a)}),n}export{ue as O,ce as R,ie as a,se as b,K as u};