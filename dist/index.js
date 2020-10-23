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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n// * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100\nvar toInteger = function toInteger(floatNum) {\n    var ret = { times: 1, num: 0 };\n    if (isInteger(floatNum)) {\n        ret.num = floatNum;\n        return ret;\n    }\n    var strfi = floatNum + '';\n    var dotPos = strfi.indexOf('.');\n    var len = strfi.substr(dotPos + 1).length;\n    var times = Math.pow(10, len);\n    var intNum = parseInt(floatNum * times + 0.5, 10);\n    ret.times = times;\n    ret.num = intNum;\n    return ret;\n};\n/*\n * 判断obj是否为一个整数\n */\nvar isInteger = function isInteger(obj) {\n    return Math.floor(obj) === obj;\n};\nexports.toInteger = toInteger;\nexports.isInteger = isInteger;\n\n//# sourceURL=webpack:///./isInteger.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _isInteger = __webpack_require__(/*! ./isInteger.js */ \"./isInteger.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Test = function () {\n\tfunction Test(a, b, op) {\n\t\t_classCallCheck(this, Test);\n\n\t\t//初始化对象的语句\n\t\tthis.a = a;\n\t\tthis.b = b;\n\t\tthis.op = op;\n\t}\n\n\t_createClass(Test, [{\n\t\tkey: 'operation',\n\n\t\t// 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100\n\t\t// @param floatNum {number} 小数\n\t\t// @return {object}\n\t\t// {times:100, num: 314}\n\n\t\t// 核心方法，实现加减乘除运算，确保不丢失精度\n\t\t// 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）\n\t\t// @param a {number} 运算数1\n\t\t// @param b {number} 运算数2\n\t\t// @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）        \n\t\tvalue: function operation(a, b, op) {\n\t\t\tvar o1 = (0, _isInteger.toInteger)(a);\n\t\t\tvar o2 = (0, _isInteger.toInteger)(b);\n\t\t\tvar n1 = o1.num; //整数\n\t\t\tvar n2 = o2.num; //整数\n\t\t\tvar t1 = o1.times; //位数\n\t\t\tvar t2 = o2.times; //位数\n\t\t\tvar max = t1 > t2 ? t1 : t2; //大的位数\n\t\t\tvar result = null;\n\t\t\tswitch (op) {\n\t\t\t\tcase 'add':\n\t\t\t\t\t//加\n\t\t\t\t\t{\n\t\t\t\t\t\tif (t1 === t2) {\n\t\t\t\t\t\t\t// 两个小数位数相同\n\t\t\t\t\t\t\tresult = n1 + n2;\n\t\t\t\t\t\t} else if (t1 > t2) {\n\t\t\t\t\t\t\t// o1 小数位 大于 o2\n\t\t\t\t\t\t\tresult = n1 + n2 * (t1 / t2);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t// o1 小数位 小于 o2\n\t\t\t\t\t\t\tresult = n1 * (t2 / t1) + n2;\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn result / max;\n\t\t\t\t\t}\n\t\t\t\tcase 'subtract':\n\t\t\t\t\t//减\n\t\t\t\t\t{\n\t\t\t\t\t\tif (t1 === t2) {\n\t\t\t\t\t\t\t// 两个小数位数相同\n\t\t\t\t\t\t\tresult = n1 - n2;\n\t\t\t\t\t\t} else if (t1 > t2) {\n\t\t\t\t\t\t\tresult = n1 - n2 * (t1 / t2);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tresult = n1 * (t2 / t1) - n2;\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn result / max;\n\t\t\t\t\t}\n\t\t\t\tcase 'multiply':\n\t\t\t\t\t//乘\n\t\t\t\t\t{\n\t\t\t\t\t\tresult = n1 * n2 / (t1 * t2);\n\t\t\t\t\t\treturn result;\n\t\t\t\t\t}\n\t\t\t\tcase 'divide':\n\t\t\t\t\t{\n\t\t\t\t\t\tresult = n1 / n2 * (t2 / t1);\n\t\t\t\t\t\treturn result;\n\t\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'add',\n\n\t\t// 加减乘除的四个接口\n\t\tvalue: function add(a, b) {\n\t\t\treturn this.operation(a, b, 'add');\n\t\t}\n\t}, {\n\t\tkey: 'subtract',\n\t\tvalue: function subtract(a, b) {\n\t\t\treturn this.operation(a, b, 'subtract');\n\t\t}\n\t}, {\n\t\tkey: 'multiply',\n\t\tvalue: function multiply(a, b) {\n\t\t\treturn this.operation(a, b, 'multiply');\n\t\t}\n\t}, {\n\t\tkey: 'divide',\n\t\tvalue: function divide(a, b) {\n\t\t\treturn this.operation(a, b, 'divide');\n\t\t}\n\t}]);\n\n\treturn Test;\n}();\n\nexports.default = new Test();\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });