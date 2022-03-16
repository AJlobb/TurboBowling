import React from "react";
import './board.css';
/**
 * class to show the board
 */
class Board extends React.Component {
    render() {
        return (
            <div>
                <div className='board-Header'>
                    <h1 data-testid='bowling-header'>Bowling Game</h1>
                </div>
                <table id='scorecardTable' className='scorecard' cellPadding='1' cellSpacing='0' data-testid="scorecardTable">
                    <tbody data-testid='score-tbody'>
                        <tr>
                            <th colSpan='6' data-testid='frame1-th'>Frame 1</th>
                            <th colSpan='6' data-testid='frame2-th'>Frame 2</th>
                            <th colSpan='6' data-testid='frame3-th'>Frame 3</th>
                            <th colSpan='6' data-testid='frame4-th'>Frame 4</th>
                            <th colSpan='6' data-testid='frame5-th'>Frame 5</th>
                            <th colSpan='6' data-testid='frame6-th'>Frame 6</th>
                            <th colSpan='6' data-testid='frame7-th'>Frame 7</th>
                            <th colSpan='6' data-testid='frame8-th'>Frame 8</th>
                            <th colSpan='6' data-testid='frame9-th'>Frame 9</th>
                            <th colSpan='6' data-testid='frame10-th'>Frame 10</th>
                        </tr>
                        <tr>
                            <td colSpan='3' data-testid='frame1-td1'></td><td id="frame1" colSpan='3' data-testid='frame1-td2'></td>
                            <td colSpan='3' data-testid='frame2-td1'></td><td id="frame2" colSpan='3' data-testid='frame2-td2'></td>
                            <td colSpan='3' data-testid='frame3-td1'></td><td id="frame3" colSpan='3' data-testid='frame3-td2'></td>
                            <td colSpan='3' data-testid='frame4-td1'></td><td id="frame4" colSpan='3' data-testid='frame4-td2'></td>
                            <td colSpan='3' data-testid='frame5-td1'></td><td id="frame5" colSpan='3' data-testid='frame5-td2'></td>
                            <td colSpan='3' data-testid='frame6-td1'></td><td id="frame6" colSpan='3' data-testid='frame6-td2'></td>
                            <td colSpan='3' data-testid='frame7-td1'></td><td id="frame7" colSpan='3' data-testid='frame7-td2'></td>
                            <td colSpan='3' data-testid='frame8-td1'></td><td id="frame8" colSpan='3' data-testid='frame8-td2'></td>
                            <td colSpan='3' data-testid='frame9-td1'></td><td id="frame9" colSpan='3' data-testid='frame9-td2'></td>
                            <td colSpan='3' data-testid='frame10-td1'></td><td id="frame10" colSpan='3' data-testid='frame10-td2'></td>
                        </tr>
                        <tr>
                            <td colSpan='6' id="marker0" data-testid='frame1-td3'></td>
                            <td colSpan='6' id="marker1" data-testid='frame2-td3'></td>
                            <td colSpan='6' id="marker2" data-testid='frame3-td3'></td>
                            <td colSpan='6' id="marker3" data-testid='frame4-td3'></td>
                            <td colSpan='6' id="marker4" data-testid='frame5-td3'></td>
                            <td colSpan='6' id="marker5" data-testid='frame6-td3'></td>
                            <td colSpan='6' id="marker6" data-testid='frame7-td3'></td>
                            <td colSpan='6' id="marker7" data-testid='frame8-td3'></td>
                            <td colSpan='6' id="marker8" data-testid='frame9-td3'></td>
                            <td colSpan='6' id="marker9" data-testid='frame10-td3'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Board