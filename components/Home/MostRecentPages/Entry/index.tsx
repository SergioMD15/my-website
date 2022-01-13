import cn from 'classnames'
import Link from 'next/link'
import { SimplePage } from 'lib/types'
import { ArrowLink } from 'components/ArrowLink'
import { Text } from 'components/Text'

type Props = {
  page: SimplePage
  fullWidth?: boolean
  showFullDescription?: boolean
}

export const Entry = ({
  page,
  fullWidth = false,
  showFullDescription = false
} : Props) => {
  return (
    <Link href={page.slug} as={`/${page.slug}`} passHref>
      <a>
        <div className='flex flex-col hover:bg-gray-100 border rounded-lg border-gray-200 p-6'>
          <div className={cn(
            'flex flex-col gap-2 pb-4',
            !fullWidth && 'md:max-w-xs'
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
          </div>
          <ArrowLink>
            Continue reading
          </ArrowLink>
        </div>
      </a>
    </Link>
  )
}