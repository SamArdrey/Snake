const Settings = require('./settings');
const Util = require("./util");

const Snake = require("./snake");
const Food = require('./food');

function Game() {
  this.snake = new Snake();
  this.newGame();
}

Game.prototype.newGame = function newGame() {
  this.snake.setAttributes();
  this.food = new Food();
};

Game.prototype.makeFood = function makeFood() {
  this.food = new Food();
  while(Util.snakeCollision(this.food.location, this.snake.body)) {
    this.food = new Food();
  }
};

Game.prototype.step = function step() {
  let isEating = this.snake.move(this.food.location);
  if (isEating === true) this.makeFood();
  if (Util.wallCollision(this.snake.head[0], this.snake.head[1])) return this.newGame();

  let tempBody = this.snake.body.slice(1);
  if (this.snake.length > 0 &&
      Util.snakeCollision(this.snake.head, tempBody)) {
    this.newGame();
  }
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