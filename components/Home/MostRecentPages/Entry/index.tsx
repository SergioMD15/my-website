import Link from 'next/link'
import { SimplePage } from '../../../../lib/types'
import { ArrowLink } from '../../../ArrowLink'
import { Text } from '../../../Text'

type Props = {
  page: SimplePage
}

export const Entry = ({ page } : Props) => {
  return (
    <Link href={page.slug} as={`/${page.slug}`} passHref>
      <a className='inline-flex'>
        <div className='flex flex-col hover:bg-gray-100 border rounded-lg border-gray-200 p-6'>
          <div className='flex flex-col gap-2 pb-4 md:max-w-xs'>
            <Text size='medium' weight='semibold'>
              {page.title}
            </Text>
            {page.shortDescription &&
              <Text size='small' weight='normal' className='line-clamp-2'>
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