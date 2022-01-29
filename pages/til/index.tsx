import { GetStaticProps } from 'next'
import TIL from 'components/TIL'
import { getPagesQuery } from 'lib/api/notion/queries'
import { fetchTILPage } from 'lib/api/notion'

export const getStaticProps: GetStaticProps = async () => {
  const notionQuery = getPagesQuery()
  const allPages = await fetchTILPage(notionQuery)

  if (!allPages || allPages.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      allPages
    },
    revalidate: 60
  }
}

export default TIL