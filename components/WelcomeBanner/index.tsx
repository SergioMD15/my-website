import { LottieAnimation } from "../LottieAnimation"

export const WelcomeBanner = () => {
  return (
    <div className="flex flex-col py-8 gap-4">
      <h1 className='items-start text-5xl'>
        Hello hello! {' '} <LottieAnimation animation='wave' />
      </h1>
      <p className="text-xl">
        {"I'm Sergio, a Software Engineer based in Barcelona and this is my personal website 🙂"}
      </p>
    </div>
  )
}