import cn from 'classnames'
import { LottieLoader } from 'components/LottieLoader'
import { Text } from 'components/Text'
import { SocialIcons } from 'components/Home/SocialIcons'

type Props = {
  hasMostRecentPages: boolean
}

export const WelcomeBanner = ({ hasMostRecentPages } : Props) => {
  return (
    <div className={cn(
      'flex flex-col pb-18 gap-y-12',
      hasMostRecentPages ? 'pb-12' : 'py-16'
    )}>
      <div className='flex flex-col gap-y-8'>
        <div className='flex flex-row justify-items-start items-end'>
          <Text size='x-large' weight='semibold' className='items-start'>
            Hey!
          </Text>
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