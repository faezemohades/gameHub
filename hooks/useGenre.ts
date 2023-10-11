import useGenres from "./useGenreList";

 
const useGenre=(id?:number)=>{
    const {data:genres}=useGenres();
    const genre=genres?.results.find(
        (g)=>g.id=== id
    )
}
export default useGenre;