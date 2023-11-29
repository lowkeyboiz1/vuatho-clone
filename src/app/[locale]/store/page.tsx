'use client'

import Image from 'next/image'

import { Button } from '@nextui-org/react'
import { BreadcrumbWithUrl } from '@/interface'
import React from 'react'

import { ListBreadcrumbs } from '@/components/breadcrumbs'
import { Call } from 'iconsax-react'
function Store() {
  const listBreadcrumbs: BreadcrumbWithUrl[] = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Mua đồng phục' },
  ]
  return (
    <div className='pt-[64px] 3xl:pt-[80px]'>
      <div className='w-full'>
        <div className='relative inset-0 h-[420px]'>
          <Image
            src={'/press/pressBanner1.png'}
            alt=''
            height={419}
            width={3000}
            className='h-full object-cover'
          />
          <div className='absolute top-[10%] 13inch:left-1/2 13inch:-translate-x-1/2'>
            <div className='ct-container-70 flex flex-col gap-[20px] text-white'>
              <div className=''>
                <ListBreadcrumbs list={listBreadcrumbs} />
              </div>
            </div>
          </div>
          <div className='absolute bottom-[10%] w-full text-center'>
            <div className='mb-[16px]'>
              <p className='text-[2.4rem] font-semibold text-white md:text-[3.2rem]'>
                Trang phục chuyên nghiệp cho thợ
              </p>
              <p className='text-[2.4rem] font-semibold text-white md:text-[3.2rem]'>
                Tự tin hơn khi làm việc
              </p>
            </div>
            <Button
              size='lg'
              className=' h-[46px] max-w-max rounded-full bg-[#FCB713] px-[24px] text-[1.6rem] font-semibold text-base-black-1'
              endContent={<Call variant='Bold' />}
            >
              Liên hệ đặt mua ngay
            </Button>
          </div>
        </div>
      </div>
      <div className='ct-container-70 mb-[60px]'>
        <h3 className='mb-[20px] mt-[36px] text-[2.4rem] font-semibold text-base-black-1'>
          ĐỒNG PHỤC CỦA VUA THỢ
        </h3>
        <div className='grid grid-cols-1 gap-[20px] lg:grid-cols-2 xl:grid-cols-4'>
          {Array(8)
            .fill(null)
            .map((i: any, index: number) => (
              <div
                className='overflow-hidden rounded-[8px] shadow-[0px_4px_8px_0px_#ACACAC29]'
                key={index}
              >
                <div className='h-[200px] w-full'>
                  <Image
                    src={'/tuongtrung.png'}
                    alt=''
                    height={300}
                    width={600}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex flex-col gap-[8px] bg-white p-[16px]'>
                  <p className='text-[1.6rem] font-semibold text-base-black-1'>
                    Áo thun Vua Thợ
                  </p>
                  <p className='text-[1.6rem] font-semibold text-primary-blue'>80.000đ</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Store
