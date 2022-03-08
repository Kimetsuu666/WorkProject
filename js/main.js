/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/timer */ \"./src/js/module/timer.js\");\n/* harmony import */ var _module_timer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module_timer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _module_close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/close */ \"./src/js/module/close.js\");\n/* harmony import */ var _module_close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_module_close__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://start-gulp/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/close.js":
/*!********************************!*\
  !*** ./src/js/module/close.js ***!
  \********************************/
/***/ (function() {

eval("const closeModalWindow = document.querySelector('#closewindow');\r\nconst moduleWrapper = document.querySelector('.module-wrapper');\r\nconst body = document.body;\r\nconst openModalWindow = document.querySelectorAll('.openModule')\r\n\r\nfor (let i = 0; i < openModalWindow.length; i++) {\r\n    openModalWindow[i].addEventListener('click', e => {\r\n        moduleWrapper.style.display = \"flex\";\r\n        body.style.display = \"grid\";\r\n    })\r\n}\r\n\r\ncloseModalWindow.addEventListener('click', e => {\r\n    moduleWrapper.style.display = \"none\";\r\n    body.style.display = \"block\";\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://start-gulp/./src/js/module/close.js?");

/***/ }),

/***/ "./src/js/module/timer.js":
/*!********************************!*\
  !*** ./src/js/module/timer.js ***!
  \********************************/
/***/ (function() {

eval("// Взяли время в секундах \r\nlet date = new Date(\"Feb 22, 2023 16:40:10\").getTime();\r\n\r\n/*\r\n    Рассказываю как его использовать...\r\n    - Ты вводишь дату на которой будет тот или иной призовой фонд (типо скидки и т.д)\r\n    -- Например, Feb 22, 2022 12:00:00 у меня придет пенсия. И таймер будет отчитывать эти дни часы со сегоднешнего\r\n    - Так же можешь вводить время во сколько закончится таймер \r\n*/\r\n\r\n// Интервал, одна секунда\r\nlet timer = setInterval(function() {\r\n    let nowtime = new Date().getTime(); \r\n    let timeLeft = date - nowtime;\r\n\r\n    if (timeLeft > 0) {\r\n        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\r\n        let mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));\r\n        let secs = Math.floor((timeLeft % (1000 * 60)) / 1000);\r\n\r\n        document.getElementById(\"timer-hours\").innerHTML = (\"0\" + hours).slice(-2) + ' :';\r\n        document.getElementById(\"timer-mins\").innerHTML = (\"0\" + mins).slice(-2) + ' :';\r\n        document.getElementById(\"timer-secs\").innerHTML = (\"0\" + secs).slice(-2);\r\n\r\n    } else {\r\n        document.getElementById(\"timer\").innerHTML = \"Время истекло!\";\r\n        document.write(\"<p style='text-align: center;  font-size: 200px;\\n\" +\r\n            \"  font-weight: 900;'>Де деньги?</p>\");\r\n    }\r\n}, 1000);\n\n//# sourceURL=webpack://start-gulp/./src/js/module/timer.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;