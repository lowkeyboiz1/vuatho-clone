'use client'
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'iconsax-react'
import localFont from 'next/font/local'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './swipper.scss'

import instance from '@/services/axiosConfig'
import { Agree, CheckIcon, GigEconomy, Support } from '@/components/Icons'
import Article from '@/components/article'
import Map from '@/components/map'
import SectionToTheMoon from './(sections)/toTheMoon'
import SectionDownload from './(sections)/downloadApp'
import SectionWithVuaTho from './(sections)/withVuaTho'
import { SkeletonBlog } from '@/components/skeleton'
import { useLocale } from 'next-intl'

const HeroSection = () => {
  const searchParams = useSearchParams()
  const hiddenHeaderAndFooter = searchParams.get('hideHeaderAndFooter')
  return (
    <>
      {/* <Head>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <link href='favicon.ico' rel='shortcut icon' type='image/x-icon' />
        <meta http-equiv='content-language' content='vi' />
        <title>Vua Thợ</title>
        <meta name='description' content='mô tả' />
        <meta name='robots' content='noodp,index,follow' />
        <meta name='revisit-after' content='1 days' />
      </Head> */}
      <div
        className={`${
          hiddenHeaderAndFooter
            ? 'space-y-[40px] overflow-hidden md:space-y-[100px] xl:space-y-[100px]'
            : 'space-y-[40px] overflow-hidden pt-[70px] md:space-y-[100px] xl:space-y-[100px] 3xl:pt-[80px]'
        }`}
      >
        <MainSection />
        <WorkerBenefitSection />
        <CustomerBenefitSection />
        <AISection />
        <MinhBach />
        <HinhThucKetNoi />
        <SectionToTheMoon />
        <SectionDownload />
        <PressHome />
        <SectionWithVuaTho />
      </div>
    </>
  )
}

