import React from 'react';
import './reset.css';
import './style.css';
import ScoreboardDisplay from './components/ScoreboardDisplay';
import CardBoard from './components/CardBoard';

function App() {
  return (
    <div className="app">
      <h1>Memory Cards</h1>
      <ScoreboardDisplay />
      <CardBoard />
      <div />
    </div>
  );
}

export default App;
