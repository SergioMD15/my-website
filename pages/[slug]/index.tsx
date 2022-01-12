import { GetServerSideProps } from 'next';
import Page from '../../components/Page';
import { fetchPageBySlug } from '../../lib/api/fetchContentful';

export const getServerSideProps: GetServerSideProps = async ({
  query
}) => {
  if (query && query?.slug) {
    const slug = query.slug as string
    const pageInfo = await fetchPageBySlug(slug)

    if (!pageInfo) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        pageInfo
      }
    }
  }

  return {
    notFound: true
  }
}

export default Page