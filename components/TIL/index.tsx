import { Entry } from "components/Home/MostRecentPages/Entry"
import { Layout } from "components/Layout"
import { PageHeader } from "components/Page/PageHeader"
import { SimplePage } from "lib/types"

type Props = {
  allPages: Array<SimplePage>
}

const TIL = ({ allPages } : Props) => {
  const headerDescription = 'An acronym for Today I Learned'

  return (
    <Layout>
      <div className='flex flex-col gap-y-4'>
        <PageHeader title='TIL' shortDescription={headerDescription} centeredText/>
        {allPages.map(page => (
          <Entry
            key={page.slug}
            page={page}
            showFullDescription
            showFullWidth
            showPublishDate />
        ))}
      </div>
    </Layout>
  )
}

export default TIL