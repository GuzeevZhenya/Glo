/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateGlo"]("main",{

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu(e) {\n  var body = document.querySelector('body');\n  var menu = document.querySelector('menu');\n  var anhors = document.querySelectorAll('.scroll-link'); //  Плавная прокрутка\n\n  anhors.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      e.preventDefault();\n      var blockID = item.getAttribute('href');\n      document.querySelector('' + blockID).scrollIntoView({\n        behavior: \"smooth\",\n        block: \"start\"\n      });\n    });\n  });\n\n  var handleMenu = function handleMenu(e) {\n    var target = e.target;\n\n    if (menu.classList.contains('active-menu')) {\n      if (target.closest('.menu')) {\n        menu.classList.toggle('active-menu');\n      } else if (target !== menu && target.closest('[href^=\"#\"]')) {\n        menu.classList.toggle('active-menu');\n      } else {\n        if (!target.closest('menu')) {\n          menu.classList.toggle('active-menu');\n        }\n      }\n    } else if (target.closest('.menu')) {\n      menu.classList.toggle('active-menu');\n    }\n  };\n\n  body.addEventListener('click', handleMenu);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://Glo/./src/modules/toggleMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("113f6d05ff80de3b89ac")
/******/ })();
/******/ 
/******/ }
);