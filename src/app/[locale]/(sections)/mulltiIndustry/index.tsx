import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { ServicesCarousel } from '@/components/carousel'

function SectionMultiServices() {
  const t = useTranslations('ServicesVuaTho')

  const listItem = [
    {
      title: t('electric'),
      icon: 'dien.png',
    },
    {
      title: t('osin'),
      icon: 'osin.png',
    },
    {
      title: t('water_electric'),
      icon: 'nuoc.png',
    },
    {
      title: t('heal'),
      icon: 'yte.png',
    },
    {
      title: t('electrical'),
      icon: 'tulanh.png',
    },
    {
      title: t('repair_home'),
      icon: 'nha.png',
    },
  ]
  // a
  return (
    <div className='ct-container-70 flex items-center justify-between gap-[30px] xl:gap-[60px] flex-col md:flex-row'>
      <div className='h-[500px] w-full md:w-[400px] md:h-[450px] 13inch:w-[450px] 13inch:h-[520px] 3xl:w-[550px] 3xl:h-[650px]'>
        <ServicesCarousel />
      </div>
      <div className='grid grid-cols-2 3xl:grid-cols-3 md:gap-[60px] gap-8 md:w-2/3 w-full'>
        {listItem.map((i) => (
          <div
            key={i.title}
            className='flex gap-6 xl:gap-4 items-center flex-col xl:flex-row'
          >
            <div className='h-[82px] w-[82px] flex flex-shrink-0 rounded-full'>
              <Image src={`/services/icon/${i.icon}`} alt='' width={82} height={82} />
            </div>
            <p className='text-[2.4rem] font-semibold first-letter:uppercase'>
              {i.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionMultiServices
