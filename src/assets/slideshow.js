!function n(o,s,c){function u(t,e){if(!s[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(a)return a(t,!0);throw new Error("Cannot find module '"+t+"'")}var i=s[t]={exports:{}};o[t][0].call(i.exports,function(e){var r=o[t][1][e];return u(r||e)},i,i.exports,n,o,s,c)}return s[t].exports}for(var a="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,r,t){"use strict";function i(){var e=event.target.dataset,r=e.slideshowId,t=e.slideshowIndex,i=document.getElementById(r),n=i.querySelectorAll(".c-slideshow__thumbnailItem"),o=i.querySelectorAll(".c-slideshow__image");n.forEach(function(e){return e.classList.remove("is-active")}),o.forEach(function(e){return e.classList.remove("is-active")}),n[t].classList.add("is-active"),o[t].classList.add("is-active")}document.querySelectorAll(".trigger-slideshow").forEach(function(e){return e.addEventListener("click",i)})},{}]},{},[1]);