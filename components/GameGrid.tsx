
'use client'
import { GameQuery } from '@/app/page'
import useGames from '@/hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
 

interface Props{
  gameQuery:GameQuery;
}
const GameGrid = ({gameQuery}:Props) => {
    const{data,error,isLoading,isFetchingNextPage,fetchNextPage,hasNextPage}=useGames(gameQuery)
    const skeletons=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    if (error) return <p>{error?.message}</p>   
const fetchedGamedCount=data?.pages.reduce((total, page)=>total+page.results.length,0) ||0;
  return (
    <>
    <InfiniteScroll
  dataLength={fetchedGamedCount} //This is important field to render the next data
  next={()=>fetchNextPage()}
  hasMore={!!hasNextPage}
  loader={<h4>Loading...</h4>}>

<div className='grid-cols-3 gap-4 flex flex-wrap justify-center' >
      {isLoading && skeletons.map(skeleton=> <GameCardSkeleton key={skeleton}/>)}
      {data?.pages.map((page,index)=>
        <React.Fragment key={index}>
            {page.results.map(game=> <GameCard key={game.id} game={game}/>)}
        </React.Fragment>)}
    </div>
          </InfiniteScroll>

  </>
  )
}

export default GameGrid
