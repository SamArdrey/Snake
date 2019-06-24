const Settings = require('./settings');

function Board() {
  this.board = this.generateBoard();
}

Board.prototype.generateBoard = function generateBoard() {
  let xCoords = new Array(Settings.DIM_X / Settings.SNAKE_SIZE).fill(null);
  return new Array(Settings.DIM_Y / Settings.SNAKE_SIZE).fill(xCoords);
};

Board.prototype.update = function update(add, remove = false) {
  this.board[add[0]][add[1]] = "snake";
  if (!!remove) this.board[remove[0]][remove[1]] = null;
};

// Board.prototype.addFood = function addFood(location, objectType) {

// };

Board.prototype.clearLocation = function clearLocation(location) {
  this.board[location[0]][location[1]] = null;
};

Board.prototype.checkForOverlap = function checkForOverlap(location) {
  return (this.board[location[0]][location[1]] !== null);
};

Board.prototype.checkForCollisions = function checkForCollisions(location) {
  if (this.wallCollision(location)) return true;
  if (this.snakeCollision(location)) return true;
  return false;
};

Board.prototype.wallCollision = function wallCollision(location) {
  if (location[0] < 0) return true;
  if (location[1] < 0) return true;
  if (location[0] > Settings.DIM_Y) return true;
  if (location[1] > Settings.DIM_X) return true;
  return false;
};

Board.prototype.snakeCollision = function snakeCollision(location) {
  if (this.board[location[0]][location[1]]) return true;
  return false;
}

//Utils
//this converts a board location into canvas coordinates
Board.prototype.boardToCoords =  function boardToCoords(location) {
  return [location[0] * SNAKE_SIZE, location[1] * SNAKE_SIZE];
};

//converts canvas coordinates to board location
Board.prototype.coordsToBoard =  function coordsToBoard(coords) {
  return [coords[0] / SNAKE_SIZE, coords[1] / SNAKE_SIZE];
};

module.exports = Board;