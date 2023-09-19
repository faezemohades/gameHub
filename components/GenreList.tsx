'use client'

import useGenres from '@/hooks/useGenreList'
import React from 'react'

const GenerList = () => {
  const {genres}=useGenres();
  return (
    <ul>
      {genres.map(genre=><li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenerList
