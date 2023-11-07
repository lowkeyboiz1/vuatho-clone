'use client'

import { IntroCard, SubCard1, SubCard2, SubCard3 } from '@/components/card'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './swiper.scss'

export const ServicesCarousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      loop
      className='swiper-services h-[500px] w-full md:w-[400px] md:h-[450px] 13inch:w-[450px] 13inch:h-[520px] 3xl:w-[550px] 3xl:h-[650px]'
    >
      <SwiperSlide>
        <IntroCard />
      </SwiperSlide>
      <SwiperSlide>
        <SubCard1 />
      </SwiperSlide>
      <SwiperSlide>
        <SubCard2 />
      </SwiperSlide>
      <SwiperSlide>
        <SubCard3 />
      </SwiperSlide>
    </Swiper>
  )
}
