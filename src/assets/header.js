!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=60)}({60:function(e,t){function n(e){e.stopPropagation(),document.getElementById("nav-account").classList.toggle("u-visible")}document.querySelectorAll(".trigger-nav-account").forEach(function(e){return e.addEventListener("click",n)}),window.addEventListener("click",function(){document.getElementById("nav-account").classList.remove("u-visible")}),window.addEventListener("resize",function(){window.innerWidth<768&&document.getElementById("nav-account").classList.remove("u-visible")}),window.addEventListener("scroll",function(){var e=document.documentElement,t=(window.pageYOffset||e.scrollTop)-(e.clientTop||0),n=document.getElementById("headerNav");t>=80?n.classList.add("is-fixed"):n.classList.remove("is-fixed")})}});