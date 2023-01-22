import type { NextPage } from 'next'
import Image from 'next/image'
import data from '../data'
import { BsGithub } from "react-icons/bs"

const Home: NextPage = () => {

  return (
    <div className='flex flex-col items-center justify-center'>
      <div id="profileCard" className="flex justify-center items-center flex-col">
        <div className='w-[100px] h-[100px] mt-10 md:mt-24'>
          <Image
            src={data.avatar}
            className="rounded-full object-cover w-full h-full"
            width={100}
            height={100}
            alt={data.username}
          />
        </div>

        <div>
          <h3 className='text-xl font-bold py-5'>@{data.username}</h3>
        </div>
      </div>

      <h2 className='text-5xl font-bold pb-5 text-center'>Welcome to <span className='text-green-300 underline decoration-yellow-200 '>EggNest</span></h2>
      <p className='w-2/4 text-center'>I decided to build a <a className='text-green-300 hover:underline decoration-yellow-200' href="https://linktr.ee">linktr.ee</a> clone, but I also wanted to do something new, so this is what I built as a clone.</p>

      <div id="authenticate" className="flex flex-col bg-gray-700 rounded-lg shadow-lg p-8 my-5">
        <h2>Create <span className='text-green-300'>Nest</span> with your <span className='text-green-300'>GitHub</span> account</h2>

        <div className='text-center flex items-center justify-center space-x-2 text-yellow-100 bg-gray-800 mt-3 cursor-pointer hover:text-green-300 hover:underline decoration-yellow-200 py-3'>
          <BsGithub />
          <p>Continue with GitHub</p>
        </div>
      </div>
    </div>
  )
}

export default Home
