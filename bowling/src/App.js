import React from "react";
import "./App.css";

import Player from './Components/player/player.js'
import Board from './Components/Board/board.js'

function App() {
  return (
      <div className="container">
        <div className="player">
          <Player />
        </div>
        <div className="scoreboard">
          <Board />
        </div>
      </div>
  );
}

export default App;
