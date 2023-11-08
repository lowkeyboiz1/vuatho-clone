'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

function SectionWithVuaTho() {
  const t = useTranslations('WithVuaTho')
  return (
    <div className='hidden md:block my-[100px]'>
      <div className='ct-container-70 mb-[40px] relative'>
        <div className='bg-[#B5E0FF1A]/10 w-full relative rounded-[60px] rounded-tl-none px-[40px] py-[20px] xl:px-[100px] xl:py-[60px] backdrop-blur-lg z-[1]'>
          <div className='absolute md:bottom-0 bottom-[50%] 2xl:left-[4%] md:left-[-4%] lg:left-[-2%] h-[220px] w-[320px] xl:h-[330px] xl:w-[423px]'>
            <Image
              src={'/images/about-us/loaloaloa.png'}
              alt='mascot'
              height={330}
              width={423}
              className='h-full w-full object-contain'
            />
          </div>
          <div className='absolute text-[16rem] text-[#DAF0FF] scale-x-[-1] right-[7%] top-0'>
            “
          </div>
          <div className='ml-[34%] w-full'>
            <div className='w-[56%] flex flex-col gap-[20px] justify-end text-primaryBlue1'>
              <h5 className='text-[3.6rem] font-normal'>
                {t('title')} {t('title1')}
              </h5>
              <p className='text-[1.6rem] flex justify-start'>{t('text')}</p>
            </div>
          </div>
        </div>
        <div className='absolute w-[200px] -skew-x-[30deg] bg-[#42A3CF]/10 top-0 bottom-0 left-[20%]'></div>
        <div className='absolute w-[200px] -skew-x-[30deg] bg-white/20 top-0 bottom-0 left-[calc(20%+210px)]'></div>

        <div className='absolute left-[30%] -bottom-[90%] '>
          <Image src={'/Polygon.png'} alt='' width={357} height={357} />
        </div>
      </div>
    </div>
  )
}

export default SectionWithVuaTho
