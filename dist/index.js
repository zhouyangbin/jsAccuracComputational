/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./isInteger.js":
/*!**********************!*\
  !*** ./isInteger.js ***!
  \**********************/
/*! exports provided: toInteger, isInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toInteger\", function() { return toInteger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isInteger\", function() { return isInteger; });\n// * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100\n//          * @param floatNum {number} 小数\n//          * @return {object}\n//          *   {times:100, num: 314}\nconst toInteger = floatNum => {\n  var ret = {\n    times: 1,\n    num: 0\n  };\n\n  if (isInteger(floatNum)) {\n    ret.num = floatNum;\n    return ret;\n  }\n\n  var strfi = floatNum + '';\n  var dotPos = strfi.indexOf('.');\n  var len = strfi.substr(dotPos + 1).length;\n  var times = Math.pow(10, len);\n  var intNum = parseInt(floatNum * times + 0.5, 10);\n  ret.times = times;\n  ret.num = intNum;\n  return ret;\n};\n/*\n * 判断obj是否为一个整数\n */\n\n\nconst isInteger = obj => {\n  return Math.floor(obj) === obj;\n};\n\n\n\n//# sourceURL=webpack:///./isInteger.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isInteger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInteger.js */ \"./isInteger.js\");\n\n\nclass floatObj {\n  // 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100\n  // @param floatNum {number} 小数\n  // @return {object}\n  // {times:100, num: 314}\n  // 核心方法，实现加减乘除运算，确保不丢失精度\n  // 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）\n  // @param a {number} 运算数1\n  // @param b {number} 运算数2\n  // @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）\n  constructor(name, age) {\n    //初始化对象的语句\n    this.name = name;\n    this.age = age;\n  }\n\n  operation(a, b, op) {\n    var o1 = Object(_isInteger_js__WEBPACK_IMPORTED_MODULE_0__[\"toInteger\"])(a);\n    var o2 = Object(_isInteger_js__WEBPACK_IMPORTED_MODULE_0__[\"toInteger\"])(b);\n    var n1 = o1.num;\n    var n2 = o2.num;\n    var t1 = o1.times;\n    var t2 = o2.times;\n    var max = t1 > t2 ? t1 : t2;\n    var result = null;\n\n    switch (op) {\n      case 'add':\n        if (t1 === t2) {\n          // 两个小数位数相同\n          esult = n1 + n2;\n        } else if (t1 > t2) {\n          // o1 小数位 大于 o2\n          result = n1 + n2 * (t1 / t2);\n        } else {\n          // o1 小数位 小于 o2\n          result = n1 * (t2 / t1) + n2;\n        }\n\n        return result / max;\n\n      case 'subtract':\n        if (t1 === t2) {\n          result = n1 - n2;\n        } else if (t1 > t2) {\n          result = n1 - n2 * (t1 / t2);\n        } else {\n          result = n1 * (t2 / t1) - n2;\n        }\n\n        return result / max;\n\n      case 'multiply':\n        result = n1 * n2 / (t1 * t2);\n        return result;\n\n      case 'divide':\n        result = n1 / n2 * (t2 / t1);\n        return result;\n    }\n  }\n\n  // 加减乘除的四个接口\n  add(a, b) {\n    return operation(a, b, 'add');\n  }\n\n  subtract(a, b) {\n    return operation(a, b, 'subtract');\n  }\n\n  multiply(a, b) {\n    return operation(a, b, 'multiply');\n  }\n\n  divide(a, b) {\n    return operation(a, b, 'divide');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  floatObj\n});\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });