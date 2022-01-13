import Head from 'next/head'
import { ReactNode } from 'react'
import { TopMenu } from '../TopMenu'

type Props = {
  children: ReactNode
}

export const Layout = ({ children } : Props) => {
  return (
    <>
      <Head>
        <title>Sergio Mosquera | Full stack developer</title>
        <meta name='description' content="Sergio Mosquera's personal website" />
        <link rel='icon' href='/logo.png' />
      </Head>
      <TopMenu/>
      <div className='flex flex-col max-w-5xl mx-auto px-8 lg:px-0 py-8'>
        {children}
      </div>
    </>
  )
}