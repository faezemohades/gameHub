import React from 'react'

const SortSelector = () => {
   return (
    <details className="dropdown mb-5">
    <summary className="m-1 btn">Order by :Relevance</summary>
    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li ><a>Relevance</a></li>
        <li ><a>Date added</a></li>
        <li ><a>Name</a></li>
        <li ><a>Release date</a></li>
        <li ><a>Popularity</a></li>
        <li ><a>Average</a></li>
    </ul>
  </details>
  )
}

export default SortSelector
