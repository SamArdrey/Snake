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

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\nfunction Food() {\n  this.setLocation();\n}\n\nFood.prototype.setLocation = function setLocation() {\n  let x = Math.floor(Math.random() * Settings.BOARD_DIM_X);\n  let y = Math.floor(Math.random() * Settings.BOARD_DIM_Y);\n  this.location = [x, y];\n\n  return this.location;\n};\n\nFood.prototype.draw = function draw(ctx) {\n  ctx.fillStyle = Settings.FOOD_COLOR;\n  ctx.fillRect(this.location[1], this.location[0], Settings.FOOD_SIZE, Settings.FOOD_SIZE);\n};\n\nmodule.exports = Food;\n\n//# sourceURL=webpack:///./src/food.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nconst Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\nconst Food = __webpack_require__(/*! ./food */ \"./src/food.js\");\n\nfunction Game() {\n  this.snake = new Snake();\n  this.newGame();\n}\n\nGame.prototype.newGame = function newGame() {\n  this.snake.setAttributes();\n  this.food = new Food();\n};\n\nGame.prototype.makeFood = function makeFood() {\n  this.food = new Food();\n  while(Util.snakeCollision(this.food.location, this.snake.body)) {\n    this.food = new Food();\n  }\n};\n\nGame.prototype.step = function step() {\n  let isEating = this.snake.move(this.food.location);\n  if (isEating === true) this.makeFood();\n  if (Util.wallCollision(this.snake.head[0], this.snake.head[1])) return this.newGame();\n\n  let tempBody = this.snake.body.slice(1);\n  if (this.snake.length > 0 &&\n      Util.snakeCollision(this.snake.head, tempBody)) {\n    this.newGame();\n  }\n};\n\nGame.prototype.draw = function draw(ctx) {\n  ctx.clearRect(0, 0, Settings.DIM_X, Settings.DIM_Y);\n  ctx.fillStyle = Settings.BACKGROUND_COLOR;\n  ctx.fillRect(0, 0, Settings.DIM_X, Settings.DIM_Y);\n  this.drawOutline(ctx);\n\n  this.allObjects().forEach(function(object) {\n    object.draw(ctx);\n  });\n};\n\nGame.prototype.drawOutline = function drawOutline(ctx) {\n  ctx.lineWidth = 5;\n  ctx.strokeStyle = \"pink\";\n  this.drawLine(ctx, 0, 0, 0, Settings.DIM_Y);\n  this.drawLine(ctx, 0, 0, Settings.DIM_Y, 0);\n  this.drawLine(ctx, Settings.DIM_X, 0, Settings.DIM_X, Settings.DIM_Y);\n  this.drawLine(ctx, 0, Settings.DIM_Y, Settings.DIM_X, Settings.DIM_Y);\n};\n\nGame.prototype.drawLine = function drawLine(ctx, moveX, moveY, lineX, lineY) {\n  ctx.beginPath();\n  ctx.moveTo(moveX, moveY);\n  ctx.lineTo(lineX, lineY);\n  ctx.stroke();\n};\n\nGame.prototype.allObjects = function allObjects() {\n  return [].concat([this.snake], [this.food]);\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\nfunction GameView(game, ctx) {\n  this.ctx = ctx;\n  this.game = game;\n  this.snake = this.game.snake;\n}\n\nGameView.DIRECTION = {\n  w: [-1,0],\n  up: [-1,0],\n\n  a: [0,-1],\n  left: [0,-1],\n\n  s: [1,0],\n  down: [1,0],\n\n  d: [0,1],\n  right: [0,1],\n};\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n  const snake = this.snake;\n\n  Object.keys(GameView.DIRECTION).forEach(function(k)  {\n    const direction = GameView.DIRECTION[k];\n    key(k, function () { snake.changeDirection(direction); });\n  });\n};\n\nGameView.prototype.start = function start() {\n  this.bindKeyHandlers();\n  this.lastTime = 0;\n  // start the animation\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nGameView.prototype.animate = function animate(time) {\n  const timeDelta = time - this.lastTime;\n\n  this.game.step(timeDelta);\n  this.game.draw(this.ctx);\n  this.lastTime = time;\n\n  // every call to animate requests causes another call to animate\n  setTimeout(() => requestAnimationFrame(this.animate.bind(this)), 120);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

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
/*! exports provided: BACKGROUND_COLOR, BORDER_COLOR, SNAKE_COLOR, FOOD_COLOR, DIM_X, DIM_Y, FPS, SNAKE_SIZE, FOOD_SIZE, BOARD_DIM_X, BOARD_DIM_Y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BACKGROUND_COLOR\", function() { return BACKGROUND_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BORDER_COLOR\", function() { return BORDER_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SNAKE_COLOR\", function() { return SNAKE_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOOD_COLOR\", function() { return FOOD_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIM_X\", function() { return DIM_X; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIM_Y\", function() { return DIM_Y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FPS\", function() { return FPS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SNAKE_SIZE\", function() { return SNAKE_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOOD_SIZE\", function() { return FOOD_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOARD_DIM_X\", function() { return BOARD_DIM_X; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOARD_DIM_Y\", function() { return BOARD_DIM_Y; });\n// Color\nconst BACKGROUND_COLOR = \"#000000\";\nconst BORDER_COLOR = \"pink\";\nconst SNAKE_COLOR = \"red\";\nconst FOOD_COLOR = 'white';\n//\n\n\n// Game\nconst DIM_X = 600;\nconst DIM_Y = 600;\nconst FPS = 32;\n//\n\n// Snake\nconst SNAKE_SIZE = 15;\n//\n\n// Food\nconst FOOD_SIZE = SNAKE_SIZE;\n//\n\n// Board\nconst BOARD_DIM_X = DIM_X - SNAKE_SIZE;\nconst BOARD_DIM_Y = DIM_Y - SNAKE_SIZE;\n//\n\n\n\n\n\n//# sourceURL=webpack:///./src/settings.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Snake() {\n}\n\nSnake.prototype.setAttributes = function setAttributes() {\n  this.length = 0;\n  this.direction = [1, 0];\n  this.speed = 5;\n  let mid = Util.findMiddle();\n  this.head = mid;\n  this.body = [[mid[0], mid[1]]];\n  this.tail = [mid[0], mid[1]];\n};\n\nSnake.prototype.changeDirection = function changeDirection(direction) {\n  //Prevents the snake from turning around\n  if (this.direction[0] === -1 * direction[0] &&\n      this.direction[1] === -1 * direction[1]) return;\n  if (this.length > 0 &&\n      this.head[0] + (direction[0] * 25) === this.body[1][0] &&\n      this.head[1] + (direction[1] * 25) === this.body[1][1]) return;\n  this.direction = direction;\n};\n\nSnake.prototype.move = function move(food) {\n  this.head[0] += this.direction[0] * 25;\n  this.head[1] += this.direction[1] * 25;\n  this.body.unshift([this.head[0], this.head[1]]);\n\n  return this.isEating(food);\n};\n\nSnake.prototype.isEating = function isEating(food) {\n  let type = 'eating';\n  //If the snake eats, the tail doesn't shrink\n  //also exports the tail location for updating the board\n  if (Util.snakeCollision(food, this.body, type)) {\n    this.length++;\n    return true;\n  } else {\n    this.tail = this.body[this.body.length-2];\n    return this.body.pop();\n  }\n};\n\nSnake.prototype.draw = function draw(ctx) {\n  ctx.fillStyle = Settings.SNAKE_COLOR;\n\n  for (let part of this.body) {\n    ctx.fillRect(part[1], part[0], Settings.SNAKE_SIZE, Settings.SNAKE_SIZE);\n  }\n};\n\nmodule.exports = Snake;\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: findMiddle, wallCollision, snakeCollision, isHitboxOverlap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findMiddle\", function() { return findMiddle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wallCollision\", function() { return wallCollision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snakeCollision\", function() { return snakeCollision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHitboxOverlap\", function() { return isHitboxOverlap; });\nconst Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\nconst findMiddle = function findMiddle() {\n  const y = Settings.DIM_Y / 2;\n  const x = Settings.DIM_X / 2;\n\n  return [y, x];\n};\n\nconst wallCollision = function wallCollision(x, y) {\n  if (y < 0) return true;\n  if (x < 0) return true;\n  if (y > Settings.BOARD_DIM_Y) return true;\n  if (x > Settings.BOARD_DIM_X) return true;\n  return false;\n};\n\nconst snakeCollision = function snakeCollision(headOrFood, body, type) {\n  for (let part = 0; part < body.length; part++) {\n    let xHitbox = isHitboxOverlap(0, headOrFood, body[part]);\n    let yHitbox = isHitboxOverlap(1, headOrFood, body[part]);\n\n    if (xHitbox && yHitbox) return true;\n    if (type === 'eating') return;\n  }\n\n  return false;\n};\n\nconst isHitboxOverlap = function isHitboxOverlap(axis, headOrFood, part) {\n  return (\n    ( part[axis] >= headOrFood[axis] &&\n      part[axis] < headOrFood[axis] + Settings.SNAKE_SIZE) ||\n    ( part[axis] + Settings.SNAKE_SIZE >= headOrFood[axis] &&\n      part[axis] + Settings.SNAKE_SIZE < headOrFood[axis] + Settings.SNAKE_SIZE)\n  );\n};\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });