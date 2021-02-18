/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const body = document.querySelector('body');

const config = {childList: true, subtree: true };

const callback = function(mutationsList, observer) {
    console.log("Dom tree changed");
    var tabEvent = document.querySelector('#tabEvent') || document.querySelector('#tabEventDetails');
    if(tabEvent)
        tabEvent.style.border = "5px solid red";        
};

const observer = new MutationObserver(callback);
observer.observe(body, config);
/******/ })()
;