import type { NextPage } from 'next'
import EggNest from '../components/eggnest'

const Home: NextPage = () => {

  return (
    <div>
      <div className='absolute -z-10 h-[100vh] w-[100vw] bg-gray-900'>
        <img
          className='w-full h-full object-cover opacity-10 blur-lg'
          src="/eggnest.png"
          alt="eggnest"
        />
      </div>
      <div className='max-w-4xl mx-auto text-white'>
        <EggNest />
      </div>
    </div>
  )
}

export default Home
