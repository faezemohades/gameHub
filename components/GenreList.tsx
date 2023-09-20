'use client'

import useGenres from '@/hooks/useGenreList'
import React from 'react'

const GenerList = () => {
  const {data,isLoading,error}=useGenres();
if (error) return null;
  if (isLoading) return <span className="loading loading-dots loading-md"></span>
  return (
    <ul className='list-none px-1'>
      {data.map(genre=><li key={genre.id}>
        <div  className='flex my-1'>
          <img className='rounded-md' src={genre.image_background} alt="img" width={32} height={32}/>
          <span className='px-2 text-lg'>{genre.name}</span>
        </div>
      </li>)}
    </ul>
  )
}

export default GenerList
