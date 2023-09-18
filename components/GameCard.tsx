import { Game } from '@/hooks/useGames'
import React from 'react'

interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <>
    <div className="card w-64 bg-base-100 shadow-xl">
  <figure><img src={game.background_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>{game.name}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</>
  )
}

export default GameCard