const AISection = () => {
  const t = useTranslations('AISection')

  const listAI = [
    { title: t('title1'), desc: t('desc1') },
    { title: t('title2'), desc: t('desc2') },
    { title: t('title3'), desc: t('desc3') },
    { title: t('title4'), desc: t('desc4') },
  ]

  return (
    <div id='AI' className='bg-base-gray py-[40px] md:py-[80px] xl:py-[100px]'>
      <div className='ct-container-70 relative'>
        <h4 className='mb-[60px] w-full text-center text-[2.4rem] font-semibold text-primaryBlue1 md:text-[3.2rem] 2xl:mb-[100px]'>
          {t('heading1')}
        </h4>
        <div className='flex flex-col'>
          <div className='flex h-full w-full items-center justify-center md:absolute md:justify-end 13inch:justify-center'>
            <div className='flex w-full items-center justify-center md:w-1/2 13inch:w-auto'>
              <Image
                src={'/mascot/AIRobot.png'}
                alt='AIRobot'
                width={338}
                height={400}
                className='pointer-events-none'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 items-center gap-[20px] py-12 lg:ml-[10%] 13inch:ml-0 13inch:grid-cols-2 13inch:gap-[40px]'>
            {listAI.map((i, index) => (
              <div
                key={index}
                className={`relative z-[10] flex w-full flex-col gap-[10px] p-[20px] text-baseBlack md:max-w-[400px] ${
                  index % 2 !== 0 && '13inch:ml-[36%]'
                }`}
              >
                <span className='absolute left-[-12%] top-[-46%] z-[1] hidden text-[6.4rem] font-semibold text-[#FCB713]/20 lg:block'>
                  0{index + 1}
                </span>
                <div
                  className={`absolute inset-0 z-[2] rounded-[20px] bg-white shadow-[0px_8px_16px_0px_#A2BAF366] ${
                    index === 0 && 'border-b-[2px] border-[#FCB713]'
                  }`}
                ></div>
                <h5 className='z-[4] text-[1.8rem] font-semibold text-primary-blue'>
                  {i.title}
                </h5>
                <p className='z-[4] text-[1.8rem]'>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const MinhBach = () => {
  const t = useTranslations('MinhBach')

  const listData = [
    {
      title: t('listData.title1'),
      desc: t('listData.desc1'),
    },
    {
      title: t('listData.title2'),
      desc: t('listData.desc2'),
    },
    {
      title: t('listData.title3'),
      desc: t('listData.desc3'),
    },
    {
      title: t('listData.title4'),
      desc: t('listData.desc4'),
    },
    {
      title: t('listData.title5'),
      desc: t('listData.desc5'),
    },
    {
      title: t('listData.title6'),
      desc: t('listData.desc6'),
    },
  ]

  return (
    <div className='' id='trade'>
      <section className='ct-container-70 w-full'>
        <h2 className='mb-[40px] text-[2.4rem] font-semibold text-primary-blue md:text-[3.2rem]'>
          {t('heading')}
        </h2>
        <div className='grid grid-cols-1 gap-[20px] lg:grid-cols-2 lg:gap-[40px]'>
          {listData.map((item, index) => (
            <div
              key={index}
              className='flex flex-col gap-[8px] text-[1.8rem] text-baseBlack'
            >
              <div className='flex gap-[10px]'>
                <div className='h-full w-[4px] rounded-lg bg-[#FCB713]' />
                <h3 className=' text-[1.8rem] font-bold'>{item.title}</h3>
              </div>
              <p className='text-[1.8rem] font-light'>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const HinhThucKetNoi = () => {
  const t = useTranslations('HinhThucKetNoi')

  const DataLabel: any = [
    {
      label: t('listData.label1'),
      description: t('listData.description1'),
    },
    {
      label: t('listData.label2'),
      description: t('listData.description2'),
    },
    {
      label: t('listData.label3'),
      description: t('listData.description3'),
    },
    {
      label: t('listData.label4'),
      description: t('listData.description4'),
    },
    {
      label: t('listData.label5'),
      description: t('listData.description5'),
    },
    {
      label: t('listData.label6'),
      description: t('listData.description6'),
    },
  ]

  return (
    <section id='multi' className=''>
      <section className='ct-container-70 w-full'>
        <h2 className='mb-[40px] text-[2.4rem] font-semibold text-primary-blue md:text-[3.2rem]'>
          {t('heading')}
        </h2>
        <div className='grid grid-cols-1 gap-[20px] lg:grid-cols-2 lg:gap-[40px]'>
          {DataLabel.map((i: any) => (
            <div
              key={i.label}
              className='flex flex-col gap-[8px] text-[1.8rem] text-baseBlack'
            >
              <div className='flex gap-[10px]'>
                <div className='h-full w-[4px] rounded-lg bg-primary-blue' />
                <h3 className='text-[1.8rem] font-bold'>{i.label}</h3>
              </div>
              <p className=' text-[1.8rem] font-light'>{i.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

const MainSection = () => {
  const t = useTranslations('MainSection')
  const listCard = [
    {
      id: '#AI',
      icon: GigEconomy,
      title: t('listCard.title1'),
      desc: t('listCard.desc1'),
    },
    {
      id: '#trade',
      icon: Agree,
      title: t('listCard.title2'),
      desc: t('listCard.desc2'),
    },
    {
      id: '#multi',
      icon: Support,
      title: t('listCard.title3'),
      desc: t('listCard.desc3'),
    },
  ]
  return (
    <div className='bg-gradient-to-br from-[#2559BD] to-[#3773E6] md:pb-[60px]'>
      <div className='ct-container-70 grid grid-cols-1 items-center xl:grid-cols-5'>
        <div className='col-span-1 xl:col-span-3'>
          <div className='mx-auto flex max-w-max flex-col justify-between gap-[40px] pt-10 xl:mx-0 xl:w-full xl:pt-20'>
            <div className='mx-auto flex max-w-max flex-col gap-[20px] xl:mx-0 xl:w-full'>
              <h3 className='text-left text-[2.4rem] font-bold text-white xl:text-[3.2rem]'>
                {t('heading1')} <span className='text-white'>{t('heading1-1')}</span>
                <br />
                {t('heading2')}
              </h3>
              <div className='flex flex-col gap-[20px]'>
                <div className='flex items-center gap-[8px]'>
                  <CheckIcon className='h-[14px] w-[14px]' />
                  <p className='text-[1.8rem] text-white xl:text-[1.8rem]'>
                    {t('text1')}
                  </p>
                </div>
                <div className='flex items-center gap-[8px]'>
                  <CheckIcon className='h-[14px] w-[14px]' />
                  <p className='text-[1.8rem] text-white xl:text-[1.8rem]'>
                    {t('text2')}
                  </p>
                </div>
              </div>
            </div>
            <div className=''>
              <Image
                src={'/home/dualPhone.png'}
                alt=''
                width={446}
                height={400}
                className=' object-contain'
              />
            </div>
          </div>
          <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-3'>
            {listCard.map((i: any, index: any) => (
              <a
                href={`${i.id}`}
                key={index}
                className='group z-[2] flex cursor-pointer items-center gap-[10px] rounded-[10px] bg-white p-[12px] shadow-[0px_16px_60px_-16px_rgba(35,35,35,0.06)] duration-300 hover:border-transparent hover:bg-white md:flex-col md:items-start xl:p-[10px] xl:hover:-translate-y-[6px]'
              >
                <i.icon size={40} className='text-primaryBlue' variant='Bold' />
                <div className='w-full pl-5 md:pl-0'>
                  <p className='mt-2 text-[1.6rem] text-primaryText'>{i.desc}</p>
                  <div className='flex items-center justify-between'>
                    <p className='mt-2 text-[1.8rem] font-semibold text-primaryText'>
                      {i.title}
                    </p>
                    <span className='-translate-x-[10px] opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
                      <ArrowRight size={24} className='text-black' />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className='col-span-1 my-[80px] w-full xl:col-span-2 xl:my-[40px]'>
          <Map />
        </div>
      </div>
    </div>
  )
}

const CustomerBenefitSection = () => {
  const t = useTranslations('CustomerBenefitSection')

  interface TlistBenefit {
    title: string
    id: number
    img: string
  }
  const listBenefit = [
    { title: t('listBenefit.title1'), id: 1, img: 'location.png' },
    { title: t('listBenefit.title2'), id: 2, img: 'rating.png' },
    { title: t('listBenefit.title3'), id: 3, img: 'onlinereviews.png' },
    { title: t('listBenefit.title4'), id: 4, img: 'deliveryontime.png' },
    { title: t('listBenefit.title4'), id: 5, img: 'deliveryontime.png' },
  ]

  return (
    <div className='ct-container-70 flex flex-col gap-[20px]'>
      <div className='flex flex-col gap-[10px] md:hidden'>
        <h3 className='text-[1.6rem] font-semibold uppercase tracking-[8px] lg:text-[2rem]'>
          {t('benefit')}
        </h3>
        <p className=' text-[2.4rem] text-[#FCB713] md:text-[3.2rem]'>{t('text')}</p>
      </div>
      <div className=' grid grid-cols-1 items-center gap-[20px] xl:grid-cols-3'>
        <div className='col-span-1'>
          <div className='hidden flex-col gap-[10px] md:flex'>
            <h3 className='text-[1.6rem] font-semibold uppercase tracking-[8px] md:text-[2rem]'>
              {t('benefit')}
            </h3>
            <p className='whitespace-nowrap text-[2.4rem] font-semibold text-[#FCB713] md:text-[3.2rem]'>
              {t('text')}
            </p>
          </div>
          <div className='mx-auto h-[200px] w-[200px] md:h-[300px] md:w-[300px] xl:h-[400px] xl:w-[400px]'>
            <Image
              src={'/benefitWorker/benefitWorker1.png'}
              alt=''
              height={400}
              width={400}
              className='h-full w-full object-contain'
            />
          </div>
        </div>
        <div className='col-span-1 grid grid-cols-1 gap-[20px] md:col-span-2 md:mx-auto md:max-w-[820px] md:grid-cols-2 md:gap-[40px]'>
          {listBenefit.map((item, index) => (
            <div className='col-span-1' key={index}>
              <div className='flex flex-col gap-[20px] xl:gap-[40px]'>
                <p className='text-[64px] font-semibold leading-none text-[#FCB713]'>
                  0{index + 1}
                </p>
                <p className='text-[1.6rem] text-base-black-1'>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const WorkerBenefitSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const t = useTranslations('WorkerBenefitSection')
  interface TlistBenefit {
    title: string
    desc: { text: JSX.Element }[]
    img: string
  }
  const listBenefit: TlistBenefit[] = [
    {
      title: t('benefit1'),
      desc: [
        {
          text: <p>{t('text1')}</p>,
        },
        { text: <p>{t('text2')}</p> },
      ],
      img: 'benefit1.png',
    },
    {
      title: t('benefit2'),
      desc: [
        { text: <p>{t('text3')}</p> },
        {
          text: (
            <p>
              <strong>{t('text4')}</strong>
            </p>
          ),
        },
      ],
      img: 'benefit2.png',
    },
    {
      title: t('benefit3'),
      desc: [{ text: <p>{t('text5')}</p> }, { text: <p>{t('text6')}</p> }],
      img: 'benefit3.png',
    },
    {
      title: t('benefit4'),
      desc: [{ text: <p>{t('text7')}</p> }, { text: <p>{t('text8')}</p> }],
      img: 'benefit4.png',
    },

    {
      title: t('benefit5'),
      desc: [
        {
          text: (
            <p>
              {t('text9')} <strong>{t('text10')}</strong>
              <span className='text-[#969696]'>{t('text11')}</span>
            </p>
          ),
        },
        { text: <p>{t('text12')}</p> },
      ],
      img: 'benefit5.png',
    },
    {
      title: t('benefit6'),
      desc: [
        { text: <p>{t('text13')}</p> },
        {
          text: (
            <p>
              <strong>{t('text14')}</strong>
            </p>
          ),
        },
        {
          text: (
            <p>
              <strong>{t('text15')}</strong>
            </p>
          ),
        },
        {
          text: (
            <p>
              <strong>{t('text16')}</strong>
            </p>
          ),
        },
      ],
      img: 'benefit6.png',
    },
    {
      title: t('benefit7'),
      desc: [
        { text: <p>{t('text17')}</p> },
        {
          text: (
            <p>
              <strong>{t('text18')}</strong>
            </p>
          ),
        },
        {
          text: (
            <p>
              <strong>{t('text19')}</strong>
            </p>
          ),
        },
        {
          text: (
            <p>
              <strong>{t('text20')}</strong>
            </p>
          ),
        },
      ],
      img: 'benefit7.png',
    },
    {
      title: t('benefit8'),
      desc: [{ text: <p>{t('text21')}</p> }],
      img: 'benefit8.png',
    },
    {
      title: t('benefit9'),
      desc: [
        { text: <p>{t('text22')}</p> },
        {
          text: (
            <p>
              {t('text23')} <strong>{t('text24')}</strong>
              {t('text25')}
            </p>
          ),
        },
      ],
      img: 'benefit9.png',
    },
    {
      title: t('benefit10'),
      desc: [{ text: <p>{t('text26')}</p> }],
      img: 'benefit10.png',
    },
    {
      title: t('benefit11'),
      desc: [{ text: <p>{t('text27')}</p> }],
      img: 'benefit11.png',
    },
    {
      title: t('benefit12'),
      desc: [{ text: <p>{t('text28')}</p> }],
      img: 'benefit12.png',
    },
    {
      title: t('benefit13'),
      desc: [{ text: <p>{t('text29')}</p> }],
      img: 'benefit13.png',
    },
    {
      title: t('benefit14'),
      desc: [{ text: <p>{t('text30')}</p> }],
      img: 'benefit13.png',
    },
  ]

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return `<span class="paginationBenefit ${className} ">${index + 1}</span>`
    },
  }

  return (
    <div className='flex flex-col gap-[20px]'>
      <div className='ct-container-70 flex flex-col gap-[20px] xl:gap-[40px]'>
        <div className='flex flex-col gap-[10px]'>
          <h3 className='text-[1.6rem] font-semibold uppercase tracking-[8px] md:text-[2rem]'>
            {listBenefit.length} {t('benefit')}
          </h3>
          <p className='text-[2.4rem] font-semibold text-primary-blue md:text-[3.6rem]'>
            {t('text')}
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          loop
          autoHeight
          autoplay={{
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 5000,
          }}
          slidesPerView={1}
          navigation
          pagination={pagination}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className='benefitSwipper h-full w-full'
          onActiveIndexChange={(swiper: any) => {
            setCurrentIndex(swiper.realIndex)
          }}
        >
          {listBenefit.map((item, index) => {
            return (
              <div className='h-full w-full' key={index}>
                <SwiperSlide className={currentIndex === index ? 'visible' : 'invisible'}>
                  <div className='mb-[16px] flex h-[76px] items-center gap-[12px]'>
                    <p className='text-[4rem] font-semibold leading-none text-primary-blue/20 xl:text-[6.4rem]'>
                      {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
                    </p>
                    <h4 className='text-[1.6rem] font-bold text-primary-blue xl:text-[2.4rem]'>
                      {item.title}
                    </h4>
                  </div>
                  <div className='grid w-full grid-cols-5 overflow-hidden rounded-xl bg-[#f8f8f8]'>
                    <div className='text order-1 col-span-5 h-full w-full p-[20px] xl:order-none xl:col-span-2'>
                      <ul className='flex flex-col gap-[10px]'>
                        {item.desc.map((ii: any, index: number) => (
                          <span key={index}>{ii.text}</span>
                        ))}
                      </ul>
                    </div>
                    <div className='order-none col-span-5 h-full w-full xl:order-1 xl:col-span-3'>
                      <Image
                        src={`/benefitCustomer/${item.img}`}
                        alt=''
                        height={800}
                        width={1280}
                        className='h-full w-auto object-contain'
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
const PressHome = () => {
  const locale = useLocale()
  const t = useTranslations('PressHome')

  const [onFetching, setOnFetching] = useState<boolean>()
  const [listBlog, setListBlog] = useState([])

  const serverFetching = async () => {
    try {
      const { data } = await instance.get('/home/blogs', {
        params: {
          lang: locale,
        },
      })
      setListBlog(data)
    } catch (error) {
      console.log(error)
    } finally {
      setOnFetching(false)
    }
  }
  useEffect(() => {
    onFetching && serverFetching()
  }, [onFetching])

  useEffect(() => {
    setOnFetching(true)
  }, [])

  return (
    <div className='ct-container-70 flex flex-col gap-[20px]'>
      <div className='flex items-center justify-between'>
        <p className='text-[1.8rem] font-semibold text-primary-blue md:text-[3.2rem]'>
          {t('heading')}
        </p>
        <Link
          href={`/${locale}/press`}
          className='text-[1.8rem] font-semibold text-[#FCB713] md:text-[1.8rem]'
        >
          {t('seeAll')}
        </Link>
      </div>
      <div className='flex flex-nowrap gap-[20px] overflow-x-auto xl:grid xl:grid-cols-4 xl:overflow-x-auto'>
        {onFetching
          ? Array(4)
              .fill(1)
              .map((item: any, index: number) => (
                <div className='w-full' key={index}>
                  <SkeletonBlog />
                </div>
              ))
          : listBlog.length > 0
            ? listBlog.map((item: any, index: number) => {
                return (
                  <Article
                    key={item.uuid || index}
                    item={item}
                    style='w-[80%] md:w-[40%] xl:w-full cursor-pointer'
                  />
                )
              })
            : Array(4)
                .fill(1)
                .map((item: any, index: number) => (
                  <div className='w-full' key={index}>
                    <SkeletonBlog />
                  </div>
                ))}
      </div>
    </div>
  )
}
export default HeroSection
