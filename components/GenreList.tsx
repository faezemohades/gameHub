'use client'

import useGenres, { Genre } from '@/hooks/useGenreList'
import React from 'react'

 interface Props{
  onSelectGenre:(genre:Genre)=>void;
 }
const GenerList = ({onSelectGenre}:Props) => {
  const {data,isLoading,error}=useGenres();
if (error) return null;
  if (isLoading) return <span className="loading loading-dots loading-md"></span>
  return (
    <ul className='list-none px-1'>
      {data.map(genre=><li key={genre.id}>
        <div  className='flex my-1'>
          <img className='rounded-md' src={genre.image_background} alt="img" width={42} height={32}/>
          <button onClick={()=>onSelectGenre(genre)} className="btn  px-2 bg-transparent border-0 py-0">{genre.name}</button>
        </div>
      </li>)}
    </ul>
  )
}

export default GenerList
