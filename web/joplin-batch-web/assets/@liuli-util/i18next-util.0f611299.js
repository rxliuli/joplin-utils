import{i as t}from"../i18next.4cf220a7.js";var s=(e=>(e.En="en",e.ZhCN="zhCN",e))(s||{}),l=class{async changeLang(e){await t.changeLanguage(e)}async init(e,n){await t.init({lng:n,resources:Object.entries(e).reduce((a,[r,i])=>(Reflect.set(a,r,{translation:i}),a),{}),keySeparator:!1})}t(...e){return t.t(e[0],e[1])}};export{l as I,s as L};
