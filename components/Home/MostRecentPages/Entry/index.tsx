import cn from 'classnames'
import Link from 'next/link'
import { SimplePage } from 'lib/types'
import { ArrowLink } from 'components/ArrowLink'
import { Text } from 'components/Text'

type Props = {
  page: SimplePage
  showFullWidth?: boolean
  showFullDescription?: boolean
  showPublishDate?: boolean
}

export const Entry = ({
  page,
  showFullWidth = false,
  showFullDescription = false,
  showPublishDate = false
} : Props) => {
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
                size='small'
                weight='normal'
                className={cn(
                  !showFullDescription && 'line-clamp-2'
                )}
              >
                {page.shortDescription}
              </Text>
            }
            {showPublishDate &&
              <Text size='small' color='text-gray-500'>
                Published on: {new Date(page.createdAt).toLocaleDateString()}
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