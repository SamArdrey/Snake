const Board = require('./board');
const Settings = require('./settings');
const Snake = require("./snake");
const SnakeFood = require('./snake_food');

function Game() {
  this.snake = new Snake();
  this.board = new Board();
  // this.food = new SnakeFood();
}

Game.prototype.generateBoard = function generateBoard() {
  let xCoords = new Array(Settings.DIM_X).fill(null);
  return new Array(Settings.DIM_Y).fill(xCoords);
};

Game.prototype.step = function step() {
  // Save for later
  // this.board.checkCollisions()
  // Save for later
  // this.moveObjects()

  // Fix the coords below to match
  //snake food once its created
  this.snake.move([0,0]);
};

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, Settings.DIM_X, Settings.DIM_Y);
  ctx.fillStyle = Settings.BG_COLOR;
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
  return [].concat([this.snake]);
};

module.exports = Game;