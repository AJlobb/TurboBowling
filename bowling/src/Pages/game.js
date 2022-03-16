const { BowlingPlayer } = require("./player")

import Board from './board.js';

class BowlingGame {
    currentPlayerID = 0;
    framenumber = 1;
    this.rolls = [];
    this.currentRoll = 0;


/**
 * constructor
 * @param {string[]} players 
 */

constructor(players) {
    this.players = []
    for (let i = 0; i < players.length; i++) {
        const playerName = players[i]
        this.players.push(new Player(playerName))
    }
}

roll = pins => (this.rolls[this.currentRoll++] = pins);

reset = () => {
    this.rolls = [];
    this.currentRoll = 0;
};


pinsUp = () => {
    const scoreData = this.score();
    let pinsUp = 10;
    scoreData.forEach(o => {
        if (o.pinsUp !== null && !isNaN) o.pinsUp
            {
            pinsUp = o.pinsUp;
                });
    return pinsUp;
};

score = () => {
    let scoreData = [];
    let score = 0;
    let frameIndex = 0;
}
export default BowlingGame