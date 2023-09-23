'use client'

import GameGrid from '@/components/GameGrid'
import GenerList from '@/components/GenreList'
import Navbar from '@/components/Navbar'
import PlatformSelector from '@/components/PlatformSelector';
import SearchInput from '@/components/SearchInput';
import SortSelector from '@/components/SortSelector';
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
    <div className='grid grid-cols-7 gap-x-1 m-auto'>
     <div className='col-span-1 hidden md:block'>
      <GenerList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
     </div>
     <div className='col-span-6'>
      <div className='ml-20'>
      <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})} />
      <SortSelector onSelectSortOrder={(sortOrder=>setGameQuery({...gameQuery,sortOrder}))} sortOrder={gameQuery.sortOrder}/>
      </div>
      <GameGrid gameQuery={gameQuery}/>
     </div>
    </div>
    </main>
  )
}
