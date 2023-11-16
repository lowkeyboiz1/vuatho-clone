'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

function SectionWithVuaTho() {
  const t = useTranslations('WithVuaTho')
  return (
    <div className='my-[100px]'>
      <div className='ct-container-70 mb-[40px] relative'>
        <div className='bg-[#B5E0FF1A]/10 w-full relative rounded-[60px] rounded-tl-none px-[10px] py-[20px] md:px-[40px] md:py-[20px] xl:px-[100px] xl:py-[60px] lg:backdrop-blur-lg z-[2]'>
          <div className='absolute md:bottom-0 bottom-[80%] 2xl:left-[4%] md:left-[-4%] lg:left-[-2%] xl:h-[330px] md:h-[220px] h-[92px] xl:w-[400px] md:w-[320px] w-[120px]'>
            <Image
              src={'/images/about-us/loaloaloa.png'}
              alt='mascot'
              height={330}
              width={423}
              className='h-full w-full object-contain pointer-events-none'
            />
          </div>
          <div className='absolute text-[16rem] text-[#DAF0FF] scale-x-[-1] right-[7%] top-0'>
            “
          </div>
          <div className='md:ml-[34%] w-full md:pt-0 pt-20'>
            <div className='w-[85%] md:w-[56%] flex flex-col gap-[8px] md:gap-[20px] justify-end text-primaryBlue1'>
              <h5 className='text-[2.6rem] md:text-[3.6rem] font-bold'>
                {t('title')} {t('title1')}
              </h5>
              <p className='text-[2.2rem] flex justify-start'>{t('text')}</p>
            </div>
          </div>
        </div>
        <div className='absolute hidden md:block w-[200px] -skew-x-[30deg] bg-[#42A3CF]/10 top-0 bottom-0 left-[20%]'></div>
        <div className='absolute hidden md:block w-[200px] -skew-x-[30deg] bg-white/20 top-0 bottom-0 left-[calc(20%+210px)]'></div>

        <div className='absolute md:left-[30%] left-[5%] -bottom-[90%] z-[-2] hidden lg:block'>
          <Image
            src={'/Polygon.png'}
            alt=''
            width={357}
            height={357}
            className='lg:blur-2xl pointer-events-none'
          />
        </div>
      </div>
    </div>
  )
}

export default SectionWithVuaTho
