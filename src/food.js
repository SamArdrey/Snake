const Settings = require("./settings");

function Food(board) {
  this.board = board;
  this.setLocation();
}

Food.prototype.setLocation = function setLocation() {
  let location = this.getXY();
  while(this.board.checkForOverlap(location[0], location[1])) {
    location = this.getXY();
  }

  this.location = location;
};

Food.prototype.getXY = function getXY() {
  let x = Math.floor(Math.random() * Settings.BOARD_DIM_X);
  let y = Math.floor(Math.random() * Settings.BOARD_DIM_Y);
  return [x, y];
};

Food.prototype.draw = function draw(ctx) {
  ctx.fillStyle = Settings.FOOD_COLOR;
  ctx.fillRect(this.location[1], this.location[0], Settings.FOOD_SIZE, Settings.FOOD_SIZE);
};

module.exports = Food;