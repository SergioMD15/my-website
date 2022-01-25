import { GetServerSideProps } from 'next';
import Page from 'components/Page';
import { getPageBySlugQuery } from 'lib/api/notion/queries';
import { fetchNotion } from 'lib/api/notion';

export const getServerSideProps: GetServerSideProps = async ({
  query
}) => {
  if (query && query?.slug) {
    const slug = query.slug as string
    const notionQuery = getPageBySlugQuery(slug)
    const pageInfo = await fetchNotion(notionQuery)

    if (!pageInfo || pageInfo.length === 0) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        pageInfo: pageInfo[0]
      }
    }
  }

  return {
    notFound: true
  }
}

export default Page