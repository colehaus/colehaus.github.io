!function(e){function t(t){for(var a,o,u=t[0],i=t[1],b=t[2],d=0,p=[];d<u.length;d++)o=u[d],n[o]&&p.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(c&&c(t);p.length;)p.shift()();return l.push.apply(l,b||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],a=!0,u=1;u<r.length;u++){var i=r[u];0!==n[i]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={5:0},l=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var b=0;b<u.length;b++)t(u[b]);var c=i;l.push([175,0,1]),r()}({175:function(e,t,r){"use strict";r.r(t);r(45);var a=r(1),n=r.n(a),l=r(18);n()(()=>{const e={grid:{show:!1},colors:[l.a.value[3],l.a.value[1]],legend:{show:!1},bars:{show:!0}};n.a.plot(n()("#in-upper-spark"),[{label:"current",data:[[5,1]]},{label:"alternatives",data:[[-3,1],[-2,0],[-1,4],[0,5],[1,4],[2,0],[3,0],[4,0],[6,0]]}],e),n.a.plot(n()("#in-middle-spark"),[{label:"current",data:[[1,4]]},{label:"alternatives",data:[[-3,1],[-2,0],[-1,4],[0,5],[2,0]]}],e),n.a.plot(n()("#mediocre-spark"),[{label:"current",data:[[1,2]]},{label:"alternatives",data:[[-3,1],[-2,0],[-1,2],[0,2],[2,0]]}],e),n.a.plot(n()("#ideal-spark"),[{label:"current",data:[[1,2]]},{label:"alternatives",data:[[-3,1],[-2,0],[-1,2],[0,2],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0],[15,1]]}],e)})},18:function(e,t,r){"use strict";let a={hue:["#b5bae6","#d1abe6","#e6abd0","#e6bcb5","#dee2b5","#b5e2b5","#b5e2df"],chroma:["#d7d6e6","#b5bbe6","#919fe6","#6d84e6","#4769e6","#1d4de6"],value:["#b5bbe6","#9090b8","#6b6688","#443c56","#18121e"],bodyBack:"#eee"};a.bodyBackAlt=a.value[0],a.inactive=a.value[2],a.lightText=a.value[3],a.bodyText=a.value[4],a.noteBack=a.hue[4],a.menu=a.hue[5],t.a=a}});