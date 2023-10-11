
'use client'
import { GameQuery } from '@/app/page'
import useGames from '@/hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import React from 'react'
 

interface Props{
  gameQuery:GameQuery;
}
const GameGrid = ({gameQuery}:Props) => {
    const{data,error,isLoading,isFetchingNextPage,fetchNextPage,hasNextPage}=useGames(gameQuery)
    const skeletons=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    if (error) return <p>{error?.message}</p>   

  return (
    <>
<div className='grid-cols-3 gap-4 flex flex-wrap justify-center' >
      {isLoading && skeletons.map(skeleton=> <GameCardSkeleton key={skeleton}/>)}
      {data?.pages.map((page,index)=>
        <React.Fragment key={index}>
            {page.results.map(game=> <GameCard key={game.id} game={game}/>)}
        </React.Fragment>)}
    </div>
{  hasNextPage &&  <button className="btn btn-outline my-4 mx-6" onClick={()=>fetchNextPage()}>{isFetchingNextPage ? 'Loading...' : 'Load More'}</button>}        

  </>
  )
}

export default GameGrid
