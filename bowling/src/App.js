import React from "react";
import "./App.css";

import Player from './Pages/player'
import Board from "./Pages/board";

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
