!function o(i,s,u){function a(n,e){if(!s[n]){if(!i[n]){var r="function"==typeof require&&require;if(!e&&r)return r(n,!0);if(c)return c(n,!0);throw new Error("Cannot find module '"+n+"'")}var t=s[n]={exports:{}};i[n][0].call(t.exports,function(e){var r=i[n][1][e];return a(r||e)},t,t.exports,o,i,s,u)}return s[n].exports}for(var c="function"==typeof require&&require,e=0;e<u.length;e++)a(u[e]);return a}({1:[function(e,r,n){"use strict";var t={mouseDrag:!0,speed:350,items:1,slideBy:"page",center:!0,controls:!1,nav:!1,responsive:{480:{items:2,center:!1,controls:!0,edgePadding:40,speed:450},1024:{items:4,edgePadding:60,speed:550}}},o=setInterval(function(){var e=window.theme.carousel;e&&(e(".c-collectionCarousel",t),clearInterval(o))},100)},{}]},{},[1]);