import React from "react";
import "./App.css";

import Player from "./Pages/player";

function App() {
  return (
    <body>
      <div class="container">
        <div class="scoreboard">
        </div>
        <div class="player">
          <Player />
        </div>
      </div>
    </body>
  );
}

export default App;
