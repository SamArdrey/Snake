const Settings = require("./settings");

function Snake() {
  this.getBigger = false;
}

Snake.prototype.setAttributes = function setAttributes() {
  this.direction = [1, 0];
  this.length = 1;
  this.speed = 2;
  this.head = null;
  let mid = this.middle();
  this.head = mid;
  this.body = [];
  this.body.push(mid);
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

  this.body.push(this.head);

  if (this.getBigger) {
    this.body.unshift(this.lastLocation);
  }

  this.lastLocation = this.head;
  this.getBigger = false;
  return this.isEating(food);
};

Snake.prototype.isEating = function isEating(food) {
  let xHitBox = this.isHitBoxOverlap(0, food);
  let yHitBox = this.isHitBoxOverlap(1, food);

  //If the snake eats, the tail doesn't shrink
  //also exports the tail location for updating the board
  if (xHitBox && yHitBox) {
    this.length++;
    this.updateSpeed();
    this.getBigger = true;
    this.body.unshift(this.lastLocation);
    return true;
  } else {
    this.body.shift();
    return this.body[0];
  }
};

Snake.prototype.isHitBoxOverlap = function isHitBoxOverlap(axis, food) {
  return (
    ( this.head[axis] >= food[axis] &&
      this.head[axis] < food[axis] + Settings.FOOD_SIZE) ||
    ( this.head[axis] + Settings.SNAKE_SIZE >= food[axis] &&
      this.head[axis] + Settings.SNAKE_SIZE < food[axis] + Settings.FOOD_SIZE)
  );
};

Snake.prototype.updateSpeed = function updateSpeed() {
  switch (this.length) {
    case 5:
      this.speed = 3;
      break;
    case 10:
      this.speed = 4;
      break;
    case 15:
      this.speed = 5;
      break;
    case 20:
      this.speed = 6;
      break;
    default:
      break;
  }
};

Snake.prototype.draw = function draw(ctx) {
  ctx.fillStyle = Settings.SNAKE_COLOR;

  for (let part of this.body) {
    // if(this.length > 2) debugger;
    ctx.fillRect(part[1], part[0], Settings.SNAKE_SIZE, Settings.SNAKE_SIZE);
  }
};

Snake.prototype.middle = function middle() {
  const y = Settings.DIM_Y / 2;
  const x = Settings.DIM_X / 2;

  return [y, x];
};

module.exports = Snake;