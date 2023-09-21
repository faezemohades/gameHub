import { Platform } from '@/hooks/useGames';
import usePlatforms from '@/hooks/usePlatforms'
import React from 'react'


interface Props{
  onSelectPlatform:(platform:Platform)=>void;
  selectedPlatform:Platform| null;
}
const PlatformSelector = ({onSelectPlatform,selectedPlatform}:Props) => {
    const {data,error}=usePlatforms();
    if (error) return null;
  return (
    <details className="dropdown mb-5">
    <summary className="m-1 btn">{selectedPlatform?.name || "Platforms"}</summary>
    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {data.map(platform=>
        <li key={platform.id} onClick={()=>onSelectPlatform(platform)}><a>{platform.name}</a></li>
        )}
    </ul>
  </details>
  )
}

export default PlatformSelector
