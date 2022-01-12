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

const Home : InferGetStaticPropsType<typeof getStaticProps> = ({ mostRecentPages } : Props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Sergio Mosquera | Full stack developer' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Layout>
        <div className='flex flex-col items-center'>
          <WelcomeBanner hasMostRecentPages={mostRecentPages && mostRecentPages.length > 0} />
          <MostRecentPagesSection pages={mostRecentPages} />
        </div>
      </Layout>
    </div>
  )
}

export default Home
