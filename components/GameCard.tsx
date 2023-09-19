import { Game } from '@/hooks/useGames'
 import React from 'react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'

interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  
  return (
    <>
    <div className="card w-64 bg-base-100 shadow-xl" >
  <figure><img src={game.background_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>{game.name}</p>
    <div className="card-actions justify-around">
    <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
    <CriticScore score={game.metacritic}/>
     </div>
  </div>
</div>
</>
  )
}

export default GameCard
