import { GetServerSideProps } from 'next';
import Page from '../../components/Page';
import { fetchContentful } from '../../lib/api/fetchContentful';
import { pageBySlugQuery } from '../../lib/api/queries';

export const getServerSideProps: GetServerSideProps = async ({
  query
}) => {
  if (query && query?.slug) {
    const slug = query.slug as string
    const contentfulQuery = pageBySlugQuery(slug)
    const pageInfo = await fetchContentful(contentfulQuery)

    if (!pageInfo) {
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