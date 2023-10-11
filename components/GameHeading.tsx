import { GameQuery } from '@/app/page'
import useGenre from '@/hooks/useGenre';
import useGenres from '@/hooks/useGenreList'
import usePlatform from '@/hooks/usePlatform';
 
interface Props{
    gameQuery:GameQuery
}
const GameHeading = ({gameQuery}:Props) => {
  const {data:genres}=useGenres();
  const genre=useGenre(gameQuery.genreId)
  
  const platform=usePlatform(gameQuery.platformId)
    const heading=`${platform?.name || ""} ${genre?.name || ""}` 
  return (
    <span className=" text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight" style={{marginInline:"25px"}}>{heading}</span>
  )
}

export default GameHeading
