(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'body {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh4 {\r\n  margin: 0;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\ninput {\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid gray;\r\n  width: 50%;\r\n}\r\n\r\n#list-elem {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.task-element {\r\n  border-bottom: 1px solid gray;\r\n  padding: 0.5rem 1rem;\r\n  margin: 1px 0;\r\n}\r\n\r\nspan {\r\n  padding: 0 0.5rem;\r\n}\r\n\r\n.delete-button {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  color: rgb(110, 109, 109);\r\n  font-size: large;\r\n}\r\n\r\n/* checked checkbox style */\r\n.checked {\r\n  text-decoration-line: line-through;\r\n  color: darkgray;\r\n}\r\n\r\ninput[type="checkbox"]:checked::after {\r\n  /* Heres your symbol replacement - this is a tick in Unicode. */\r\n  content: "\\2713";\r\n  color: #fff;\r\n}\r\n',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);var r={};(()=>{t.d(r,{d:()=>I,g:()=>S});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),p=t.n(l),u=t(589),f=t.n(u),m=t(426),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const v=e=>{window.localStorage.setItem("tasklist",JSON.stringify(e))},y=(e,n)=>{const t=document.getElementById(`id${e}`),r=n.toString();"true"===r?t.classList.add("checked"):"false"===r&&t.classList.remove("checked")},g=e=>{document.querySelectorAll('input[name="listElem"]').forEach((n=>{n.onchange=function(){((e,n,t)=>{e.forEach((e=>{parseInt(e.index,10)===parseInt(n,10)&&(e.completed=t)})),v(e)})(e,n.id,this.checked),y(n.id,this.checked)}}))};function x(e){e.forEach(((e,n)=>{e.index=n+1}))}document.getElementById("deleteButton").addEventListener("click",(()=>{const e=window.localStorage.getItem("tasklist"),n=JSON.parse(e).filter((e=>!1===e.completed));x(n),I(n),v(n)}));let E=[],b=0;class k{constructor(e,n,t){this.description=e,this.completed=n,this.index=t}}const w=document.getElementById("list-elem"),I=e=>(w.innerHTML="",e.forEach((n=>{const t=document.createElement("div"),r=document.createElement("span");r.innerText=n.description,r.id=`id${n.index}`;const o=document.createElement("input");o.type="checkbox",o.id=n.index,o.name="listElem",function(e,n,t){const r=document.createElement("input");r.type="text";const o=document.createElement("input");o.type="button",o.value="delete",e.addEventListener("click",(()=>{r.value=e.innerHTML,e.parentNode.replaceChild(r,e),r.parentNode.appendChild(o);const t=r.parentNode.firstChild;r.focus(),function(e,n,t){e.addEventListener("click",(()=>{t.forEach((e=>{const r=parseInt(n,10);if(e.index===r){const n=t.indexOf(e);t.splice(n,1),x(t),I(t),v(t),S(t)}}))}))}(o,t.id,n)})),r.addEventListener("keypress",(a=>{"Enter"===a.key&&(e.innerHTML=r.value,r.parentNode.replaceChild(e,r),e.parentNode.removeChild(o),((e,n,t)=>{e.forEach((e=>{n===e.index&&(e.description=t)})),v(e)})(n,t,r.value))}))}(r,e,n.index),t.classList.add("task-element"),t.appendChild(o),t.appendChild(r),w.appendChild(t)})),g(e),w),S=e=>{document.querySelectorAll('input[name="listElem"]').forEach((n=>{e.forEach((e=>{parseInt(n.id,10)===e.index&&(n.checked=e.completed,y(n.id,e.completed))}))}))};window.onload=()=>{const e=window.localStorage.getItem("tasklist");null!=e&&(E=JSON.parse(e),b=E.length),I(E),v(E),S(E)};const C=document.getElementById("new-task");C.addEventListener("keypress",(e=>{const n=window.localStorage.getItem("tasklist");E=JSON.parse(n),"Enter"===e.key&&""!==C.value&&(b=E.length,E.push(new k(C.value,!1,b+=1)),C.value="",I(E),v(E),S(E))}))})()})();