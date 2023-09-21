
'use client'
import useGames, { Platform } from '@/hooks/useGames'
import React from 'react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import { Genre } from '@/hooks/useGenreList'
import { GameQuery } from '@/app/page'
 

interface Props{
  gameQuery:GameQuery;
}
const GameGrid = ({gameQuery}:Props) => {
    const{data,error,isLoading}=useGames(gameQuery)
    const skeletons=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  return (
    <>
    {error && <span>{error}</span>}
    <div className='grid-cols-3 gap-4 flex flex-wrap justify-center' >
      {isLoading && skeletons.map(skeleton=> <GameCardSkeleton key={skeleton}/>)}
      {data.map((game)=>(
         <GameCard key={game.id} game={game}/>
          ))}
    </div>
          </>
  )
}

export default GameGrid
