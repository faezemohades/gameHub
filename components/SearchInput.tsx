"use client"
import React, { useRef } from 'react'
import { FiSearch } from 'react-icons/fi';

interface Props{
  onSearch:(searchText:string)=>void;
}
const SearchInput = ({onSearch}:Props) => {
  const ref=useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value);
    }}>
      <button className='p-2'>
      <FiSearch/>
      </button>
      <input ref={ref} placeholder='Search Games....' className='p-2 rounded-lg'/>
    </form>
  )
}

export default SearchInput
