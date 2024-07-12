// src/App.js
import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';
import './App.css';

function App() {
  const player = {
    name: "LeBron James",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRlaVC8wg4HRzI7T1cjXxKmmJ6LOyTf4XkQ&s",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  };

  return (
    <div className="App">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
}

export default App;
