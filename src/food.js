const Settings = require("./settings");

function Food(board) {
  this.board = board;
  this.location = this.setLocation();
}

Food.prototype.setLocation = function setLocation() {
  let location = this.getXY();

  while(this.board.checkForOverlap(location[0], location[1])) {
    location = this.getXY();
  }

  this.location = location;
};

Food.prototype.draw = function draw(ctx) {

};

Food.prototype.getXY = function getXY() {
  let x = Math.floor(Math.random() * Settings.BOARD_DIM_X);
  let y = Math.floor(Math.random() * Settings.BOARD_DIM_Y);
  return [x, y];
};

module.exports = Food;