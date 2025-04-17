import { GameOverProp } from '../../types/types'

const GameOver = ({winner,rematch}:GameOverProp) => {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
        {!winner && <p> It's a Draw!</p>}
      <button onClick={rematch}>Rematch?</button>
    </div>
  )
}

export default GameOver
