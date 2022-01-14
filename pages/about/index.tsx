import { GetStaticProps } from 'next';
import About from 'components/About';
import { fetchCompanyExperience } from 'lib/api/contentfulApi';
import { allCompanyExperienceQuery } from 'lib/api/queries';

export const getStaticProps: GetStaticProps = async () => {
  const contentfulQuery = allCompanyExperienceQuery()
  const companies = await fetchCompanyExperience(contentfulQuery)

  if (!companies || companies.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      companies
    }
  }
}

export default About