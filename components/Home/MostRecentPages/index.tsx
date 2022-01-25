import { SimplePage } from 'lib/types'
import { Button } from 'components/Button'
import Text from 'components/Text'
import { Entry } from './Entry'

type Props = {
  pages: Array<SimplePage>
}

export const MostRecentPagesSection = ({ pages } : Props) => {
  return (
    <div className='flex flex-col items-center gap-y-8'>
      <Text color='text-gray-600' weight='semibold'>
        Below are my most recent learnings 👇
      </Text>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 max-w-md md:max-w-2xl'>
        {pages.map((page, index) => (
          <Entry
            key={page.title + index}
            page={page}
            truncateDescription
          />
        ))}
      </div>
      <Button type='secondary' href='/til'>
        Show all
      </Button>
    </div>
  )
}