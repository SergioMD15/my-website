import { GetStaticProps } from 'next'
import About from 'components/About'
import { getCompanyExperienceQuery } from 'lib/api/notion/queries'
import { fetchAboutMePage } from 'lib/api/notion'

export const getStaticProps: GetStaticProps = async () => {
  const notionQuery = getCompanyExperienceQuery()
  const experiences = await fetchAboutMePage(notionQuery)

  if (!experiences || experiences.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      experiences
    },
    revalidate: 60
  }
}

export default About