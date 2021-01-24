let score = 0;
let highScore = 0;

const incrementScore = function incrementScore() {
  score += 1;

  if (score > highScore) {
    highScore = score;
  }
};

const resetScore = function resetScore() {
  score = 0;
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
