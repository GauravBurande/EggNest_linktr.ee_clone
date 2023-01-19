import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

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
            <img
              className='w-full h-full object-cover opacity-20 blur-xl'
              src="/eggnest.png"
              alt="eggnest"
            />
          </div>
          <div className='w-3/4 mx-auto text-white'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
