import Player from './components/Player/Player'
import GameBoard from './components/GameBoard/GameBoard'
import Log from './components/log/log'
import GameOver from './components/GameOver/GameOver'
import { useState } from 'react'
import {WINNING_COMBINATIONS} from './winning-combination'
import { AllowedSymbol, GameTurn, AllowedEntries } from './types/types'

function App() {
  const initialBoard:AllowedEntries[][] = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]
  const PLAYERS_INFO = [
    {
      name: 'PLAYER 1',
      symbol: 'X'
    },
    {
      name: 'PLAYER 2',
      symbol: '0'
    }
  ]
  const [activePlayer, setActivePlayer] = useState<AllowedSymbol>('X')
  const [gameTurns , setGameTurns] = useState<Array<GameTurn>>([])
  const gameBoard = [...initialBoard.map(innerArray=>[...innerArray])]                                                                                                                                                                                            
  let winner=null
  for(const turn of gameTurns){
      const {box,player} = turn
      const {row,col} = box

      gameBoard[row][col] = player
  }
  for ( const combination of WINNING_COMBINATIONS){
    const firstBox = gameBoard[combination[0].row][combination[0].column]
    const secondBox = gameBoard[combination[1].row][combination[1].column]
    const thirdBox = gameBoard[combination[2].row][combination[2].column]

    if(firstBox && firstBox === secondBox && firstBox === thirdBox){
      winner = firstBox
    }
  }
  function togglePlayer(rowIndex:number,colIndex:number){
    setActivePlayer((prevActivePlayer)=>prevActivePlayer === 'X'?'0':'X')
    setGameTurns((prevGameTurn)=>{
      let currentPlayer:AllowedSymbol = 'X'
      if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = '0'
      }
      const newTurnInfo = {
        box: {
          row: rowIndex,
          col: colIndex
        },
        player: currentPlayer
      }
      const updatedGameTurn = [newTurnInfo,...prevGameTurn]
      return updatedGameTurn
    })
  }
  function handleRematch(){
    setGameTurns([])
  }
  return (
    <>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          {
            PLAYERS_INFO.map((player)=>(
              <Player isActive={activePlayer === player.symbol} {...player}/>
            ))
          }
        </ol>
        {(winner || gameTurns.length===9) && <GameOver rematch={handleRematch} winner={winner}/>}
        <GameBoard togglePlayer={togglePlayer} gameboard = {gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </>
  )
}

export default App
