/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils/index.js\");\n/* harmony import */ var _modules_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/core */ \"./src/js/modules/core.js\");\n // Core\n\n // Custom\n\n$(document).ready(function () {\n  /**\r\n   * Scroll To Slug \r\n   * [data-scroll=\"#id\"]\r\n   */\n  (function () {\n    $(document).on('click', '[data-scroll]', function (e) {\n      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.scrollToSlug)($(this).data('scroll') || $(this).attr('href'));\n    });\n  })();\n});\n\n//# sourceURL=webpack://html_start_boilerplate/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/core.js":
/*!********************************!*\
  !*** ./src/js/modules/core.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/js/utils/index.js\");\n // Global variables\n\nwindow.screenWidth = 0;\n/**\r\n * Set vh as custom CSS property (fix for iOS)\r\n */\n\nvar setVhCustomProperty = function setVhCustomProperty() {\n  var vh = window.innerHeight * 0.01;\n  document.documentElement.style.setProperty('--vh', vh + 'px');\n};\n/**\r\n * Set screen width to global\r\n */\n\n\nvar setGlobalScreenWidth = function setGlobalScreenWidth() {\n  window.screenWidth = $(window).width();\n};\n/**\r\n * Set client platform classes to <html/>\r\n */\n\n\nvar setClientPlatformClasses = function setClientPlatformClasses() {\n  // MacOS\n  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isMac)()) {\n    $('body').addClass('is-mac');\n  } // iOS\n\n\n  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isIos)()) {\n    $('body').addClass('is-ios');\n  }\n};\n\n(function () {\n  // Custom vh property\n  setVhCustomProperty();\n  $(window).on('resize', setVhCustomProperty); // Screen width\n\n  setGlobalScreenWidth();\n  $(window).on('resize', setGlobalScreenWidth); // Detect Client\n\n  setClientPlatformClasses();\n})();\n\n//# sourceURL=webpack://html_start_boilerplate/./src/js/modules/core.js?");

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isIos\": function() { return /* binding */ isIos; },\n/* harmony export */   \"isMac\": function() { return /* binding */ isMac; },\n/* harmony export */   \"scrollToSlug\": function() { return /* binding */ scrollToSlug; }\n/* harmony export */ });\n/**\r\n * Scroll To Slug\r\n * @param {'block ID'} id \r\n */\nvar scrollToSlug = function scrollToSlug(id) {\n  if ($(id).length) {\n    var headerOffset = $('.header').outerHeight() + 20;\n    $('html,body').animate({\n      scrollTop: $(id).offset().top - headerOffset\n    }, {\n      duration: 200\n    });\n  }\n};\n/**\r\n * Check if is iOS platform\r\n */\n\nvar isIos = function isIos() {\n  return /iPhone|iPad|iPod/i.test(window.navigator.platform);\n};\n/**\r\n * Check if is Mac platform\r\n */\n\nvar isMac = function isMac() {\n  return /Mac/.test(window.navigator.platform);\n};\n\n//# sourceURL=webpack://html_start_boilerplate/./src/js/utils/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;