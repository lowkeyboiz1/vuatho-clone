import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'

import {Location as LocationIcon, Call as CallIcon, Sms as SmsIcon} from 'iconsax-react';

export const metadata: Metadata = {
  title: 'Liên hệ',
}

const ContactUs = () => {
  return (
    <div className='2xl:pt-32 xl:pt-20 pt-10 overflow-hidden'>
      <div className="w-screen 2xl:h-[90vh] xl:h-[80vh] lg:h-[60vh] h-[50vh] flex flex-col justify-center relative">
        <div className='ct-container-70 xl:pt-[80px] relative z-[1]'>
          <h3 className='text-[3.5rem] font-semibold'>Hãy liên hệ với chúng tôi</h3>
          <div className='lg:mt-20 mt-10 xl:space-y-20 space-y-10'>
            <div className='flex xl:gap-10 gap-6'>
              <div className='bg-primary-blue-2 text-primary-blue h-20 aspect-square w-fit rounded-full flex flex-col justify-center items-center'>
                <LocationIcon variant='Bold' />
              </div>
              <div>
                <h5 className='text-primary-blue lg:text-[2.5rem] text-[2rem] font-semibold'>57 Song Hành, P. An Phú, TP. Thủ Đức, TP.<br /> HCM, Việt Nam.</h5>
                <div className='mt-8 flex gap-3'>
                  <h6 className='bg-base-gray p-3 rounded-xl text-[1.7rem] font-semibold'>8h30 đến 16h30</h6>
                  <h6 className='bg-base-gray p-3 rounded-xl text-[1.7rem] font-semibold'>Thứ Hai đến thứ Sáu</h6>
                </div>
                <p className='xl:text-[1.7rem] text-[1.5rem] mt-5 text-black/50'>Không hỗ trợ vào thứ 7, chủ nhật và các ngày lễ trong năm</p>
              </div>
            </div>
            <div className='flex xl:gap-10 gap-6 items-center'>
              <div className='bg-primary-blue-2 text-primary-blue h-20 aspect-square w-fit rounded-full flex flex-col justify-center items-center'>
                <CallIcon variant='Bold' />
              </div>
              <h5 className='text-primary-blue lg:text-[2.5rem] text-[2rem] font-semibold'>38 786 688</h5>
              <h6 className='bg-base-gray p-3 rounded-xl text-[1.7rem] font-semibold'>24/7</h6>
            </div>
            <div className='flex xl:gap-10 gap-6 items-center'>
              <div className='bg-primary-blue-2 text-primary-blue h-20 aspect-square w-fit rounded-full flex flex-col justify-center items-center'>
                <SmsIcon variant='Bold' />
              </div>
              <h5 className='text-primary-blue lg:text-[2.5rem] text-[2rem] font-semibold'>info@vuatho.com</h5>
            </div>
          </div>
        </div>
        <Image alt='background' src='/contact-us/bg.webp' quality={100} width={1920} height={848} className='absolute bottom-0 right-0 md:opacity-100 opacity-40' />
      </div>
    </div>
  )
}

export default ContactUs