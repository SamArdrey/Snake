const Settings = require("./settings");

export const findMiddle = function findMiddle() {
  const y = Settings.DIM_Y / 2;
  const x = Settings.DIM_X / 2;

  return [y, x];
};

export const wallCollision = function wallCollision(x, y) {
  if (y < 0) return true;
  if (x < 0) return true;
  if (y > Settings.BOARD_DIM_Y) return true;
  if (x > Settings.BOARD_DIM_X) return true;
  return false;
};

export const snakeCollision = function snakeCollision(headOrFood, body) {
  for (let part = 1; part < body.length; part++) {
    let xHitbox = isHitboxOverlap(0, headOrFood, body[part]);
    let yHitbox = isHitboxOverlap(1, headOrFood, body[part]);

    if (xHitbox && yHitbox) return true;
  }

  return false;
};

export const isHitboxOverlap = function isHitboxOverlap(axis, headOrFood, part) {
  return (
    ( part[axis] >= headOrFood[axis] &&
      part[axis] < headOrFood[axis] + Settings.SNAKE_SIZE) ||
    ( part[axis] + Settings.SNAKE_SIZE >= headOrFood[axis] &&
      part[axis] + Settings.SNAKE_SIZE < headOrFood[axis] + Settings.SNAKE_SIZE)
  );
};