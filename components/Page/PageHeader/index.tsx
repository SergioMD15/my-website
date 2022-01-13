import { Text } from 'components/Text'
import cn from 'classnames'

type Props = {
  title: string
  shortDescription?: string
  centeredText?: boolean
}

export const PageHeader = ({
  title,
  shortDescription,
  centeredText = false
} : Props) => {
  return (
    <div className='flex flex-col gap-y-8 pb-8 md:py-12 mb-8 border-b-2'>
      <Text
        size='x-large'
        weight='semibold'
        className={cn(
          centeredText && 'text-center'
        )}
      >
        {title}
      </Text>
      {shortDescription &&
        <Text size='medium' className={cn(centeredText && 'text-center')}>
          {shortDescription}
        </Text>
      }
    </div>
  )
}