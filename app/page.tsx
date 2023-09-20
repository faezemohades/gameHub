'use client'

import GameGrid from '@/components/GameGrid'
import GenerList from '@/components/GenreList'
import Navbar from '@/components/Navbar'
import { Genre } from '@/hooks/useGenreList';
import React, { useState } from 'react';
export default function Home() {
  const [selectedGenre,setSelectedGenre]=useState<Genre |null >(null);
  return (
    <main >
    <Navbar/>
    <div className='grid grid-cols-7 gap-x-1 m-auto'>
     <div className='col-span-1 hidden md:block'>
      <GenerList onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
     </div>
     <div className='col-span-6'>
      <GameGrid selectedGenre={selectedGenre}/>
     </div>
    </div>
    </main>
  )
}
