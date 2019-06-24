const Settings = require("./settings");

function Snake() {
  this.direction = [-1, 0];
  this.length = 1;
  this.head = this.middle();
  this.body = [this.head];
}

Snake.prototype.changeDirection = function changeDirection(direction) {
  //Prevents the snake from turning around
  if (this.direction[0] === -1 * direction[0] &&
      this.direction[1] === -1 * direction[1]) return;
  this.direction = direction;
};


Snake.prototype.move = function move(food) {
  this.head[0] += this.direction[0];
  this.head[1] += this.direction[1];
  this.body.unshift(this.head);

  return this.isEating(food);
};

Snake.prototype.isEating = function isEating(food) {
  //If the snake eats, the tail doesn't shrink
  //also exports the tail location for updating the board
  if (this.head[0] === food[0] &&
    this.head[1] === food[1]) return this.body[this.body.length-1];
  this.moveTail();
};

Snake.prototype.moveTail = function moveTail() {
  this.body.pop();
};

Snake.prototype.draw = function draw(ctx) {
  ctx.fillStyle = Settings.SNAKE_COLOR;
  for (let part of this.body) {
    ctx.fillRect(part[1], part[0], Settings.SNAKE_SIZE, Settings.SNAKE_SIZE);
  }
};

Snake.prototype.middle = function middle() {
  const y = Settings.DIM_Y / 2;
  const x = Settings.DIM_X / 2;
  return [y, x];
};

module.exports = Snake;