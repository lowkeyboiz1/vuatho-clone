'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import './pressSwiper.scss'

import { ListBreadcrumbs } from '../breadcrumbs'
import { Button } from '@nextui-org/react'
import { BreadcrumbWithUrl } from '@/interface'
import React from 'react'

interface SwiperMain {
  list: BreadcrumbWithUrl[]
  listText?: {
    title: string
  }[]
}

export const SwiperMain: React.FC<SwiperMain> = ({ list }) => {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      loop
      autoHeight
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      className='pressSwiper w-full'
    >
      {Array(3)
        .fill(null)
        .map((i: any, index: number) => (
          <SwiperSlide key={index} className=''>
            <div className='relative inset-0 h-[420px]'>
              <Image
                src={'/press/pressBanner1.png'}
                alt=''
                height={419}
                width={3000}
                className={
                  index % 2 !== 0
                    ? ' h-full rotate-180 object-cover'
                    : ' h-full object-cover'
                }
              />
            </div>
            <div className='absolute top-[10%] 13inch:left-1/2 13inch:-translate-x-1/2'>
              <div className='ct-container-70 flex flex-col gap-[20px] text-white'>
                <div className=''>
                  <ListBreadcrumbs list={list} />
                </div>
                <div className=''>
                  <p className='text-[2.4rem] font-semibold text-white md:text-[3.2rem]'>
                    Trang phục chuyên nghiệp cho thợ {index}
                  </p>
                  <p className='text-[2.4rem] font-semibold text-white md:text-[3.2rem]'>
                    Tự tin hơn khi làm việc
                  </p>
                </div>
                <Button
                  size='lg'
                  className=' h-[46px] max-w-max rounded-full bg-[#FCB713] px-[24px] text-[1.8rem] font-semibold text-base-black-1'
                >
                  Xem ngay
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
