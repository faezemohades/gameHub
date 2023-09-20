import GameGrid from '@/components/GameGrid'
import GenerList from '@/components/GenreList'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main >
    <Navbar/>
    <div className='grid grid-cols-7 gap-x-1 m-auto'>
     <div className='col-span-1 hidden md:block'>
      <GenerList/>
     </div>
     <div className='col-span-6'>
      <GameGrid/>
     </div>
    </div>
    </main>
  )
}
