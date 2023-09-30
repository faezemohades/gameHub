import { GameQuery } from '@/app/page'

interface Props{
    gameQuery:GameQuery
}
const GameHeading = ({gameQuery}:Props) => {
    const heading=`${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""}` 
  return (
    <span className=" text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight" style={{marginInline:"25px"}}>{heading}</span>
  )
}

export default GameHeading
