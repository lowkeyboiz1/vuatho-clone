'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

function SectionWithVuaTho() {
  const t = useTranslations('WithVuaTho')
  return (
    <div className=''>
      <div className='ct-container-70 mb-[40px] '>
        <div className='bg-[#B5E0FF1A]/10 w-full relative rounded-[60px] rounded-tl-none px-20 py-24'>
         <div className=''></div>
          <div className='absolute md:bottom-0 bottom-[50%] 2xl:left-[3%] md:left-[1%]  left-[60%]'>
            <Image
              src={'/images/about-us/loaloaloa.png'}
              alt='mascot'
              height={430}
              width={423}
              className='3xl:h-[370px] lg:h-[300px] xl:-h-[220px] 13inch:h-[220px] h-[220px] w-auto object-contain transform md:scale-x-[1] scale-x-[-1]'
            />
          </div>
          <div className='flex flex-col gap-[20px] justify-end text-primaryBlue1'>
            <h5 className='text-[3.6rem] font-normal mt-[-100px]'>
              {t('title')} {t('title1')}
            </h5>
            <p className='text-[1.6rem] flex justify-start'>
              {t('text')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
{
  /* <h5 className='text-[3.6rem] font-normal mt-[-100px]'>
                  {t('title')} {t('title1')}
                </h5> 
              
                  <p className='text-[1.6rem] flex justify-start text-primaryBlue1'>
                {t('text')}
              </p>
              
              */
}
export default SectionWithVuaTho
