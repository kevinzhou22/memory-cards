import React, { useState, useEffect } from 'react';
import events from '../events';
import scoreboard from '../scoreboard';

const useScoreboardScore = function useScoreboardData() {
  const [score, setScore] = useState(scoreboard.getScore());

  useEffect(() => {
    const handleScoreChange = function handleScoreChange(newScore) {
      setScore(newScore);
    };
    events.on('newScore', handleScoreChange);
  });

  return score;
};

const useScoreboardHighScore = function useScoreboardHighScore() {
  const [highScore, setHighScore] = useState(scoreboard.getHighScore());

  useEffect(() => {
    const handleHighScoreChange = function handleScoreChange(newHighScore) {
      setHighScore(newHighScore);
    };
    events.on('newHighScore', handleHighScoreChange);
  });

  return highScore;
};

function ScoreboardDisplay() {
  const score = useScoreboardScore();
  const highScore = useScoreboardHighScore();

  return (
    <div className="scoreboard-display">
      <span className="score">{`Score: ${score}`}</span>
      <span className="high-score">{`High Score: ${highScore}`}</span>
    </div>
  );
}

export default ScoreboardDisplay;
