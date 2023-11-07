import { Metadata } from 'next'

import BackgroundRelative from '@/components/BackgroundRelative'
import SectionStep from './(sections)/sectionStep'

export const metadata: Metadata = {
  title: 'Trở thành Thợ',
}

const BeComeEmployee = () => {
  return (
    <div className='pt-[64px] 3xl:pt-[80px]'>
      <BackgroundRelative text='Hướng dẫn đăng ký thành thợ' />
      <SectionStep />
    </div>
  )
}

export default BeComeEmployee
