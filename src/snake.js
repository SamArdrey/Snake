const Settings = require("./settings");
const Util = require("./util");

function Snake() {
}

Snake.prototype.setAttributes = function setAttributes() {
  this.direction = [1, 0];
  this.speed = 5;
  let mid = Util.middle();
  this.head = mid;
  this.body = [[mid[0], mid[1]]];
  this.tail = [mid[0], mid[1]];
};

Snake.prototype.changeDirection = function changeDirection(direction) {
  //Prevents the snake from turning around
  if (this.direction[0] === -1 * direction[0] &&
      this.direction[1] === -1 * direction[1]) return;
  this.direction = direction;
};

Snake.prototype.move = function move(food) {
  this.head[0] += this.direction[0] * this.speed;
  this.head[1] += this.direction[1] * this.speed;
  this.body.unshift([this.head[0] , this.head[1]]);

  return this.isEating(food);
};

Snake.prototype.isEating = function isEating(food) {
  //If the snake eats, the tail doesn't shrink
  //also exports the tail location for updating the board
  if (this.checkForOverlap(food)) {
    this.updateSpeed();
    return true;
  } else {
    this.tail = this.body[this.body.length-2];
    return this.body.pop();
  }
};


//
//
// Move to settings so that food can use it
//
//
//
Snake.prototype.checkForOverlap = function checkForOverlap(food) {
  let xHitbox = this.isHitboxOverlap(0, food);
  let yHitbox = this.isHitboxOverlap(1, food);

  return (xHitbox && yHitbox);
};

Snake.prototype.isHitboxOverlap = function isHitboxOverlap(axis, food) {
  return (
    ( this.head[axis] >= food[axis] &&
      this.head[axis] < food[axis] + Settings.FOOD_SIZE) ||
    ( this.head[axis] + Settings.SNAKE_SIZE >= food[axis] &&
      this.head[axis] + Settings.SNAKE_SIZE < food[axis] + Settings.FOOD_SIZE)
  );
};

Snake.prototype.updateSpeed = function updateSpeed() {
  switch (this.body.length) {
    case 10:
      this.speed = 6;
      break;
    case 20:
      this.speed = 7;
      break;
    case 25:
      this.speed = 8;
      break;
    case 30:
      this.speed = 9;
      break;
    default:
      break;
  }
};

Snake.prototype.draw = function draw(ctx) {
  ctx.fillStyle = Settings.SNAKE_COLOR;

  for (let part of this.body) {
    ctx.fillRect(part[1], part[0], Settings.SNAKE_SIZE, Settings.SNAKE_SIZE);
  }
};

module.exports = Snake;