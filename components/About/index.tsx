import { ExperienceTimeline } from "components/ExperienceTimeline"
import { Layout } from "components/Layout"
import { PageHeader } from "components/Page/PageHeader"
import { CompanyExperience } from "lib/types"

type Props = {
  companies: Array<CompanyExperience>
}

const About = ({ companies } : Props) => {
  const aboutMeDescription = "This sections talks about me (obviously)"
  
  return (
    <Layout>
      <PageHeader title="About me" shortDescription={aboutMeDescription} centeredText />
      <ExperienceTimeline companies={companies} />
    </Layout>
  )
}

export default About