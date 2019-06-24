const Settings = require('./settings');

// NOTE
//
//
// The board array goes by 'board[y][x]'
// Whereas everything else records location by l[x][y]
//
//
// NOTE


function Board() {
  this.board = this.generateBoard();
}

Board.prototype.generateBoard = function generateBoard() {
  let yCoords = new Array(Settings.BOARD_DIM_Y).fill(null);
  for (let row in yCoords) {
    yCoords[row] = new Array(Settings.BOARD_DIM_X).fill(null);
  }

  return yCoords;
};

Board.prototype.updateSnake = function updateSnake(snakeHead, isEating = true) {
  if (snakeHead[1] > 0 ||
      snakeHead[1] < 0) return;
  if (!isEating) this.board[isEating[1]][isEating[0]] = null;
  this.board[snakeHead[1]][snakeHead[0]] = "snake";
};

// Board.prototype.updateFood = function updateFood (oldFood, newFood) {
//   this.board[oldFood[0]][oldFood[1]] = null;
//   this.board[newFood[0]][newFood[1]] = 'food';
// };

// Board.prototype.addFood = function addFood(location, objectType) {

// };

Board.prototype.clearLocation = function clearLocation(x, y) {
  this.board[y][x] = null;
};

Board.prototype.checkForOverlap = function checkForOverlap(x, y) {
  return (this.board[y][x] !== null);
};

Board.prototype.checkForCollisions = function checkForCollisions(x, y) {
  if (this.wallCollision(x, y)) return true;
  if (this.snakeCollision(x, y)) return true;
  return false;
};

Board.prototype.wallCollision = function wallCollision(x, y) {
  if (y < 0) return true;
  if (x < 0) return true;
  if (y > Settings.BOARD_DIM_Y) return true;
  if (x > Settings.BOARD_DIM_X) return true;
  return false;
};

Board.prototype.snakeCollision = function snakeCollision(x, y) {
  if (this.board[y][x]) return true;
  return false;
};

// //Utils
// //this converts a board location into canvas coordinates
// Board.prototype.boardToCoords =  function boardToCoords(location) {
//   return [y * SNAKE_SIZE, x * SNAKE_SIZE];
// };

// //converts canvas coordinates to board location
// Board.prototype.coordsToBoard =  function coordsToBoard(coords) {
//   return [coords[0] / SNAKE_SIZE, coords[1] / SNAKE_SIZE];
// };

module.exports = Board;