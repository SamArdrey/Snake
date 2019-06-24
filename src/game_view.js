function GameView(game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.snake = this.game.addSnake();
}

GameView.MOVES = {
  w: [0, -1],
  up: [0, -1],

  a: [-1, 0],
  left: [-1, 0],

  s: [0, 1],
  down: [0, 1],

  d: [1, 0],
  right: [1, 0],
};

GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
  const snake = this.snake;

  Object.keys(GameView.MOVES).forEach(function(k)  {
    const move = GameView.MOVES[k];
    //change the name of power below?
    key(k, function () { snake.changeDirection(move); });
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