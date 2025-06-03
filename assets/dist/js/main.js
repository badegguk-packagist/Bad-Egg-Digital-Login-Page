/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/animatedLogo.js":
/*!*******************************************!*\
  !*** ./src/js/components/animatedLogo.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animatedLogo)\n/* harmony export */ });\n/* harmony import */ var _lib_supportsHEVCAlpha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/supportsHEVCAlpha */ \"./src/js/lib/supportsHEVCAlpha.js\");\n\nfunction animatedLogo() {\n  var logo = document.getElementById('js-bedlp-animated-brand');\n  if (!logo) return;\n  var mov = logo.dataset.mov;\n  var webm = logo.dataset.webm;\n  var video = logo.querySelector('video');\n  if ((0,_lib_supportsHEVCAlpha__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\n    video.src = mov;\n  } else {\n    video.src = webm;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRlZExvZ28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUQ7QUFFMUMsU0FBU0MsWUFBWUEsQ0FBQSxFQUNwQztFQUNFLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMseUJBQXlCLENBQUM7RUFFL0QsSUFBSSxDQUFDRixJQUFJLEVBQUU7RUFFWCxJQUFNRyxHQUFHLEdBQUdILElBQUksQ0FBQ0ksT0FBTyxDQUFDRCxHQUFHO0VBQzVCLElBQU1FLElBQUksR0FBR0wsSUFBSSxDQUFDSSxPQUFPLENBQUNDLElBQUk7RUFDOUIsSUFBTUMsS0FBSyxHQUFHTixJQUFJLENBQUNPLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFFekMsSUFBSVQsa0VBQWlCLENBQUMsQ0FBQyxFQUFFO0lBQ3ZCUSxLQUFLLENBQUNFLEdBQUcsR0FBR0wsR0FBRztFQUNqQixDQUFDLE1BQU07SUFDTEcsS0FBSyxDQUFDRSxHQUFHLEdBQUdILElBQUk7RUFDbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWFyZWF0aGxvbi9mcm9udGVuZC13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2NvbXBvbmVudHMvYW5pbWF0ZWRMb2dvLmpzPzRkYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1cHBvcnRzSEVWQ0FscGhhIGZyb20gJy4uL2xpYi9zdXBwb3J0c0hFVkNBbHBoYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGVkTG9nbygpXG57XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtYmVkbHAtYW5pbWF0ZWQtYnJhbmQnKTtcblxuICBpZiAoIWxvZ28pIHJldHVybjtcblxuICBjb25zdCBtb3YgPSBsb2dvLmRhdGFzZXQubW92O1xuICBjb25zdCB3ZWJtID0gbG9nby5kYXRhc2V0LndlYm07XG4gIGNvbnN0IHZpZGVvID0gbG9nby5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xuXG4gIGlmIChzdXBwb3J0c0hFVkNBbHBoYSgpKSB7XG4gICAgdmlkZW8uc3JjID0gbW92O1xuICB9IGVsc2Uge1xuICAgIHZpZGVvLnNyYyA9IHdlYm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJzdXBwb3J0c0hFVkNBbHBoYSIsImFuaW1hdGVkTG9nbyIsImxvZ28iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibW92IiwiZGF0YXNldCIsIndlYm0iLCJ2aWRlbyIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/components/animatedLogo.js\n");

/***/ }),

/***/ "./src/js/lib/supportsHEVCAlpha.js":
/*!*****************************************!*\
  !*** ./src/js/lib/supportsHEVCAlpha.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction supportsHEVCAlpha() {\n  var navigator = window.navigator;\n  var ua = navigator.userAgent.toLowerCase();\n  var hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo);\n  var isSafari = ua.indexOf('safari') !== -1 && !(ua.indexOf('chrome') !== -1) && ua.indexOf('version/') !== -1;\n  return isSafari && hasMediaCapabilities;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supportsHEVCAlpha);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGliL3N1cHBvcnRzSEVWQ0FscGhhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTQSxpQkFBaUJBLENBQUEsRUFBRztFQUN6QixJQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0QsU0FBUztFQUNsQyxJQUFNRSxFQUFFLEdBQUdGLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxXQUFXLENBQUMsQ0FBQztFQUM1QyxJQUFNQyxvQkFBb0IsR0FBRyxDQUFDLEVBQUVMLFNBQVMsQ0FBQ00saUJBQWlCLElBQUlOLFNBQVMsQ0FBQ00saUJBQWlCLENBQUNDLFlBQVksQ0FBQztFQUN4RyxJQUFNQyxRQUFRLEdBQUtOLEVBQUUsQ0FBQ08sT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFNLEVBQUVQLEVBQUUsQ0FBQ08sT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDLElBQUtQLEVBQUUsQ0FBQ08sT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsQ0FBSTtFQUNySCxPQUFPRCxRQUFRLElBQUlILG9CQUFvQjtBQUMzQztBQUVBLGlFQUFlTixpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9saWIvc3VwcG9ydHNIRVZDQWxwaGEuanM/ZWU3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdXBwb3J0c0hFVkNBbHBoYSgpIHtcbiAgICBjb25zdCBuYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yO1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgaGFzTWVkaWFDYXBhYmlsaXRpZXMgPSAhIShuYXZpZ2F0b3IubWVkaWFDYXBhYmlsaXRpZXMgJiYgbmF2aWdhdG9yLm1lZGlhQ2FwYWJpbGl0aWVzLmRlY29kaW5nSW5mbylcbiAgICBjb25zdCBpc1NhZmFyaSA9ICgodWEuaW5kZXhPZignc2FmYXJpJykgIT09IC0xKSAmJiAoISh1YS5pbmRleE9mKCdjaHJvbWUnKSE9PSAtMSkgJiYgKHVhLmluZGV4T2YoJ3ZlcnNpb24vJykhPT0gLTEpKSlcbiAgICByZXR1cm4gaXNTYWZhcmkgJiYgaGFzTWVkaWFDYXBhYmlsaXRpZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydHNIRVZDQWxwaGE7XG4iXSwibmFtZXMiOlsic3VwcG9ydHNIRVZDQWxwaGEiLCJuYXZpZ2F0b3IiLCJ3aW5kb3ciLCJ1YSIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiaGFzTWVkaWFDYXBhYmlsaXRpZXMiLCJtZWRpYUNhcGFiaWxpdGllcyIsImRlY29kaW5nSW5mbyIsImlzU2FmYXJpIiwiaW5kZXhPZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/lib/supportsHEVCAlpha.js\n");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _components_animatedLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/animatedLogo */ \"./src/js/components/animatedLogo.js\");\n\n\n(0,_components_animatedLogo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBMkI7QUFFMEI7QUFFckRBLG9FQUFZLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWFyZWF0aGxvbi9mcm9udGVuZC13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL21haW4uanM/OTI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcblxuaW1wb3J0IGFuaW1hdGVkTG9nbyBmcm9tICcuL2NvbXBvbmVudHMvYW5pbWF0ZWRMb2dvJztcblxuYW5pbWF0ZWRMb2dvKCk7XG4iXSwibmFtZXMiOlsiYW5pbWF0ZWRMb2dvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYXJlYXRobG9uL2Zyb250ZW5kLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc2Nzcy9tYWluLnNjc3M/YTBhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;