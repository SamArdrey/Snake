const Snake = require("./snake");
const SnakeFood = require('./snake_food');

function Game() {
  // this.snake = this.addSnake();
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 600;
Game.DIM_Y = 600;
Game.FPS = 32;

Game.prototype.addSnake = function addSnake() {
  let snake = new Snake();
  return snake;
};

Game.prototype.step = function step() {
  // Save for later
  // this.checkCollision()
  // this.moveObjects()
};

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = Game.BG_COLOR;
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  
  this.drawOutline(ctx);

  this.allObjects().forEach(function(object) {
    object.draw(ctx);
  });
};

Game.prototype.drawOutline = function drawOutline(ctx) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, Game.DIM_Y);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "pink";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(Game.DIM_X, 0);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "pink";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(Game.DIM_X, 0);
  ctx.lineTo(Game.DIM_X, Game.DIM_Y);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "pink";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, Game.DIM_Y);
  ctx.lineTo(Game.DIM_X, Game.DIM_Y);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "pink";
  ctx.stroke();
};


Game.prototype.allObjects = function allObjects() {
  // return [].concat([this.snake]);
  return;
};

module.exports = Game;