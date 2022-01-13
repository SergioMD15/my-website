import { GetServerSideProps } from 'next';
import Page from 'components/Page';
import { fetchPages } from 'lib/api/contentfulApi';
import { pageBySlugQuery } from 'lib/api/queries';

export const getServerSideProps: GetServerSideProps = async ({
  query
}) => {
  if (query && query?.slug) {
    const slug = query.slug as string
    const contentfulQuery = pageBySlugQuery(slug)
    const pageInfo = await fetchPages(contentfulQuery)

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