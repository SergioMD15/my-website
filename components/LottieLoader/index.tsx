import type { LottiePlayer } from 'lottie-web';
import { useEffect, useRef, useState } from 'react';

type AvailableAnimations = 'wave'

type Props = {
  animationName: AvailableAnimations
}

export const LottieLoader = ({ animationName } : Props) => {
  const ref = useRef(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `/lotties/${animationName}.json`,
        rendererSettings: {
          preserveAspectRatio: 'none'
        }
      });

      return () => animation.destroy();
    }
  }, [lottie, animationName]);

  return (
    <div ref={ref} className='w-36 items-center'/>
  )
}