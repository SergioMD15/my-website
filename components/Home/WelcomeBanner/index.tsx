import { LottieAnimation } from "../../LottieAnimation"
import { Text } from "../../Text"

export const WelcomeBanner = () => {
  return (
    <div className="flex flex-col py-16 px-16 md:px-0 gap-4">
      <div className="flex flex-row justify-items-start gap-2">
        <Text size="x-large" color="gray-800" className='items-start text-5xl'>
          Hello hello!
        </Text>
        <LottieAnimation animation='wave' />
      </div>
      <Text size="medium" color="gray-100">
        {"I'm Sergio, a Software Engineer based in Barcelona and this is my personal website 🙂"}
      </Text>
    </div>
  )
}