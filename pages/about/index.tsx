import { GetServerSideProps } from 'next';
import About from 'components/About';
import { fetchCompanyExperience } from 'lib/api/contentful';
import { allCompanyExperienceQuery } from 'lib/api/contentful/queries';

export const getServerSideProps: GetServerSideProps = async () => {
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