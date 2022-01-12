import cn from 'classnames'
import { LottieAnimation } from '../../LottieAnimation'
import { Text } from '../../Text'

type Props = {
  hasMostRecentPages: boolean
}

export const WelcomeBanner = ({ hasMostRecentPages } : Props) => {
  return (
    <div className={cn(
      'flex flex-col pb-12 gap-4',
      hasMostRecentPages ? 'pb-12' : 'py-16'
    )}>
      <div className='flex flex-row justify-items-start gap-2'>
        <Text size='x-large' weight='semibold' className='items-start'>
          Hello hello!
        </Text>
        <LottieAnimation animation='wave' />
      </div>
      <Text size='medium' color='text-gray-700'>
        {"I'm Sergio, a Software Engineer based in Barcelona and this is my personal website 🙂"}
      </Text>
    </div>
  )
}