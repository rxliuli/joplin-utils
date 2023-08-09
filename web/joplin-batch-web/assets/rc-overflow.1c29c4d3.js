import{s as k,t as g,u as z,o as y}from"./@babel/runtime.77033aed.js";import{r as a}from"./react.bcb0ff15.js";import{c as ie}from"./classnames.fcae7549.js";import{R as Ce}from"./rc-resize-observer.ce41be3e.js";import{h as Ye,e as Ne,g as qe}from"./rc-util.9e22709c.js";var Je=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],b=void 0;function Qe(e,u){var v=e.prefixCls,i=e.invalidate,l=e.item,n=e.renderItem,f=e.responsive,p=e.responsiveDisabled,o=e.registerSize,R=e.itemKey,h=e.className,_=e.style,H=e.children,Y=e.display,c=e.order,K=e.component,P=K===void 0?"div":K,U=k(e,Je),m=f&&!Y;function M(w){o(R,w)}a.exports.useEffect(function(){return function(){M(null)}},[]);var q=n&&l!==b?n(l):H,I;i||(I={opacity:m?0:1,height:m?0:b,overflowY:m?"hidden":b,order:f?c:b,pointerEvents:m?"none":b,position:m?"absolute":b});var O={};m&&(O["aria-hidden"]=!0);var x=a.exports.createElement(P,g({className:ie(!i&&v,h),style:z(z({},I),_)},O,U,{ref:u}),q);return f&&(x=a.exports.createElement(Ce,{onResize:function(J){var F=J.offsetWidth;M(F)},disabled:p},x)),x}var A=a.exports.forwardRef(Qe);A.displayName="Item";function Ze(){var e=Ye({}),u=y(e,2),v=u[1],i=a.exports.useRef([]),l=0,n=0;function f(p){var o=l;l+=1,i.current.length<o+1&&(i.current[o]=p);var R=i.current[o];function h(_){i.current[o]=typeof _=="function"?_(i.current[o]):_,Ne.cancel(n),n=Ne(function(){v({},!0)})}return[R,h]}return f}var et=["component"],tt=["className"],rt=["className"],at=function(u,v){var i=a.exports.useContext(X);if(!i){var l=u.component,n=l===void 0?"div":l,f=k(u,et);return a.exports.createElement(n,g({},f,{ref:v}))}var p=i.className,o=k(i,tt),R=u.className,h=k(u,rt);return a.exports.createElement(X.Provider,{value:null},a.exports.createElement(A,g({ref:v,className:ie(p,R)},o,h)))},ge=a.exports.forwardRef(at);ge.displayName="RawItem";var nt=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],X=a.exports.createContext(null),Ie="responsive",we="invalidate";function st(e){return"+ ".concat(e.length," ...")}function it(e,u){var v=e.prefixCls,i=v===void 0?"rc-overflow":v,l=e.data,n=l===void 0?[]:l,f=e.renderItem,p=e.renderRawItem,o=e.itemKey,R=e.itemWidth,h=R===void 0?10:R,_=e.ssr,H=e.style,Y=e.className,c=e.maxCount,K=e.renderRest,P=e.renderRawRest,U=e.suffix,m=e.component,M=m===void 0?"div":m,q=e.itemComponent,I=e.onVisibleChange,O=k(e,nt),x=Ze(),w=_==="full",J=x(null),F=y(J,2),$=F[0],Ee=F[1],N=$||0,be=x(new Map),oe=y(be,2),le=oe[0],ze=oe[1],Pe=x(0),ue=y(Pe,2),Ue=ue[0],We=ue[1],De=x(0),fe=y(De,2),T=fe[0],ke=fe[1],Ae=x(0),de=y(Ae,2),V=de[0],Ke=de[1],Me=a.exports.useState(null),ve=y(Me,2),Q=ve[0],ce=ve[1],Oe=a.exports.useState(null),me=y(Oe,2),L=me[0],Fe=me[1],E=a.exports.useMemo(function(){return L===null&&w?Number.MAX_SAFE_INTEGER:L||0},[L,$]),$e=a.exports.useState(!1),xe=y($e,2),Te=xe[0],Ve=xe[1],Z="".concat(i,"-item"),Se=Math.max(Ue,T),ee=c===Ie,S=n.length&&ee,ye=c===we,Le=S||typeof c=="number"&&n.length>c,C=a.exports.useMemo(function(){var t=n;return S?$===null&&w?t=n:t=n.slice(0,Math.min(n.length,N/h)):typeof c=="number"&&(t=n.slice(0,c)),t},[n,h,$,c,S]),te=a.exports.useMemo(function(){return S?n.slice(E+1):n.slice(C.length)},[n,C,S,E]),j=a.exports.useCallback(function(t,r){var s;return typeof o=="function"?o(t):(s=o&&(t==null?void 0:t[o]))!==null&&s!==void 0?s:r},[o]),je=a.exports.useCallback(f||function(t){return t},[f]);function G(t,r,s){L===t&&(r===void 0||r===Q)||(Fe(t),s||(Ve(t<n.length-1),I==null||I(t)),r!==void 0&&ce(r))}function Ge(t,r){Ee(r.clientWidth)}function pe(t,r){ze(function(s){var d=new Map(s);return r===null?d.delete(t):d.set(t,r),d})}function Xe(t,r){ke(r),We(T)}function Be(t,r){Ke(r)}function re(t){return le.get(j(C[t],t))}qe(function(){if(N&&Se&&C){var t=V,r=C.length,s=r-1;if(!r){G(0,null);return}for(var d=0;d<r;d+=1){var D=re(d);if(w&&(D=D||0),D===void 0){G(d-1,void 0,!0);break}if(t+=D,s===0&&t<=N||d===s-1&&t+re(s)<=N){G(s,null);break}else if(t+Se>N){G(d-1,t-D-V+T);break}}U&&re(0)+V>N&&ce(null)}},[N,le,T,V,j,C]);var Re=Te&&!!te.length,he={};Q!==null&&S&&(he={position:"absolute",left:Q,top:0});var W={prefixCls:Z,responsive:S,component:q,invalidate:ye},He=p?function(t,r){var s=j(t,r);return a.exports.createElement(X.Provider,{key:s,value:z(z({},W),{},{order:r,item:t,itemKey:s,registerSize:pe,display:r<=E})},p(t,r))}:function(t,r){var s=j(t,r);return a.exports.createElement(A,g({},W,{order:r,key:s,item:t,renderItem:je,itemKey:s,registerSize:pe,display:r<=E}))},ae,_e={order:Re?E:Number.MAX_SAFE_INTEGER,className:"".concat(Z,"-rest"),registerSize:Xe,display:Re};if(P)P&&(ae=a.exports.createElement(X.Provider,{value:z(z({},W),_e)},P(te)));else{var ne=K||st;ae=a.exports.createElement(A,g({},W,_e),typeof ne=="function"?ne(te):ne)}var se=a.exports.createElement(M,g({className:ie(!ye&&i,Y),style:H,ref:u},O),C.map(He),Le?ae:null,U&&a.exports.createElement(A,g({},W,{responsive:ee,responsiveDisabled:!S,order:E,className:"".concat(Z,"-suffix"),registerSize:Be,display:!0,style:he}),U));return ee&&(se=a.exports.createElement(Ce,{onResize:Ge,disabled:!S},se)),se}var B=a.exports.forwardRef(it);B.displayName="Overflow";B.Item=ge;B.RESPONSIVE=Ie;B.INVALIDATE=we;export{B as F};
