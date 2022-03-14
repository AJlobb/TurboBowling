import React from "react";

class Player extends React.Component {
    constructor(player) {
        this.name = player
    }
        
    
        render() {
            renturn(
                <button className="player">
                    {this.props.Player}
                </button>
            )
    }
    
    }

export default Player