import{c as N}from"./unist-util-is.01e12dde.js";const E=!0,I="skip",g=!1,A=function(n,f,u,o){typeof f=="function"&&typeof u!="function"&&(o=u,u=f,f=null);const h=N(f),a=o?-1:1;y(n,null,[])();function y(t,b,l){const r=typeof t=="object"&&t!==null?t:{};let s;return typeof r.type=="string"&&(s=typeof r.tagName=="string"?r.tagName:typeof r.name=="string"?r.name:void 0,Object.defineProperty(p,"name",{value:"node ("+(r.type+(s?"<"+s+">":""))+")"})),p;function p(){let i=[],c,e,m;if((!f||h(t,b,l[l.length-1]||null))&&(i=P(u(t,l)),i[0]===g))return i;if(t.children&&i[0]!==I)for(e=(o?t.children.length:-1)+a,m=l.concat(t);e>-1&&e<t.children.length;){if(c=y(t.children[e],e,m)(),c[0]===g)return c;e=typeof c[1]=="number"?c[1]:e+a}return i}}};function P(n){return Array.isArray(n)?n:typeof n=="number"?[E,n]:[n]}export{g as E,A as v};
