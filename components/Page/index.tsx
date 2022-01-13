import { PageType } from '../../lib/types'
import { DynamicSection } from './DynamicSections'
import { Layout } from '../Layout'
import { PageHeader } from './PageHeader'

type Props = {
  pageInfo: PageType
}

const Page = ({ pageInfo } : Props) => {
  const hasSections = pageInfo.sections && pageInfo.sections.length > 0

  return (
    <Layout>
      <PageHeader
        title={pageInfo.title}
        shortDescription={pageInfo.shortDescription}
      />
      {hasSections && pageInfo.sections.map(section => {
        <DynamicSection section={section} />
      })}
    </Layout>
  )
}

export default Page