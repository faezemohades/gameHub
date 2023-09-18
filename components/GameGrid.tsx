
'use client'
import useGames from '@/hooks/useGames'
import React from 'react'
import GameCard from './GameCard'
 

const GameGrid = () => {
    const{games,error}=useGames()
  return (
    <>
    {error && <span>{error}</span>}
    <div className='grid-cols-3 gap-4 flex flex-wrap' >
      {games.map((game)=>(
         <GameCard key={game.id} game={game}/>
          ))}
    </div>
          </>
  )
}

export default GameGrid
