/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var f=function(r){return r!=null&&r.constructor!=null&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)};export{f as i};
