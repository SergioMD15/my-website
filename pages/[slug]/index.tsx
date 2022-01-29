import { GetStaticProps } from 'next';
import Page from 'components/Page';
import { getPageBySlugQuery, getPagesQuery } from 'lib/api/notion/queries';
import { fetchTILPage } from 'lib/api/notion';

export const getStaticProps: GetStaticProps = async ({
  params
}) => {
  if (params && params?.slug) {
    const slug = params.slug as string
    const notionQuery = getPageBySlugQuery(slug)
    const pageInfo = await fetchTILPage(notionQuery)

    if (!pageInfo || pageInfo.length === 0) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        pageInfo: pageInfo[0]
      },
      revalidate: 60
    }
  }

  return {
    notFound: true
  }
}

export async function getStaticPaths() {
  const notionQuery = getPagesQuery()
  const allPages = await fetchTILPage(notionQuery)

  const paths = allPages.map((page) => ({
    params: { slug: page.slug },
  }))

  return { paths, fallback: 'blocking' }
}

export default Page