import { LogProp } from '../../types/types'

const Log = ({turns}:LogProp) => {
  return (
    <ol id='log'>
      {
        turns.map((turn)=>(
            <li key={`${turn.box.row}${turn.box.col}`}>Player {turn.player} selected {turn.box.row} , {turn.box.col}</li>
        ))
      }
    </ol>
  )
}

export default Log
