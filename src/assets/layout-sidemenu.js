!function o(i,u,c){function s(t,e){if(!u[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(d)return d(t,!0);throw new Error("Cannot find module '"+t+"'")}var r=u[t]={exports:{}};i[t][0].call(r.exports,function(e){var n=i[t][1][e];return s(n||e)},r,r.exports,o,i,u,c)}return u[t].exports}for(var d="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,n,t){"use strict";function r(){document.body.classList.toggle("sidemenu-open"),document.getElementById("sidemenu").classList.toggle("is-open"),document.querySelectorAll(".trigger-sidemenu").forEach(function(e){return e.classList.toggle("u-hidden")}),document.querySelectorAll(".c-sidemenu__secondary").forEach(function(e){return e.classList.remove("is-open")})}function o(e){var n=e.target.dataset.index;document.querySelectorAll(".c-sidemenu__secondary")[n].classList.toggle("is-open")}document.querySelectorAll(".trigger-sidemenu").forEach(function(e){return e.addEventListener("click",r)}),document.querySelectorAll(".trigger-sidemenu-secondary").forEach(function(e){return e.addEventListener("click",o)}),window.addEventListener("resize",function(){767<window.innerWidth&&(document.getElementById("sidemenu").classList.contains("is-open")&&r())})},{}]},{},[1]);