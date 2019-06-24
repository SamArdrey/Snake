const Settings = require('./settings');

function GameView(game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.snake = this.game.snake;
}

GameView.DIRECTION = {
  w: [1,0],
  up: [1,0],

  a: [0,-1],
  left: [0,-1],

  s: [-1,0],
  down: [-1,0],

  d: [0,1],
  right: [0,1],
};

GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
  const snake = this.snake;

  Object.keys(GameView.DIRECTION).forEach(function(k)  {
    const direction = GameView.DIRECTION[k];
    key(k, function () { snake.changeDirection(direction); });
  });
};

GameView.prototype.start = function start() {
  this.bindKeyHandlers();
  this.lastTime = 0;
  // start the animation
  requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.animate = function animate(time) {
  const timeDelta = time - this.lastTime;

  this.game.step(timeDelta);
  this.game.draw(this.ctx);
  this.lastTime = time;

  // every call to animate requests causes another call to animate
  requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;