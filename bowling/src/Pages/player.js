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

    handleInput = (e) => {
        this.players(this.players.push(e.target.value))
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
                <form onSubmit={this.handleInput}> (
                    <input id="PlayerInput" type='textbox' />
                    <label htmlFor="PlayerInput"></label>
                    <button className="player">
                        {this.props.Player}
                    </button>
                </form>
            </div>
        )
    }
}
/**
 * Class to create the board
 */
class Board extends React.Component 
    createBoard = () => {

    }

}
export default Player