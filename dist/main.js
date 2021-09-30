/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calc-shift.js":
/*!***************************!*\
  !*** ./src/calc-shift.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcShift\": () => (/* binding */ calcShift)\n/* harmony export */ });\nconst shifts = ['Day', 'Night', 'Chill1', 'Chill2'];\r\nconst startDate = new Date(1990, 0, 1);\r\n\r\n/**\r\n * \r\n * @param {Date} date \r\n * @param {number} [team]\r\n */\r\n\r\nconst calcShift = (date, team) => {\r\n  date = new Date(date.toDateString());\r\n  const days = Math.floor(\r\n    (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)\r\n  );\r\n  return team ? shifts[(days + 4 - team) % 4] : `\r\n    1st: ${shifts[(days + 3) % 4]}\r\n    2nd: ${shifts[(days + 2) % 4]}\r\n    3rd: ${shifts[(days + 1) % 4]}\r\n    4th: ${shifts[(days + 0) % 4]}\r\n  `;\r\n};\r\n\n\n//# sourceURL=webpack://shift_calculator/./src/calc-shift.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calc_shift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-shift */ \"./src/calc-shift.js\");\n\r\n\r\nconst dateInput = document.getElementById('date');\r\nconst dateResult = document.getElementById('result');\r\n\r\ndateInput.addEventListener('change', () => {\r\n  const date = new Date(dateInput.value);\r\n  const result = (0,_calc_shift__WEBPACK_IMPORTED_MODULE_0__.calcShift)(date);\r\n  dateResult.innerText = result;\r\n});\r\n\n\n//# sourceURL=webpack://shift_calculator/./src/index.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;