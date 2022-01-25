import { PageType } from 'lib/types'
import { DynamicSection } from './DynamicSections'
import { Layout } from 'components/Layout'
import { PageHeader } from './PageHeader'

type Props = {
  pageInfo: PageType
}

const Page = ({ pageInfo } : Props) => {
  const hasSections = pageInfo.content && pageInfo.content.length > 0

  return (
    <Layout>
      <PageHeader {...pageInfo} />
      {hasSections && pageInfo.content.map((section, index) => (
        <DynamicSection key={`${section.type}-${index}`} section={section} />
      ))}
    </Layout>
  )
}

export default Page