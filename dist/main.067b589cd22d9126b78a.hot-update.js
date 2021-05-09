/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateGlo"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n\n\n\n\n\n\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('31 april 2021');\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)();\naddDot();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__.default)(100);\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__.default)();\n\n//# sourceURL=webpack://Glo/./src/index.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//popup\nfunction togglePopup(e) {\n  var popup = document.querySelector('.popup');\n  var popupBtn = document.querySelectorAll('.popup-btn');\n  var popupContent = document.querySelector('.popup-content'); //Данные для анимации\n\n  popupData = {\n    count: -445,\n    speed: 10,\n    startPos: -445,\n    endPos: 0\n  }; //Сама аницамия \n\n  var showPopup = function showPopup() {\n    popupData.startPos > popupData.endPos ? popupData.count -= popupData.speed : popupData.count += popupData.speed;\n    popupContent.style.transform = \"translateY(\".concat(popupData.count, \"px)\");\n\n    if (popupData.startPos > popupData.endPos ? popupData.count > popupData.endPos : popupData.count < popupData.endPos) {\n      requestAnimationFrame(showPopup);\n    }\n  };\n\n  popupBtn.forEach(function (item) {\n    item.addEventListener('click', function () {\n      popup.style.display = 'block'; //отключение анимации на мобилках\n\n      if (screen.width > 768) {\n        popupData.count = popupData.startPos;\n        requestAnimationFrame(showPopup); // AnimationInterval = requestAnimationFrame(animationPopup);\n      }\n    });\n  }); //Если нажимаем мимо формы, то закрываем попап\n\n  popup.addEventListener('click', function (e) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  }); // animationPopup = () => {\n  // \tAnimationInterval = requestAnimationFrame(animationPopup);\n  // \tcount++;\n  // \tif (count < 60) {\n  // \t\tpopupContent.style.top = count * 3 + 'px';\n  // \t} else {\n  // \t\tcancelAnimationFrame(AnimationInterval);\n  // \t}\n  // }; \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://Glo/./src/modules/togglePopup.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c1643416f7898a35d347")
/******/ })();
/******/ 
/******/ }
);