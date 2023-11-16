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
    <div className=''>
      <BackgroundRelative text={t('become_worker')} />
      <SectionStep />
    </div>
  )
}

export default BeComeEmployee
