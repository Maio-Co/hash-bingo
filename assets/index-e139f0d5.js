import{aS as s}from"./index-d9a9a9ca.js";var a={exports:{}};/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */(function(m,p){var n=s,e=n.Buffer;function l(r,f){for(var o in r)f[o]=r[o]}e.from&&e.alloc&&e.allocUnsafe&&e.allocUnsafeSlow?m.exports=n:(l(n,p),p.Buffer=t);function t(r,f,o){return e(r,f,o)}t.prototype=Object.create(e.prototype),l(e,t),t.from=function(r,f,o){if(typeof r=="number")throw new TypeError("Argument must not be a number");return e(r,f,o)},t.alloc=function(r,f,o){if(typeof r!="number")throw new TypeError("Argument must be a number");var u=e(r);return f!==void 0?typeof o=="string"?u.fill(f,o):u.fill(f):u.fill(0),u},t.allocUnsafe=function(r){if(typeof r!="number")throw new TypeError("Argument must be a number");return e(r)},t.allocUnsafeSlow=function(r){if(typeof r!="number")throw new TypeError("Argument must be a number");return n.SlowBuffer(r)}})(a,a.exports);var i=a.exports;export{i as s};