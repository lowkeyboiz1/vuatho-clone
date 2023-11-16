import React from 'react'
import { Metadata } from 'next'

import SectionTest from './(sections)/sectionStep'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Tìm thợ',
}

function FindWorker() {
  const t = useTranslations('FindWorker')

  return (
    <div className=''>
      <div className='ct-container-70 flex flex-col gap-[30px] py-[20px]'>
        <h3 className='text-[#405AB7] text-[3.2rem]'>{t('heading')}</h3>
        <SectionTest />
      </div>
    </div>
  )
}
export default FindWorker
