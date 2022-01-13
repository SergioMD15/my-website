import Head from 'next/head'
import { ReactNode } from 'react'
import { TopMenu } from 'components/TopMenu'

type Props = {
  children: ReactNode
}

export const Layout = ({ children } : Props) => {
  return (
    <>
      <Head>
        <title>Sergio Mosquera | Full stack developer</title>
      </Head>
      <TopMenu/>
      <div className='flex flex-col max-w-5xl mx-auto px-8 lg:px-0 py-8 pb-24'>
        {children}
      </div>
    </>
  )
}