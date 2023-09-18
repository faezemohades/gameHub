import GameGrid from '@/components/GameGrid'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main >
    <Navbar/>
    <div className='flex justify-around h-96'>
     <div className='w-1/5'>side</div>
     <div className='w-4/5'>
      <GameGrid/>
     </div>
    </div>
    </main>
  )
}
