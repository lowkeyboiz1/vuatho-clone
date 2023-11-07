'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import animationData from '@/components/animateJson/aboutUs_banner.json'

import lottie from 'lottie-web'
import { AndroidBtn, IosBtn, QrCode } from '@/components/DownloadApps'

const HeroSection = () => {
  return (
    <>
      <div className='bg-[#FED32C] w-full relative 3xl:pt-[100px] 13inch:pt-[40px] pt-[20px] pb-[50px] md:pb-0'>
        <div className='flex items-start justify-center ct-container-70 3xl:gap-[180px] flex-col md:flex-row'>
          <div className=' w-full order-2'>
            <h3 className='text-[3.2rem] 13inch:text-[3rem] font-semibold'>
              Dẫn Đầu Về <br />
              Công Nghệ & Hệ Sinh Thái
            </h3>
            <p className='text-[6rem] font-bold hidden md:block'>Siêu Ứng Dụng</p>
            <div className='w-full'>
              <p className='w-full text-[2rem] 13inch:text-[1.8rem] xl:text-[1.6rem]'>
                Tại Vua Thợ, chúng tôi tự hào là một công ty công nghệ hàng đầu và là
                người tiên phong trong việc cung cấp mô hình hệ sinh thái siêu ứng dụng
                tại Đông Nam Á. Khởi nguồn từ lòng đam mê và sứ mệnh cải thiện cuộc sống
                của hàng triệu người dùng trên khắp con đường phát triển, chúng tôi mang
                đến một trải nghiệm đỉnh cao và tiện lợi.
              </p>
            </div>
          </div>
          <div className='mb-[35px] order-1 md:order-3 w-full'>
            <p className='text-[6rem] font-bold block md:hidden text-center w-full my-4'>
              Siêu Ứng Dụng
            </p>
            <AnimatePhone />
          </div>
        </div>
        <div className='absolute bottom-[-10px] 2xl:bottom-[-30px] 3xl:bottom-[-50px] w-full'>
          <Image
            src={'/images/about-us/bottom.png'}
            height={149}
            width={2700}
            quality={100}
            alt='bottom'
            className='h-full w-full'
          />
        </div>
      </div>
    </>
  )
}

const AnimatePhone = () => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    })
  }, [])

  return (
    <div
      ref={container}
      className='w-[260px] 13inch:w-[300px] 3xl:w-[382px] mx-auto mb-0 md:mb-[-40px] lg:mb-[-30px]'
    />
  )
}

export default HeroSection
