function s(n,t,r){function e(c,h){return c.map(u=>{const a=[...h,u[r.id]],i=u[r.children];return t(i?{...u,[r.children]:e(i,a)}:u,a)})}return e(n,[])}function f(n,t,r){s(n,(e,c)=>(t(e,c),e),r)}function l(n,t){const r=[];return f(n,(e,c)=>{r.push({...e,[t.path]:c})},t),r}export{l as a,s as t};
