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

/***/ "./src/apple.ts":
/*!**********************!*\
  !*** ./src/apple.ts ***!
  \**********************/
/*! exports provided: Apple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Apple\", function() { return Apple; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nvar Apple = /** @class */ (function () {\n    function Apple(canvas) {\n        this.canvas = canvas;\n        this.updateFrame = 0;\n        this.basket = [];\n        this.ctx = canvas.getContext(\"2d\");\n        this.appleCoord = [3, 4];\n        this.basket = [this.appleCoord];\n        this.onSnake = true;\n        var canvasWidth = canvas.width;\n        var canvasHeight = canvas.height;\n        this.cellWidth = canvasWidth / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.cellHeight = canvasHeight / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY;\n    }\n    Apple.prototype.draw = function () {\n        for (var i = 0; i < this.basket.length; i++) {\n            this.ctx.fillStyle = \"green\";\n            this.ctx.fillRect(this.basket[i][0] * this.cellWidth, //x\n            this.basket[i][1] * this.cellHeight, //y\n            20, 20);\n        }\n    };\n    Apple.prototype.update = function (snake) {\n        this.updateFrame++;\n        if (!this.basket.length) {\n            this.appleCoord = [\n                Math.floor(Math.random() * Math.floor(_settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX)),\n                Math.floor(Math.random() * Math.floor(_settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY))\n            ];\n            while (this.onSnake === true) {\n                this.onSnake = false;\n                for (var i = 0; i < snake.length; i++) {\n                    if (snake[i][0] === this.appleCoord[0] && snake[i][1] === this.appleCoord[1]) {\n                        this.appleCoord = [\n                            Math.floor(Math.random() * Math.floor(_settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX)),\n                            Math.floor(Math.random() * Math.floor(_settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY))\n                        ];\n                        this.onSnake = true;\n                    }\n                }\n                //if snake is on apple, we set true/ and change\n            }\n            this.basket.push(this.appleCoord);\n        }\n    };\n    return Apple;\n}());\n\n\n\n//# sourceURL=webpack:///./src/apple.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snake */ \"./src/snake.ts\");\n/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apple */ \"./src/apple.ts\");\n\n\n\n\nvar Game = /** @class */ (function () {\n    function Game(canvas) {\n        this.requestedFrameId = -1;\n        this.loopCount = 0;\n        this.canvas = canvas;\n        this.ctx = canvas.getContext(\"2d\");\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_1__[\"Board\"](canvas);\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_2__[\"Snake\"](canvas);\n        this.apple = new _apple__WEBPACK_IMPORTED_MODULE_3__[\"Apple\"](canvas);\n        this.gameState = \"game\";\n        this.startScreen = new Image();\n        this.startScreen.src = 'example/PressStart.jpg';\n        this.endScreen = new Image();\n        this.endScreen.src = 'example/gameover.jpg';\n    }\n    Game.prototype.loop = function () {\n        var _this = this;\n        this.requestedFrameId = requestAnimationFrame(function () { return _this.loop(); });\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        if (this.gameState === \"start\") {\n            //render start\n            this.ctx.drawImage(this.startScreen, 0, 0, 500, 500);\n        }\n        else if (this.gameState === \"game\") {\n            this.board.draw();\n            this.snake.draw();\n            this.apple.draw();\n            this.apple.update(this.snake.snake);\n            this.snake.update(this.apple);\n            console.log(\"looping\");\n            console.log(++this.loopCount);\n        }\n        else if (this.gameState === \"end\") {\n            //render gameover\n            this.ctx.drawImage(this.endScreen, 0, 0, 500, 500);\n        }\n        for (var i = 0; i < this.snake.snake.length - 1; i++) {\n            if (this.snake.snake[i][0] === this.snake.head[0] &&\n                this.snake.snake[i][1] === this.snake.head[1]) {\n                this.gameState = 'end';\n            }\n            if (this.snake.snake[i][0] === this.snake.head2[0] &&\n                this.snake.snake[i][1] === this.snake.head2[1]) {\n                this.gameState = 'end';\n            }\n        } //collision for snake eating itself\n        for (var i = 0; i < this.snake.snake2.length - 1; i++) {\n            if (this.snake.snake2[i][0] === this.snake.head2[0] &&\n                this.snake.snake2[i][1] === this.snake.head2[1]) {\n                this.gameState = 'end';\n            } //itself\n            if (this.snake.snake2[i][0] === this.snake.head[0] &&\n                this.snake.snake2[i][1] === this.snake.head[1]) {\n                this.gameState = 'end';\n            }\n            //other snake\n        }\n        //restart button\n        document.addEventListener(\"keydown\", function (event) {\n            switch (event.keyCode) {\n                case 32:\n                    // this.gameState = 'game'\n                    // this.restart(this.canvas)\n                    location.reload();\n            }\n        });\n        if (this.snake.head[0] >= _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX)\n            this.gameState = 'end'; //right bound\n        if (this.snake.head[0] < 0)\n            this.gameState = 'end'; //left bound \n        if (this.snake.head[1] >= _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY)\n            this.gameState = 'end'; //bottom bound\n        if (this.snake.head[1] < 0)\n            this.gameState = 'end'; //top bound\n    };\n    Game.prototype.restart = function (canvas) {\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_1__[\"Board\"](canvas);\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_2__[\"Snake\"](canvas);\n        this.apple = new _apple__WEBPACK_IMPORTED_MODULE_3__[\"Apple\"](canvas);\n    };\n    Game.prototype.startLoop = function () {\n        var _this = this;\n        this.requestedFrameId = requestAnimationFrame(function () { return _this.loop(); });\n    };\n    Game.prototype.endLoop = function () {\n        cancelAnimationFrame(this.requestedFrameId);\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! exports provided: board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"board\", function() { return board; });\nvar board = {\n    dimX: 20,\n    dimY: 20,\n    speed: 5,\n};\n\n\n//# sourceURL=webpack:///./src/settings.ts?");

/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nvar Snake = /** @class */ (function () {\n    function Snake(canvas) {\n        var _this = this;\n        this.canvas = canvas;\n        this.dir = 'Right';\n        this.prevDir = 'Right';\n        this.dir2 = 'Left';\n        this.prevDir2 = 'Left';\n        this.turn = 0;\n        this.updateFrame = 0;\n        this.ctx = canvas.getContext(\"2d\");\n        var canvasWidth = canvas.width;\n        var canvasHeight = canvas.height;\n        this.cellWidth = canvasWidth / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.cellHeight = canvasHeight / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY;\n        this.x = 0;\n        this.y = 0;\n        this.turn = 1; //0 is first player 1 is other player\n        this.snakeCoord1 = [0, 0];\n        this.snakeCoord2 = [1, 0];\n        this.snakeCoord3 = [2, 0];\n        this.snake2Coord1 = [19, 19];\n        this.snake2Coord2 = [18, 19];\n        this.snake2Coord3 = [17, 19];\n        this.snake = [this.snakeCoord1, this.snakeCoord2, this.snakeCoord3];\n        this.snake2 = [this.snake2Coord1, this.snake2Coord2, this.snake2Coord3];\n        this.head2 = this.snake2[this.snake.length - 1]; //last item\n        this.head = this.snake[this.snake.length - 1]; //last item\n        this.canMove = true;\n        document.addEventListener(\"keydown\", function (event) {\n            if (!_this.canMove)\n                return false;\n            _this.canMove = false;\n            setTimeout(function () { _this.canMove = true; }, 50);\n            switch (event.key) {\n                case \"Down\": // IE/Edge specific value\n                case \"ArrowDown\":\n                    if (_this.prevDir !== \"Up\" && _this.turn === 0) {\n                        _this.dir = \"Down\";\n                        _this.prevDir = _this.dir;\n                    }\n                    else if (_this.prevDir2 !== \"Up\" && _this.turn === 1) {\n                        _this.dir2 = \"Down\";\n                        _this.prevDir2 = _this.dir2;\n                    }\n                    break;\n                case \"Up\": // IE/Edge specific value\n                case \"ArrowUp\":\n                    if (_this.prevDir !== \"Down\" && _this.turn === 0) {\n                        _this.dir = \"Up\";\n                        _this.prevDir = _this.dir;\n                    }\n                    else if (_this.prevDir2 !== \"Down\" && _this.turn === 1) {\n                        _this.dir2 = \"Up\";\n                        _this.prevDir2 = _this.dir2;\n                    }\n                    break;\n                case \"Right\": // IE/Edge specific value\n                case \"ArrowRight\":\n                    if (_this.prevDir !== \"Left\" && _this.turn === 0) {\n                        _this.dir = \"Right\";\n                        _this.prevDir = _this.dir;\n                    }\n                    else if (_this.prevDir2 !== \"Left\" && _this.turn === 1) {\n                        _this.dir2 = \"Right\";\n                        _this.prevDir2 = _this.dir2;\n                    }\n                    break;\n                case \"Left\": // IE/Edge specific value\n                case \"ArrowLeft\":\n                    if (_this.prevDir !== \"Right\" && _this.turn === 0) {\n                        _this.dir = \"Left\";\n                        _this.prevDir = _this.dir;\n                    }\n                    else if (_this.prevDir2 !== \"Right\" && _this.turn === 1) {\n                        _this.dir2 = \"Left\";\n                        _this.prevDir2 = _this.dir2;\n                    }\n                    break;\n                // case \"Enter\":\n                //   // Do something for \"enter\" or \"return\" key press.\n                //   break;\n                // case \"Esc\": // IE/Edge specific value\n                // case \"Escape\":\n                //   // Do something for \"esc\" key press.\n                //   break;\n                default:\n                    return; // Quit when this doesn't handle the key event.\n            }\n        });\n    }\n    Snake.prototype.draw = function () {\n        for (var i = 0; i < this.snake.length; i++) {\n            this.ctx.fillStyle = \"#ff0000\";\n            this.ctx.fillRect(this.snake[i][0] * this.cellWidth, //x\n            this.snake[i][1] * this.cellHeight, //y\n            20, 20);\n        }\n        for (var i = 0; i < this.snake2.length; i++) {\n            this.ctx.fillStyle = \"#ff0000\";\n            this.ctx.fillRect(this.snake2[i][0] * this.cellWidth, //x\n            this.snake2[i][1] * this.cellHeight, //y\n            20, 20);\n        }\n    };\n    Snake.prototype.update = function (apple) {\n        this.updateFrame++;\n        if (this.updateFrame % _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].speed === 0) {\n            if (this.turn === 0) {\n                switch (this.dir) {\n                    case \"Down\":\n                        if (this.prevDir !== \"Up\" && this.turn === 0) {\n                            this.snakeCoord = this.snake.shift();\n                            this.snakeCoord[0] = this.head[0];\n                            this.snakeCoord[1] = this.head[1] + 1;\n                            this.snake.push(this.snakeCoord);\n                            this.head = this.snake[this.snake.length - 1];\n                        }\n                        break;\n                    case \"Up\":\n                        if (this.prevDir !== \"Down\" && this.turn === 0) {\n                            this.snakeCoord = this.snake.shift();\n                            this.snakeCoord[0] = this.head[0];\n                            this.snakeCoord[1] = this.head[1] - 1;\n                            this.snake.push(this.snakeCoord);\n                            this.head = this.snake[this.snake.length - 1];\n                        }\n                        break;\n                    case \"Left\":\n                        if (this.prevDir !== \"Right\" && this.turn === 0) {\n                            this.snakeCoord = this.snake.shift();\n                            this.snakeCoord[0] = this.head[0] - 1;\n                            this.snakeCoord[1] = this.head[1];\n                            this.snake.push(this.snakeCoord);\n                            this.head = this.snake[this.snake.length - 1];\n                        }\n                        break;\n                    case \"Right\":\n                        if (this.prevDir !== \"Left\" && this.turn === 0) {\n                            this.snakeCoord = this.snake.shift();\n                            this.snakeCoord[0] = this.head[0] + 1;\n                            this.snakeCoord[1] = this.head[1];\n                            this.snake.push(this.snakeCoord);\n                            this.head = this.snake[this.snake.length - 1];\n                        }\n                        break;\n                    default:\n                        return;\n                }\n            }\n            else {\n                switch (this.dir2) {\n                    case \"Down\":\n                        if (this.prevDir2 !== \"Up\" && this.turn === 1) {\n                            this.snakeCoord = this.snake2.shift();\n                            this.snakeCoord[0] = this.head2[0];\n                            this.snakeCoord[1] = this.head2[1] + 1;\n                            this.snake2.push(this.snakeCoord);\n                            this.head2 = this.snake2[this.snake2.length - 1];\n                        }\n                        break;\n                    case \"Up\":\n                        if (this.prevDir2 !== \"Down\" && this.turn === 1) {\n                            this.snakeCoord = this.snake2.shift();\n                            this.snakeCoord[0] = this.head2[0];\n                            this.snakeCoord[1] = this.head2[1] - 1;\n                            this.snake2.push(this.snakeCoord);\n                            this.head2 = this.snake2[this.snake2.length - 1];\n                        }\n                        break;\n                    case \"Left\":\n                        if (this.prevDir2 !== \"Right\" && this.turn === 1) {\n                            this.snakeCoord = this.snake2.shift();\n                            this.snakeCoord[0] = this.head2[0] - 1;\n                            this.snakeCoord[1] = this.head2[1];\n                            this.snake2.push(this.snakeCoord);\n                            this.head2 = this.snake2[this.snake2.length - 1];\n                        }\n                        break;\n                    case \"Right\":\n                        if (this.prevDir2 !== \"Left\" && this.turn === 1) {\n                            this.snakeCoord = this.snake2.shift();\n                            this.snakeCoord[0] = this.head2[0] + 1;\n                            this.snakeCoord[1] = this.head2[1];\n                            this.snake2.push(this.snakeCoord);\n                            this.head2 = this.snake2[this.snake2.length - 1];\n                        }\n                        break;\n                    default:\n                        return;\n                }\n            }\n            //condition for no bounds\n            // if (this.head[0] >= Settings.board.dimX ) this.head[0] = 0; //right bound\n            // if (this.head[0] < 0) this.head[0] = Settings.board.dimX - 1; //left bound \n            // if (this.head[1] >= Settings.board.dimY) this.head[1] = 0; //bottom bound\n            // if (this.head[1] < 0) this.head[1] = Settings.board.dimY; //top bound\n        }\n        //apple collision\n        if (this.head[0] === apple.basket[0][0] &&\n            this.head[1] === apple.basket[0][1]) {\n            this.snakeCoord = [this.snake[0][0], this.snake[0][1]];\n            this.snake.unshift(this.snakeCoord);\n            apple.basket.shift(); //remove apple\n            apple.onSnake = true;\n        }\n        if (this.head2[0] === apple.basket[0][0] &&\n            this.head2[1] === apple.basket[0][1]) {\n            this.snakeCoord = [this.snake2[0][0], this.snake2[0][1]];\n            this.snake2.unshift(this.snakeCoord);\n            apple.basket.shift(); //remove apple\n            apple.onSnake = true;\n        } // for second snake\n    };\n    return Snake;\n}());\n\n\n\n//# sourceURL=webpack:///./src/snake.ts?");

/***/ })

/******/ });