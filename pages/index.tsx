import { GetStaticProps } from 'next'
import Home from 'components/Home'
import { fetchContentful } from 'lib/api/fetchContentful'
import { recentPagesQuery } from 'lib/api/queries'

const RECENT_PAGES_LIMIT = 4

export const getStaticProps: GetStaticProps = async () => {
  const contentfulQuery = recentPagesQuery(RECENT_PAGES_LIMIT)
  const mostRecentPages = await fetchContentful(contentfulQuery)

  return {
    props: {
      mostRecentPages
    }
  }
}

export default Home
