import { GetStaticProps } from 'next';
import TIL from 'components/TIL';
import { getPagesQuery } from 'lib/api/notion/queries';
import { fetchNotion } from 'lib/api/notion';

export const getStaticProps: GetStaticProps = async () => {
  const notionQuery = getPagesQuery()
  const allPages = await fetchNotion(notionQuery)

  if (!allPages || allPages.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      allPages
    }
  }
}

export default TIL