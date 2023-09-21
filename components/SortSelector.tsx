import React from 'react'

interface Props{
    onSelectSortOrder:(sortOrder:string)=>void;
}
const SortSelector = ({onSelectSortOrder}:Props) => {
    
    const sortOrders=[
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date added'},
        {value:'name',label:'Name'},
        {value:'-relased',label:'Release date'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average'}
    ]
    
   return (
    <details className="dropdown mb-5">
    <summary className="m-1 btn">Order by :Relevance</summary>
    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      {sortOrders.map((order)=>
      <li key={order.value} onClick={()=>onSelectSortOrder(order.value)}>
        <a>{order.label}</a>
      </li>
      )}
    </ul>
  </details>
  )
}

export default SortSelector
