import { GetStaticProps } from 'next'
import Home from 'components/Home'
import { fetchPages } from 'lib/api/contentful'
import { recentPagesQuery } from 'lib/api/contentful/queries'

const RECENT_PAGES_LIMIT = 4

export const getStaticProps: GetStaticProps = async () => {
  const contentfulQuery = recentPagesQuery(RECENT_PAGES_LIMIT)
  const mostRecentPages = await fetchPages(contentfulQuery)

  return {
    props: {
      mostRecentPages
    }
  }
}

export default Home
