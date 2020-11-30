(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(i[a]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(705),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"header {\r\n   min-height: 100px;\r\n   background-color: blueviolet;\r\n}\r\n\r\n.logo {\r\n    color: white;\r\n    padding: 30px;\r\n    font-size: 40px;\r\n}\r\n\r\nmain h1 {\r\n    padding: 30px;\r\n}\r\n\r\n.product-list {\r\n    list-style-type: none; \r\n}\r\n\r\n.product-list-element img {\r\n    max-height: 50px;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.shown {\r\n    display: none;\r\n}\r\n\r\n.feedback {\r\n    border: 1px solid gray;\r\n    width: 200px;\r\n    margin: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n",""]);const s=i},379:(e,t,n)=>{var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function o(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=a(l),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(s[u].references++,s[u].updater(h)):s.push({identifier:l,updater:f(h,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var s=n.nc;s&&(r.nonce=s)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var s=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function h(e,t,n){var r=n.css,i=n.media,s=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,p=0;function f(e,t){var n,r,i;if(t.singleton){var s=p++;n=m||(m=c(t)),r=u.bind(null,n,s,!1),i=u.bind(null,n,s,!0)}else n=c(t),r=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=o(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);s[i].references--}for(var c=o(e,t),d=0;d<n.length;d++){var l=a(n[d]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=c}}}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{class e{constructor(){var e,t;t=[],(e="items")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}add(e){new Promise((t=>{this.findProduct(e)?e.inc():this.items.push(e),t()})).then(this.render.bind(this))}findProduct(e){return this.items.filter((t=>t.name===e.name))[0]}remove(e){this.findProduct(e)&&new Promise((t=>{e.count>1?e.dec():this.items=this.items.filter((t=>e.name!==t.name)),t()})).then(this.render.bind(this))}delete(e){this.findProduct(e)&&new Promise((t=>{this.items=this.items.filter((t=>e.name!==t.name)),t()})).then(this.render.bind(this))}render(){}}class t extends e{constructor(e){if(t._instance)return t._instance;super(e),t._instance=this,this.init()}render(){const e=document.querySelector(".cart-list");e.innerHTML=this.calcSumCart(),this.items.forEach((t=>e.appendChild(t.renderCart())))}calcSumCart(){let e=this.items.reduce(((e,t)=>e+t.price*t.count),0);return document.querySelector(".cart-list"),`<p>Товаров на сумму ${e}<p>`}init(){const e=document.createElement("div");e.classList.add("cart");const t=document.createElement("button");t.classList.add("btn"),t.innerHTML="Корзина",t.addEventListener("click",(()=>{n.classList.toggle("shown")})),e.appendChild(t);const n=document.createElement("div");n.classList.add("cart-list","shown"),e.appendChild(n);const r=document.querySelector("header");r&&r.appendChild(e),this.render()}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class i{constructor(e,t){r(this,"name",""),r(this,"price",""),r(this,"count","1"),this.name=e,this.price=t}renderMain(){const{name:e,price:t}=this;let n=document.createElement("li");return n.classList.add("product-list-element"),n.innerHTML=`\n        <span>${e} ${t} руб. </span>\n    `,n.appendChild(this.getAddInCartBtn()),n}renderCart(){const{name:e,price:t,count:n}=this;let r=document.createElement("div");return r.classList.add("cart-list"),r.innerHTML=`\n        <span>${e} ${t} руб.${n}шт. </span>\n        `,r.appendChild(this.getMinusCartBtn()),r.appendChild(this.getAddInCartBtn()),r.appendChild(this.getDeleteCartBtn()),r}getAddInCartBtn(){const e=document.createElement("button");return e.classList.add("btn"),e.innerHTML="+",e.addEventListener("click",(()=>{(new t).add(this)})),e}inc(){this.count++}dec(){this.count--}getMinusCartBtn(){const e=document.createElement("button");return e.classList.add("btn"),e.innerHTML="-",e.addEventListener("click",(()=>{(new t).remove(this)})),e}getDeleteCartBtn(){const e=document.createElement("button");return e.classList.add("btn"),e.innerHTML="Удалить из корзины",e.addEventListener("click",(()=>{(new t).delete(this)})),e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class a{constructor(e,t,n){s(this,"id",""),s(this,"type",""),s(this,"name",""),this.type=e,this.name=t,this.id=n,this.render()}render(){const e=document.createElement("input");return e.type=this.type,e.id=this.id,e}renderName(){const e=document.createElement("p");return e.innerHTML=this.name,e}}var o=n(379),c=n.n(o),d=n(426);c()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,new class extends e{constructor(e){var t;super(e),(t="_pageCounter")in this?Object.defineProperty(this,t,{value:1,enumerable:!0,configurable:!0,writable:!0}):this[t]=1,this.fetchGoods().then((()=>{this.render()})),this.initShowMoreBtn()}fetchGoods(){const e=fetch(`/database${this._pageCounter}.json`);return this._pageCounter++,e.then((e=>e.json())).then((e=>{let t=e.data.map((e=>new i(e.name,e.price,1)));this.items.push(...t)})).catch((e=>{this.hideShowMoreBtn(),console.log(e)}))}render(){const e=document.querySelector(".product-list");e.innerHTML="",this.items.forEach((t=>e.appendChild(t.renderMain())))}initShowMoreBtn(){const e=document.querySelector(".showmore"),t=document.createElement("button");t.classList.add("btn"),t.innerHTML="Еще товары",t.addEventListener("click",(()=>{this.fetchGoods().then((()=>{this.render()}))}),(e=>{alert("упс"+e)})),e.appendChild(t)}hideShowMoreBtn(){document.querySelector(".showmore").remove()}},new t;const l=new a("text","Имя",1),u=new a("text","Телефон",2),h=new a("text","Email",3);new class{constructor(e){var t,n;n=[],(t="fields")in this?Object.defineProperty(this,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[t]=n,this.fields=e,this.render()}render(){const e=document.querySelector(".feedback"),t=document.createElement("form");this.fields.forEach((e=>{t.appendChild(e.renderName()),t.appendChild(e.render())}));const n=document.createElement("input");n.type="submit",t.appendChild(n),e.appendChild(t),n.addEventListener("click",(()=>{event.preventDefault(),this.getData()}))}getData(){this.fields.forEach((e=>{let t=document.getElementById(`${e.id}`).value;switch(e.name){case"Имя":/[а-яё]+|[a-z]+/.test(t)?console.log(document.getElementById(`${e.id}`).value):console.log(`Ошибка в ${e.name}`);break;case"Телефон":/\+7\(\d{3}\)\d{3}-\d{3}/.test(t)?console.log(document.getElementById(`${e.id}`).value):console.log(`Ошибка в ${e.name}`);break;case"Email":/\w+(\.|\-|\w)\w*@\w+\.ru/.test(t)?console.log(document.getElementById(`${e.id}`).value):console.log(`Ошибка в ${e.name}`);break;default:console.log("Нет таких значений")}}))}}([l,u,h])})()})();