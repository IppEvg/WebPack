"use strict";(self.webpackChunkfinishproject=self.webpackChunkfinishproject||[]).push([[110],{503:(e,r,n)=>{n.d(r,{Z:()=>c});var t=n(81),a=n.n(t),o=n(645),i=n.n(o)()(a());i.push([e.id,"\r\n .wrappers {\r\n    width: 1200px;\r\n    margin: 0px auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n .name {\r\n    display: inline;\r\n    text-align: center;\r\n    color: rgb(228, 0, 0);\r\n    \r\n}\r\n .galler {\r\n    padding: 1%;\r\n    display: grid;\r\n    grid-template-rows:repeat(3, 300px);\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 1%;\r\n    background-color: rgba(223, 221, 221, 0.356);\r\n}\r\n.gallery-item{\r\n    box-sizing: border-box;\r\n    border: 1px solid grey;\r\n}\r\n.gallery-item__image{\r\n    width: 96%;\r\n    height: 85%;\r\n    padding: 2%;\r\n}\r\n.gallery-item__video{\r\nobject-fit: cover;\r\naspect-ratio: 16/9;\r\nwidth: 96%;\r\n    height: 85%;\r\n}\r\n\r\n.gallery-item__title{\r\ncolor: rgb(124, 9, 124);\r\nfont-size: 20px;\r\npadding-left: 15%;\r\n}\r\n",""]);const c=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);t&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),r.push(u))}},r}},81:e=>{e.exports=function(e){return e[1]}},110:(e,r,n)=>{n.r(r),n.d(r,{default:()=>g});var t=n(379),a=n.n(t),o=n(795),i=n.n(o),c=n(569),s=n.n(c),l=n(565),u=n.n(l),p=n(216),d=n.n(p),f=n(589),v=n.n(f),h=n(503),m={};m.styleTagTransform=v(),m.setAttributes=u(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),a()(h.Z,m);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=t.base?s[0]+t.base:s[0],u=o[l]||0,p="".concat(l," ").concat(u);o[l]=u+1;var d=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var v=a(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function a(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);r[c].references--}for(var s=t(e,a),l=0;l<o.length;l++){var u=n(o[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}o=s}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,a&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}}]);