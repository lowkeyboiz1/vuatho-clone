import Image from 'next/image'
import { useTranslations } from 'next-intl'

function SectionToTheMoon() {
  const t = useTranslations('ToTheMoon')

  return (
    <div className='relative mt-[100px]'>
      <div className='h-[538px] '>
        <Image
          src='/home/toTheMoon.png'
          alt=''
          width={2000}
          height={600}
          className='h-full object-cover'
        />
      </div>
      <div className='absolute left-1/2 top-1/2 mx-auto flex w-[96%] max-w-[720px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl bg-white/80 text-center md:w-auto md:px-[60px] md:py-[40px] xl:px-[100px] xl:py-[80px]'>
        <div className='flex items-center justify-center'>
          <Image
            src={'/home/logo1.png'}
            alt=''
            width={48}
            height={40}
            className='object-contain'
          />
        </div>
        <h3 className='mt-[10px] whitespace-nowrap text-[3.2rem] font-semibold text-primaryBlue1'>
          {t('title')}
        </h3>
        <p className='mx-auto mt-[8px] max-w-[400px] text-[1.6rem] font-light text-baseBlack'>
          {t('desc')}
        </p>
      </div>
    </div>
  )
}

export default SectionToTheMoon
