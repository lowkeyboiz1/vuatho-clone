'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import animationData from '@/components/animateJson/aboutUs_banner.json'
import { useTranslations } from 'next-intl'

import lottie from 'lottie-web'

const HeroSection = () => {
  const t = useTranslations('AboutUs')

  return (
    <>
      <div className='bg-[#FED32C] w-full relative 3xl:pt-[100px] 13inch:pt-[40px] pt-[20px] pb-[100px]'>
        <div className='flex items-start justify-center ct-container-70 3xl:gap-[180px] flex-col md:flex-row'>
          <div className=' w-full order-2'>
            <h3 className='text-[3.2rem] 13inch:text-[3rem] font-semibold'>
              {t('heading1')} <br />
              {t('heading2')}
            </h3>
            <p className='text-[6rem] font-bold hidden md:block'> {t('heading')}</p>
            <div className='w-full'>
              <p className='w-full text-[2rem] py-4'>{t('text')}</p>
            </div>
          </div>
          <div className='mb-[35px] order-1 md:order-3 w-full'>
            <p className='text-[4rem] whitespace-nowrap font-bold block md:hidden text-center w-full my-4'>
              {t('heading')}
            </p>
            <AnimatePhone />
          </div>
        </div>
        <div className='absolute bottom-[-10%] w-full '>
          <Image
            src={'/images/about-us/bottom.png'}
            height={149}
            width={2700}
            quality={100}
            alt='bottom'
            className='h-full w-full pointer-events-none'
          />
        </div>
      </div>
    </>
  )
}

const AnimatePhone = () => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
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
      className='w-[260px] 13inch:w-[300px] 3xl:w-[382px] mx-auto mb-0 md:mb-[-40px] lg:mb-[-30px]'
    />
  )
}

export default HeroSection
