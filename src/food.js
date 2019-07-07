const Settings = require("./settings");

function Food() {
  this.setLocation();
}

Food.prototype.setLocation = function setLocation() {
  let x = Math.floor(Math.random() * Settings.BOARD_DIM_X);
  let y = Math.floor(Math.random() * Settings.BOARD_DIM_Y);
  this.location = [x, y];

  return this.location;
};

Food.prototype.draw = function draw(ctx) {
  ctx.fillStyle = Settings.FOOD_COLOR;
  ctx.fillRect(this.location[1], this.location[0], Settings.FOOD_SIZE, Settings.FOOD_SIZE);
};

module.exports = Food;