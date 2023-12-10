'use client'

import React from 'react'
import Link from 'next/link'
import { useEffect, useState, useRef, useImperativeHandle, createRef } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

import { motion, useAnimate } from 'framer-motion'
import confetti from 'canvas-confetti'
import { useTranslations } from 'next-intl'
import { ArrowRight, Heart } from 'iconsax-react'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './swipper.scss'

import instance from '@/services/axiosConfig'
import { Agree, CheckIcon, GigEconomy, ImageSkeleton, Support } from '@/components/Icons'
import Article from '@/components/article'
import Map from '@/components/map'
import SectionToTheMoon from './(sections)/toTheMoon'
import SectionDownload from './(sections)/downloadApp'
import SectionWithVuaTho from './(sections)/withVuaTho'
import { SkeletonBlog } from '@/components/skeleton'
import { useLocale } from 'next-intl'
import { TlistBenefit } from '@/interface'
import { Skeleton } from '@nextui-org/react'

function HomePage() {
  const searchParams = useSearchParams()
  const hiddenHeaderAndFooter = searchParams.get('hideHeaderAndFooter')
  return (
    <>
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
            {listAI.map((item, index) => (
              <div
                key={`listAI-${index}`}
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
                  {item.title}
                </h5>
                <p className='z-[4] text-[1.8rem]'>{item.desc}</p>
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
              key={`listData-${index}`}
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
        <div className='grid grid-cols-1 gap-[20px] pb-[40px] lg:grid-cols-2 lg:gap-[40px]'>
          {DataLabel.map((item: any, index: number) => (
            <div
              key={`datalabel-${index}`}
              className='flex flex-col gap-[8px] text-[1.8rem] text-baseBlack'
            >
              <div className='flex gap-[10px]'>
                <div className='h-full w-[4px] rounded-lg bg-primary-blue' />
                <h3 className='text-[1.8rem] font-bold'>{item.label}</h3>
              </div>
              <p className=' text-[1.8rem] font-light'>{item.description}</p>
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
  }
  const listBenefit: TlistBenefit[] = [
    { title: t('listBenefit.title1'), id: 1 },
    { title: t('listBenefit.title2'), id: 2 },
    { title: t('listBenefit.title3'), id: 3 },
    { title: t('listBenefit.title4'), id: 4 },
    { title: t('listBenefit.title5'), id: 5 },
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
          {listBenefit.map((item: TlistBenefit, index: number) => (
            <div className='col-span-1' key={`listBenefit-${index}`}>
              <div className='flex items-center gap-[20px] md:flex-col xl:gap-[40px]'>
                <p className='text-[4rem] font-semibold leading-none text-[#FCB713] md:text-[6.4rem]'>
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
  const t = useTranslations('WorkerBenefitSection')
  const locale = useLocale()

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [onFetching, setOnFetching] = useState<boolean>(false)

  const [listDataBenefit, setListDataBenefit] = useState<any>([])

  const swiperRef = useRef<any>(null)
  const itemRefs = useRef<any>([])

  let clicked = false
  let timer: any = null

  useEffect(() => {
    itemRefs.current = Array(listDataBenefit.length)
      .fill(null)
      .map((_, i) => itemRefs.current[i] || createRef())
  }, [listDataBenefit.length])

  const _handleFetching = async () => {
    try {
      const data: any = await instance.get(`home/benefit?lang=${locale}`)
      setListDataBenefit([...data])
    } catch (error) {
      console.log(error)
    } finally {
      setOnFetching(false)
    }
  }

  useEffect(() => {
    onFetching && _handleFetching()
  }, [onFetching])

  useEffect(() => {
    setOnFetching(true)
  }, [])

  const _HandleActiveLike = async (item: TlistBenefit) => {
    try {
      // const { data } = await instance.post('/', {
      //   params: {
      //     id,
      //     isLike
      //   },
      // })
    } catch (error) {
      console.log(error)
    }
  }

  const _detectDoubleTap = async (e: any, index: any) => {
    try {
      if (clicked) {
        itemRefs.current[index].current?.like()
      } else {
        // _handleClickSwiper()
        clicked = true
      }
      setTimeout(function () {
        clicked = false
      }, 333) //detect fast clicks (333ms)
    } catch (error) {}
  }

  const _handleClickSwiper = () => {
    swiperRef.current.swiper.autoplay.stop()
    clearTimeout(timer)
    timer = setTimeout(() => {
      swiperRef.current.swiper.autoplay.start()
    }, 30000)
  }
  const handleLog = () => {
    console.log('123')
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return `<span class="paginationBenefit ${className}" key="bullet-${index}">${
        index + 1
      }</span>`
    },
  }

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', (event) => {
      document.querySelectorAll('.paginationBenefit').forEach((item) => {
        item.addEventListener('click', handleLog)
      })
    })
  }, [])

  useEffect(() => {
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='flex flex-col gap-[20px]'>
      <div className='ct-container-70 flex flex-col gap-[20px] xl:gap-[40px]'>
        <div className='flex flex-col gap-[10px]'>
          <h3 className='text-[1.6rem] font-semibold uppercase tracking-[8px] md:text-[2rem]'>
            {listDataBenefit?.length || 14} {t('benefit')}
          </h3>
          <p className='text-[2.4rem] font-semibold text-primary-blue md:text-[3.6rem]'>
            {t('text')}
          </p>
        </div>
        {onFetching ? (
          <>
            <div className='flex h-[420px] w-full animate-pulse items-center justify-center bg-gray-300 '>
              <ImageSkeleton style='h-[120px] w-[300px] animate-pulse' />
            </div>
            <div className='flex w-full flex-col items-center justify-center gap-[12px] p-[20px]'>
              {Array(4)
                .fill(1)
                .map((_, index) => (
                  <Skeleton
                    key={`skeleton-text-${index}`}
                    className='h-[12px] w-full rounded-lg'
                  />
                ))}
            </div>
            <div className='flex w-full items-center justify-center gap-[20px]'>
              {Array(6)
                .fill(1)
                .map((_: any, index: number) => (
                  <Skeleton
                    className='h-[68px] w-[68px] flex-shrink-0 rounded-lg'
                    key={`skeleton-pagination-${index}`}
                  />
                ))}
            </div>
          </>
        ) : (
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            effect={'fade'}
            loop
            autoHeight
            autoplay={{
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              delay: 15000,
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
            {listDataBenefit?.map((item: any, index: number) => {
              return (
                <div className='h-full w-full' key={item.id}>
                  <SwiperSlide
                    className={currentIndex === index ? 'visible' : 'invisible'}
                    onClick={(e) => {
                      _detectDoubleTap(e, index)
                    }}
                  >
                    <div className='mb-[16px] flex items-center justify-between'>
                      <div className='flex h-[76px] items-center gap-[12px]'>
                        <p className='text-[4rem] font-semibold leading-none text-primary-blue/20 xl:text-[6.4rem]'>
                          {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
                        </p>
                        <h4 className='text-[1.6rem] font-bold text-primary-blue xl:text-[2.4rem]'>
                          {item.title}
                        </h4>
                      </div>
                      <div className='likeButton hidden md:block'>
                        <Like
                          ref={itemRefs.current[index]}
                          count={item.like}
                          isLike={item.isLike}
                          uuid={item.uuid}
                        />
                      </div>
                    </div>
                    <div className='grid w-full grid-cols-5 rounded-xl bg-[#f8f8f8]'>
                      <div className='text order-1 col-span-5 h-full w-full p-[20px] xl:order-none xl:col-span-2'>
                        <div dangerouslySetInnerHTML={{ __html: item.html }} />
                      </div>
                      <div className='relative order-none col-span-5 h-full w-full xl:order-1 xl:col-span-3'>
                        <div className='overflow-hidden rounded-t-[12px] xl:rounded-r-[12px]'>
                          <Image
                            src={item.img}
                            alt=''
                            height={800}
                            width={1280}
                            className='h-full w-auto object-contain'
                          />
                        </div>
                        <div className='likeButtonMobile absolute right-[2%] top-[4%] md:hidden'>
                          <Like
                            ref={itemRefs.current[index]}
                            count={item.like}
                            isLike={item.isLike}
                            uuid={item.uuid}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              )
            })}
          </Swiper>
        )}
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
    <div className='ct-container-70 flex flex-col gap-[20px] pb-[40px] md:pb-0'>
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
      <div className='blog-home flex flex-nowrap gap-[20px] overflow-x-auto xl:grid xl:grid-cols-4 xl:overflow-x-auto'>
        {onFetching
          ? Array(4)
              .fill(1)
              .map((item: any, index: number) => (
                <div className='w-full' key={`skeleton-blog-${index}`}>
                  <SkeletonBlog />
                </div>
              ))
          : listBlog.length > 0
            ? listBlog.map((item: any, index: number) => {
                return (
                  <Article
                    key={item.uuid || `blog-${index}`}
                    item={item}
                    style='w-[80%] md:w-[40%] xl:w-full cursor-pointer'
                  />
                )
              })
            : Array(4)
                .fill(1)
                .map((item: any, index: number) => (
                  <div className='w-full' key={`skeleton-blog1-${index}`}>
                    <SkeletonBlog />
                  </div>
                ))}
      </div>
    </div>
  )
}

const Like = React.memo(
  React.forwardRef((props: any, ref: any) => {
    const [isLike, setIsLike] = useState<boolean>(props.isLike)
    const [likeTotal, setLikeTotal] = useState<number>(props.count || 0)
    const [onSending, setonSending] = useState(false)

    const [scope, animate] = useAnimate()

    useImperativeHandle(
      ref,
      () => {
        return {
          like: () => _handleActionLike(),
        }
      },
      [],
    )

    const handeAnimation = (isLike: boolean) => {
      const button: any = document.querySelector('.likeButton')
      const buttonMobile: any = document.querySelector('.likeButtonMobile')
      const rect = button.getBoundingClientRect()
      const rect2 = buttonMobile.getBoundingClientRect()
      const x =
        (rect.left + rect.width / 2) / window.innerWidth !== 0
          ? (rect.left + rect.width / 2) / window.innerWidth
          : (rect2.left + rect2.width / 2) / window.innerWidth
      const y =
        (rect.top + rect.height) / window.innerHeight !== 0
          ? (rect.top + rect.height) / window.innerHeight
          : (rect2.top + rect2.height) / window.innerHeight

      !isLike &&
        confetti({
          gravity: 5,
          particleCount: 70,
          spread: 40,
          origin: { x, y },
        })
      animate(
        isLike
          ? []
          : [
              [scope.current, { y: -28 }, { duration: 0.2 }],
              [scope.current, { scaleX: -1 }, { duration: 0.2, at: '<' }],
              [scope.current, { scaleX: 1 }, { duration: 0.2 }],
              [scope.current, { y: 0 }, { duration: 0.2 }],
            ],
      )
    }

    const _ServerSendingLike = async () => {
      try {
        const data: any = await instance.post(`/home/benefit`, {
          uuid: props.uuid,
        })
        handeAnimation(!data.isLiked)
        setLikeTotal(data.count)
        setIsLike(data.isLiked)
      } catch (error) {
      } finally {
        setonSending(false)
      }
    }

    useEffect(() => {
      onSending && _ServerSendingLike()
    }, [onSending])

    const _handleActionLike = async () => {
      setonSending(true)
    }

    return (
      <button
        disabled={onSending}
        className='like flex h-fit items-center justify-center gap-[6px] rounded-full bg-black/40 px-[8px] py-[6px] transition-all active:scale-[0.95] md:gap-[10px] md:bg-[#F8F8F8] md:px-[20px] md:py-[10px]'
        onClick={_handleActionLike}
      >
        <motion.div>
          <Heart
            ref={scope}
            id='heart'
            variant='Bold'
            size={24}
            style={{ zIndex: 1000 }}
            className={isLike ? 'text-[#FF4343]' : 'text-white md:text-[#969696]'}
          />
        </motion.div>
        <span className='text-white md:text-base-black-1'>{likeTotal}</span>
      </button>
    )
  }),
)

Like.displayName = 'Like'
export default HomePage