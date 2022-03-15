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
        this.handleChange.bind(this)
        this.state = {
            name: ''
        }

    }
    /**
     * Function to get the name of the person
     * @returns the name
     */

    handleChange = (e) => {
        e.preventDefault();
        this.setState(e.target.value)
    }

    getName = () => {
        return this.name
    }
    getScore = () => {
        return this.score;
    }
    render() {
        return (
            <div>
                <input id="PlayerInput" type='textbox' onChange={this.handleChange} />
                <label htmlFor="PlayerInput"></label>
                <p>Hello, {this.state.name}</p>
            </div>
        )
    }
}
/**
 * Class to create the board
 */
// class Board extends React.Component {
//     renderSquare(i) {
//         return (
//             <Square 
//                 value={this.props.squares(i)}
//                 />
//         )
//     }
//     createBoard = () => {
//         render(); {
//             return (
//                 <div>
//                     <div className="board-row">
//                         {this.renderSquare(0)}
//                         {this.renderSquare(1)}
//                         {this.renderSquare(2)}
//                         {this.renderSquare(3)}
//                         {this.renderSquare(4)}
//                         {this.renderSquare(5)}
//                         {this.renderSquare(6)}
//                         {this.renderSquare(7)}
//                         {this.renderSquare(8)}
//                         {this.renderSquare(9)}
//                     </div>
//                 </div>
//             )
//         }
//     }

// };
export default Player