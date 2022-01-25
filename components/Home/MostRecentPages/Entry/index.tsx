import cn from 'classnames'
import Link from 'next/link'
import { SimplePage } from 'lib/types'
import { ArrowLink } from 'components/ArrowLink'
import Text from 'components/Text'

type Props = {
  page: SimplePage
  showFullWidth?: boolean
  truncateDescription?: boolean
  showPublishDate?: boolean
}

export const Entry = ({
  page,
  showFullWidth = false,
  truncateDescription = false,
  showPublishDate = false
} : Props) => {
  const formattedPublishDate = new Date(page.createdAt).toLocaleDateString()

  return (
    <Link href={page.slug} as={`/${page.slug}`} passHref>
      <a>
        <div className='flex flex-col hover:bg-gray-100 border rounded-lg border-gray-200 p-6'>
          <div className={cn(
            'flex flex-col gap-2 pb-6',
            !showFullWidth && 'md:max-w-xs'
          )}>
            <Text size='medium' weight='semibold'>
              {page.title}
            </Text>
            {page.shortDescription &&
              <Text
                size='x-small'
                weight='normal'
                className={cn(
                  truncateDescription ? 'line-clamp-3' : 'line-clamp-5'
                )}
              >
                {page.shortDescription}
              </Text>
            }
            {showPublishDate &&
              <Text size='x-small' color='text-gray-500'>
                Published on: {formattedPublishDate}
              </Text>
            }
          </div>
          <ArrowLink>
            Continue reading
          </ArrowLink>
        </div>
      </a>
    </Link>
  )
}