import Image from 'next/image'
import { useTranslations } from 'next-intl'

function SectionToTheMoon() {
  const t = useTranslations('ToTheMoon')

  return (
    <div className='flex-center relative py-[60px] md:min-h-[744px] 13inch:my-[100px] 13inch:py-[104px]'>
      <div className='relative w-[96%]  md:w-[520px]'>
        <div className='relative z-[2] w-full space-y-2 rounded-[16px] bg-primary-blue p-[26px] md:p-[40px]'>
          <div className='flex items-center gap-[10px]'>
            <div className='h-[40px] w-[48px]'>
              <Image
                src={'/home/logohome.png'}
                alt=''
                width={48}
                height={40}
                className='h-full w-full object-contain'
              />
            </div>
            <p className=' w-[55%] text-[2.4rem] font-semibold text-white xs:w-full md:text-[3.2rem]'>
              {t('title')}
            </p>
          </div>
          <p className='text-[1.6rem] font-light text-white'>{t('desc')}</p>
        </div>
        <div className='absolute top-[-40%] z-[3] hidden w-[510px] translate-x-[90%] md:block '>
          <Image
            src={'/home/newfeaturesadded.png'}
            alt=''
            height={532}
            width={744}
            className='h-full w-full object-contain'
          />
        </div>
        <div className='absolute left-[-100%] top-[-100%] z-[1] hidden w-[744px] md:block 3xl:left-[-70%]'>
          <Image
            src={'/home/salestarget.png'}
            alt=''
            height={532}
            width={744}
            className='h-full w-full object-contain '
          />
        </div>
      </div>
    </div>
  )
}
//xl:top-[-30%]  xl:translate-x-[94%] 2xl:translate-x-[105%]
export default SectionToTheMoon
