!function o(c,a,i){function u(n,e){if(!a[n]){if(!c[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(l)return l(n,!0);throw new Error("Cannot find module '"+n+"'")}var r=a[n]={exports:{}};c[n][0].call(r.exports,function(e){var t=c[n][1][e];return u(t||e)},r,r.exports,o,c,a,i)}return a[n].exports}for(var l="function"==typeof require&&require,e=0;e<i.length;e++)u(i[e]);return u}({1:[function(e,t,n){"use strict";var c="\n  resizable,scrollbars,status,\n  width=450,\n  height=400,\n  toolbar=false,\n  menubar=false,\n  top=150,\n  left=150\n";function r(){var e=u(event.target).url,t="https://www.facebook.com/sharer/sharer.php?u=".concat(e);window.open(t,"_blank",c)}function o(){var e=u(event.target),t=e.text,n=e.url,r="https://twitter.com/intent/tweet?url=".concat(n,"&text=").concat(encodeURIComponent(t)," ").concat(encodeURIComponent(n),"&via=PawsForACause");window.open(r,"_blank",c)}function a(){var e=u(event.target),t=e.text,n=e.url,r=e.image,o="https://pinterest.com/pin/create/button/?url=".concat(n,"&media=").concat(encodeURIComponent(r),"&description=").concat(encodeURIComponent(t));window.open(o,"_blank",c)}function i(){var e=u(event.target),t=e.subject,n=e.url,r="\n\n--\n\n".concat(n),o=t.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ");window.location.href="mailto:?subject=".concat(encodeURIComponent(o),"&body=").concat(encodeURIComponent(r))}function u(e){return"a"!==e.tagName?e.parentNode.dataset:e.dataset}document.querySelectorAll(".c-share__link--facebook").forEach(function(e){return e.addEventListener("click",r)}),document.querySelectorAll(".c-share__link--twitter").forEach(function(e){return e.addEventListener("click",o)}),document.querySelectorAll(".c-share__link--pinterest").forEach(function(e){return e.addEventListener("click",a)}),document.querySelectorAll(".c-share__link--email").forEach(function(e){return e.addEventListener("click",i)})},{}]},{},[1]);