import Head from 'next/head'
import { ReactNode } from 'react'
import { TopMenu } from 'components/TopMenu'
import cn from 'classnames'

type Props = {
  children: ReactNode
  proseWidth?: boolean
}

export const Layout = ({ children, proseWidth }: Props) => {
  return (
    <>
      <Head>
        <title>Sergio Mosquera | Full stack developer</title>
      </Head>
      <TopMenu />
      <div
        className={cn(
          'flex flex-col mx-auto px-8 lg:px-0 py-8 pb-16',
          proseWidth ? 'max-w-prose' : 'max-w-5xl'
        )}
      >
        {children}
      </div>
    </>
  )
}
