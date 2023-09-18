import GameGrid from '@/components/GameGrid'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main >
    <Navbar/>
    <div className='flex justify-around bg-slate-300 h-96'>
     <div className='w-1/5 bg-emerald-400'>side</div>
     <div className='w-4/5 bg-indigo-200'>
      <GameGrid/>
     </div>
    </div>
    </main>
  )
}
