import React from 'react'
import Image from 'next/image'

import { useTranslations } from 'next-intl'

export const IntroCard = () => {
  const t = useTranslations('ServicesVuaTho')

  return (
    <div className='h-full w-full group relative rounded-[60px] overflow-hidden bg-gradient-to-t from-[#0A1D89] to-[#233FCA] px-8 xl:px-20 flex-center flex-col gap-[10px] 13inch:gap-[20px] 3xl:gap-[30px]'>
      <Image src={'/images/about-us/vuatho.png'} alt='' width={350} height={85} />
      <p className='text-white text-[4rem] w-[90%] md:w-full text-center md:text-left'>
        {t('title')}
      </p>
      <p className='text-[2.4rem] md:text-[2rem] text-white w-[90%] md:w-full text-center md:text-left'>
        {t('text')}
      </p>
      <div className='bg-white/[0.15] h-full w-1/2 absolute -right-1/3 top-0 -skew-x-[30deg] group-hover:-translate-x-1/3 transition' />
      <div className='bg-white/10 h-full w-1/2 absolute -right-1/2 top-0 -skew-x-[30deg] group-hover:-translate-x-1/3 transition' />
    </div>
  )
}

export const SubCard1 = () => {
  const tc = useTranslations('Card')

  return (
    <div className='h-full w-full group relative rounded-[60px] overflow-hidden px-8 xl:px-20 bg-black/[0.02]'>
      <h6 className='text-primary-blue text-[4rem] font-bold absolute top-[8%] right-[8%] z-[1]'>
        {tc('SubCard1.text')} <br /> {tc('SubCard1.text1')}
      </h6>
      <div className=''>
        <Image
          src={'/mascot/1.png'}
          alt='mascot'
          width={384}
          height={478}
          className='absolute bottom-[5%] left-[3%] z-[1] max-h-[478px] md:h-[75%] h-[70%] w-auto object-contain pointer-events-none'
        />
      </div>
      <div className='absolute -bottom-[4%] -left-[2%] bg-primary-blue/50 h-1/2 aspect-square w-fit rounded-full lg:blur-2xl hidden lg:block' />
      <div className='absolute -top-[4%] -right-[2%] bg-primary-blue/10 h-1/2 aspect-square w-fit rounded-full lg:blur-2xl hidden lg:block' />
      <div className='absolute -top-[4%] -left-[2%] bg-primary-yellow/10 h-1/3 aspect-square w-fit rounded-full lg:blur-2xl hidden lg:block' />
      <div className='absolute bottom-[4%] -right-[2%] bg-primary-yellow/10 h-1/2 aspect-square w-fit rounded-full lg:blur-2xl hidden lg:block' />
    </div>
  )
}

export const SubCard2 = () => {
  const tc = useTranslations('Card')

  return (
    <div className='h-full w-full group relative rounded-[60px] overflow-hidden px-8 xl:px-20 bg-black/[0.02]'>
      <h6 className='text-primary-blue text-[4rem] font-bold absolute top-[8%] left-[8%] z-[1]'>
        {tc('SubCard2.text')} <br /> {tc('SubCard2.text1')} <br /> {tc('SubCard2.text2')}
      </h6>
      <div className=''>
        <Image
          src={'/mascot/2.png'}
          alt='mascot'
          width={384}
          height={478}
          className='absolute bottom-[5%] right-[3%] z-[1] scale-x-[-1] max-h-[478px] md:h-[75%] h-[70%] w-auto object-contain pointer-events-none'
        />
      </div>
      <div className='absolute -bottom-[4%] -right-[2%] bg-primary-blue/50 h-1/2 aspect-square w-fit rounded-full lg:blur-2xl hidden lg:block' />
      <div className='absolute -top-[4%] -left-[2%] bg-primary-blue/10 h-1/2 aspect-square w-fit rounded-full lg:blur-2xl hidden lg:block' />
      <div className='absolute -top-[4%] -right-[2%] bg-primary-yellow/10 h-1/3 aspect-square w-fit rounded-full lg:blur-2xl hidden lg:block' />
      <div className='absolute bottom-[4%] -left-[2%] bg-primary-yellow/10 h-1/2 aspect-square w-fit rounded-full lg:blur-2xl hidden lg:block' />
    </div>
  )
}

export const SubCard3 = () => {
  const tc = useTranslations('Card')

  return (
    <div className='h-full w-full group relative rounded-[60px] overflow-hidden px-8 xl:px-20 bg-black/[0.02]'>
      <h6 className='text-primary-blue text-[4rem] font-bold absolute top-[8%] right-[8%] z-[1]'>
        {tc('SubCard3.text')} <br /> {tc('SubCard3.text1')}
      </h6>
      <div className=''>
        <Image
          src={'/mascot/3.png'}
          alt='mascot'
          width={300}
          height={478}
          className='absolute bottom-[5%] left-[3%] z-[1] max-h-[478px] md:h-[75%] h-[70%] w-auto object-contain pointer-events-none'
        />
      </div>
      <div className='absolute -bottom-[4%] -left-[2%] bg-primary-blue/50 h-1/2 aspect-square w-fit rounded-full lg:block hidden lg:blur-2xl' />
      <div className='absolute -top-[4%] -right-[2%] bg-primary-blue/10 h-1/2 aspect-square w-fit rounded-full lg:block hidden lg:blur-2xl' />
      <div className='absolute -top-[4%] -left-[2%] bg-primary-yellow/10 h-1/3 aspect-square w-fit rounded-full lg:block hidden lg:blur-2xl' />
      <div className='absolute bottom-[4%] -right-[2%] bg-primary-yellow/10 h-1/2 aspect-square w-fit rounded-full lg:block hidden lg:blur-2xl' />
    </div>
  )
}
