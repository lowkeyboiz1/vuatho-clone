'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function NotFound() {
  const t = useTranslations('NotFound')
  return (
    <div className='pt-[64px] 3xl:pt-[80px] w-full'>
      <div className='h-[80vh] w-full flex flex-col justify-center items-center'>
        <div className='h-full w-full bg-[#4F62DD] flex-center'>
          <div className='flex-center flex-col gap-10'>
            <Image src={'/images/404.webp'} alt='' width={750} height={370} />
            <p className='text-[#DFE3FF] text-[4rem]'>{t('text')}</p>
            <Link
              href={'/'}
              className='bg-[#5C6DE8] text-[#fff] text-[2.2rem] h-[40px] 13inch:h-[48px] px-10 rounded-2xl flex items-center justify-center pointer-events-none'
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
