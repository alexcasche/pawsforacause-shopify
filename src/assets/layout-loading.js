!function o(i,u,a){function c(r,e){if(!u[r]){if(!i[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(d)return d(r,!0);throw new Error("Cannot find module '"+r+"'")}var n=u[r]={exports:{}};i[r][0].call(n.exports,function(e){var t=i[r][1][e];return c(t||e)},n,n.exports,o,i,u,a)}return u[r].exports}for(var d="function"==typeof require&&require,e=0;e<a.length;e++)c(a[e]);return c}({1:[function(e,t,r){"use strict";function n(e){e.stopPropagation();var t=document.getElementById("loading"),r=e.target.dataset.heading;r&&(t.querySelector(".c-loading__title").textContent=r),t.classList.remove("u-hidden")}window.addEventListener("load",function(){document.querySelectorAll(".trigger-loading").forEach(function(e){return e.addEventListener("click",n)})})},{}]},{},[1]);