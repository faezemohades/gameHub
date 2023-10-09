'use client'

import SearchInput from './SearchInput';
import DarkModeBtn from './DarkModeBtn';

interface Props{
  onSearch:(searchText:string)=>void;
}
const Navbar = ({onSearch}:Props) => {
 
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
      <DarkModeBtn/>
      </div>
</div>
   )
}

export default Navbar
