import { GetStaticProps } from 'next';
import TIL from 'components/TIL';
import { fetchPages } from 'lib/api/contentful';
import { allRecentPagesQuery } from 'lib/api/contentful/queries';

export const getStaticProps: GetStaticProps = async () => {
  const contentfulQuery = allRecentPagesQuery()
  const allPages = await fetchPages(contentfulQuery)

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