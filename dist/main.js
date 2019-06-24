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

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\nfunction Board() {\n  this.board = this.generateBoard();\n}\n\nBoard.prototype.generateBoard = function generateBoard() {\n  let xCoords = new Array(Settings.DIM_X / Settings.SNAKE_SIZE).fill(null);\n  return new Array(Settings.DIM_Y / Settings.SNAKE_SIZE).fill(xCoords);\n};\n\nBoard.prototype.update = function update(add, remove = false) {\n  this.board[add[0]][add[1]] = \"snake\";\n  if (!!remove) this.board[remove[0]][remove[1]] = null;\n};\n\n// Board.prototype.addFood = function addFood(location, objectType) {\n\n// };\n\nBoard.prototype.clearLocation = function clearLocation(location) {\n  this.board[location[0]][location[1]] = null;\n};\n\nBoard.prototype.checkForOverlap = function checkForOverlap(location) {\n  return (this.board[location[0]][location[1]] !== null);\n};\n\nBoard.prototype.checkForCollisions = function checkForCollisions(location) {\n  if (this.wallCollision(location)) return true;\n  if (this.snakeCollision(location)) return true;\n  return false;\n};\n\nBoard.prototype.wallCollision = function wallCollision(location) {\n  if (location[0] < 0) return true;\n  if (location[1] < 0) return true;\n  if (location[0] > Settings.DIM_Y) return true;\n  if (location[1] > Settings.DIM_X) return true;\n  return false;\n};\n\nBoard.prototype.snakeCollision = function snakeCollision(location) {\n  if (this.board[location[0]][location[1]]) return true;\n  return false;\n}\n\n//Utils\n//this converts a board location into canvas coordinates\nBoard.prototype.boardToCoords =  function boardToCoords(location) {\n  return [location[0] * SNAKE_SIZE, location[1] * SNAKE_SIZE];\n};\n\n//converts canvas coordinates to board location\nBoard.prototype.coordsToBoard =  function coordsToBoard(coords) {\n  return [coords[0] / SNAKE_SIZE, coords[1] / SNAKE_SIZE];\n};\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\nconst Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\nconst SnakeFood = __webpack_require__(/*! ./snake_food */ \"./src/snake_food.js\");\n\nfunction Game() {\n  this.snake = new Snake();\n  this.board = new Board();\n  // this.food = new SnakeFood();\n}\n\nGame.prototype.generateBoard = function generateBoard() {\n  let xCoords = new Array(Settings.DIM_X).fill(null);\n  return new Array(Settings.DIM_Y).fill(xCoords);\n};\n\nGame.prototype.step = function step() {\n  // Save for later\n  // this.board.checkCollisions()\n  // Save for later\n  // this.moveObjects()\n};\n\nGame.prototype.draw = function draw(ctx) {\n  ctx.clearRect(0, 0, Settings.DIM_X, Settings.DIM_Y);\n  ctx.fillStyle = Settings.BG_COLOR;\n  ctx.fillRect(0, 0, Settings.DIM_X, Settings.DIM_Y);\n  this.drawOutline(ctx);\n\n  this.allObjects().forEach(function(object) {\n    object.draw(ctx);\n  });\n};\n\nGame.prototype.drawOutline = function drawOutline(ctx) {\n  ctx.lineWidth = 5;\n  ctx.strokeStyle = \"pink\";\n  this.drawLine(ctx, 0, 0, 0, Settings.DIM_Y)\n  this.drawLine(ctx, 0, 0, Settings.DIM_Y, 0)\n  this.drawLine(ctx, Settings.DIM_X, 0, Settings.DIM_X, Settings.DIM_Y)\n  this.drawLine(ctx, 0, Settings.DIM_Y, Settings.DIM_X, Settings.DIM_Y)\n};\n\nGame.prototype.drawLine = function drawLine(ctx, moveX, moveY, lineX, lineY) {\n  ctx.beginPath();\n  ctx.moveTo(moveX, moveY);\n  ctx.lineTo(lineX, lineY);\n  ctx.stroke();\n};\n\nGame.prototype.allObjects = function allObjects() {\n  return [].concat([this.snake]);\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\nfunction GameView(game, ctx) {\n  this.ctx = ctx;\n  this.game = game;\n  this.snake = this.game.snake;\n}\n\nGameView.DIRECTION = {\n  w: [1,0],\n  up: [1,0],\n\n  a: [0,-1],\n  left: [0,-1],\n\n  s: [-1,0],\n  down: [-1,0],\n\n  d: [0,1],\n  right: [0,1],\n};\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n  const snake = this.snake;\n\n  Object.keys(GameView.DIRECTION).forEach(function(k)  {\n    const direction = GameView.DIRECTION[k];\n    key(k, function () { snake.changeDirection(direction); });\n  });\n};\n\nGameView.prototype.start = function start() {\n  this.bindKeyHandlers();\n  this.lastTime = 0;\n  // start the animation\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nGameView.prototype.animate = function animate(time) {\n  const timeDelta = time - this.lastTime;\n\n  this.game.step(timeDelta);\n  this.game.draw(this.ctx);\n  this.lastTime = time;\n\n  // every call to animate requests causes another call to animate\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  canvasEl.width = Settings.DIM_X;\n  canvasEl.height = Settings.DIM_Y;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new Game();\n  new GameView(game, ctx).start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: BG_COLOR, BORDER_COLOR, DIM_X, DIM_Y, FPS, SNAKE_SIZE, SNAKE_COLOR, SNAKE_FOOD_COLOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BG_COLOR\", function() { return BG_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BORDER_COLOR\", function() { return BORDER_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIM_X\", function() { return DIM_X; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIM_Y\", function() { return DIM_Y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FPS\", function() { return FPS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SNAKE_SIZE\", function() { return SNAKE_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SNAKE_COLOR\", function() { return SNAKE_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SNAKE_FOOD_COLOR\", function() { return SNAKE_FOOD_COLOR; });\n\n//board related settings\nconst BG_COLOR = \"#000000\";\nconst BORDER_COLOR = \"pink\";\nconst DIM_X = 600;\nconst DIM_Y = 600;\nconst FPS = 32;\n\n//snake-related settings\n//snake food is same size as snake\nconst SNAKE_SIZE = 15;\nconst SNAKE_COLOR = 'pink';\n\n//snake food-related settings\nconst SNAKE_FOOD_COLOR = 'white';\n\n\n\n\n//# sourceURL=webpack:///./src/settings.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\nfunction Snake() {\n  this.direction = [-1, 0];\n  this.length = 1;\n  this.head = this.middle();\n  this.body = [this.head];\n}\n\nSnake.prototype.changeDirection = function changeDirection(direction) {\n  //Prevents the snake from turning around\n  if (this.direction[0] === -1 * direction[0] &&\n      this.direction[1] === -1 * direction[1]) return;\n  this.direction = direction;\n};\n\n\nSnake.prototype.move = function move(food) {\n  this.head[0] += this.direction[0];\n  this.head[1] += this.direction[1];\n  this.body.unshift(this.head);\n\n  return this.isEating(food);\n};\n\nSnake.prototype.isEating = function isEating(food) {\n  //If the snake eats, the tail doesn't shrink\n  //also exports the tail location for updating the board\n  if (this.head[0] === food[0] &&\n    this.head[1] === food[1]) return this.body[this.body.length-1];\n  this.moveTail();\n};\n\nSnake.prototype.moveTail = function moveTail() {\n  this.body.pop();\n};\n\nSnake.prototype.draw = function draw(ctx) {\n  ctx.fillStyle = Settings.SNAKE_COLOR;\n  for (let part of this.body) {\n    ctx.fillRect(part[1], part[0], Settings.SNAKE_SIZE, Settings.SNAKE_SIZE);\n  }\n};\n\nSnake.prototype.middle = function middle() {\n  const y = Settings.DIM_Y / 2;\n  const x = Settings.DIM_X / 2;\n  return [y, x];\n};\n\nmodule.exports = Snake;\n\n//# sourceURL=webpack:///./src/snake.js?");

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