import { Text } from '../Text'

type Props = {
  title: string
  shortDescription?: string
}

export const PageHeader = ({ title, shortDescription } : Props) => {
  return (
    <div className='flex flex-col gap-y-12 py-4 md:py-12 border-b-2'>
      <Text size='x-large' weight='semibold'>
        {title}
      </Text>
      {shortDescription &&
        <Text size='medium'>
          {shortDescription}
        </Text>
      }
    </div>
  )
}