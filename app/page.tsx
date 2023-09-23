'use client'

import GameGrid from '@/components/GameGrid'
import GenerList from '@/components/GenreList'
import Navbar from '@/components/Navbar'
import PlatformSelector from '@/components/PlatformSelector';
import SortSelector from '@/components/SortSelector';
import GameHeading from '@/components/gameHeading';
import {Platform } from '@/hooks/useGames';
import { Genre } from '@/hooks/useGenreList';
import React, { useState } from 'react';

export interface GameQuery{
  genre:Genre |null;
  platform:Platform |null;
  sortOrder:string;
  searchText:string;
}

export default function Home() {

  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  return (
    <main >
    <Navbar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/>
    <div className='grid grid-cols-12 gap-x-1 m-auto'>
     <div className='col-span-1 hidden md:block '>
      <GenerList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
     </div>
     <div className='col-span-11'>
      <div className='ml-21'>
     <GameHeading gameQuery={gameQuery}/>
     <div className='flex flex-row'>
      <div >
      <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})} />
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
