import { Game } from '@/hooks/useGames'
 import React from 'react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import getCroppedImageUrl from '@/services/image-url'
 
interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  const imageUrl = getCroppedImageUrl(game.background_image) as string;

  return (
    <div className="card w-64 bg-base-100 shadow-xl rounded-lg" >
  <figure><img src={imageUrl}  alt={game.name} className='h-40 w-60 rounded-lg'/></figure>
  <div className="card-body">
    <div className="card-actions justify-between">
    <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
    <CriticScore score={game.metacritic}/>
    <h3 className="card-title">{game.name} <Emoji rating={game.rating_top}/></h3>
     </div>
  </div>
</div>
   )
}

export default GameCard
