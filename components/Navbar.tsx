'use client'

import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput';
import { GiSunflower,GiMoon } from 'react-icons/gi';

interface Props{
  onSearch:(searchText:string)=>void;
}
const Navbar = ({onSearch}:Props) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme as string); // Type assertion
    }
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme || "light");
  }, [theme]);
  
  return (
 <div className="navbar bg-base-100">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost"  >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <SearchInput onSearch={onSearch}/>
  <div className='px-2'>
        <button onClick={toggleTheme}>
          {theme === 'light' ? <GiMoon size={40} /> : <GiSunflower size={40} />}
        </button>
      </div>
</div>
   )
}

export default Navbar
