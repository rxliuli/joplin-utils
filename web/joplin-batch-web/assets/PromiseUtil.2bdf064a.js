import{w as a}from"./@liuli-util/async.20364c00.js";class m{static warpOnEvent(n){const s={},t=a(0).then(()=>new Promise((e,r)=>{try{e(n(s))}catch(o){r(o)}}));return Reflect.set(t,"on",(e,r)=>(s[e]=r,t)),t}}export{m as P};