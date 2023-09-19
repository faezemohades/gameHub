import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const GameCardSkeleton = () => {
  return (
    <div className='grid-cols-3 gap-4 flex flex-wrap justify-center px-6 rounded-md' >
       <div className="card w-64 bg-base-100 shadow-xl" >
      <Skeleton height={150} />
      <div className="card-body">
      <Skeleton height={20} />
      <Skeleton height={20} />
        </div>
       </div>
    </div>
  )
}

export default GameCardSkeleton
