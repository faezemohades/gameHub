import React from 'react'

interface Props{
    score:number;
}

const CriticScore = ({score}:Props) => {
  return (
   
    <span  className={`badge ${
          score < 85 ? 'text-yellow-500' : 'text-green-600'
        } `}>{score}</span>

  )
}

export default CriticScore
