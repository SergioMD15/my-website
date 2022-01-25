import cn from 'classnames'
import { LottieLoader } from 'components/LottieLoader'
import Text from 'components/Text'
import { SocialIcons } from 'components/Home/SocialIcons'

type Props = {
  hasRecentPages: boolean
}

export const WelcomeBanner = ({ hasRecentPages } : Props) => {
  return (
    <div className={cn(
      'flex flex-col pb-18 gap-y-12',
      hasRecentPages ? 'pb-12' : 'py-16'
    )}>
      <div className='flex flex-col gap-y-8'>
        <div className='flex flex-row self-center items-end'>
          <Text.Header1 className='items-start'>
            Hey!
          </Text.Header1>
          <LottieLoader animationName='wave' />
        </div>
        <Text size='medium' color='text-gray-700'>
          {"I'm Sergio, a Software Engineer based in Barcelona and this is my personal website 🙂"}
        </Text>
      </div>
      <div className='flex self-center'>
        <SocialIcons />
      </div>
    </div>
  )
}