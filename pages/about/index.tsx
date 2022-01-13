import { GetStaticProps } from 'next';
import About from 'components/About';
import { fetchExperience } from 'lib/api/contentfulApi';
import { allExperienceQuery } from 'lib/api/queries';

export const getStaticProps: GetStaticProps = async () => {
  const contentfulQuery = allExperienceQuery()
  const experience = await fetchExperience(contentfulQuery)

  if (!experience || experience.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      experience
    }
  }
}

export default About