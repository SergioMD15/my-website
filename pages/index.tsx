import { GetStaticProps } from 'next'
import Home from '../components/Home'
import { getRecentPages } from '../lib/api/fetchContentful'

export type PageInfo = {
  title: string,
  sections: any,
  shortDescription?: string,
  slug: string,
}

const RECENT_PAGES_LIMIT = 10

export const getStaticProps: GetStaticProps = async () => {
  const mostRecentPages = await getRecentPages(RECENT_PAGES_LIMIT) || []

  return {
    props: {
      mostRecentPages
    }
  }
}

export default Home
