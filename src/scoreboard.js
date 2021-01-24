import events from './events';

let score = 0;
let highScore = 0;

const incrementScore = function incrementScore() {
  score += 1;
  events.emit('newScore', score);

  if (score > highScore) {
    highScore = score;
    events.emit('newHighScore', highScore);
  }
};

const resetScore = function resetScore() {
  score = 0;
  events.emit('newScore', score);
};

const getScore = function getScore() {
  return score;
};

const gethighScore = function gethighScore() {
  return highScore;
};

const scoreboard = {
  incrementScore,
  resetScore,
  getScore,
  gethighScore,
};

export { scoreboard as default };
