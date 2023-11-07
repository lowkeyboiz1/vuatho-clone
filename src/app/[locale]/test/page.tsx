'use client'

import { IntroCard, SubCard1, SubCard2, SubCard3 } from '@/components/card'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const Page = () => {
  return (
    <div className='pt-80 flex gap-5'>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        spaceBetween={30}
        loop
        className='h-[500px] w-full md:w-[400px] md:h-[450px] 13inch:w-[450px] 13inch:h-[520px] 3xl:w-[550px] 3xl:h-[650px]'
      >
        <SwiperSlide>
          <SubCard1 />
        </SwiperSlide>
        <SwiperSlide>
          <IntroCard />
        </SwiperSlide>
        <SwiperSlide>
          <SubCard2 />
        </SwiperSlide>
        <SwiperSlide>
          <SubCard3 />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Page
