import { Entry } from "components/Home/MostRecentPages/Entry"
import { Layout } from "components/Layout"
import { SimplePage } from "lib/types"

type Props = {
  allPages: Array<SimplePage>
}

const TIL = ({ allPages } : Props) => {
  return (
    <Layout>
      <div className='flex flex-col gap-y-4'>
        {allPages.map(page => (
          <Entry key={page.slug} page={page} showFullDescription fullWidth />
        ))}
      </div>
    </Layout>
  )
}

export default TIL