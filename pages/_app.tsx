import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'
import UserState from '../context/UserState'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EggNest</title>
        <link rel="icon" href="/favicon.ico" />
        <base target='_blank' />
      </Head>
      <div className='flex flex-col h-[100vh]'>
        <div className='w-full relative min-h-[100vh] h-full box-border flex flex-col'>
          <div className='overflow-hidden fixed -z-10 h-full w-full inset-0 bg-gray-900'>
            <Image
              className='w-full h-full object-cover opacity-20 blur-xl'
              src="/eggnest.png"
              alt="eggnest"
              width={100}
              height={100}
            />
          </div>
          <div className='w-3/4 mx-auto text-white'>
            <UserState>
              <Component {...pageProps} />
              <div className='flex justify-center'>
                <p className='text-center absolute -bottom-11'>Built with <span className='text-red-500'>❤</span> by <a href="https://twitter.com/gauravvan" className='text-green-300 hover:underline decoration-yellow-300'>@gauravvan</a></p>
              </div>
            </UserState>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
