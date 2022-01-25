import cn from 'classnames';
import type { LottiePlayer } from 'lottie-web';
import { useEffect, useRef, useState } from 'react';

type AvailableAnimations = 'wave' | 'error'

type Props = {
  animationName: AvailableAnimations
  loop?: boolean
  autoplay?: boolean
}

const configWidth = {
  wave: 'h-[100px] w-[144px]',
  error: 'w-auto md:w-7/12'
}

export const LottieLoader = ({
  animationName,
  loop = true,
  autoplay = true
} : Props) => {
  const ref = useRef(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import('lottie-web').then(Lottie => setLottie(Lottie.default))
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: loop,
        autoplay: autoplay,
        path: `/lotties/${animationName}.json`
      });

      return () => animation.destroy();
    }
  }, [lottie, animationName, autoplay, loop]);

  return (
    <div ref={ref} className={cn(
      'items-center',
      configWidth[animationName]
    )}/>
  )
}