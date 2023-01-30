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

        <meta name="keywords" content="linkfree, linktree, open source, eddiehub, eggnest, gaurav burande, linkfree clone" />

        <meta property="twitter:card" content="eggnest" />
        <meta property="twitter:url" content="https://eggnest.netlify.app/" />
        <meta property="twitter:title" content="Eggnest - a linktree clone" />
        <meta property="twitter:description" content="Add your unique Links and socials." />
        <meta property="twitter:image" content="https://github.com/GauravBurande/EggNest_linktr.ee_clone/blob/main/public/eggnest.png" />
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
            </UserState>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
