import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { getStaticProps } from '../../pages'
import { Layout } from '../Layout'
import { WelcomeBanner } from './WelcomeBanner'
import { MostRecentPagesSection } from './MostRecentPages'
import { PageType } from '../../lib/types'

type Props = {
  mostRecentPages: Array<PageType>
}

const Home : InferGetStaticPropsType<typeof getStaticProps> = ({ mostRecentPages: pages } : Props) => {
  const hasAnyPage = pages && pages.length > 0

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Sergio Mosquera | Full stack developer' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Layout>
        <div className='flex flex-col items-center gap-y-2'>
          <WelcomeBanner hasMostRecentPages={hasAnyPage} />
          {hasAnyPage && <MostRecentPagesSection pages={pages} /> }
        </div>
      </Layout>
    </div>
  )
}

export default Home
