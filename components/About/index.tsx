import { ExperienceTimeline } from "components/ExperienceTimeline"
import { Layout } from "components/Layout"
import { PageHeader } from "components/Page/PageHeader"
import { ExperienceType } from "lib/types"

type Props = {
  experiences: Array<ExperienceType>
}

const About = ({ experiences } : Props) => {
  const aboutMeDescription = "and my past experiences"
  
  return (
    <Layout>
      <PageHeader title="About me" shortDescription={aboutMeDescription} centeredText />
      <ExperienceTimeline experiences={experiences} />
    </Layout>
  )
}

export default About