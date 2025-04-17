import { ChangeEvent, useState } from 'react'
import { PlayerProp } from '../../types/types'

const Player = ({isActive,name,symbol}:PlayerProp) => {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(name)

  function handleEdit(){
    setIsEditing((isEditing)=>!isEditing)
  }

  function handlePlayerNameChange(e:ChangeEvent<HTMLInputElement>){
    setPlayerName(()=> e.target.value)
  }
  
  return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {
              isEditing ?
                <input type='text' autoFocus value={playerName} onChange={(e)=>handlePlayerNameChange(e)} className='player-name'/> :
                <span className="player-name">{playerName}</span>
            }
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player
