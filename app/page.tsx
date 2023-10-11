'use client'

import GameGrid from '@/components/GameGrid'
import GameHeading from '@/components/GameHeading';
import GenerList from '@/components/GenreList'
import Navbar from '@/components/Navbar'
import PlatformSelector from '@/components/PlatformSelector';
import SortSelector from '@/components/SortSelector';
  import React, { useState } from 'react';

export interface GameQuery{
  genreId?:number;
  platformId?:number;
  sortOrder:string;
  searchText:string;
}

export default function Home() {

  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  return (
    <main >
    <Navbar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/>
    <div className='grid grid-cols-8 gap-x-1 m-auto'>
     <div className='col-span-1 hidden md:block '>
      <GenerList selectedGenreId={gameQuery.genreId} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genreId:genre.id})}/>
     </div>
     <div className='col-span-7'>
      <div className=''>
     <GameHeading gameQuery={gameQuery}/>
     <div className='flex flex-row'>
      <div >
      <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platformId:platform.id})} />
      </div>
      <SortSelector onSelectSortOrder={(sortOrder=>setGameQuery({...gameQuery,sortOrder}))} sortOrder={gameQuery.sortOrder}/>
     </div>
      </div>
      <GameGrid gameQuery={gameQuery}/>
     </div>
    </div>
    </main>
  )
}
