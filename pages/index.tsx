import { GetStaticProps } from 'next'
import Home from 'components/Home'
import { getPagesQuery } from 'lib/api/notion/queries'
import { fetchTILPage } from 'lib/api/notion'

const RECENT_PAGES_LIMIT = 4

export const getStaticProps: GetStaticProps = async () => {
  const notionQuery = getPagesQuery(RECENT_PAGES_LIMIT)
  const mostRecentPages = await fetchTILPage(notionQuery)

  return {
    props: {
      mostRecentPages
    },
    revalidate: 60
  }
}

export default Home
