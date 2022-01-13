import { GetStaticProps } from 'next';
import TIL from 'components/TIL';
import { fetchContentful } from 'lib/api/fetchContentful';
import { fetchAllRecentPages } from 'lib/api/queries';

export const getStaticProps: GetStaticProps = async () => {
  const contentfulQuery = fetchAllRecentPages()
  const allPages = await fetchContentful(contentfulQuery)

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