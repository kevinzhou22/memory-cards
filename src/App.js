import React from 'react';
import './reset.css';
import './style.css';
import ScoreboardDisplay from './components/ScoreboardDisplay';

function App() {
  return (
    <div className="app">
      <h1>Memory Cards</h1>
      <ScoreboardDisplay />
      { /* placeholder for cardsBoard */}
      <div />
    </div>
  );
}

export default App;
