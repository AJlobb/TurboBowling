const { BowlingPlayer } = require("./player")

class BowlingGame {
    currentPlayerID = 0
    framenumber = 1

    /**
     * constructor
     * @param {string[]} players 
     */
   
    constructor(players) {
        this.players = []
        for (let i = 0; i < players.length; i++){
            const playerName = players[i]
            this.players.push(new BowlingPlayer(playerName))
}
    }

    score = () => {
        let score = 0;
        let roll = 0;
        let framescore = [];