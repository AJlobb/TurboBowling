import React from "react";
/**
 * Class for the Players
 */
class Player extends React.Component {

    constructor(players) {
        super()
        this.name = "alex"
        this.players = []
        for (let i = 0; i < players.length; i++) {
            const playerName = players[i]
            this.players.push(playerName)
        }
    }
    /**
     * Function to get the name of the person
     * @returns the name
     */

    getName = () => {
        return this.name
    }
    getScore = () => {
        return this.score;
    }
    render() {
        return (
            <div>
                <input id="PlayerInput" type='textbox'/>
                <label htmlFor="PlayerInput"></label>
                <p>Hello</p>
            </div>
        )
    }
    frameScoring = (framenumber) => {
        let score = 0
        const balls = this.getBallsInFrame(framenumber)
        // if the next frame isnt completed return a string
        if (balls.length < 2 && !this.isFrameAStrike(framenumber)) {
            return "";
        }
        // if they have bowled a spare and not completed the next frame yet return a /
        if (this.isFrameASpare(framenumber) && this.getBallsInFrame(framenumber + 1).length < 1) {
            return "/";
        }
        // if they have bowled a strike and not completed the next frame yet return a X
        if (this.isFrameAStrike(framenumber) && !this.isFrameComplete(framenumber + 1)) {
            return "X";
        }
        // if they have bowled two strike and not completed the next frame yet return a X for both
        if (this.isFrameAStrike(framenumber) && this.isFrameAStrike(framenumber + 1) && !this.isFrameComplete(framenumber + 2)) {
            return "X";
        }
        // for loop to add the additional scores to score
        for (let i = 1; i <= framenumber; i++) {
            score = score + this.getFramePins(i)
            // if its a spare it adds the next bowl to score
            if (this.isFrameASpare(i)) {
                const theNextBall = this.getBallsInFrame(i + 1)[0]
                score = score + theNextBall
            }
            // if its a strike it adds the next frame to the score
            if (this.isFrameAStrike(i)) {
                const theNextFrame = this.getFramePins(i + 1)
                score = score + theNextFrame
                // if they have thrown two strikes it adds pins from the frame + 2
                if (this.isFrameAStrike(i + 1)) {
                    const theFrameAfter = this.getFramePins(i + 2)
                    score = score + theFrameAfter
                }
                    
            }
        }
        return score
    }
}
export default Player