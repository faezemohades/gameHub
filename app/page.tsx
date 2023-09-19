import GameGrid from '@/components/GameGrid'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main >
    <Navbar/>
    <div className='flex justify-around h-96'>
     <div className='col-start-7'>side</div>
     <div className='col-start-4'>
      <GameGrid/>
     </div>
    </div>
    </main>
  )
}
