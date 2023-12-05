'use client'

import { useTranslations } from 'next-intl'

import { Screen } from '@/components/animateScreen'
import { Download } from '@/components/download'

const SectionDownload = ({ sizeS }: { sizeS?: boolean }) => {
  const t = useTranslations('Download')
  return (
    <div className='bg-[#f4f4f4]'>
      <p
        className={`${
          sizeS ? 'text-[6rem] xl:text-[7rem]' : 'py-10 text-[3.2rem] md:py-20 xl:py-4'
        } block w-full text-center font-medium md:hidden md:text-left`}
      >
        {t('download')}
      </p>
      <section className='mx-auto flex w-full items-center justify-center gap-4 overflow-hidden py-[60px]'>
        <div className='flex flex-col items-center gap-8 md:flex-row 3xl:gap-[100px]'>
          <div className='order-2 flex w-full items-center justify-center md:order-1 md:justify-start'>
            <div className='flex flex-col items-start justify-start md:items-center md:justify-center'>
              <h2
                className={`hidden w-full text-center text-[3.6rem] font-medium md:block md:text-left`}
              >
                {t('download')}
              </h2>
              <p
                className={`my-2 w-full text-center text-[2rem] font-normal md:text-start`}
              >
                {t('download_now')}
              </p>
              <Download />
            </div>
          </div>
          <div>
            <Screen />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionDownload
