'use client'

import GameGrid from '@/components/GameGrid'
import GenerList from '@/components/GenreList'
import Navbar from '@/components/Navbar'
import PlatformSelector from '@/components/PlatformSelector';
import SortSelector from '@/components/SortSelector';
import { Game, Platform } from '@/hooks/useGames';
import { Genre } from '@/hooks/useGenreList';
import { platform } from 'os';
import React, { useState } from 'react';

// export interface GameQuery{
//   genre:Genre |null;
//   platform:Platform |null;
//   sortOrder:string;
// }

export default function Home() {
  const [selectedGenre,setSelectedGenre]=useState<Genre |null >(null);
  const [selectedPlatform,setSelectedPlatform]=useState<Platform |null >(null);

  // const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  return (
    <main >
    <Navbar/>
    <div className='grid grid-cols-7 gap-x-1 m-auto'>
     <div className='col-span-1 hidden md:block'>
      <GenerList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
     </div>
     <div className='col-span-6'>
      <div className='ml-20'>
      <PlatformSelector onSelectPlatform={(platform)=>setSelectedPlatform(platform)} selectedPlatform={selectedPlatform}/>
      <SortSelector onSelectSortOrder={(sortOrder=>setGameQuery({...gameQuery,sortOrder}))}/>
      </div>
      <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
     </div>
    </div>
    </main>
  )
}
