import React from "react";

class Player extends React.Component {
    render() {
        return(
            <div>
                <input id="PlayerInput" type='textbox'/>
                <label htmlFor="PlayerInput"></label>
            </div>
        )
    }
}

export default Player