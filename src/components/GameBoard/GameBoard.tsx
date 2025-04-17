import { GameBoardProp } from "../../types/types"

const GameBoard = ({togglePlayer,gameboard}:GameBoardProp) => {
    return (
        <ol id='game-board'>
        {
            gameboard.map((rowValue, rowIndex)=>(
                <li key= {rowIndex}>
                    <ol>
                        {
                            rowValue.map((columnValue,columnIndex)=>(
                                <li key={columnIndex}>
                                    <button onClick={()=>togglePlayer(rowIndex,columnIndex)} disabled = {columnValue === 'X' || columnValue === '0' ? true : false}>{columnValue}</button>
                                </li>
                            ))
                        }
                    </ol>
                </li>
            ))
        }
        </ol>
    )
}

export default GameBoard