import { Metadata } from 'next'

import BackgroundRelative from '@/components/BackgroundRelative'
import SectionStep from './(sections)/sectionStep'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Trở thành Thợ',
}

const BeComeEmployee = () => {
  const t = useTranslations('Footer')

  return (
    <div className='pt-[64px] 3xl:pt-[80px]'>
      <BackgroundRelative text={t('become_worker')} />
      <SectionStep />
    </div>
  )
}

export default BeComeEmployee
