!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=65)}({65:function(e,n){function t(){document.body.classList.toggle("sidemenu-open"),document.getElementById("sidemenu").classList.toggle("is-open"),document.querySelectorAll(".trigger-sidemenu-icon").forEach(function(e){return e.classList.toggle("u-hidden")}),document.querySelectorAll(".c-sidemenu__secondary").forEach(function(e){return e.classList.remove("is-open")})}function r(e){var n=e.target.dataset.index;document.querySelectorAll(".c-sidemenu__secondary")[n].classList.toggle("is-open")}document.querySelectorAll(".trigger-sidemenu").forEach(function(e){return e.addEventListener("click",t)}),document.querySelectorAll(".trigger-sidemenu-secondary").forEach(function(e){return e.addEventListener("click",r)}),window.addEventListener("resize",function(){window.innerWidth>767&&(document.getElementById("sidemenu").classList.contains("is-open")&&t())})}});