import usePlatforms from '@/hooks/usePlatforms'
import React from 'react'

const PlatformSelector = () => {

    const {data,error}=usePlatforms();
    if (error) return null;
  return (
    <details className="dropdown mb-32">
    <summary className="m-1 btn">open or close</summary>
    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {data.map(platform=><li key={platform.id}><a>{platform.name}</a></li>)}

    </ul>
  </details>
  )
}

export default PlatformSelector
