import { GameQuery } from '@/app/page'
import useGenres from '@/hooks/useGenreList'
import usePlatforms from '@/hooks/usePlatforms';

interface Props{
    gameQuery:GameQuery
}
const GameHeading = ({gameQuery}:Props) => {
  const {data:genres}=useGenres();
  const genre=genres?.results.find(g=>g.id ===gameQuery.genreId)
  const {data:platforms}=usePlatforms();
  const platform=platforms?.results.find(
    p=>p.id === gameQuery.platformId
  )
    const heading=`${platform?.name || ""} ${genre?.name || ""}` 
  return (
    <span className=" text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight" style={{marginInline:"25px"}}>{heading}</span>
  )
}

export default GameHeading
