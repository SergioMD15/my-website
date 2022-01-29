import { AiOutlineArrowRight } from 'react-icons/ai'
import Text from 'components/Text'

type Props = {
  children: string
}

const ArrowIcon = () => (
  <span className='flex items-center pl-1'>
    <AiOutlineArrowRight />
  </span>
)

export const ArrowLink = ({ children } : Props) => {
  return (
    <span className='flex underline'>
      <Text size='x-small' weight='medium'>
        {children}
      </Text>
      <ArrowIcon />
    </span>
  )
}