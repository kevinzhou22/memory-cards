let score = 0;
let highestScore = 0;

const incrementScore = function incrementScore() {
  score += 1;

  if (score > highestScore) {
    highestScore = score;
  }
};

const resetScore = function resetScore() {
  score = 0;
};

const getScore = function getScore() {
  return score;
};

const getHighestScore = function getHighestScore() {
  return highestScore;
};

const scoreboard = {
  incrementScore,
  resetScore,
  getScore,
  getHighestScore,
};

export { scoreboard as default };
