'use client'

import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules'
import { motion } from 'framer-motion'

import './Carousel.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

const SectionBanner = () => {
  const t = useTranslations('Banner')
  const locale = useLocale()

  const varianst = {
    initial: {
      opacity: 0,
      y: 80,
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 80,
    },
  }

  return (
    <motion.section
      variants={varianst}
      initial='initial'
      exit='exit'
      animate='whileInView'
      className='w-full h-[calc(100vh-64px)] 3xl:h-[calc(100vh-80px)] md:h-screen'
    >
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        loop
        autoplay
        className='swiper-home select-none h-[calc(100vh-64px)] 3xl:h-[calc(100vh-80px)] md:h-full w-full'
      >
        <SwiperSlide>
          <div
            className={`relative hidden md:block h-full w-full select-none bg-[url('/home/banner/banner_web_1.webp')] bg-center bg-cover bg-no-repeat`}
          >
            <div className='absolute top-[10%] 3xl:top-[4%] left-1/2 -translate-x-1/2 text-center w-full'>
              <motion.h3
                variants={varianst}
                initial='initial'
                exit='exit'
                whileInView='whileInView'
                className='text-[#182883] text-[4rem] 13inch:text-[5rem] 3xl:text-[6.5rem] uppercase'
              >
                {t('banner1.text1')}
              </motion.h3>
              <motion.p
                variants={varianst}
                initial='initial'
                exit='exit'
                whileInView='whileInView'
                className='text-[#182883] text-[3.6rem] 13inch:text-[4.4rem] 3xl:text-[6rem] font-bold uppercase 3xl:mt-[10px]'
              >
                {t('banner1.text2')}
              </motion.p>
              <motion.div
                variants={varianst}
                initial='initial'
                exit='exit'
                whileInView='whileInView'
              >
                <Button
                  className='bg-gradient-to-l from-[#FCAE10] to-[#FF7E00] w-[200px] h-[60px] md:w-[160px] xl:w-[200px] xl:h-[50px] 13inch:w-[280px] 13inch:h-[60px] 3xl:w-[360px] 3xl:h-[80px] mt-[10px] 3xl:mt-[30px] text-white text-[2.5rem] 13inch:text-[3rem] uppercase font-bold'
                  radius='full'
                >
                  {t('banner1.button')}
                </Button>
              </motion.div>
            </div>
          </div>
          <Link
            href={'/'}
            className={`block md:hidden relative h-full w-full select-none bg-cover bg-no-repeat ${
              locale === 'vi'
                ? "bg-[url('/home/banner/banner_vi_1.png')]"
                : "bg-[url('/home/banner/banner_en_1.png')]"
            }`}
          ></Link>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hidden md:block relative h-full w-full select-none bg-[url('/home/banner/banner_web_2.webp')] bg-top bg-cover bg-no-repeat">
            <div className='absolute top-[8%] 3xl:top-[10%] left-1/2 -translate-x-1/2 text-center w-full px-12 md:px-0'>
              <motion.h3
                variants={varianst}
                initial='initial'
                exit='exit'
                whileInView='whileInView'
                className='text-white text-[3.2rem] md:text-[4.2rem] 13inch:text-[5.2rem] 3xl:text-[5.8rem]'
              >
                {t('banner2.text1')}
              </motion.h3>
              <motion.p
                variants={varianst}
                initial='initial'
                exit='exit'
                whileInView='whileInView'
                className='text-white text-center text-[4.2rem] md:text-[3.8rem] 13inch:text-[4.2rem] 3xl:text-[5.4rem] font-bold uppercase my-4'
              >
                {t('banner2.text2')}
              </motion.p>
              <motion.div
                variants={varianst}
                initial='initial'
                exit='exit'
                whileInView='whileInView'
              >
                <Button
                  className='bg-gradient-to-l uppercase bg-[#FFD146] text-[#101B67] text-[3rem] md:text-[2rem] 13inch:text-[3rem] 3xl:text-[4rem] w-[260px] h-[60px] xl:w-[220px] xl:h-[50px] 13inch:w-[320px] 13inch:h-[60px] 3xl:w-[400px] 3xl:h-[90px] font-semibold mt-5'
                  radius='full'
                >
                  {t('banner2.button')}
                </Button>
              </motion.div>
            </div>
          </div>
          <Link
            href={'/'}
            className={`block md:hidden relative h-full w-full select-none bg-cover bg-no-repeat ${
              locale === 'vi'
                ? "bg-[url('/home/banner/banner_vi_2.png')]"
                : "bg-[url('/home/banner/banner_en_2.png')]"
            }`}
          ></Link>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative hidden md:block h-full w-full select-none bg-[url('/home/banner/banner_web_3.webp')] bg-top bg-cover bg-no-repeat">
            <div className='absolute md:top-[4%] xl:top-[8%] 3xl:top-[8%] left-1/2 -translate-x-1/2 text-center w-full'>
              <motion.p
                variants={varianst}
                initial='initial'
                exit='exit'
                whileInView='whileInView'
                className='text-[#182883] text-[3rem] md:text-[3.8rem] 13inch:text-[4.2rem] 3xl:text-[5.5rem] font-bold my-4 w-full'
              >
                {t('banner3.text1')}
              </motion.p>
              <motion.div
                variants={varianst}
                initial='initial'
                exit='exit'
                whileInView='whileInView'
              >
                <Button
                  className=' bg-gradient-to-l from-[#347AFF] to-[#1D30B9] text-white md:text-[2.2rem] 13inch:text-[2.8rem] 3xl:text-[3.2rem] uppercase mt-2 md:w-[180px] md:h-A[50px] 13inch:w-[260px] 13inch:h-[60px] 3xl:w-[320px] 3xl:h-[80px] px-8 font-semibold'
                  radius='full'
                >
                  {t('banner3.button')}
                </Button>
              </motion.div>
            </div>
          </div>
          <Link
            href={'/'}
            className={`block md:hidden relative h-screen w-full select-none bg-cover bg-no-repeat ${
              locale === 'vi'
                ? "bg-[url('/home/banner/banner_vi_3.png')]"
                : "bg-[url('/home/banner/banner_en_3.png')]"
            }`}
          ></Link>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  )
}

export default SectionBanner
