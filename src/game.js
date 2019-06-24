const Board = require('./board');
const Settings = require('./settings');
const Snake = require("./snake");
const Food = require('./food');

function Game() {
  this.snake = new Snake();
  this.board = new Board();
  this.newGame();
}

Game.prototype.newGame = function newGame() {
  this.board.generateBoard();
  this.snake.setAttributes();
  this.food = new Food(this.board);
};

Game.prototype.step = function step() {
  let isEating = this.snake.move(this.food.location);
  if (isEating === true) this.food = new Food(this.board);
  this.board.updateSnake(this.snake.head, isEating);
  let hasCollided = this.board.checkForCollisions(this.snake.head[0], this.snake.head[1]);
  if (hasCollided) this.newGame();
};

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, Settings.DIM_X, Settings.DIM_Y);
  ctx.fillStyle = Settings.BACKGROUND_COLOR;
  ctx.fillRect(0, 0, Settings.DIM_X, Settings.DIM_Y);
  this.drawOutline(ctx);

  this.allObjects().forEach(function(object) {
    object.draw(ctx);
  });
};

Game.prototype.drawOutline = function drawOutline(ctx) {
  ctx.lineWidth = 5;
  ctx.strokeStyle = "pink";
  this.drawLine(ctx, 0, 0, 0, Settings.DIM_Y);
  this.drawLine(ctx, 0, 0, Settings.DIM_Y, 0);
  this.drawLine(ctx, Settings.DIM_X, 0, Settings.DIM_X, Settings.DIM_Y);
  this.drawLine(ctx, 0, Settings.DIM_Y, Settings.DIM_X, Settings.DIM_Y);
};

Game.prototype.drawLine = function drawLine(ctx, moveX, moveY, lineX, lineY) {
  ctx.beginPath();
  ctx.moveTo(moveX, moveY);
  ctx.lineTo(lineX, lineY);
  ctx.stroke();
};

Game.prototype.allObjects = function allObjects() {
  return [].concat([this.snake], [this.food]);
};

module.exports = Game;