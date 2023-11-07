import Lottie from 'lottie-web'
import { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import animationData from '@/components/animateJson/downloadApp.json'

export const Screen = ({ style }: { style?: string }) => {
  const container = useRef(null)

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    })
  }, [])

  return (
    <div
      ref={container}
      className={twMerge(
        'min-w-[260px] h-[500px] 13inch:min-w-[400px] 13inch:h-[800px]',
        style,
      )}
    ></div>
  )
}
