const Settings = require("./settings");
const Util = require("./util");

function Snake() {
}

Snake.prototype.setAttributes = function setAttributes() {
  this.length = 0;
  this.direction = [1, 0];
  this.speed = 5;
  let mid = Util.findMiddle();
  this.head = mid;
  this.body = [[mid[0], mid[1]]];
  this.tail = [mid[0], mid[1]];
};

Snake.prototype.changeDirection = function changeDirection(direction) {
  //Prevents the snake from turning around
  if (this.direction[0] === -1 * direction[0] &&
      this.direction[1] === -1 * direction[1]) return;
  if (this.length > 0 &&
      this.head[0] + (direction[0] * 25) === this.body[1][0] &&
      this.head[1] + (direction[1] * 25) === this.body[1][1]) return;
  this.direction = direction;
};

Snake.prototype.move = function move(food) {
  this.head[0] += this.direction[0] * 25;
  this.head[1] += this.direction[1] * 25;
  this.body.unshift([this.head[0], this.head[1]]);

  return this.isEating(food);
};

Snake.prototype.isEating = function isEating(food) {
  let type = 'eating';
  //If the snake eats, the tail doesn't shrink
  //also exports the tail location for updating the board
  if (Util.snakeCollision(food, this.body, type)) {
    this.length++;
    return true;
  } else {
    this.tail = this.body[this.body.length-2];
    return this.body.pop();
  }
};

Snake.prototype.draw = function draw(ctx) {
  ctx.fillStyle = Settings.SNAKE_COLOR;

  for (let part of this.body) {
    ctx.fillRect(part[1], part[0], Settings.SNAKE_SIZE, Settings.SNAKE_SIZE);
  }
};

module.exports = Snake;