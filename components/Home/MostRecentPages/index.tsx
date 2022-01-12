import cn from 'classnames'
import { useRouter } from 'next/router'
import { PageType } from '../../../lib/types'
import { Entry } from './Entry'

type Props = {
  pages: Array<PageType>
}

export const MostRecentPagesSection = ({ pages } : Props) => {
  const router = useRouter()
  const hasAnyPage = pages && pages.length > 0

  return (
    <>
      {hasAnyPage ? (
        <div
          className={cn(
            'flex flex-col md:flex-row',
            hasAnyPage && 'gap-x-6 gap-y-8'
          )}
        >
          {hasAnyPage && pages.map((page, index) => (
            <Entry
              key={page.title + index}
              page={page}
            />
          ))}
        </div>
      ) : (
        <div className='flex flex-col md:flex-row gap-x-6 gap-y-8'>
          {pages.map((page, index) => (
            <Entry
              key={page.title + index}
              page={page}
            />
          ))}
        </div>
      )}
    </>
  )
}