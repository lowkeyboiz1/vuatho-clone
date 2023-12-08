'use client'

import { LocationIcon } from '@/components/Icons'
import { Location } from 'iconsax-react'
import Image from 'next/image'

const listImage = [
  {
    thumb: '',
    text: <div className=''></div>,
  },
]

function Test() {
  return (
    <div className='pt-[300px]'>
      <div className='relative order-none col-span-5 h-full w-full xl:order-1 xl:col-span-3'>
        <Image
          src={'/benefitWorker/benefit1Empty.png'}
          alt='benefit1Empty'
          height={800}
          width={1280}
          className='h-full w-auto object-contain'
        />
        <div className='absolute top-[20%]'>
          <div className='flex flex-col gap-[1px]'>
            <div className='rounded-[6px] bg-[#044B9E] p-[6px] text-[1.2rem] text-white'>
              HOẠT ĐỘNG TRÊN 63 TỈNH THÀNH VIỆT NAM
            </div>
            <div className='flex flex-col gap-[6px] rounded-[6px] bg-white px-[18px] py-[8px]'>
              <div className='flex items-center gap-[6px]'>
                <LocationIcon className='text-[#50B72C]' />

                <p className='text-[0.8rem] font-bold'>Thợ đang sẵn sàng nhận việc</p>
              </div>
              <div className='flex items-center gap-[6px]'>
                <LocationIcon className='text-[#FF2E2E]' />
                <p className='text-[0.8rem] font-bold'>
                  Thợ đang làm hoặc đang tắt ứng dụng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
