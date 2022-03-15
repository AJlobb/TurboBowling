import React from "react";
import "./App.css";

import Player from "./Pages/player";
import Game from "./Pages/game";

function App() {
  return (
    <body>
      <div class="container">
        <div class="scoreboard">
          <Game />
        </div>
        <div class="player">
          <Player />
        </div>
      </div>
    </body>
  );
}

export default App;
