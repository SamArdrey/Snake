const Settings = require("./settings");

export const middle = function middle() {
  const y = Settings.DIM_Y / 2;
  const x = Settings.DIM_X / 2;

  return [y, x];
};