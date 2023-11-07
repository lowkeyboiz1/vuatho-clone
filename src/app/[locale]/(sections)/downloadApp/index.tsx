'use client'

import { useTranslations } from 'next-intl'

import { Screen } from '@/components/animateScreen'
import { Download } from '@/components/download'

const SectionDownload = ({ sizeS }: { sizeS?: boolean }) => {
  const t = useTranslations('Download')
  return (
    <>
      <p
        className={`${
          sizeS
            ? 'text-[6rem] xl:text-[7rem]'
            : 'text-[7rem] xl:text-[8rem] py-4 md:py-20'
        } font-medium text-center md:text-left w-full block md:hidden`}
      >
        {t('download')}
      </p>
      <section className='w-full mx-auto flex justify-center items-center bg-bg gap-4 overflow-hidden pb-12 md:py-20'>
        <div className='flex items-center h-full gap-8 3xl:gap-[100px] flex-col md:flex-row'>
          <div className='w-full flex items-center order-2 md:order-1 justify-center md:justify-start'>
            <div className='flex flex-col items-start md:items-center justify-start md:justify-center'>
              <h2
                className={`hidden md:block font-medium text-center md:text-left w-full ${
                  sizeS
                    ? 'text-[5.4rem] 13inch:text-[6.4rem]'
                    : 'text-[7rem] 13inch:text-[8rem]'
                }`}
              >
                {t('download')}
              </h2>
              <div
                className={`my-2 13inch:my-6 font-medium w-full text-center md:text-start ${
                  sizeS
                    ? 'text-[2rem] 13inch:text-[3rem]'
                    : 'text-[3rem] 13inch:text-[4rem]'
                }`}
              >
                <p className=''>{t('slogan')}</p>
                <p className=''>{t('book_now')}</p>
              </div>
              <p
                className={`${
                  sizeS
                    ? 'text-[1.6rem] 13inch:text-[2rem]'
                    : 'text-[2rem] 13inch:text-[2.5rem]'
                } my-2 font-normal w-full text-center md:text-start`}
              >
                {t('download_now')}
              </p>
              <Download />
            </div>
          </div>
          <Screen />
        </div>
      </section>
    </>
  )
}

export default SectionDownload
