import { GetStaticProps } from 'next'
import Home from '../components/Home'
import { getRecentPages } from '../lib/api/fetchContentful'

const RECENT_PAGES_LIMIT = 4

export const getStaticProps: GetStaticProps = async () => {
  const mostRecentPages = await getRecentPages(RECENT_PAGES_LIMIT) || []

  return {
    props: {
      mostRecentPages
    }
  }
}

export default Home
