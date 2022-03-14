import React from "react";

class Player extends React.Component {
    constructor(player) {
        this.name = player
    }
    render() {
        return(
            <div>
                <input id="PlayerInput" type='textbox'/>
                <label htmlFor="PlayerInput"></label>
                <button className="player">
                    {this.props.Player}
                </button>
            </div>
        )
    }

export default Player