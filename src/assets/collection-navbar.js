!function o(a,i,u){function l(n,e){if(!i[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(c)return c(n,!0);throw new Error("Cannot find module '"+n+"'")}var r=i[n]={exports:{}};a[n][0].call(r.exports,function(e){var t=a[n][1][e];return l(t||e)},r,r.exports,o,a,i,u)}return i[n].exports}for(var c="function"==typeof require&&require,e=0;e<u.length;e++)l(u[e]);return l}({1:[function(e,t,n){t.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},{}],2:[function(e,t,n){t.exports=function(e){return e&&e.__esModule?e:{default:e}}},{}],3:[function(e,t,n){t.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},{}],4:[function(e,t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},{}],5:[function(e,t,n){var r=e("./arrayWithoutHoles"),o=e("./iterableToArray"),a=e("./nonIterableSpread");t.exports=function(e){return r(e)||o(e)||a()}},{"./arrayWithoutHoles":1,"./iterableToArray":3,"./nonIterableSpread":4}],6:[function(e,t,n){"use strict";var u=e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/toConsumableArray")),r=document.getElementById("navbar"),l=new URLSearchParams(window.location.search);function o(t){var n=document.getElementById("navbar-".concat(t)),r=document.getElementById("navbar-".concat(t,"-label")),o=l.get(t);if(o){var e=(0,u.default)(n.options),a=e.find(function(e){return e.value===o}),i=a?e.indexOf(a):0;n.selectedIndex=i,r.textContent=a.textContent}n.addEventListener("change",function(e){!function(e,t,n,r){var o=e.target.value,a=n.options[n.selectedIndex];"false"===o?l.delete(t):l.set(t,o);0<(0,u.default)(l.entries()).length?window.history.pushState({},document.title,"".concat(window.location.pathname,"?").concat(l)):window.history.pushState({},document.title,window.location.pathname);r.textContent=a.textContent}(e,t,n,r)})}r&&(o("sort"),o("filter"))},{"@babel/runtime/helpers/interopRequireDefault":2,"@babel/runtime/helpers/toConsumableArray":5}]},{},[6]);