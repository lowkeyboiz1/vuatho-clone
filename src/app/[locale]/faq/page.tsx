import { Metadata } from 'next'

import BackgroundRelative from '@/components/BackgroundRelative'
import FaqSection from './(sections)/faqSection'

export const metadata: Metadata = {
  title: 'Câu hỏi thường gặp',
}

function Faq() {
  return (
    <div className='pt-[64px] 3xl:pt-[80px]'>
      <BackgroundRelative text='Câu hỏi thường gặp' />
      <FaqSection />
    </div>
  )
}

export default Faq
