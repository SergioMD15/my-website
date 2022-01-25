import { GetStaticProps } from 'next'
import Home from 'components/Home'
import { getPagesQuery } from 'lib/api/notion/queries'
import { fetchNotion } from 'lib/api/notion'

const RECENT_PAGES_LIMIT = 4

export const getStaticProps: GetStaticProps = async () => {
  const notionQuery = getPagesQuery(RECENT_PAGES_LIMIT)
  const mostRecentPages = await fetchNotion(notionQuery)

  return {
    props: {
      mostRecentPages
    }
  }
}

export default Home
