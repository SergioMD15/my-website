import { Layout } from 'components/Layout'
import { WelcomeBanner } from './WelcomeBanner'
import { MostRecentPagesSection } from './MostRecentPages'
import { SimplePage } from 'lib/types'

type Props = {
  mostRecentPages: Array<SimplePage>
}

const Home = ({ mostRecentPages: pages } : Props) => {
  const hasAnyPage = pages && pages.length > 0

  return (
    <>
      <Layout>
        <div className='flex flex-col items-center gap-y-2'>
          <WelcomeBanner hasMostRecentPages={hasAnyPage} />
          {hasAnyPage && <MostRecentPagesSection pages={pages} /> }
        </div>
      </Layout>
    </>
  )
}

export default Home
