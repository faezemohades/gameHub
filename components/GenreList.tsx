'use client'

import useData from '@/hooks/useData';
import useGenres, { Genre } from '@/hooks/useGenreList'
import React from 'react'

const GenerList = () => {
  const {data}=useGenres();
  return (
    <ul>
      {data.map(genre=><li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenerList
