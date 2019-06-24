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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\nconst SnakeFood = __webpack_require__(/*! ./snake_food */ \"./src/snake_food.js\");\n\nfunction Game() {\n  // this.snake = this.addSnake();\n}\n\nGame.BG_COLOR = \"#000000\";\nGame.DIM_X = 600;\nGame.DIM_Y = 600;\nGame.FPS = 32;\n\nGame.prototype.addSnake = function addSnake() {\n  let snake = new Snake();\n  return snake;\n};\n\nGame.prototype.step = function step() {\n  // Save for later\n  // this.checkCollision()\n  // this.moveObjects()\n};\n\nGame.prototype.draw = function draw(ctx) {\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  ctx.fillStyle = Game.BG_COLOR;\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  \n  this.drawOutline(ctx);\n\n  this.allObjects().forEach(function(object) {\n    object.draw(ctx);\n  });\n};\n\nGame.prototype.drawOutline = function drawOutline(ctx) {\n  ctx.beginPath();\n  ctx.moveTo(0, 0);\n  ctx.lineTo(0, Game.DIM_Y);\n  ctx.lineWidth = 5;\n  ctx.strokeStyle = \"pink\";\n  ctx.stroke();\n\n  ctx.beginPath();\n  ctx.moveTo(0, 0);\n  ctx.lineTo(Game.DIM_X, 0);\n  ctx.lineWidth = 5;\n  ctx.strokeStyle = \"pink\";\n  ctx.stroke();\n\n  ctx.beginPath();\n  ctx.moveTo(Game.DIM_X, 0);\n  ctx.lineTo(Game.DIM_X, Game.DIM_Y);\n  ctx.lineWidth = 5;\n  ctx.strokeStyle = \"pink\";\n  ctx.stroke();\n\n  ctx.beginPath();\n  ctx.moveTo(0, Game.DIM_Y);\n  ctx.lineTo(Game.DIM_X, Game.DIM_Y);\n  ctx.lineWidth = 5;\n  ctx.strokeStyle = \"pink\";\n  ctx.stroke();\n};\n\n\nGame.prototype.allObjects = function allObjects() {\n  // return [].concat([this.snake]);\n  return;\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GameView(game, ctx) {\n  this.ctx = ctx;\n  this.game = game;\n  this.snake = this.game.addSnake();\n}\n\nGameView.MOVES = {\n  w: [0, -1],\n  up: [0, -1],\n\n  a: [-1, 0],\n  left: [-1, 0],\n\n  s: [0, 1],\n  down: [0, 1],\n\n  d: [1, 0],\n  right: [1, 0],\n};\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n  const snake = this.snake;\n\n  Object.keys(GameView.MOVES).forEach(function(k)  {\n    const move = GameView.MOVES[k];\n    //change the name of power below?\n    key(k, function () { snake.changeDirection(move); });\n  });\n};\n\nGameView.prototype.start = function start() {\n  this.bindKeyHandlers();\n  this.lastTime = 0;\n  // start the animation\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nGameView.prototype.animate = function animate(time) {\n  const timeDelta = time - this.lastTime;\n\n  this.game.step(timeDelta);\n  this.game.draw(this.ctx);\n  this.lastTime = time;\n\n  // every call to animate requests causes another call to animate\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  canvasEl.width = Game.DIM_X;\n  canvasEl.height = Game.DIM_Y;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new Game();\n  new GameView(game, ctx).start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Snake() {\n\n}\n\n\nSnake.prototype.changeDirection = function changeDirection() {\n\n};\n\nmodule.exports = Snake;\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ }),

/***/ "./src/snake_food.js":
/*!***************************!*\
  !*** ./src/snake_food.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/snake_food.js?");

/***/ })

/******/ });