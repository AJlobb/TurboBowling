import React from "react";

class Player extends React.Component {
    constructor(players) {
        super()
        this.name = "alex"
        this.players = []
        for (let i = 0; i < players.length; i++){
            const playerName = players[i]
            this.players.push(playerName)
        }

    }
    
    getName = () => {
        return this.name
    }
    render() {
        return (
            <div>
                <input id="PlayerInput" type='textbox' />
                <label htmlFor="PlayerInput"></label>
                <button className="player">
                    {this.props.Player}
                </button>
            </div>
        )
    }
}


export default Player