(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{14:function(t,n,e){"use strict";var r,i,o=0,u=0,a=0,s=1e3,c=0,f=0,l=0,h="object"==typeof performance&&performance.now?performance:Date,p="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function v(){return f||(p(d),f=h.now()+l)}function d(){f=0}function y(){this._call=this._time=this._next=null}function _(t,n,e){var r=new y;return r.restart(t,n,e),r}function g(){f=(c=h.now())+l,o=u=0;try{!function(){v(),++o;for(var t,n=r;n;)(t=f-n._time)>=0&&n._call.call(null,t),n=n._next;--o}()}finally{o=0,function(){var t,n,e=r,o=1/0;for(;e;)e._call?(o>e._time&&(o=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:r=n);i=t,x(o)}(),f=0}}function w(){var t=h.now(),n=t-c;n>s&&(l-=n,c=t)}function x(t){o||(u&&(u=clearTimeout(u)),t-f>24?(t<1/0&&(u=setTimeout(g,t-h.now()-l)),a&&(a=clearInterval(a))):(a||(c=h.now(),a=setInterval(w,s)),o=1,p(g)))}y.prototype=_.prototype={constructor:y,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?v():+e)+(null==n?0:+n),this._next||i===this||(i?i._next=this:r=this,i=this),this._call=t,this._time=e,x()},stop:function(){this._call&&(this._call=null,this._time=1/0,x())}};var m=function(t,n,e){var r=new y,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?v():+e,r.restart((function o(u){u+=i,r.restart(o,i+=n,e),t(u)}),n,e),r)};e.d(n,"b",(function(){return _})),e.d(n,"a",(function(){return m}))},15:function(t,n,e){"use strict";var r={value:function(){}};function i(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new o(r)}function o(t){this._=t}function u(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function a(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function s(t,n,e){for(var i=0,o=t.length;i<o;++i)if(t[i].name===n){t[i]=r,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=e&&t.push({name:n,value:e}),t}o.prototype=i.prototype={constructor:o,on:function(t,n){var e,r=this._,i=u(t+"",r),o=-1,c=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<c;)if(e=(t=i[o]).type)r[e]=s(r[e],t.name,n);else if(null==n)for(e in r)r[e]=s(r[e],t.name,null);return this}for(;++o<c;)if((e=(t=i[o]).type)&&(e=a(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new o(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var c=i;e.d(n,"a",(function(){return c}))},16:function(t,n,e){"use strict";var r={},i={},o=34,u=10,a=13;function s(t){return new Function("d","return {"+t.map((function(t,n){return JSON.stringify(t)+": d["+n+"]"})).join(",")+"}")}var c=function(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function c(t,n){var s,c=[],f=t.length,l=0,h=0,p=f<=0,v=!1;function d(){if(p)return i;if(v)return v=!1,r;var n,s,c=l;if(t.charCodeAt(c)===o){for(;l++<f&&t.charCodeAt(l)!==o||t.charCodeAt(++l)===o;);return(n=l)>=f?p=!0:(s=t.charCodeAt(l++))===u?v=!0:s===a&&(v=!0,t.charCodeAt(l)===u&&++l),t.slice(c+1,n-1).replace(/""/g,'"')}for(;l<f;){if((s=t.charCodeAt(n=l++))===u)v=!0;else if(s===a)v=!0,t.charCodeAt(l)===u&&++l;else if(s!==e)continue;return t.slice(c,n)}return p=!0,t.slice(c,f)}for(t.charCodeAt(f-1)===u&&--f,t.charCodeAt(f-1)===a&&--f;(s=d())!==i;){for(var y=[];s!==r&&s!==i;)y.push(s),s=d();n&&null==(y=n(y,h++))||c.push(y)}return c}function f(n){return n.map(l).join(t)}function l(t){return null==t?"":n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,r,i=c(t,(function(t,i){if(e)return e(t,i-1);r=t,e=n?function(t,n){var e=s(t);return function(r,i){return n(e(r),i,t)}}(t,n):s(t)}));return i.columns=r||[],i},parseRows:c,format:function(n,e){return null==e&&(e=function(t){var n=Object.create(null),e=[];return t.forEach((function(t){for(var r in t)r in n||e.push(n[r]=r)})),e}(n)),[e.map(l).join(t)].concat(n.map((function(n){return e.map((function(t){return l(n[t])})).join(t)}))).join("\n")},formatRows:function(t){return t.map(f).join("\n")}}},f=c(","),l=f.parse,h=(f.parseRows,f.format,f.formatRows,c("\t")),p=h.parse;h.parseRows,h.format,h.formatRows;e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return l})),e.d(n,"c",(function(){return p}))},24:function(t,n,e){"use strict";var r=e(16);function i(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}var o=function(t,n){return fetch(t,n).then(i)};function u(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),o(n,e).then((function(n){return t(n,r)}))}}var a=u(r.a);u(r.c);function s(t){return function(n,e){return o(n,e).then((function(n){return(new DOMParser).parseFromString(n,t)}))}}s("application/xml"),s("text/html"),s("image/svg+xml");e.d(n,"a",(function(){return a}))},3:function(t,n,e){"use strict";var r="http://www.w3.org/1999/xhtml",i={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},o=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),i.hasOwnProperty(n)?{space:i[n],local:t}:t};function u(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===r&&n.documentElement.namespaceURI===r?n.createElement(t):n.createElementNS(e,t)}}function a(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var s=function(t){var n=o(t);return(n.local?a:u)(n)};function c(){}var f=function(t){return null==t?c:function(){return this.querySelector(t)}};function l(){return[]}var h=function(t){return new Array(t.length)};function p(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}p.prototype={constructor:p,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var v="$";function d(t,n,e,r,i,o){for(var u,a=0,s=n.length,c=o.length;a<c;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new p(t,o[a]);for(;a<s;++a)(u=n[a])&&(i[a]=u)}function y(t,n,e,r,i,o,u){var a,s,c,f={},l=n.length,h=o.length,d=new Array(l);for(a=0;a<l;++a)(s=n[a])&&(d[a]=c=v+u.call(s,s.__data__,a,n),c in f?i[a]=s:f[c]=s);for(a=0;a<h;++a)(s=f[c=v+u.call(t,o[a],a,o)])?(r[a]=s,s.__data__=o[a],f[c]=null):e[a]=new p(t,o[a]);for(a=0;a<l;++a)(s=n[a])&&f[d[a]]===s&&(i[a]=s)}function _(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function g(t){return function(){this.removeAttribute(t)}}function w(t){return function(){this.removeAttributeNS(t.space,t.local)}}function x(t,n){return function(){this.setAttribute(t,n)}}function m(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function b(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function A(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}var N=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function E(t){return function(){this.style.removeProperty(t)}}function M(t,n,e){return function(){this.style.setProperty(t,n,e)}}function S(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function j(t,n){return t.style.getPropertyValue(n)||N(t).getComputedStyle(t,null).getPropertyValue(n)}function O(t){return function(){delete this[t]}}function k(t,n){return function(){this[t]=n}}function T(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function C(t){return t.trim().split(/^|\s+/)}function q(t){return t.classList||new P(t)}function P(t){this._node=t,this._names=C(t.getAttribute("class")||"")}function z(t,n){for(var e=q(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function W(t,n){for(var e=q(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function D(t){return function(){z(this,t)}}function R(t){return function(){W(this,t)}}function L(t,n){return function(){(n.apply(this,arguments)?z:W)(this,t)}}P.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function B(){this.textContent=""}function I(t){return function(){this.textContent=t}}function U(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function V(){this.innerHTML=""}function X(t){return function(){this.innerHTML=t}}function F(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function H(){this.nextSibling&&this.parentNode.appendChild(this)}function Y(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function G(){return null}function J(){var t=this.parentNode;t&&t.removeChild(this)}function K(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function $(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}var Q={},Z=null;"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(Q={mouseenter:"mouseover",mouseleave:"mouseout"}));function tt(t,n,e){return t=nt(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function nt(t,n,e){return function(r){var i=Z;Z=r;try{t.call(this,this.__data__,n,e)}finally{Z=i}}}function et(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function rt(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function it(t,n,e){var r=Q.hasOwnProperty(t.type)?tt:nt;return function(i,o,u){var a,s=this.__on,c=r(n,o,u);if(s)for(var f=0,l=s.length;f<l;++f)if((a=s[f]).type===t.type&&a.name===t.name)return this.removeEventListener(a.type,a.listener,a.capture),this.addEventListener(a.type,a.listener=c,a.capture=e),void(a.value=n);this.addEventListener(t.type,c,e),a={type:t.type,name:t.name,value:n,listener:c,capture:e},s?s.push(a):this.__on=[a]}}function ot(t,n,e,r){var i=Z;t.sourceEvent=Z,Z=t;try{return n.apply(e,r)}finally{Z=i}}function ut(t,n,e){var r=N(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function at(t,n){return function(){return ut(this,t,n)}}function st(t,n){return function(){return ut(this,t,n.apply(this,arguments))}}var ct=[null];function ft(t,n){this._groups=t,this._parents=n}function lt(){return new ft([[document.documentElement]],ct)}ft.prototype=lt.prototype={constructor:ft,select:function(t){"function"!=typeof t&&(t=f(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],s=a.length,c=r[i]=new Array(s),l=0;l<s;++l)(o=a[l])&&(u=t.call(o,o.__data__,l,a))&&("__data__"in o&&(u.__data__=o.__data__),c[l]=u);return new ft(r,this._parents)},selectAll:function(t){var n;"function"!=typeof t&&(t=null==(n=t)?l:function(){return this.querySelectorAll(n)});for(var e=this._groups,r=e.length,i=[],o=[],u=0;u<r;++u)for(var a,s=e[u],c=s.length,f=0;f<c;++f)(a=s[f])&&(i.push(t.call(a,a.__data__,f,s)),o.push(a));return new ft(i,o)},filter:function(t){var n;"function"!=typeof t&&(n=t,t=function(){return this.matches(n)});for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o)for(var u,a=e[o],s=a.length,c=i[o]=[],f=0;f<s;++f)(u=a[f])&&t.call(u,u.__data__,f,a)&&c.push(u);return new ft(i,this._parents)},data:function(t,n){if(!t)return v=new Array(this.size()),f=-1,this.each((function(t){v[++f]=t})),v;var e,r=n?y:d,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var u=o.length,a=new Array(u),s=new Array(u),c=new Array(u),f=0;f<u;++f){var l=i[f],h=o[f],p=h.length,v=t.call(l,l&&l.__data__,f,i),_=v.length,g=s[f]=new Array(_),w=a[f]=new Array(_);r(l,h,g,w,c[f]=new Array(p),v,n);for(var x,m,b=0,A=0;b<_;++b)if(x=g[b]){for(b>=A&&(A=b+1);!(m=w[A])&&++A<_;);x._next=m||null}}return(a=new ft(a,i))._enter=s,a._exit=c,a},enter:function(){return new ft(this._enter||this._groups.map(h),this._parents)},exit:function(){return new ft(this._exit||this._groups.map(h),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var s,c=n[a],f=e[a],l=c.length,h=u[a]=new Array(l),p=0;p<l;++p)(s=c[p]||f[p])&&(h[p]=s);for(;a<r;++a)u[a]=n[a];return new ft(u,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=_);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],s=a.length,c=i[o]=new Array(s),f=0;f<s;++f)(u=a[f])&&(c[f]=u);c.sort(n)}return new ft(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each((function(){t[++n]=this})),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){var t=0;return this.each((function(){++t})),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=o(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?w:g:"function"==typeof n?e.local?A:b:e.local?m:x)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?E:"function"==typeof n?S:M)(t,n,null==e?"":e)):j(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?O:"function"==typeof n?T:k)(t,n)):this.node()[t]},classed:function(t,n){var e=C(t+"");if(arguments.length<2){for(var r=q(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?L:n?D:R)(e,n))},text:function(t){return arguments.length?this.each(null==t?B:("function"==typeof t?U:I)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?V:("function"==typeof t?F:X)(t)):this.node().innerHTML},raise:function(){return this.each(H)},lower:function(){return this.each(Y)},append:function(t){var n="function"==typeof t?t:s(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:s(t),r=null==n?G:"function"==typeof n?n:f(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(J)},clone:function(t){return this.select(t?$:K)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=et(t+""),u=o.length;if(!(arguments.length<2)){for(a=n?it:rt,null==e&&(e=!1),r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var s,c=0,f=a.length;c<f;++c)for(r=0,s=a[c];r<u;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?st:at)(t,n))}};var ht=function(t){return"string"==typeof t?new ft([[document.querySelector(t)]],[document.documentElement]):new ft([[t]],ct)},pt=0;function vt(){this._="@"+(++pt).toString(36)}vt.prototype=function(){return new vt}.prototype={constructor:vt,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var dt=function(){for(var t,n=Z;t=n.sourceEvent;)n=t;return n},yt=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]},_t=function(t){var n=dt();return n.changedTouches&&(n=n.changedTouches[0]),yt(t,n)},gt=function(t,n,e){arguments.length<3&&(e=n,n=dt().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return yt(t,r);return null};e.d(n,"c",(function(){return _t})),e.d(n,"d",(function(){return ht})),e.d(n,"e",(function(){return gt})),e.d(n,"b",(function(){return Z})),e.d(n,"a",(function(){return ot}))},7:function(t,n,e){"use strict";var r=function(t,n){var e;function r(){var r,i,o=e.length,u=0,a=0;for(r=0;r<o;++r)u+=(i=e[r]).x,a+=i.y;for(u=u/o-t,a=a/o-n,r=0;r<o;++r)(i=e[r]).x-=u,i.y-=a}return null==t&&(t=0),null==n&&(n=0),r.initialize=function(t){e=t},r.x=function(n){return arguments.length?(t=+n,r):t},r.y=function(t){return arguments.length?(n=+t,r):n},r};function i(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,u,a,s,c,f,l,h,p=t._root,v={data:r},d=t._x0,y=t._y0,_=t._x1,g=t._y1;if(!p)return t._root=v,t;for(;p.length;)if((c=n>=(o=(d+_)/2))?d=o:_=o,(f=e>=(u=(y+g)/2))?y=u:g=u,i=p,!(p=p[l=f<<1|c]))return i[l]=v,t;if(a=+t._x.call(null,p.data),s=+t._y.call(null,p.data),n===a&&e===s)return v.next=p,i?i[l]=v:t._root=v,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(c=n>=(o=(d+_)/2))?d=o:_=o,(f=e>=(u=(y+g)/2))?y=u:g=u}while((l=f<<1|c)==(h=(s>=u)<<1|a>=o));return i[h]=p,i[l]=v,t}var o=function(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i};function u(t){return t[0]}function a(t){return t[1]}function s(t,n,e){var r=new c(null==n?u:n,null==e?a:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function c(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function f(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var l=s.prototype=c.prototype;l.copy=function(){var t,n,e=new c(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=f(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=f(n));return e},l.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return i(this.cover(n,e),n,e,t)},l.addAll=function(t){var n,e,r,o,u=t.length,a=new Array(u),s=new Array(u),c=1/0,f=1/0,l=-1/0,h=-1/0;for(e=0;e<u;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(o=+this._y.call(null,n))||(a[e]=r,s[e]=o,r<c&&(c=r),r>l&&(l=r),o<f&&(f=o),o>h&&(h=o));for(l<c&&(c=this._x0,l=this._x1),h<f&&(f=this._y0,h=this._y1),this.cover(c,f).cover(l,h),e=0;e<u;++e)i(this,a[e],s[e],t[e]);return this},l.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{if(!(e>t||t>i||r>n||n>o))return this;var u,a,s=i-e,c=this._root;switch(a=(n<(r+o)/2)<<1|t<(e+i)/2){case 0:do{(u=new Array(4))[a]=c,c=u}while(o=r+(s*=2),t>(i=e+s)||n>o);break;case 1:do{(u=new Array(4))[a]=c,c=u}while(o=r+(s*=2),(e=i-s)>t||n>o);break;case 2:do{(u=new Array(4))[a]=c,c=u}while(r=o-(s*=2),t>(i=e+s)||r>n);break;case 3:do{(u=new Array(4))[a]=c,c=u}while(r=o-(s*=2),(e=i-s)>t||r>n)}this._root&&this._root.length&&(this._root=c)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},l.data=function(){var t=[];return this.visit((function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)})),t},l.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},l.find=function(t,n,e){var r,i,u,a,s,c,f,l=this._x0,h=this._y0,p=this._x1,v=this._y1,d=[],y=this._root;for(y&&d.push(new o(y,l,h,p,v)),null==e?e=1/0:(l=t-e,h=n-e,p=t+e,v=n+e,e*=e);c=d.pop();)if(!(!(y=c.node)||(i=c.x0)>p||(u=c.y0)>v||(a=c.x1)<l||(s=c.y1)<h))if(y.length){var _=(i+a)/2,g=(u+s)/2;d.push(new o(y[3],_,g,a,s),new o(y[2],i,g,_,s),new o(y[1],_,u,a,g),new o(y[0],i,u,_,g)),(f=(n>=g)<<1|t>=_)&&(c=d[d.length-1],d[d.length-1]=d[d.length-1-f],d[d.length-1-f]=c)}else{var w=t-+this._x.call(null,y.data),x=n-+this._y.call(null,y.data),m=w*w+x*x;if(m<e){var b=Math.sqrt(e=m);l=t-b,h=n-b,p=t+b,v=n+b,r=y.data}}return r},l.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(u=+this._y.call(null,t)))return this;var n,e,r,i,o,u,a,s,c,f,l,h,p=this._root,v=this._x0,d=this._y0,y=this._x1,_=this._y1;if(!p)return this;if(p.length)for(;;){if((c=o>=(a=(v+y)/2))?v=a:y=a,(f=u>=(s=(d+_)/2))?d=s:_=s,n=p,!(p=p[l=f<<1|c]))return this;if(!p.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;p.data!==t;)if(r=p,!(p=p.next))return this;return(i=p.next)&&delete p.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(p=n[0]||n[1]||n[2]||n[3])&&p===(n[3]||n[2]||n[1]||n[0])&&!p.length&&(e?e[h]=p:this._root=p),this):(this._root=i,this)},l.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},l.root=function(){return this._root},l.size=function(){var t=0;return this.visit((function(n){if(!n.length)do{++t}while(n=n.next)})),t},l.visit=function(t){var n,e,r,i,u,a,s=[],c=this._root;for(c&&s.push(new o(c,this._x0,this._y0,this._x1,this._y1));n=s.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,u=n.x1,a=n.y1)&&c.length){var f=(r+u)/2,l=(i+a)/2;(e=c[3])&&s.push(new o(e,f,l,u,a)),(e=c[2])&&s.push(new o(e,r,l,f,a)),(e=c[1])&&s.push(new o(e,f,i,u,l)),(e=c[0])&&s.push(new o(e,r,i,f,l))}return this},l.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new o(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var u,a=n.x0,s=n.y0,c=n.x1,f=n.y1,l=(a+c)/2,h=(s+f)/2;(u=i[0])&&e.push(new o(u,a,s,l,h)),(u=i[1])&&e.push(new o(u,l,s,c,h)),(u=i[2])&&e.push(new o(u,a,h,l,f)),(u=i[3])&&e.push(new o(u,l,h,c,f))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},l.x=function(t){return arguments.length?(this._x=t,this):this._x},l.y=function(t){return arguments.length?(this._y=t,this):this._y};var h=function(t){return function(){return t}},p=function(){return 1e-6*(Math.random()-.5)};function v(t){return t.x+t.vx}function d(t){return t.y+t.vy}var y=function(t){var n,e,r=1,i=1;function o(){for(var t,o,a,c,f,l,h,y=n.length,_=0;_<i;++_)for(o=s(n,v,d).visitAfter(u),t=0;t<y;++t)a=n[t],l=e[a.index],h=l*l,c=a.x+a.vx,f=a.y+a.vy,o.visit(g);function g(t,n,e,i,o){var u=t.data,s=t.r,v=l+s;if(!u)return n>c+v||i<c-v||e>f+v||o<f-v;if(u.index>a.index){var d=c-u.x-u.vx,y=f-u.y-u.vy,_=d*d+y*y;_<v*v&&(0===d&&(_+=(d=p())*d),0===y&&(_+=(y=p())*y),_=(v-(_=Math.sqrt(_)))/_*r,a.vx+=(d*=_)*(v=(s*=s)/(h+s)),a.vy+=(y*=_)*v,u.vx-=d*(v=1-v),u.vy-=y*v)}}}function u(t){if(t.data)return t.r=e[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function a(){if(n){var r,i,o=n.length;for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!=typeof t&&(t=h(null==t?1:+t)),o.initialize=function(t){n=t,a()},o.iterations=function(t){return arguments.length?(i=+t,o):i},o.strength=function(t){return arguments.length?(r=+t,o):r},o.radius=function(n){return arguments.length?(t="function"==typeof n?n:h(+n),a(),o):t},o};function _(t){return t.index}function g(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}var w=function(t){var n,e,r,i,o,u=_,a=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},s=h(30),c=1;function f(r){for(var i=0,u=t.length;i<c;++i)for(var a,s,f,l,h,v,d,y=0;y<u;++y)s=(a=t[y]).source,l=(f=a.target).x+f.vx-s.x-s.vx||p(),h=f.y+f.vy-s.y-s.vy||p(),l*=v=((v=Math.sqrt(l*l+h*h))-e[y])/v*r*n[y],h*=v,f.vx-=l*(d=o[y]),f.vy-=h*d,s.vx+=l*(d=1-d),s.vy+=h*d}function l(){if(r){var a,s,c=r.length,f=t.length,l=new Map(r.map((t,n)=>[u(t,n,r),t]));for(a=0,i=new Array(c);a<f;++a)(s=t[a]).index=a,"object"!=typeof s.source&&(s.source=g(l,s.source)),"object"!=typeof s.target&&(s.target=g(l,s.target)),i[s.source.index]=(i[s.source.index]||0)+1,i[s.target.index]=(i[s.target.index]||0)+1;for(a=0,o=new Array(f);a<f;++a)s=t[a],o[a]=i[s.source.index]/(i[s.source.index]+i[s.target.index]);n=new Array(f),v(),e=new Array(f),d()}}function v(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+a(t[e],e,t)}function d(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+s(t[n],n,t)}return null==t&&(t=[]),f.initialize=function(t){r=t,l()},f.links=function(n){return arguments.length?(t=n,l(),f):t},f.id=function(t){return arguments.length?(u=t,f):u},f.iterations=function(t){return arguments.length?(c=+t,f):c},f.strength=function(t){return arguments.length?(a="function"==typeof t?t:h(+t),v(),f):a},f.distance=function(t){return arguments.length?(s="function"==typeof t?t:h(+t),d(),f):s},f},x=e(15),m=e(14);function b(t){return t.x}function A(t){return t.y}var N=10,E=Math.PI*(3-Math.sqrt(5)),M=function(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,u=.6,a=new Map,s=Object(m.b)(f),c=Object(x.a)("tick","end");function f(){l(),c.call("tick",n),e<r&&(s.stop(),c.call("end",n))}function l(r){var s,c,f=t.length;void 0===r&&(r=1);for(var l=0;l<r;++l)for(e+=(o-e)*i,a.forEach((function(t){t(e)})),s=0;s<f;++s)null==(c=t[s]).fx?c.x+=c.vx*=u:(c.x=c.fx,c.vx=0),null==c.fy?c.y+=c.vy*=u:(c.y=c.fy,c.vy=0);return n}function h(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,null!=n.fx&&(n.x=n.fx),null!=n.fy&&(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=N*Math.sqrt(e),o=e*E;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function p(n){return n.initialize&&n.initialize(t),n}return null==t&&(t=[]),h(),n={tick:l,restart:function(){return s.restart(f),n},stop:function(){return s.stop(),n},nodes:function(e){return arguments.length?(t=e,h(),a.forEach(p),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(u=1-t,n):1-u},force:function(t,e){return arguments.length>1?(null==e?a.delete(t):a.set(t,p(e)),n):a.get(t)},find:function(n,e,r){var i,o,u,a,s,c=0,f=t.length;for(null==r?r=1/0:r*=r,c=0;c<f;++c)(u=(i=n-(a=t[c]).x)*i+(o=e-a.y)*o)<r&&(s=a,r=u);return s},on:function(t,e){return arguments.length>1?(c.on(t,e),n):c.on(t)}}},S=function(){var t,n,e,r,i=h(-30),o=1,u=1/0,a=.81;function c(r){var i,o=t.length,u=s(t,b,A).visitAfter(l);for(e=r,i=0;i<o;++i)n=t[i],u.visit(v)}function f(){if(t){var n,e,o=t.length;for(r=new Array(o),n=0;n<o;++n)e=t[n],r[e.index]=+i(e,n,t)}}function l(t){var n,e,i,o,u,a=0,s=0;if(t.length){for(i=o=u=0;u<4;++u)(n=t[u])&&(e=Math.abs(n.value))&&(a+=n.value,s+=e,i+=e*n.x,o+=e*n.y);t.x=i/s,t.y=o/s}else{(n=t).x=n.data.x,n.y=n.data.y;do{a+=r[n.data.index]}while(n=n.next)}t.value=a}function v(t,i,s,c){if(!t.value)return!0;var f=t.x-n.x,l=t.y-n.y,h=c-i,v=f*f+l*l;if(h*h/a<v)return v<u&&(0===f&&(v+=(f=p())*f),0===l&&(v+=(l=p())*l),v<o&&(v=Math.sqrt(o*v)),n.vx+=f*t.value*e/v,n.vy+=l*t.value*e/v),!0;if(!(t.length||v>=u)){(t.data!==n||t.next)&&(0===f&&(v+=(f=p())*f),0===l&&(v+=(l=p())*l),v<o&&(v=Math.sqrt(o*v)));do{t.data!==n&&(h=r[t.data.index]*e/v,n.vx+=f*h,n.vy+=l*h)}while(t=t.next)}}return c.initialize=function(n){t=n,f()},c.strength=function(t){return arguments.length?(i="function"==typeof t?t:h(+t),f(),c):i},c.distanceMin=function(t){return arguments.length?(o=t*t,c):Math.sqrt(o)},c.distanceMax=function(t){return arguments.length?(u=t*t,c):Math.sqrt(u)},c.theta=function(t){return arguments.length?(a=t*t,c):Math.sqrt(a)},c},j=function(t){var n,e,r,i=h(.1);function o(t){for(var i,o=0,u=n.length;o<u;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function u(){if(n){var o,u=n.length;for(e=new Array(u),r=new Array(u),o=0;o<u;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=h(null==t?0:+t)),o.initialize=function(t){n=t,u()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:h(+t),u(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:h(+n),u(),o):t},o},O=function(t){var n,e,r,i=h(.1);function o(t){for(var i,o=0,u=n.length;o<u;++o)(i=n[o]).vy+=(r[o]-i.y)*e[o]*t}function u(){if(n){var o,u=n.length;for(e=new Array(u),r=new Array(u),o=0;o<u;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=h(null==t?0:+t)),o.initialize=function(t){n=t,u()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:h(+t),u(),o):i},o.y=function(n){return arguments.length?(t="function"==typeof n?n:h(+n),u(),o):t},o};e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return y})),e.d(n,"c",(function(){return w})),e.d(n,"d",(function(){return S})),e.d(n,"e",(function(){return M})),e.d(n,"f",(function(){return j})),e.d(n,"g",(function(){return O}))},78:function(t,n){function e(t,n,e){var i=t.split(/\s/),o=[],u="";if(e=r(e),n<2)throw new Error("width must be at least 2 characters");return i.forEach((function(t){var r;if(u.length?u.length+1+t.length<=n?u+=" "+t:!e.splitWords||~e.preservedWords.indexOf(t)?(u.length&&o.push(u),u=t):u.length+5<=n&&t.length>5?(r=(r=n-u.length-2)>t.length-3?t.length-3:r,u+=" "+t.substring(0,r)+"-",o.push(u),u=t.substring(r)):(o.push(u),u=t):u=t,e.splitWords&&!~e.preservedWords.indexOf(t))for(;u.length>n;)o.push(u.substring(0,n-1)+"-"),u=u.substring(n-1)})),o.push(u),o}function r(t){var n={splitWords:!0,preservedWords:[]};if("object"!=typeof t&&void 0!==t)throw new Error("options must be an object");if("splitWords"in(t=t||{})&&(n.splitWords=!!t.splitWords),"preservedWords"in t){if(!Array.isArray(t.preservedWords))throw new Error("options.preservedWords must be an array");t.preservedWords.forEach((function(t){if("string"!=typeof t)throw new Error("options.preservedWords entries must be strings");n.preservedWords.push(t)}))}return n}t.exports=e,e.normalizeOptions=r},79:function(t,n,e){"use strict";var r=e(15),i=e(3);function o(){i.b.stopImmediatePropagation()}var u=function(){i.b.preventDefault(),i.b.stopImmediatePropagation()},a=function(t){var n=t.document.documentElement,e=Object(i.d)(t).on("dragstart.drag",u,!0);"onselectstart"in n?e.on("selectstart.drag",u,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")};var s=function(t){return function(){return t}};function c(t,n,e,r,i,o,u,a,s,c){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=u,this.dx=a,this.dy=s,this._=c}function f(){return!i.b.ctrlKey&&!i.b.button}function l(){return this.parentNode}function h(t){return null==t?{x:i.b.x,y:i.b.y}:t}function p(){return navigator.maxTouchPoints||"ontouchstart"in this}c.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var v=function(){var t,n,e,v,d=f,y=l,_=h,g=p,w={},x=Object(r.a)("start","drag","end"),m=0,b=0;function A(t){t.on("mousedown.drag",N).filter(g).on("touchstart.drag",S).on("touchmove.drag",j).on("touchend.drag touchcancel.drag",O).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function N(){if(!v&&d.apply(this,arguments)){var r=k("mouse",y.apply(this,arguments),i.c,this,arguments);r&&(Object(i.d)(i.b.view).on("mousemove.drag",E,!0).on("mouseup.drag",M,!0),a(i.b.view),o(),e=!1,t=i.b.clientX,n=i.b.clientY,r("start"))}}function E(){if(u(),!e){var r=i.b.clientX-t,o=i.b.clientY-n;e=r*r+o*o>b}w.mouse("drag")}function M(){var t,n,r,o;Object(i.d)(i.b.view).on("mousemove.drag mouseup.drag",null),t=i.b.view,n=e,r=t.document.documentElement,o=Object(i.d)(t).on("dragstart.drag",null),n&&(o.on("click.drag",u,!0),setTimeout((function(){o.on("click.drag",null)}),0)),"onselectstart"in r?o.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect),u(),w.mouse("end")}function S(){if(d.apply(this,arguments)){var t,n,e=i.b.changedTouches,r=y.apply(this,arguments),u=e.length;for(t=0;t<u;++t)(n=k(e[t].identifier,r,i.e,this,arguments))&&(o(),n("start"))}}function j(){var t,n,e=i.b.changedTouches,r=e.length;for(t=0;t<r;++t)(n=w[e[t].identifier])&&(u(),n("drag"))}function O(){var t,n,e=i.b.changedTouches,r=e.length;for(v&&clearTimeout(v),v=setTimeout((function(){v=null}),500),t=0;t<r;++t)(n=w[e[t].identifier])&&(o(),n("end"))}function k(t,n,e,r,o){var u,a,s,f=e(n,t),l=x.copy();if(Object(i.a)(new c(A,"beforestart",u,t,m,f[0],f[1],0,0,l),(function(){return null!=(i.b.subject=u=_.apply(r,o))&&(a=u.x-f[0]||0,s=u.y-f[1]||0,!0)})))return function h(p){var v,d=f;switch(p){case"start":w[t]=h,v=m++;break;case"end":delete w[t],--m;case"drag":f=e(n,t),v=m}Object(i.a)(new c(A,p,u,t,v,f[0]+a,f[1]+s,f[0]-d[0],f[1]-d[1],l),l.apply,l,[p,r,o])}}return A.filter=function(t){return arguments.length?(d="function"==typeof t?t:s(!!t),A):d},A.container=function(t){return arguments.length?(y="function"==typeof t?t:s(t),A):y},A.subject=function(t){return arguments.length?(_="function"==typeof t?t:s(t),A):_},A.touchable=function(t){return arguments.length?(g="function"==typeof t?t:s(!!t),A):g},A.on=function(){var t=x.on.apply(x,arguments);return t===x?A:t},A.clickDistance=function(t){return arguments.length?(b=(t=+t)*t,A):Math.sqrt(b)},A};e.d(n,"a",(function(){return v}))}}]);