import Image from 'next/image'
import { Metadata } from 'next'

import HeroSection from './(sections)/heroSection'
import SectionServices from '../(sections)/services'
import SectionDownload from '../(sections)/downloadApp'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Về Chúng Tôi',
}

function AboutUs() {
  const t = useTranslations('AboutUs')

  return (
    <div className='pt-[64px] 3xl:pt-[80px] w-full'>
      <HeroSection />
      <div className='w-full relative h-[400px] xl:h-[600px] bg-[#f6f8fa] xl:bg-transparent'>
        <div className='w-full'>
          <Image
            src={'/images/about-us/people.png'}
            alt='people'
            width={2700}
            height={584}
            className='absolute top-0 right-0 left-0 bottom-0 hidden xl:block pointer-events-none'
          />
        </div>
        <div className='absolute text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8 xl:px-0'>
          <p className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1C55D8] to-[#0D2D8F] text-[4rem] w-full'>
            {t('goal')}
          </p>
          <p className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2769FF] to-[#0032CB] text-[7rem] xl:text-[6rem]'>
            {t('numberGoal')}
          </p>
          <p className='text-[2rem] font-semibold'>{t('textGold')}</p>
        </div>
      </div>
      <div className='bg-[#F6F8FA] w-full'>
        <SectionServices />
      </div>
      <SectionDownload />
    </div>
  )
}

export default AboutUs
