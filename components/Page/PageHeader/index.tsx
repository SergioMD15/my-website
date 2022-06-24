import Text from 'components/Text'
import cn from 'classnames'

type Props = {
  title: string
  shortDescription?: string
  centeredText?: boolean
}

export const PageHeader = ({
  title,
  shortDescription,
  centeredText = false,
}: Props) => {
  return (
    <div className="flex flex-col gap-y-6 py-6 md:py-8 mb-4 border-b-2">
      <Text.Header1 className={cn(centeredText && 'text-center')}>
        {title}
      </Text.Header1>
      {shortDescription && (
        <Text
          size="normal"
          color="text-gray-600"
          className={cn(centeredText && 'text-center')}
        >
          {shortDescription}
        </Text>
      )}
    </div>
  )
}
