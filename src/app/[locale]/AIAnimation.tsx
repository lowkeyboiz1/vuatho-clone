'use client'

import animationData1 from '@/components/animateJson/robotAnimation.json'
import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

function AIAnimation() {
  return (
    <>
      <AnimationAI />
    </>
  )
}

const AnimationAI = () => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData1,
    })
  }, [])

  return <div ref={container} />
}

export default AIAnimation
