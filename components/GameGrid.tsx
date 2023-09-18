
'use client'
import useGames from '@/hooks/useGames'
import React from 'react'
 

const GameGrid = () => {
    const{games,error}=useGames()
  return (
    <>
    {error && <span>{error}</span>}
    <ul>
      {games.map((game)=>(
          <li key={game.id}>{game.name}</li>
          ))}
    </ul>
          </>
  )
}

export default GameGrid
