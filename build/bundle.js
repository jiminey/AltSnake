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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/game */ \"./src/game.ts\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var canvas = document.querySelector(\"canvas\");\n    var game = new _src_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"](canvas);\n    game.startLoop();\n    // setTimeout(() => {\n    //   game.endLoop();\n    // }, 2000);\n});\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./src/board.ts":
/*!**********************!*\
  !*** ./src/board.ts ***!
  \**********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nvar Board = /** @class */ (function () {\n    function Board(canvas) {\n        this.canvas = canvas;\n        this.canvasWidth = 0;\n        this.canvasHeight = 0;\n        this.ctx = canvas.getContext(\"2d\");\n        this.canvasWidth = canvas.width;\n        this.canvasHeight = canvas.height;\n        this.cellWidth = this.canvasWidth / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.cellHeight = this.canvasHeight / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY;\n    }\n    Board.prototype.draw = function () {\n        this.ctx.fillStyle = \"#000000\";\n        for (var row = 0; row < _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY; row++) {\n            for (var col = 0; col < _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX; col++) {\n                this.ctx.fillRect(col * this.cellWidth, row * this.cellHeight, this.cellWidth - 3, this.cellHeight - 3);\n            }\n        }\n    };\n    return Board;\n}());\n\n\n\n//# sourceURL=webpack:///./src/board.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake */ \"./src/snake.ts\");\n\n\nvar Game = /** @class */ (function () {\n    function Game(canvas) {\n        this.requestedFrameId = -1;\n        this.loopCount = 0;\n        this.canvas = canvas;\n        this.ctx = canvas.getContext(\"2d\");\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"](canvas);\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_1__[\"Snake\"](canvas);\n    }\n    Game.prototype.loop = function () {\n        var _this = this;\n        this.requestedFrameId = requestAnimationFrame(function () { return _this.loop(); });\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.board.draw();\n        this.snake.draw();\n        this.snake.update();\n        console.log(\"looping\");\n        console.log(++this.loopCount);\n    };\n    Game.prototype.startLoop = function () {\n        var _this = this;\n        this.requestedFrameId = requestAnimationFrame(function () { return _this.loop(); });\n    };\n    Game.prototype.endLoop = function () {\n        cancelAnimationFrame(this.requestedFrameId);\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! exports provided: board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"board\", function() { return board; });\nvar board = {\n    dimX: 10,\n    dimY: 10,\n};\n\n\n//# sourceURL=webpack:///./src/settings.ts?");

/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nvar Snake = /** @class */ (function () {\n    function Snake(canvas) {\n        var _this = this;\n        this.canvas = canvas;\n        this.dir = 'Right';\n        this.prevDir = 'Right';\n        this.updateFrame = 0;\n        this.snake = [];\n        this.head = [];\n        this.tail = [];\n        this.ctx = canvas.getContext(\"2d\");\n        var canvasWidth = canvas.width;\n        var canvasHeight = canvas.height;\n        this.cellWidth = canvasWidth / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.cellHeight = canvasHeight / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY;\n        this.x = 0;\n        this.y = 0;\n        this.snake = [[0, 0], [1, 0], [2, 0]];\n        this.head = this.snake[this.snake.length - 1]; //last item\n        this.tail = this.snake[0];\n        document.addEventListener(\"keydown\", function (event) {\n            switch (event.key) {\n                case \"Down\": // IE/Edge specific value\n                case \"ArrowDown\":\n                    if (_this.prevDir !== \"Up\") {\n                        _this.dir = \"Down\";\n                        _this.prevDir = _this.dir;\n                    }\n                    break;\n                case \"Up\": // IE/Edge specific value\n                case \"ArrowUp\":\n                    if (_this.prevDir !== \"Down\") {\n                        _this.dir = \"Up\";\n                        _this.prevDir = _this.dir;\n                    }\n                    break;\n                case \"Right\": // IE/Edge specific value\n                case \"ArrowRight\":\n                    if (_this.prevDir !== \"Left\") {\n                        _this.dir = \"Right\";\n                        _this.prevDir = _this.dir;\n                    }\n                    break;\n                case \"Left\": // IE/Edge specific value\n                case \"ArrowLeft\":\n                    if (_this.prevDir !== \"Right\") {\n                        _this.dir = \"Left\";\n                        _this.prevDir = _this.dir;\n                    }\n                    break;\n                // case \"Enter\":\n                //   // Do something for \"enter\" or \"return\" key press.\n                //   break;\n                // case \"Esc\": // IE/Edge specific value\n                // case \"Escape\":\n                //   // Do something for \"esc\" key press.\n                //   break;\n                default:\n                    return; // Quit when this doesn't handle the key event.\n            }\n        });\n    }\n    Snake.prototype.draw = function () {\n        for (var i = 0; i < this.snake.length; i++) {\n            this.ctx.fillStyle = \"#ff0000\";\n            this.ctx.fillRect(this.snake[i][0] * this.cellWidth, //x\n            this.snake[i][1] * this.cellHeight, //y\n            30, 30);\n        }\n    };\n    Snake.prototype.update = function () {\n        this.updateFrame++;\n        if (this.updateFrame % 10 === 0) {\n            switch (this.dir) {\n                case \"Down\":\n                    if (this.prevDir !== \"Up\") {\n                        this.tail = this.snake.shift(); //remove tail\n                        this.tail[0] = this.head[0]; //reassign tail coords\n                        this.tail[1] = this.head[1] + 1;\n                        this.snake.push(this.tail); //add tail to front\n                        this.head = this.snake[this.snake.length - 1]; //change head coords to the new tail/head\n                    }\n                    break;\n                case \"Up\":\n                    if (this.prevDir !== \"Down\") {\n                        this.tail = this.snake.shift(); //remove tail\n                        this.tail[0] = this.head[0]; //reassign tail coords\n                        this.tail[1] = this.head[1] - 1;\n                        this.snake.push(this.tail); //add tail to front\n                        this.head = this.snake[this.snake.length - 1]; //change head coords to the new tail/head\n                    }\n                    break;\n                case \"Left\":\n                    if (this.prevDir !== \"Right\") {\n                        this.tail = this.snake.shift(); //remove tail\n                        this.tail[0] = this.head[0] - 1; //reassign tail coords\n                        this.tail[1] = this.head[1];\n                        this.snake.push(this.tail); //add tail to front\n                        this.head = this.snake[this.snake.length - 1]; //change head coords to the new tail/head\n                    }\n                    break;\n                case \"Right\":\n                    if (this.prevDir !== \"Left\") {\n                        this.tail = this.snake.shift(); //remove tail\n                        this.tail[0] = this.head[0] + 1; //reassign tail coords\n                        this.tail[1] = this.head[1];\n                        this.snake.push(this.tail); //add tail to front\n                        this.head = this.snake[this.snake.length - 1]; //change head coords to the new tail/head\n                    }\n                    break;\n                default:\n                    return;\n            }\n            if (this.head[0] >= _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX)\n                this.head[0] = 0; //right bound\n            if (this.head[0] < 0)\n                this.head[0] = _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX - 1; //left bound \n            if (this.head[1] >= _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY)\n                this.head[1] = 0; //bottom bound\n            if (this.head[1] < 0)\n                this.head[1] = _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY; //top bound\n        }\n    };\n    return Snake;\n}());\n\n\n\n//# sourceURL=webpack:///./src/snake.ts?");

/***/ })

/******/ });