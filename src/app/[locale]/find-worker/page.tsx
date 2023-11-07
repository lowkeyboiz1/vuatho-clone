
import React from 'react'
import { Metadata } from 'next'

import SectionTest from './(sections)/sectionStep'

export const metadata: Metadata = {
  title: 'Tìm thợ',
}

function FindWorker() {
  return (
    <div className='pt-[64px] 3xl:pt-[80px]'>
      <div className='ct-container-70 flex flex-col gap-[30px] py-[20px]'>
        <h3 className='text-[#405AB7] text-[3.2rem]'>
          Hướng dẫn cách tìm thợ trên Vua Thợ
        </h3>
        <SectionTest />
      </div>
    </div>
  )
}
export default FindWorker
