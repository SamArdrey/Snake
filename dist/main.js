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

eval("const Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\n// NOTE\n//\n//\n// The board array goes by 'board[y][x]'\n// Whereas everything else records location by l[x][y]\n//\n//\n// NOTE\n\n\nfunction Board() {\n}\n\nBoard.prototype.generateBoard = function generateBoard(snakeTail) {\n  let yCoords = new Array(Settings.BOARD_DIM_Y).fill(null);\n  for (let row in yCoords) {\n    yCoords[row] = new Array(Settings.BOARD_DIM_X).fill(null);\n  }\n\n  this.board = yCoords;\n  this.tail = snakeTail;\n};\n\nBoard.prototype.updateSnake = function updateSnake(snake, isEating = true) {\n  // this.board[snakeHead[1]][snakeHead[0]] = \"snake\";\n};\n\n\nBoard.prototype.snakeCollision = function snakeCollision(x, y) {\n  // if (this.board[y][x]) return true;\n  // return false;\n};\n\n// Board.prototype.clearLocation = function clearLocation(x, y) {\n//   this.board[y][x] = null;\n// };\n\nBoard.prototype.checkForOverlap = function checkForOverlap(x, y) {\n  return (this.board[y][x] !== null);\n};\n\nBoard.prototype.checkForCollisions = function checkForCollisions(x, y) {\n  if (this.wallCollision(x, y) ||\n      this.snakeCollision(x, y)) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\nBoard.prototype.wallCollision = function wallCollision(x, y) {\n  if (y < 0) return true;\n  if (x < 0) return true;\n  if (y > Settings.BOARD_DIM_Y) return true;\n  if (x > Settings.BOARD_DIM_X) return true;\n  return false;\n};\n\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\nfunction Food(snake) {\n  this.snake = snake;\n  this.setLocation();\n}\n\nFood.prototype.setLocation = function setLocation() {\n  let location = this.getXY();\n  while(this.snake.checkForOverlap(location)) {\n    location = this.getXY();\n  }\n\n  this.location = location;\n};\n\nFood.prototype.getXY = function getXY() {\n  let x = Math.floor(Math.random() * Settings.BOARD_DIM_X);\n  let y = Math.floor(Math.random() * Settings.BOARD_DIM_Y);\n  return [x, y];\n};\n\nFood.prototype.draw = function draw(ctx) {\n  ctx.fillStyle = Settings.FOOD_COLOR;\n  ctx.fillRect(this.location[1], this.location[0], Settings.FOOD_SIZE, Settings.FOOD_SIZE);\n};\n\nmodule.exports = Food;\n\n//# sourceURL=webpack:///./src/food.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\nconst Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\nconst Food = __webpack_require__(/*! ./food */ \"./src/food.js\");\n\nfunction Game() {\n  this.snake = new Snake();\n  this.board = new Board();\n  this.newGame();\n}\n\nGame.prototype.newGame = function newGame() {\n  this.snake.setAttributes();\n  this.board.generateBoard(this.snake.head);\n  this.food = new Food(this.snake);\n};\n\nGame.prototype.step = function step() {\n  let isEating = this.snake.move(this.food.location);\n  if (isEating === true) this.food = new Food(this.snake);\n  this.board.updateSnake(this.snake, isEating);\n  let hasCollided = this.board.checkForCollisions(this.snake.head[0], this.snake.head[1]);\n  if (hasCollided) this.newGame();\n};\n\nGame.prototype.draw = function draw(ctx) {\n  ctx.clearRect(0, 0, Settings.DIM_X, Settings.DIM_Y);\n  ctx.fillStyle = Settings.BACKGROUND_COLOR;\n  ctx.fillRect(0, 0, Settings.DIM_X, Settings.DIM_Y);\n  this.drawOutline(ctx);\n\n  this.allObjects().forEach(function(object) {\n    object.draw(ctx);\n  });\n};\n\nGame.prototype.drawOutline = function drawOutline(ctx) {\n  ctx.lineWidth = 5;\n  ctx.strokeStyle = \"pink\";\n  this.drawLine(ctx, 0, 0, 0, Settings.DIM_Y);\n  this.drawLine(ctx, 0, 0, Settings.DIM_Y, 0);\n  this.drawLine(ctx, Settings.DIM_X, 0, Settings.DIM_X, Settings.DIM_Y);\n  this.drawLine(ctx, 0, Settings.DIM_Y, Settings.DIM_X, Settings.DIM_Y);\n};\n\nGame.prototype.drawLine = function drawLine(ctx, moveX, moveY, lineX, lineY) {\n  ctx.beginPath();\n  ctx.moveTo(moveX, moveY);\n  ctx.lineTo(lineX, lineY);\n  ctx.stroke();\n};\n\nGame.prototype.allObjects = function allObjects() {\n  return [].concat([this.snake], [this.food]);\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\nfunction GameView(game, ctx) {\n  this.ctx = ctx;\n  this.game = game;\n  this.snake = this.game.snake;\n}\n\nGameView.DIRECTION = {\n  w: [-1,0],\n  up: [-1,0],\n\n  a: [0,-1],\n  left: [0,-1],\n\n  s: [1,0],\n  down: [1,0],\n\n  d: [0,1],\n  right: [0,1],\n};\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n  const snake = this.snake;\n\n  Object.keys(GameView.DIRECTION).forEach(function(k)  {\n    const direction = GameView.DIRECTION[k];\n    key(k, function () { snake.changeDirection(direction); });\n  });\n};\n\nGameView.prototype.start = function start() {\n  this.bindKeyHandlers();\n  this.lastTime = 0;\n  // start the animation\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nGameView.prototype.animate = function animate(time) {\n  const timeDelta = time - this.lastTime;\n\n  this.game.step(timeDelta);\n  this.game.draw(this.ctx);\n  this.lastTime = time;\n\n  // every call to animate requests causes another call to animate\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

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

eval("const Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Snake() {\n}\n\nSnake.prototype.setAttributes = function setAttributes() {\n  this.direction = [1, 0];\n  this.speed = 5;\n  let mid = Util.middle();\n  this.head = mid;\n  this.body = [[mid[0], mid[1]]];\n  this.tail = [mid[0], mid[1]];\n};\n\nSnake.prototype.changeDirection = function changeDirection(direction) {\n  //Prevents the snake from turning around\n  if (this.direction[0] === -1 * direction[0] &&\n      this.direction[1] === -1 * direction[1]) return;\n  this.direction = direction;\n};\n\nSnake.prototype.move = function move(food) {\n  this.head[0] += this.direction[0] * this.speed;\n  this.head[1] += this.direction[1] * this.speed;\n  this.body.unshift([this.head[0] , this.head[1]]);\n\n  return this.isEating(food);\n};\n\nSnake.prototype.isEating = function isEating(food) {\n  //If the snake eats, the tail doesn't shrink\n  //also exports the tail location for updating the board\n  if (this.checkForOverlap(food)) {\n    this.updateSpeed();\n    return true;\n  } else {\n    this.tail = this.body[this.body.length-2];\n    return this.body.pop();\n  }\n};\n\n\n//\n//\n// Move to settings so that food can use it\n//\n//\n//\nSnake.prototype.checkForOverlap = function checkForOverlap(food) {\n  let xHitbox = this.isHitboxOverlap(0, food);\n  let yHitbox = this.isHitboxOverlap(1, food);\n\n  return (xHitbox && yHitbox);\n};\n\nSnake.prototype.isHitboxOverlap = function isHitboxOverlap(axis, food) {\n  return (\n    ( this.head[axis] >= food[axis] &&\n      this.head[axis] < food[axis] + Settings.FOOD_SIZE) ||\n    ( this.head[axis] + Settings.SNAKE_SIZE >= food[axis] &&\n      this.head[axis] + Settings.SNAKE_SIZE < food[axis] + Settings.FOOD_SIZE)\n  );\n};\n\nSnake.prototype.updateSpeed = function updateSpeed() {\n  switch (this.body.length) {\n    case 10:\n      this.speed = 6;\n      break;\n    case 20:\n      this.speed = 7;\n      break;\n    case 25:\n      this.speed = 8;\n      break;\n    case 30:\n      this.speed = 9;\n      break;\n    default:\n      break;\n  }\n};\n\nSnake.prototype.draw = function draw(ctx) {\n  ctx.fillStyle = Settings.SNAKE_COLOR;\n\n  for (let part of this.body) {\n    ctx.fillRect(part[1], part[0], Settings.SNAKE_SIZE, Settings.SNAKE_SIZE);\n  }\n};\n\nmodule.exports = Snake;\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: middle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"middle\", function() { return middle; });\nconst Settings = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\nconst middle = function middle() {\n  const y = Settings.DIM_Y / 2;\n  const x = Settings.DIM_X / 2;\n\n  return [y, x];\n};\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });