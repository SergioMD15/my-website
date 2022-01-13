import { PageType } from '../../lib/types'
import { DynamicSection } from './DynamicSections'
import { Layout } from '../Layout'
import { PageHeader } from './PageHeader'
import Head from 'next/head'

type Props = {
  pageInfo: PageType
}

const Page = ({ pageInfo } : Props) => {
  const hasSections = pageInfo.sections && pageInfo.sections.length > 0

  return (
    <>
      <Head>
        <title>Sergio Mosquera | Full stack developer</title>
        <meta name='description' content="Sergio Mosquera's personal website" />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Layout>
        <PageHeader
          title={pageInfo.title}
          shortDescription={pageInfo.shortDescription}
          />
        {hasSections && pageInfo.sections.map((section, index) => (
          <DynamicSection key={`${section.sectionId}-${index}`} section={section} />
          ))}
      </Layout>
    </>
  )
}

export default Page