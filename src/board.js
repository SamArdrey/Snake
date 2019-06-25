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
}

Board.prototype.generateBoard = function generateBoard(snakeTail) {
  let yCoords = new Array(Settings.BOARD_DIM_Y).fill(null);
  for (let row in yCoords) {
    yCoords[row] = new Array(Settings.BOARD_DIM_X).fill(null);
  }

  this.board = yCoords;
  this.tail = snakeTail;
};

Board.prototype.updateSnake = function updateSnake(snake, isEating = true) {
  // this.board[snakeHead[1]][snakeHead[0]] = "snake";
};


Board.prototype.snakeCollision = function snakeCollision(x, y) {
  // if (this.board[y][x]) return true;
  // return false;
};

// Board.prototype.clearLocation = function clearLocation(x, y) {
//   this.board[y][x] = null;
// };

Board.prototype.checkForOverlap = function checkForOverlap(x, y) {
  return (this.board[y][x] !== null);
};

Board.prototype.checkForCollisions = function checkForCollisions(x, y) {
  if (this.wallCollision(x, y) ||
      this.snakeCollision(x, y)) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.wallCollision = function wallCollision(x, y) {
  if (y < 0) return true;
  if (x < 0) return true;
  if (y > Settings.BOARD_DIM_Y) return true;
  if (x > Settings.BOARD_DIM_X) return true;
  return false;
};


module.exports = Board;