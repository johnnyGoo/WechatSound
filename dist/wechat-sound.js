!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t){function o(){function e(e){WeixinJSBridge.invoke("getNetworkType",{},function(t){e._play()})}function t(){var t=this;try{t._play()}catch(e){console.log(e)}var o=[];try{e(t)}catch(n){o.push("WeixinJSBridgeReady",function(){e(t);for(var n=0;n<o.length;n+=2)document.removeEventListener(o[n],o[n+1],!1)}),document.addEventListener("WeixinJSBridgeReady",o[o.length-1],!1)}}return window.___inited_wechat_sound||(window.___inited_wechat_sound=!0,Audio.prototype._play=Audio.prototype.play,HTMLAudioElement.prototype._play=HTMLAudioElement.prototype.play,HTMLVideoElement.prototype._play=HTMLVideoElement.prototype.play,Audio.prototype.play=t,HTMLAudioElement.prototype.play=t,HTMLVideoElement.prototype.play=t),this}o.prototype.preloads={},o.prototype.preloadVideo=function(e,t){t=t||100;var o=document.createElement("video");o.setAttribute("webkit-playsinline",!0),o.setAttribute("playsinline",!0),o.setAttribute("preload","load"),o.setAttribute("src",e),this.preloads[e]=o,o.oncanplay=function(){setTimeout(function(){o.pause()},t)},o.play()},o.prototype.preloadAudio=function(e,t){t=t||100;var o=new Audio;o.setAttribute("preload","load"),o.setAttribute("src",e),this.preloads[e]=o,o.oncanplay=function(){setTimeout(function(){o.pause()},t)},o.play()},o(document),e.exports=o,window.WechatSound=o}])});