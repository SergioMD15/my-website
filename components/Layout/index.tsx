import Head from 'next/head'
import { ReactNode } from 'react'
import { TopMenu } from 'components/TopMenu'
import cn from 'classnames'
import Script from 'next/script'

type Props = {
  children: ReactNode
  proseWidth?: boolean
}

export const Layout = ({ children, proseWidth = false }: Props) => {
  return (
    <div id="container">
      <Head>
        <title>Sergio Mosquera | Full stack developer</title>
      </Head>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', 'G-9MQKVTFCYW', 'auto');
            ga('send', 'pageview');
          `}
          </Script>
          <Script
            src="https://www.google-analytics.com/analytics.js"
            strategy="afterInteractive"
          />
        </>
      )}
      <TopMenu />
      <div
        className={cn(
          'flex flex-col mx-auto px-8 lg:px-0 py-8 pb-16',
          proseWidth ? 'max-w-prose' : 'max-w-5xl'
        )}
      >
        {children}
      </div>
    </div>
  )
}
