!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=68)}({68:function(e,t){if(window.location.href.indexOf("account/login")>-1){var n=function(){var e=document.querySelectorAll(".c-auth__errors > .errors");e&&e.forEach(function(e){return e.parentNode.removeChild(e)})},r=function(){u.textContent="Reset Password",o.classList.add("u-hidden"),i.classList.remove("u-hidden")},o=document.getElementById("loginForm"),i=document.getElementById("recoverForm"),u=document.getElementById("loginHeading");window.location.href.indexOf("#recover")>-1&&r(),document.querySelector(".trigger-login-form").addEventListener("click",function(){n(),u.textContent="Welcome Back!",o.classList.remove("u-hidden"),i.classList.add("u-hidden")}),document.querySelector(".trigger-recover-form").addEventListener("click",function(){n(),r()})}}});