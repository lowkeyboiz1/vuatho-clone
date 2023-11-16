import { Metadata } from 'next'

import BackgroundRelative from '@/components/BackgroundRelative'
import FaqSection from './(sections)/faqSection'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Câu hỏi thường gặp',
}

function Faq() {
  const t = useTranslations('Footer')

  return (
    <div className=''>
      <BackgroundRelative text={t('faq')} />
      <FaqSection />
    </div>
  )
}

export default Faq
